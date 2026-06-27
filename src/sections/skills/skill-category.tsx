interface SkillCategoryProps {
    category: string;
    items: string[];
}

export function SkillCategory({ category, items }: SkillCategoryProps) {
    return (
        <div>
            <div className="font-head text-xs tracking-widest uppercase text-faint mb-3">{"// "}{category}</div>
            <div className="flex flex-wrap gap-1.5">
                {items.map((skill, index) => (
                    <span
                        key={`${skill}-${index}`}
                        className="font-head text-xs text-text bg-panel border border-border px-3 py-1.5 rounded-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
