"use client";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-bg-2">
            <div className="mx-auto max-w-6xl px-7 py-8 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-acc-a font-head text-xs font-extrabold text-on-acc">
                        AH
                    </span>
                    <span className="font-head text-sm text-muted">Artem Honcharenko &copy; {year}</span>
                </div>
                <p className="font-head text-sm text-faint">
                    Designed &amp; coded by Artem &middot; From <span className="text-acc-b">Denmark</span>. For the{" "}
                    <span className="text-acc-a">world</span>.
                </p>
            </div>
        </footer>
    );
}
