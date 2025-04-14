import { Hero } from "../Components/Hero/Hero";
import { Navbar } from "../Components/Navbar/Navbar";

export function LandingPage() {
    return (
        <div className={"flex flex-col"}>
            <Navbar />
        <Hero />

        </div>
    )
}