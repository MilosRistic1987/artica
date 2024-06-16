import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../scss/main.scss';
import { ThemeProvider } from '../theme/provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
