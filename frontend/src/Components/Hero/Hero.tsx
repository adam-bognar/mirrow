import { HeroLeft } from "./HeroLeft/HeroLeft";
import { HeroRight } from "./HeroRight/HeroRight";

export function Hero() {
    return (
        <div className="flex flex-col lg:h-[calc(100vh-80px)] md:flex-col lg:flex-row w-full px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16 items-center gap-10 lg:gap-0 overflow-hidden">
            <div className="w-full lg:w-1/2">
                <HeroLeft />
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <HeroRight />
            </div>
        </div>
    )
}