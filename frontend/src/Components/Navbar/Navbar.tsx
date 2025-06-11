import { useState, useEffect } from "preact/hooks";
import { AuthButtons } from "./AuthButtons/AuthButtons";
import { Logo } from "./Logo/Logo";
import { NavLinks } from "./NavLinks/NavLinks";
import { Briefcase, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "../ui/button";
import { CustomDropdown, CustomDropdownItem, CustomDropdownLabel, CustomDropdownSeparator } from "../ui/custom-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { checkAuthStatus, logoutUser } from "../../api/api"; // Import API functions

export function Navbar() {
    const [isloggedIn, setIsLoggedIn] = useState(false); 
    const [, navigate] = useLocation(); // For programmatic navigation

    const testing = true;

    if(testing) {
        setIsLoggedIn(true); // For testing purposes, set logged in state to true
    }

    // Mock function to check if user has businesses - in real app this would come from API/context
    // If hasBusiness is true, navigate to /business-management where user can select which business to manage
    // If hasBusiness is false, navigate directly to /register-business to create their first business
    const hasBusiness = true; // Change to false to test the register flow

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const isAuthenticated = await checkAuthStatus();
                setIsLoggedIn(isAuthenticated);
                if (isAuthenticated) {
                    // If your checkAuthStatus returns user data, you can set it here
                    // For now, assuming it just returns true/false based on your backend
                    // setUserData(someUserData); 
                } 
            } catch (error) {
                console.error("Error checking authentication status:", error);
                setIsLoggedIn(false);
            }
        };

        verifyAuth();
    }, []); // Empty dependency array: runs once on mount

    const handleLogout = async () => {
        try {
            await logoutUser();
            setIsLoggedIn(false);
            navigate("/"); // Redirect to home or login page after logout
            console.log("User logged out");
        } catch (error) {
            console.error("Logout failed:", error);
            // Optionally, show a notification to the user
        }
    };

    return (
        <header className={"flex flex-row bg-[#feffff] justify-between items-center p-4 border-b border-gray-100 "}>
            <div className={"hidden sm:flex flex-row items-center gap-8"}>
                <Logo />
                <NavLinks />
            </div>
            {
                isloggedIn ? (
                    <div className="flex flex-row items-center gap-4">                  
                          <Button variant="outline" size="sm" className="bg-brand-500 text-black hover:bg-brand-600" asChild>
                            <Link to={hasBusiness ? "/business-management" : "/register-business"}>
                                <Briefcase className="h-4 w-4 mr-1" /> Manage Business
                            </Link>
                        </Button>
                        <CustomDropdown 
                            trigger={
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar className="h-8 w-8 hover:cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                        <AvatarFallback>
                                            <User className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            }
                            align="end"
                        >
                            <>
                                <CustomDropdownLabel>My Account</CustomDropdownLabel>
                                <CustomDropdownSeparator />
                                <CustomDropdownItem>
                                    <Link to="/profile">Profile</Link>
                                </CustomDropdownItem>
                                <CustomDropdownItem>
                                    <Link to="/appointments">My Appointments</Link>
                                </CustomDropdownItem>
                                <CustomDropdownItem>
                                    <Link to="/favorites">Favorites</Link>
                                </CustomDropdownItem>
                                <CustomDropdownSeparator />
                                <CustomDropdownItem onClick={handleLogout}>
                                    Log out
                                </CustomDropdownItem>
                            </>
                        </CustomDropdown>
                    </div>
                ) : (
                    <AuthButtons />

                )
            }

        </header>
    )
}