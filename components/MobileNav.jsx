"use client";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" }
];

export const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex items-center justify-center rounded-md bg-white/10 w-12 h-12 hover:bg-white/20 transition-all">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href={"/"} onClick={() => setIsOpen(false)}>
                        <h1 className="text-4xl font-semibold mb-8">Nafi'<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;