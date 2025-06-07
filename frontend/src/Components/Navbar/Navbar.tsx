import { useState } from "preact/hooks";
import { AuthButtons } from "./AuthButtons/AuthButtons";
import { Logo } from "./Logo/Logo";
import { NavLinks } from "./NavLinks/NavLinks";
import { Briefcase, User } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { CustomDropdown, CustomDropdownItem, CustomDropdownLabel, CustomDropdownSeparator } from "../ui/custom-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Navbar() {
    const isloggedIn = useState(true)[0]; // Using [0] to get only the value, not the setter
    // Mock function to check if user has businesses - in real app this would come from API/context
    // If hasBusiness is true, navigate to /business-management where user can select which business to manage
    // If hasBusiness is false, navigate directly to /register-business to create their first business
    const hasBusiness = true; // Change to false to test the register flow

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
                                <CustomDropdownItem onClick={() => {
                                    /* log out logic here */
                                }}>
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