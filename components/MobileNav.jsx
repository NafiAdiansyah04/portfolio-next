"use client";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" }
];

export const MobileNav = () => {
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations('nav');
    const locale = params.locale || 'id';
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="sku-raised flex items-center justify-center rounded-xl w-12 h-12 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.55)]">
                <CiMenuFries className="text-[28px] text-accent" />
            </SheetTrigger>
            <SheetContent side="right" className="sku-sheet flex flex-col">
                <div className="mt-32 mb-15 text-center text-2xl">
                    <Link href={`/${locale}`} onClick={() => setIsOpen(false)}>
                        <h1 className="text-4xl font-semibold mb-8 sku-emboss">Nafi'<span className="text-accent">.</span></h1>
                    </Link>
                </div>

                {/* Language Switcher - At the top of navigation */}
                <div className="flex flex-col gap-4 justify-center items-center mb-8">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>

                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link, index) => {
                        const localizedPath = `/${locale}${link.path}`;
                        const isActive = pathname === localizedPath;

                        return (
                            <Link
                                key={index}
                                href={localizedPath}
                                onClick={() => setIsOpen(false)}
                                className={`${
                                    isActive
                                        ? "text-accent sku-emboss drop-shadow-[0_0_8px_rgba(75,112,245,0.6)] border-b-2 border-accent"
                                        : "text-primary-text/80 hover:text-accent"
                                } capitalize text-xl transition-all duration-200`}>
                                {t(link.name)}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
