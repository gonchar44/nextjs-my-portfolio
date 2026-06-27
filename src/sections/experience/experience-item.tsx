import { cn } from "@/lib/cn";
import type { ExperiencePosition } from "@/sanity/queries/experience";

interface ExperienceItemProps {
    position: ExperiencePosition;
    index: number;
    isLast: boolean;
}

function formatDate(iso: string) {
    const [year, month] = iso.split("-");
    return `${month}/${year}`;
}

function buildPeriodLabel(position: ExperiencePosition) {
    const start = formatDate(position.start);
    const end = position.currentlyWorking ? "Present" : position.end ? formatDate(position.end) : "";
    const period = `${start} — ${end}`;
    return position.country ? `${period} · ${position.country}` : period;
}

export function ExperienceItem({ position, index, isLast }: ExperienceItemProps) {
    const isEven = index % 2 === 0;

    return (
        <div className="flex gap-6">
            {/* Timeline dot + connector line */}
            <div className="relative flex-none w-3.5 flex justify-center">
                <span
                    className={cn(
                        "w-3.5 h-3.5 rounded-full bg-bg border-2 mt-1.5 z-10",
                        isEven ? "border-acc-a" : "border-acc-b",
                    )}
                />
                {!isLast && (
                    <span className="absolute top-4 -bottom-3 w-px bg-border" />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-10">
                <div className="flex justify-between gap-3.5 flex-wrap items-baseline">
                    <h3 className="font-head font-bold text-xl text-text m-0">
                        {position.role} ·{" "}
                        <span className="text-acc-a">{position.company}</span>
                    </h3>
                    <span className="font-head text-xs text-muted border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
                        {buildPeriodLabel(position)}
                    </span>
                </div>

                <ul className="mt-3.5 flex flex-col gap-2 list-none p-0 m-0">
                    {position.description.map((block) => (
                        <li key={block._key} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                            <span className="text-acc-b font-head flex-none">—</span>
                            <span>{block.children.map((span) => span.text).join("")}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
