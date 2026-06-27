import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt asc) {
    _id,
    title,
    description,
    screenshots,
    techStack,
    githubUrl,
    liveDemoUrl,
}`;

export type SanityImage = {
    _key: string;
    asset: { _ref: string; _type: "reference" };
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
};

export type ProjectsQueryResult = {
    _id: string;
    title: string;
    description: string;
    screenshots: SanityImage[];
    techStack: string[];
    githubUrl: string;
    liveDemoUrl?: string | null;
}[];
