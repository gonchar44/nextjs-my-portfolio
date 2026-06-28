import { ButtonLink } from "@/components/button";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "work" },
    { href: "#experience", label: "experience" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border backdrop-blur-lg header-bg">
            <nav>
                <div className="mx-auto flex max-w-6xl items-center gap-4 px-7 py-3.5">
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-3 no-underline">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-acc-a font-head text-sm font-extrabold tracking-tighter text-on-acc">
                            AH
                        </span>
                        <span className="font-head text-sm font-semibold tracking-tight text-text">
                            artem<span className="text-faint">.dev</span>
                        </span>
                    </a>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Nav links — desktop */}
                    <div className="hidden md:flex items-center">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <ThemeToggle />

                    {/* CTA — desktop */}
                    <div className="hidden md:block">
                        <ButtonLink href="#contact" variant="primary" size="sm">
                            Get in touch
                        </ButtonLink>
                    </div>

                    {/* Hamburger — mobile */}
                    <MobileMenu navLinks={navLinks} />
                </div>
            </nav>
        </header>
    );
}
