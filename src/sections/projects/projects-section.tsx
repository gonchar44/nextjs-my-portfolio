import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { client } from "@/sanity/client";
import { projectsQuery, type ProjectsQueryResult } from "@/sanity/queries/projects";
import { ProjectCard } from "./project-card";

export async function ProjectsSection() {
    const projects = await client.fetch<ProjectsQueryResult>(projectsQuery, {}, { next: { tags: ["projects"] } });

    if (!projects?.length) return null;

    return (
        <section id="projects" className="px-7 py-16 border-t border-border scroll-mt-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionLabel number="03" label="Featured projects" />
                    <h2 className="section-heading font-head font-bold tracking-tight text-text leading-tight mt-3.5">
                        A collection of selected works
                    </h2>
                </Reveal>

                <div className="flex flex-col gap-6 mt-9">
                    {projects.map((project, i) => (
                        <Reveal key={project._id} delay={i * 90}>
                            <ProjectCard project={project} index={i} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
