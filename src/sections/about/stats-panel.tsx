interface StatsPanelProps {
    location: string;
    experience: string;
    devFocus: string[];
    languages: string[];
    status: string;
    statusColor: string;
}

export function StatsPanel({ location, experience, devFocus, languages, status, statusColor }: StatsPanelProps) {
    const rows = [
        { label: "location", value: location, accent: false },
        { label: "experience", value: experience, accent: false },
        { label: "focus", value: devFocus.join(" · "), accent: true },
        { label: "languages", value: languages.join(" · "), accent: false },
    ];

    return (
        <div className="rounded-xl border border-border bg-panel py-1.5 font-head">
            {rows.map(({ label, value, accent }) => (
                <div key={label} className="flex justify-between gap-4 px-5 py-4 border-b border-border">
                    <span className="text-xs text-faint">{label}</span>
                    <span
                        className={
                            accent
                                ? "min-w-0 flex-1 break-words text-right text-sm text-acc-a"
                                : "min-w-0 flex-1 break-words text-right text-sm text-text"
                        }
                    >
                        {value}
                    </span>
                </div>
            ))}

            {/* Status row */}
            <div className="flex justify-between gap-4 px-5 py-4">
                <span className="text-xs text-faint">status</span>
                <span
                    className="inline-flex min-w-0 items-center gap-1.5 break-words text-sm"
                    style={{ color: statusColor }}
                >
                    <span
                        className="w-2 h-2 rounded-full flex-none"
                        style={{
                            background: statusColor,
                            boxShadow: `0 0 0 4px color-mix(in srgb, ${statusColor} 22%, transparent)`,
                        }}
                    />
                    {status}
                </span>
            </div>
        </div>
    );
}
