import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (_next/static, favicon.ico, etc.)
  matcher: ['/', '/(id|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
