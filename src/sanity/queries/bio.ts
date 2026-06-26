import { groq } from "next-sanity";

export const bioQuery = groq`*[_type == "bio"][0] {
  "headline": coalesce(headline, ""),
  "summary": coalesce(summary, []),
  "location": coalesce(location, ""),
  "experience": coalesce(experience, ""),
  "devFocus": coalesce(devFocus, []),
  "languages": coalesce(languages, []),
  "status": coalesce(status, ""),
  "statusLabel": select(
    status == "open_to_work"   => "Open to work",
    status == "employed"       => "Employed, not looking",
    status == "freelance"      => "Available for freelance",
    status == "open_to_collab" => "Open to collaboration",
    status == "on_break"       => "On a break",
    ""
  )
}`;

export const STATUS_COLORS: Record<string, string> = {
    open_to_work: "#93d8aa",
    employed: "#93aed8",
    freelance: "#d8c493",
    open_to_collab: "#b8a8d8",
    on_break: "#d8a8a8",
};

export type BioQueryResult = {
    headline: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    summary: any[];
    location: string;
    experience: string;
    devFocus: string[];
    languages: string[];
    status: string;
    statusLabel: string;
} | null;
