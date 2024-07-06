import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['rs', 'en'],
    localeDetection: false,
    // Used when no locale matches
    defaultLocale: 'rs'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(rs|en)/:path*']
};