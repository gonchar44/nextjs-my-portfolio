"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

interface TerminalOutputProps {
    phrases: [string, ...string[]];
}

export function TerminalOutput({ phrases }: TerminalOutputProps) {
    const reduce = useReducedMotion();
    const [text, setText] = useState(reduce ? phrases[0] : "");

    useEffect(() => {
        if (reduce) return;

        let p = 0;
        let i = 0;
        let dir = 1;
        let timer: ReturnType<typeof setTimeout>;

        const tick = () => {
            const full = phrases[p];
            i += dir;
            setText(full.slice(0, Math.max(0, i)));

            let delay: number;
            if (dir > 0 && i >= full.length) {
                dir = -1;
                delay = 1700;
            } else if (dir < 0 && i <= 0) {
                dir = 1;
                p = (p + 1) % phrases.length;
                delay = 360;
            } else {
                delay = dir > 0 ? 55 + Math.random() * 65 : 32;
            }

            timer = setTimeout(tick, delay);
        };

        timer = setTimeout(tick, 650);
        return () => clearTimeout(timer);
    }, [phrases, reduce]);

    return (
        <div
            className="font-head font-medium text-text"
            style={{ minHeight: "2.6em", lineHeight: "1.25", fontSize: "clamp(20px, 3.6vw, 34px)" }}
        >
            <span className="text-acc-a">&gt;&nbsp;</span>
            <span className="break-words">{text}</span>
            <span className="terminal-cursor" aria-hidden="true" />
        </div>
    );
}
