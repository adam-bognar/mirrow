import { useState } from "preact/hooks";
import { AuthButtons } from "./AuthButtons/AuthButtons";
import { Logo } from "./Logo/Logo";
import { NavLinks } from "./NavLinks/NavLinks";
import { Briefcase, User } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {

    const [isloggedIn, setLoggedIn] = useState(true);


    return (
        <header className={"flex flex-row bg-[#feffff] justify-between items-center p-4 border-b border-gray-100 "}>
            <div className={"hidden sm:flex flex-row items-center gap-8"}>
                <Logo />
                <NavLinks />
            </div>
            {
                isloggedIn ? (
                    <>
                <Button variant="outline" size="sm" className="bg-brand-500 text-white hover:bg-brand-600" asChild>
                  <Link to="/business-register">
                    <Briefcase className="h-4 w-4 mr-1" /> Manage Business
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/appointments">My Appointments</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/favorites">Favorites</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={/*log out*/ () => {}}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
                ) : (
                    <AuthButtons />

                )
            }

        </header>
    )
}