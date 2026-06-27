"use client";

import { cn } from "@/lib/cn";

interface ServiceCardProps {
    title: string;
    description: string;
    index: number;
}

function FolderIcon({ className }: { className?: string }) {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M3 7.5a2 2 0 0 1 2-2h3.4l1.6 2H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    );
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
    return (
        <div className="border border-border rounded-2xl bg-panel p-6 min-h-44 flex flex-col justify-between transition-colors duration-200 hover:border-acc-a">
            <FolderIcon className={cn(index % 2 === 0 ? "text-acc-b" : "text-text")} />
            <div>
                <div className="font-head font-semibold text-base text-text">{title}</div>
                <div className="text-xs text-muted mt-1.5 leading-relaxed">{description}</div>
            </div>
        </div>
    );
}
