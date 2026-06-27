import { AboutSection } from "@/sections/about/about-section";
import { HeroSection } from "@/sections/hero/hero-section";
import { ProjectsSection } from "@/sections/projects/projects-section";
import { SkillsSection } from "@/sections/skills/skills-section";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>
    );
}
