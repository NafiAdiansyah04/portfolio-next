import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { locales } from '@/i18n';
import { TooltipProvider } from "@components/ui/tooltip";
import { ThemeProvider } from "../../components/ThemeProvider";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

// Tell Next.js which locales are available
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
    return {
        title: "Nafi Adiansyah",
        description: "Nafi Adiansyah Personal Portfolio",
        icons: {
            icon: "/assets/favicon.ico",
            shortcut: "/assets/favicon.ico",
            apple: "/assets/apple-touch-icon.png"
        }
    };
}


export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${jetBrainsMono.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
                        <TooltipProvider>
                            <Header />
                            <StairTransition />
                            <PageTransition>
                                {children}
                            </PageTransition>
                        </TooltipProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
