import { AboutSection } from "@/sections/about/about-section";
import { HeroSection } from "@/sections/hero/hero-section";
import { SkillsSection } from "@/sections/skills/skills-section";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
    );
}
