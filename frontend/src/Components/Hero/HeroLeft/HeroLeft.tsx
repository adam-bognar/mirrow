import { ArrowRightIcon } from "lucide-react";
import { TealButton } from "../../Buttons/TealButton";
import { useEffect, useRef } from "preact/hooks";
import { animate } from "motion";

export function HeroLeft(){

    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        animate(titleRef.current, {opacity: [0,1], y:[50,0]}, {duration: 0.5,})
        animate(subtitleRef.current, {opacity: [0,1], y:[50,0]}, {delay: 0.2, duration: 0.5,})
        animate(buttonRef.current, {opacity: [0,1], y:[50,0]}, {delay:0.4,duration: 0.5,})
    },[])

    return(
            <div className="flex flex-col w-full gap-6 md:gap-8 lg:gap-10">
                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Book appointments <span className="text-teal-500">effortlessly</span> and manage your schedule.
                </h1>
                <h2 ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-gray-500">
                    Supports small businesses with simple booking, powerful integrations and real time management tools.
                </h2>
                <div ref={buttonRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                    <TealButton classname="w-full sm:w-auto px-8 py-3 text-md font-semibold gap-3 items-center justify-center">
                        Get Started
                        <ArrowRightIcon size={20} />
                    </TealButton>

                    <button className="w-full sm:w-auto mt-2 sm:mt-0 px-8 py-3 text-md border border-gray-200 rounded-md font-semibold hover:cursor-pointer hover:bg-gray-100 transition duration-200 text-center">
                        Learn more
                    </button>
                </div>
            </div>
    )
}