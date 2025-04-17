import { Features } from "../Components/LandingPage/Features/Features";
import { Hero } from "../Components/Hero/Hero";
import { HowItWorks } from "../Components/LandingPage/HowItWorks/HowItWorks";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

export function LandingPage() {
    return (
        <div className={"flex flex-col"}>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Footer />
        </div>
    )
}