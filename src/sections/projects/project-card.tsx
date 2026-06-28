import Image from "next/image";
import { Badge } from "@/components/badge";
import { cn } from "@/lib/cn";
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
                {project.status && (
                    <span
                        className="absolute top-3.5 right-4 inline-flex items-center gap-1.5 font-head text-xs font-medium text-text border border-border-2 pl-2.5 pr-3 py-1 rounded-full backdrop-blur"
                        style={{ background: "color-mix(in srgb, var(--bg) 72%, transparent)" }}
                    >
                        <span
                            className={cn(
                                "size-2 rounded-full shrink-0",
                                project.status === "in_development"
                                    ? "bg-acc-a ring-2 ring-acc-a/20"
                                    : "bg-acc-b ring-2 ring-acc-b/20",
                            )}
                        />
                        {project.status === "in_development" ? "In Development" : "Completed"}
                    </span>
                )}
            </div>

            <div className="px-6 py-5 flex items-center gap-5 flex-wrap">
                <div className="flex-1 min-w-56">
                    <h3 className="font-head font-bold text-xl text-text">{project.title}</h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">{project.description}</p>
                    <div className="flex gap-1.5 flex-wrap mt-3">
                        {project.techStack.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
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
                    {project.liveDemoUrl ? (
                        <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-head text-xs font-semibold text-on-acc bg-acc-a px-4 py-2.5 rounded-full transition-transform hover:-translate-y-px"
                        >
                            Live ↗
                        </a>
                    ) : (
                        <span
                            aria-disabled="true"
                            title="Not live yet"
                            className="font-head text-xs font-semibold text-faint border border-border px-4 py-2.5 rounded-full cursor-not-allowed opacity-50"
                        >
                            Live ↗
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
