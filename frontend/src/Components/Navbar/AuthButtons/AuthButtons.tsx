import { TealButton } from "../../Buttons/TealButton";


export function AuthButtons() {
    return (
        <div className="flex flex-row gap-4">
            <button className="text-gray-500 font-semibold hover:text-black hover:cursor-pointer ">Login</button>
            <TealButton >
                Sign Up
            </TealButton>
        </div>
    )
}