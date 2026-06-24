"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
    const { toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-xl border border-border-2 bg-panel transition duration-200 hover:-translate-y-px hover:border-acc-a"
        >
            <span
                className="h-4 w-4 rounded-full border-2 border-text"
                style={{
                    background:
                        "linear-gradient(90deg, var(--text) 0 50%, transparent 50% 100%)",
                }}
            />
        </button>
    );
}
