import { Suspense } from "react";
import { AboutSection } from "@/sections/about/about-section";
import { ExperienceSection } from "@/sections/experience/experience-section";
import { HeroSection } from "@/sections/hero/hero-section";
import { ProjectsSection } from "@/sections/projects/projects-section";
import { ProjectsSkeleton } from "@/sections/projects/projects-skeleton";
import { SkillsSection } from "@/sections/skills/skills-section";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectsSection />
            </Suspense>
            <ExperienceSection />
        </main>
    );
}
