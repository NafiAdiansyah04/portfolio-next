"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const params = useParams();
  const t = useTranslations('nav');
  const locale = params.locale || 'id';

  return (
    <header className="py-8 xl:py-12 text-primary-text">
      <div className=" container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <h1 className="text-4xl font-semibold">Nafi'<span className="text-accent">.</span></h1>
        </Link>


        {/* Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={`/${locale}/contact`}>
            <Button>{t('hireMe')}</Button>
          </Link>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;