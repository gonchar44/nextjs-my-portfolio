import type { Metadata } from "next";
import { jetBrainsMono, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Artem Honcharenko — Frontend Engineer",
    description:
        "Personal portfolio of Artem Honcharenko, Frontend Engineer specialising in React, Next.js and TypeScript.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jetBrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
