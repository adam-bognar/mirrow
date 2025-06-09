import { Link } from "wouter";
import { TealButton } from "../../Buttons/TealButton";


export function AuthButtons() {
    return (
        <div className="flex flex-row gap-4 items-center">
            <Link to="/signin" className="text-gray-500 font-semibold hover:text-black hover:cursor-pointer ">Login</Link>
            <TealButton >
                Sign Up
            </TealButton>
        </div>
    )
}