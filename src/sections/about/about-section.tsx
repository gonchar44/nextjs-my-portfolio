import { PortableText } from "next-sanity";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { client } from "@/sanity/client";
import { bioQuery, BioQueryResult, STATUS_COLORS } from "@/sanity/queries/bio";
import { StatsPanel } from "./stats-panel";

export async function AboutSection() {
    const bio: BioQueryResult = await client.fetch(bioQuery, {}, { next: { tags: ["bio"] } });

    if (!bio) return null;

    return (
        <section id="about" className="px-7 py-16 border-t border-border scroll-mt-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionLabel number="01" label="About" />
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 mt-6 items-start">
                    {/* Left: bio */}
                    <Reveal delay={80}>
                        <h2
                            className="section-heading font-head font-bold tracking-tight text-text leading-tight mb-5"
                        >
                            {bio.headline}
                        </h2>
                        <PortableText
                            value={bio.summary}
                            components={{
                                block: {
                                    normal: ({ children }) => (
                                        <p className="text-lg leading-relaxed text-muted max-w-prose mb-4 last:mb-0">
                                            {children}
                                        </p>
                                    ),
                                },
                                marks: {
                                    strong: ({ children }) => <span className="text-text font-normal">{children}</span>,
                                },
                            }}
                        />
                    </Reveal>

                    {/* Right: stats */}
                    <Reveal delay={160}>
                        <StatsPanel
                            location={bio.location}
                            experience={bio.experience}
                            devFocus={bio.devFocus}
                            languages={bio.languages}
                            {...(bio.statusLabel
                                ? { status: bio.statusLabel, statusColor: STATUS_COLORS[bio.status] }
                                : {})}
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
