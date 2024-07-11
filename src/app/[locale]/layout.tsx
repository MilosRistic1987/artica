import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './scss/main.scss';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const AppThemeProvider = dynamic(() => import("../../theme/provider"), {
  ssr: false,
});

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {

  const theme = cookies().get("__theme__")?.value || "system";
  const messages = await getMessages();
  //console.log(locale, 'ROOTLAYOUT')
  return (
    <html lang={locale} style={theme !== "system" ? { colorScheme: theme } : {}}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AppThemeProvider enableSystem={false} defaultTheme={theme}>
            {children}
          </AppThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
