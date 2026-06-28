import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { client } from "@/sanity/client";
import { servicesQuery, skillsQuery, ServicesQueryResult, SkillsQueryResult } from "@/sanity/queries/skills";
import { ServiceCard } from "./service-card";
import { SkillCategory } from "./skill-category";

export async function SkillsSection() {
    const [servicesResult, skillsResult] = await Promise.allSettled([
        client.fetch<ServicesQueryResult>(servicesQuery, {}, { next: { tags: ["services"] } }),
        client.fetch<SkillsQueryResult>(skillsQuery, {}, { next: { tags: ["skills"] } }),
    ]);

    if (servicesResult.status === "rejected") {
        console.error("[SkillsSection] services fetch failed:", servicesResult.reason);
    }
    if (skillsResult.status === "rejected") {
        console.error("[SkillsSection] skills fetch failed:", skillsResult.reason);
    }

    const services = servicesResult.status === "fulfilled" ? servicesResult.value : null;
    const skills = skillsResult.status === "fulfilled" ? skillsResult.value : null;
    const hasServices = !!services?.items?.length;
    const hasSkills = !!skills?.categories?.length;

    if (!hasServices && !hasSkills) return null;

    return (
        <section id="skills" className="px-7 py-16 border-t border-border scroll-mt-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionLabel number="02" label="Skills & services" />
                    <h2 className="section-heading font-head font-bold tracking-tight text-text leading-tight mt-3.5">
                        Things I can help you with
                    </h2>
                </Reveal>

                {hasServices && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
                        {services.items.map((item, i) => (
                            <Reveal key={item._key} delay={i * 90} className="h-full">
                                <ServiceCard title={item.title} description={item.description} index={i} />
                            </Reveal>
                        ))}
                    </div>
                )}

                {hasSkills && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                        {skills.categories.map((cat, i) => (
                            <Reveal key={cat._key} delay={i * 70}>
                                <SkillCategory category={cat.category} items={cat.items} />
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
