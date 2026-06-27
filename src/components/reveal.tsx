"use client";

import { motion, useReducedMotion } from "motion/react";
import { revealTransition, revealVariants } from "@/lib/animation";

interface RevealProps {
    children: React.ReactNode;
    direction?: "up" | "left" | "right";
    delay?: number;
    className?: string;
}

export function Reveal({ children, direction = "up", delay = 0, className }: RevealProps) {
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            custom={direction}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={revealVariants}
            transition={{ ...revealTransition, delay: delay / 1000 }}
        >
            {children}
        </motion.div>
    );
}
