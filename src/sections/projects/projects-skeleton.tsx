export function ProjectsSkeleton() {
    return (
        <section className="px-7 py-16 border-t border-border animate-pulse">
            <div className="mx-auto max-w-6xl">
                <div className="h-4 w-40 rounded bg-panel-2 mb-4" />
                <div className="h-8 w-72 rounded bg-panel-2 mb-9" />

                <div className="flex flex-col gap-6">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-2xl bg-panel border border-border overflow-hidden w-full">
                            <div className="h-72 bg-panel-2" />
                            <div className="px-6 py-5 flex flex-col gap-3">
                                <div className="h-5 w-48 rounded bg-panel-2" />
                                <div className="h-3 w-full rounded bg-panel-2" />
                                <div className="h-3 w-3/4 rounded bg-panel-2" />
                                <div className="flex gap-1.5 mt-1">
                                    <div className="h-5 w-12 rounded bg-panel-2" />
                                    <div className="h-5 w-14 rounded bg-panel-2" />
                                    <div className="h-5 w-10 rounded bg-panel-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
