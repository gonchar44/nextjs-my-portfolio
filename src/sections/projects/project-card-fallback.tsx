export function ProjectCardFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center card-fallback-pattern">
            <span className="font-head text-xs text-faint">{"// no preview"}</span>
        </div>
    );
}
