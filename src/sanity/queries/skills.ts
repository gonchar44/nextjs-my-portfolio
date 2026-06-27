import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "services"][0] {
  "items": coalesce(items, [])
}`;

export const skillsQuery = groq`*[_type == "skills"][0] {
  "categories": coalesce(categories, [])
}`;

export type ServicesQueryResult = {
    items: { _key: string; title: string; description: string }[];
} | null;

export type SkillsQueryResult = {
    categories: { _key: string; category: string; items: string[] }[];
} | null;
