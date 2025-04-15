import { Features } from "../Components/Features/Features";
import { Hero } from "../Components/Hero/Hero";
import { Navbar } from "../Components/Navbar/Navbar";

export function LandingPage() {
    return (
        <div className={"flex flex-col"}>
            <Navbar />
            <Hero />
            <Features />
        </div>
    )
}