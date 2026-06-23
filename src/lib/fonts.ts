import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
    variable: "--head-font",
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    style: ["normal", "italic"],
    display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
    variable: "--body-font",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
