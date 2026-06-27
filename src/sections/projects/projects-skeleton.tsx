export function ProjectsSkeleton() {
    return (
        <section className="px-7 py-16 border-t border-border animate-pulse">
            <div className="mx-auto max-w-6xl">
                <div className="h-4 w-40 rounded bg-panel-2 mb-4" />
                <div className="h-8 w-72 rounded bg-panel-2 mb-9" />

                <div className="flex flex-col gap-6">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-xl bg-panel h-64 w-full" />
                    ))}
                </div>
            </div>
        </section>
    );
}
