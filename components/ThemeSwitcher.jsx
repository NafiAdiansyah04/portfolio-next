"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // avoid hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const roles = [
        { id: "light", icon: <FaSun />, label: "LIGHT" },
        { id: "dark", icon: <FaMoon />, label: "DARK" },
    ];

    const currentTheme = theme === "system" ? "dark" : theme;

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className="flex items-center bg-[#27272c] dark:bg-[#27272c] p-1 rounded-full relative w-[100px] h-[40px] border border-white/10 overflow-hidden shadow-inner">
            {/* Animated Background */}
            <motion.div
                className="absolute bg-accent rounded-full h-[32px] w-[46px] shadow-sm"
                initial={false}
                animate={{
                    x: currentTheme === "light" ? 0 : 46,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {roles.map((role) => (
                <button
                    key={role.id}
                    onClick={() => toggleTheme(role.id)}
                    className={`relative z-10 flex-1 h-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${currentTheme === role.id ? "text-white" : "text-white/60 hover:text-white"
                        }`}
                    aria-label={`Switch to ${role.label} mode`}
                >
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="text-[10px]">{role.icon}</span>
                        <span className="scale-[0.8]">{role.label}</span>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
