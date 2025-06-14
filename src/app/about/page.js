import AboutContact from "@/components/about/AboutContact";
import AboutDescription from "@/components/about/AboutDescription";
import AboutFounder from "@/components/about/AboutFounder";
import AboutHero from "@/components/about/AboutHero";

export default function page() {
    return (
        <>
            <AboutHero />
            <AboutDescription />
            <AboutFounder />
            <AboutContact />
        </>
    )
}
