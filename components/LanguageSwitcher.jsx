"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const languages = [
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "id", name: "ID", flag: "🇮🇩" }
];

const LanguageSwitcher = () => {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = params.locale || 'id';

    const handleLanguageChange = (newLocale) => {
        if (newLocale === currentLocale) return;
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    return (
        <div className="flex items-center bg-[#27272c] p-1 rounded-full relative w-[100px] h-[40px] border border-white/10 overflow-hidden shadow-inner">
            {/* Animated Background */}
            <motion.div
                className="absolute bg-accent rounded-full h-[32px] w-[46px] shadow-sm"
                initial={false}
                animate={{
                    x: currentLocale === "en" ? 0 : 46,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`relative z-10 flex-1 h-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${currentLocale === lang.code ? "text-white" : "text-white/60 hover:text-white"
                        }`}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
