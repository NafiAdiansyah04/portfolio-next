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
        <div
            className="flex items-center p-1 rounded-full relative w-[100px] h-[40px] overflow-hidden"
            style={{
                background: 'linear-gradient(145deg, var(--sku-panel-to), var(--sku-panel-from))',
                boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.55), inset 0 -1px 2px rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.07)',
                border: '1px solid var(--border-color)'
            }}
        >
            {/* Animated sliding indicator */}
            <motion.div
                className="absolute rounded-full h-[32px] w-[46px]"
                style={{
                    background: 'linear-gradient(to bottom, #6080ff 0%, #3a56e0 100%)',
                    boxShadow: '0 2px 6px rgba(75,112,245,0.5), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.25)',
                }}
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
                    className={`relative z-10 flex-1 h-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        currentTheme === role.id ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" : "text-primary-text/50 hover:text-primary-text/80"
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
