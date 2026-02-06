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
                        className={`${isActive && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {t(link.name)}
                    </Link>
                );
            })
            }</nav>
    );
}

export default Nav;