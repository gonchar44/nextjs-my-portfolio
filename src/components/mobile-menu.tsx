"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button";
import { cn } from "@/lib/cn";

interface NavLink {
    href: string;
    label: string;
}

interface MobileMenuProps {
    navLinks: NavLink[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onScroll = () => setOpen(false);
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        document.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200 hover:bg-panel-2"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                <span
                    className={cn(
                        "block h-0.5 w-5 origin-center bg-text transition-transform duration-200",
                        open && "translate-y-2 rotate-45",
                    )}
                />
                <span className={cn("block h-0.5 w-5 bg-text transition-opacity duration-200", open && "opacity-0")} />
                <span
                    className={cn(
                        "block h-0.5 w-5 origin-center bg-text transition-transform duration-200",
                        open && "-translate-y-2 -rotate-45",
                    )}
                />
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                    <div className="absolute left-0 right-0 top-full z-50 border-b border-border mobile-menu-bg backdrop-blur-lg">
                        <div className="mx-auto flex max-w-6xl flex-col px-7 py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-3 font-head text-sm text-muted no-underline transition-colors duration-200 hover:bg-panel hover:text-text"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-3 border-t border-border pt-4">
                                <ButtonLink
                                    href="#contact"
                                    variant="primary"
                                    size="sm"
                                    className="w-full justify-center"
                                    onClick={() => setOpen(false)}
                                >
                                    Get in touch
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
