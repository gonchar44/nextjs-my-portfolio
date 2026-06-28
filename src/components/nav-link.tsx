import { cn } from "@/lib/cn";

interface NavLinkProps {
    href: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
}

export function NavLink({ href, className, onClick, children }: NavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                "rounded-lg px-3 py-2 font-head text-xs text-muted no-underline transition-colors duration-200 hover:text-text",
                className,
            )}
        >
            {children}
        </a>
    );
}
