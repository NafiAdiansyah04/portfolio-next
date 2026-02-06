import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['en', 'id'];
export const defaultLocale = 'id';

export default getRequestConfig(async (params) => {
  // In Next 15, this might be requestLocale and it might be a promise
  const locale = await params.requestLocale || params.locale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) {
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
