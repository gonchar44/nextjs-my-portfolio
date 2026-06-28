interface BadgeProps {
    children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
    return (
        <span className="font-head text-xs text-text bg-panel border border-border px-3 py-1.5 rounded-md">
            {children}
        </span>
    );
}
