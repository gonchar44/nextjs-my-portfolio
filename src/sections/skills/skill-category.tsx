import { Badge } from "@/components/badge";

interface SkillCategoryProps {
    category: string;
    items: string[];
}

export function SkillCategory({ category, items }: SkillCategoryProps) {
    return (
        <div>
            <div className="font-head text-xs tracking-widest uppercase text-faint mb-3">
                {"// "}
                {category}
            </div>
            <div className="flex flex-wrap gap-1.5">
                {items.map((skill, index) => (
                    <Badge key={`${skill}-${index}`}>{skill}</Badge>
                ))}
            </div>
        </div>
    );
}
