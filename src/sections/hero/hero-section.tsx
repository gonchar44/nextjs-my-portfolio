import { ButtonLink } from "@/components/button";
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
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border terminal-titlebar-bg">
                    <span className="w-3 h-3 rounded-full shrink-0 bg-mac-red" />
                    <span className="w-3 h-3 rounded-full shrink-0 bg-mac-yellow" />
                    <span className="w-3 h-3 rounded-full shrink-0 bg-mac-green" />
                    <span className="flex-1 min-w-0 text-center font-head text-xs text-faint truncate">
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
                    <h1 className="font-head font-extrabold mt-2.5 text-text hero-heading">
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
                        <ButtonLink href="#projects" variant="primary">
                            View my work →
                        </ButtonLink>
                        <ButtonLink href="#contact" variant="ghost">
                            Get in touch
                        </ButtonLink>
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
