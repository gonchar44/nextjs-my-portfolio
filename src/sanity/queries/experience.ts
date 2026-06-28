import { groq } from "next-sanity";

export const experienceQuery = groq`*[_type == "experience"][0] {
    positions[] {
        _key,
        role,
        company,
        country,
        currentlyWorking,
        start,
        end,
        description
    }
}`;

export type ExperienceBlock = {
    _type: "block";
    _key: string;
    style?: string;
    listItem?: "bullet" | "number";
    level?: number;
    children: Array<{ _type: "span"; _key: string; text: string; marks?: string[] }>;
    markDefs?: unknown[];
};

export type ExperiencePosition = {
    _key: string;
    role: string;
    company: string;
    country?: string | null;
    currentlyWorking?: boolean | null;
    start: string;
    end?: string | null;
    description: ExperienceBlock[];
};

export type ExperienceQueryResult = {
    positions: ExperiencePosition[];
} | null;
