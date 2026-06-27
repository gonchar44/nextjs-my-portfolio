import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectsQueryResult } from "@/sanity/queries/projects";
import { ProjectCardFallback } from "./project-card-fallback";

type Project = ProjectsQueryResult[number];

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const screenshot = project.screenshots?.[0];
    const screenshotUrl = screenshot ? urlFor(screenshot).fit("crop").url() : null;
    const indexLabel = String(index + 1).padStart(2, "0");

    return (
        <article className="border border-border rounded-2xl bg-panel overflow-hidden transition-colors hover:border-acc-a">
            <div className="relative h-72 bg-panel-2">
                {screenshotUrl ? (
                    <Image
                        src={screenshotUrl}
                        alt={project.title}
                        fill={true}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                ) : (
                    <ProjectCardFallback />
                )}
                <span className="absolute top-4 left-4 font-head text-xs text-acc-b">{indexLabel}</span>
            </div>

            <div className="px-6 py-5 flex items-center gap-5 flex-wrap">
                <div className="flex-1 min-w-56">
                    <h3 className="font-head font-bold text-xl text-text">{project.title}</h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">{project.description}</p>
                    <div className="flex gap-1.5 flex-wrap mt-3">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="font-head text-xs text-muted border border-border px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-head text-xs font-semibold text-text border border-border-2 px-4 py-2.5 rounded-full transition-colors hover:border-acc-a"
                    >
                        GitHub ↗
                    </a>
                    {project.liveDemoUrl && (
                        <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-head text-xs font-semibold text-on-acc bg-acc-a px-4 py-2.5 rounded-full transition-transform hover:-translate-y-px"
                        >
                            Live ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
