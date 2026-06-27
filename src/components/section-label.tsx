interface SectionLabelProps {
    number: string;
    label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
    return (
        <div className="flex items-center gap-2.5 font-head text-xs tracking-widest uppercase text-acc-a">
            <span className="text-faint">{number}</span>
            <span className="text-faint" aria-hidden="true">
                &gt;
            </span>
            <span>{label}</span>
        </div>
    );
}
