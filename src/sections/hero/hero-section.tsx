import { TerminalOutput } from "./terminal-output";

const PHRASES: [string, ...string[]] = [
    "Transforming ideas into intelligent code",
    "Building scalable B2B platforms",
    "React · Next.js · TypeScript",
];

export function HeroSection() {
    return (
        <section className="px-4 py-12 sm:px-7 sm:py-20 scroll-mt-24">
            <div className="mx-auto max-w-4xl border border-border rounded-2xl bg-panel overflow-hidden shadow-panel">
                {/* Title bar */}
                <div
                    className="flex items-center gap-2 px-4 py-3 border-b border-border"
                    style={{ background: "color-mix(in srgb, var(--panel-2) 70%, transparent)" }}
                >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#ff5f57" }} />
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#febc2e" }} />
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#28c840" }} />
                    <span
                        className="flex-1 min-w-0 text-center font-head text-faint truncate"
                        style={{ fontSize: "12.5px" }}
                    >
                        artem@denmark: ~/portfolio — zsh
                    </span>
                    <span className="w-9 sm:w-14 shrink-0" />
                </div>

                {/* Body */}
                <div className="px-5 pt-7 pb-8 sm:px-10 sm:pt-10 sm:pb-11 font-head">
                    {/* whoami prompt */}
                    <div className="text-sm text-muted leading-loose">
                        <span className="text-acc-b">artem@denmark</span>
                        <span className="text-muted">:</span>
                        <span className="text-acc-a">~</span>
                        <span className="text-muted">$ whoami</span>
                    </div>

                    {/* Name */}
                    <h1
                        className="font-head font-extrabold tracking-tighter leading-none mt-2.5 text-text"
                        style={{ fontSize: "clamp(40px, 8.4vw, 82px)", letterSpacing: "-0.03em", lineHeight: "1.02" }}
                    >
                        Artem
                        <br />
                        Honcharenko
                    </h1>

                    {/* cat role.txt prompt */}
                    <div className="mt-4 text-sm text-muted">
                        <span className="text-acc-b">artem@denmark</span>
                        <span className="text-muted">:</span>
                        <span className="text-acc-a">~</span>
                        <span className="text-muted">$ </span>
                        <span className="text-text">cat role.txt</span>
                    </div>

                    {/* Typewriter */}
                    <div className="mt-2.5">
                        <TerminalOutput phrases={PHRASES} />
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-3.5 mt-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2.5 font-head text-sm font-semibold px-6 py-3.5 rounded-full bg-acc-a text-on-acc no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_var(--acc-a)]"
                        >
                            View my work →
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 font-head text-sm font-semibold px-6 py-3.5 rounded-full border border-border-2 text-text no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-acc-a"
                        >
                            Get in touch
                        </a>
                    </div>

                    {/* Tagline */}
                    <p className="mt-7 text-xs text-faint">
                        From <span className="text-acc-b">Denmark</span>. For the{" "}
                        <span className="text-acc-a">world</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
