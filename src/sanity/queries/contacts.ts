import { groq } from "next-sanity";

export const contactsQuery = groq`*[_type == "contacts"][0] {
  email,
  linkedin,
  github
}`;

export type ContactsQueryResult = {
    email: string;
    linkedin: string;
    github: string;
} | null;
