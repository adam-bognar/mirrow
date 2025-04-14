import { AuthButtons } from "./AuthButtons/AuthButtons";
import { Logo } from "./Logo/Logo";
import { NavLinks } from "./NavLinks/NavLinks";

export function Navbar() {
    return (
        <header className={"flex flex-row bg-[#feffff] justify-between items-center p-4 border-b border-gray-100 "}>
            <div className={"hidden sm:flex flex-row items-center gap-8"}>
                <Logo />
                <NavLinks />
            </div>
            <AuthButtons />
        </header>
    )
}