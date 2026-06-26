import type { Transition, Variants } from "motion/react";

export const revealVariants: Variants = {
    hidden: (direction: "up" | "left" | "right") => ({
        opacity: 0,
        x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
        y: direction === "up" ? 28 : 0,
    }),
    visible: { opacity: 1, x: 0, y: 0 },
};

export const revealTransition: Transition = {
    duration: 0.8,
    ease: [0.22, 0.75, 0.2, 1],
};
