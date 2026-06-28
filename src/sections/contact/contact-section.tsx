import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { client } from "@/sanity/client";
import { contactsQuery, type ContactsQueryResult } from "@/sanity/queries/contacts";

function EmailIcon({ className }: { className?: string }) {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
    );
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
    );
}

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
        </svg>
    );
}

export async function ContactSection() {
    const contacts = await client.fetch<ContactsQueryResult>(contactsQuery, {}, { next: { tags: ["contacts"] } });

    if (!contacts) return null;

    return (
        <section id="contact" className="px-7 py-20 border-t border-border scroll-mt-24">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="border border-border rounded-2xl bg-panel overflow-hidden text-center relative shadow-panel py-14 px-11">
                        {/* Radial accent glow */}
                        <div className="absolute inset-0 pointer-events-none contact-glow" />

                        <div className="relative">
                            <SectionLabel number="05" label="Contact" />

                            <h2 className="font-head font-extrabold tracking-tight text-text leading-tight mt-5 section-heading">
                                Let&apos;s build something.
                            </h2>

                            <p className="text-lg text-muted leading-relaxed max-w-prose mx-auto mt-5">
                                Open to frontend roles and freelance work. Drop me an email or reach out on LinkedIn.
                            </p>

                            <div className="flex flex-wrap gap-3.5 justify-center mt-9">
                                {/* Email — primary filled */}
                                <a
                                    href={`mailto:${contacts.email}`}
                                    className="inline-flex items-center gap-2.5 font-head text-sm font-semibold px-7 py-3.5 rounded-full bg-acc-a text-[#14151a] no-underline shadow-none transition-transform duration-200 hover:-translate-y-0.5"
                                >
                                    <EmailIcon />
                                    Email
                                </a>

                                {/* LinkedIn — ghost */}
                                <a
                                    href={contacts.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 font-head text-sm font-semibold px-7 py-3.5 rounded-full bg-transparent text-text border border-border-2 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-acc-a"
                                >
                                    <LinkedInIcon />
                                    LinkedIn
                                </a>

                                {/* GitHub — ghost */}
                                <a
                                    href={contacts.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 font-head text-sm font-semibold px-7 py-3.5 rounded-full bg-transparent text-text border border-border-2 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-acc-a"
                                >
                                    <GitHubIcon />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
