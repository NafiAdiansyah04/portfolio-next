"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useTranslations } from 'next-intl';

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "projects", path: "/projects" },
    // { name: "contact", path: "/contact" }
];

const Nav = () => {
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations('nav');
    const locale = params.locale || 'id';

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const localizedPath = `/${locale}${link.path}`;
                const isActive = pathname === localizedPath;

                return (
                    <Link
                        key={index}
                        href={localizedPath}
                        className={`${
                            isActive
                                ? "text-accent sku-emboss border-b-2 border-accent drop-shadow-[0_0_8px_rgba(75,112,245,0.6)]"
                                : "text-primary-text/80 hover:text-accent hover:drop-shadow-[0_0_6px_rgba(75,112,245,0.4)]"
                        } capitalize font-medium transition-all duration-200 hover:-translate-y-0.5`}>
                        {t(link.name)}
                    </Link>
                );
            })
            }</nav>
    );
}

export default Nav;