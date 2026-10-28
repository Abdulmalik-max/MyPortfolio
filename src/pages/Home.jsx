import {ThemeToggle} from "../components/ThemeToggle.jsx";
import {StarBackground} from "../components/StarBackground.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {AboutSection} from "../components/AboutSection.jsx";
import {SkillsSection} from "../components/SkillsSection.jsx";
import {ProjectsSection} from "../components/ProjectsSection.jsx";
import {ContactSection} from "../components/ContactSection.jsx";

export const Home = () => {
    return(
        <div
            className="min-h-screen bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: "url('/myImage.jpg')" }}
        >
            {/* Global Overlay: Ensures text is readable on top of the portrait */}
            <div className="fixed inset-0 bg-background/85 dark:bg-background/90 z-0 pointer-events-none" />

            {/*  Theme Toggle  */}
            <ThemeToggle/>

            {/* Background Effects */}
            <div className="z-10 relative">
                <StarBackground/>
            </div>

            {/*  Navbar  */}
            <Navbar/>

            {/*  Main Content - Ensure content sits above the background and overlay */}
            <main className="relative z-10">
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
        </div>
    );
};