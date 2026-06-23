import Link from "next/link";
import { type SanityDocument, groq } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const SKILL_FIELDS = groq`
  _id,
  _type,
  title
`;

const SKILLS_QUERY = groq`
  *[_type == "skill"] | order(title asc) {
    ${SKILL_FIELDS}
  }
`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
    const testPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    const testSkills = await client.fetch<SanityDocument[]>(SKILLS_QUERY, {}, options);

    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 gap-y-14 flex-col flex">
            <div>
                <h1 className="text-4xl font-bold mb-8">Posts</h1>
                <ul className="flex flex-col gap-y-4">
                    {testPosts.map((post) => (
                        <li className="hover:underline" key={post._id}>
                            <Link href={`/${post.slug.current}`}>
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h1 className="text-4xl font-bold mb-8">Skills</h1>
                <ul className="flex flex-col gap-y-4">
                    {testSkills.map((skill) => (
                        <li className="hover:underline" key={skill._id}>
                            <span>{skill.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
