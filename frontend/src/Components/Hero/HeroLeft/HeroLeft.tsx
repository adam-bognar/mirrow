import { ArrowRightIcon } from "lucide-react";
import { TealButton } from "../../Buttons/TealButton";

export function HeroLeft(){
    return(
            <div className={"flex flex-col w-full gap-10 p-5"}>
                <h1 className={"text-6xl font-bold "}>Book appointments <span className={"text-teal-500"}>effortlessly</span> and manage your schedule.</h1>
                <h2 className={"text-2xl text-gray-500"}>Supports small businesses with simple booking, powerful integrations and real time management tools.</h2>
                <div className={"flex flex-row items-center gap-5"}>
                    <TealButton classname="px-8 py-3 text-md font-semibold gap-3 items-center">
                        Get Started
                        <ArrowRightIcon size={20} />
                    </TealButton>

                    <button className={"px-8 py-3 text-md border border-gray-200 rounded-md font-semibold hover:cursor-pointer hover:bg-gray-100 transition duration-200"}>
                        Learn more
                    </button>
                </div>
            </div>
    )
}