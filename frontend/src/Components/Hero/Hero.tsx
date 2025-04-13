
import { HeroLeft } from "./HeroLeft/HeroLeft";
import { HeroRight } from "./HeroRight/HeroRight";

export function Hero() {
    return (
        <div className={"flex flex-col md:flex-row items-center justify-center gap-15 md:gap-0 md:pt-30 p-5"}>
            <HeroLeft />
            <HeroRight />
        </div>
    )
}