import type { Metadata } from "next";
import { jetBrainsMono, spaceGrotesk } from "@/lib/fonts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
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
        <html
            lang="en"
            suppressHydrationWarning={true}
            className={`${jetBrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
        >
            <head>
                {/* Sets data-theme before React hydrates to prevent flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
