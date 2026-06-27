import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { client } from "@/sanity/client";
import { experienceQuery, type ExperienceQueryResult } from "@/sanity/queries/experience";
import { ExperienceItem } from "./experience-item";

export async function ExperienceSection() {
    const data = await client.fetch<ExperienceQueryResult>(experienceQuery, {}, { next: { tags: ["experience"] } });

    if (!data?.positions?.length) return null;

    const positions = data.positions;

    return (
        <section id="experience" className="px-7 py-16 border-t border-border scroll-mt-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionLabel number="04" label="Experience" />
                    <h2 className="section-heading font-head font-bold tracking-tight text-text leading-tight mt-3.5">
                        git log --author=&quot;Artem&quot;
                    </h2>
                </Reveal>

                <div className="mt-10">
                    {positions.map((position, i) => (
                        <Reveal key={position._key} delay={i * 60} direction={i % 2 === 0 ? "left" : "right"}>
                            <ExperienceItem
                                position={position}
                                index={i}
                                isLast={i === positions.length - 1}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
