export function ProjectCardFallback() {
    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
                backgroundImage:
                    "repeating-linear-gradient(135deg, color-mix(in srgb, var(--text) 4%, transparent) 0 1.5px, transparent 1.5px 13px)",
            }}
        >
            <span className="font-head text-xs text-faint">{"// no preview"}</span>
        </div>
    );
}
