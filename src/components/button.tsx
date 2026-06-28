import { cn } from "@/lib/cn";

interface ButtonLinkProps {
    href: string;
    variant?: "primary" | "ghost";
    size?: "sm" | "lg";
    icon?: React.ReactNode;
    external?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children: React.ReactNode;
}

export function ButtonLink({
    href,
    variant = "primary",
    size = "lg",
    icon,
    external = false,
    className,
    onClick,
    children,
}: ButtonLinkProps) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                "inline-flex items-center rounded-full font-head font-semibold no-underline transition duration-200",
                size === "sm" && "gap-2 py-2.5 px-4 text-xs",
                size === "lg" && "gap-2.5 py-3.5 px-6 text-sm",
                variant === "primary" && [
                    "bg-acc-a text-on-acc",
                    "hover:-translate-y-px hover:shadow-[0_10px_26px_-10px_var(--acc-a)]",
                ],
                variant === "ghost" && [
                    "border border-border-2 bg-transparent text-text",
                    "hover:-translate-y-px hover:border-acc-a",
                ],
                className,
            )}
            {...externalProps}
        >
            {icon}
            {children}
        </a>
    );
}
