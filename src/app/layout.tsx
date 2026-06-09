import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { HtmlLangSync } from '@/components/html-lang-sync';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'Nitin Kumar | Data Science & AI Portfolio',
  description:
    'A responsive personal website for Nitin Kumar showcasing data science, machine learning, projects, education, and contact details.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <HtmlLangSync />
        {children}
      </body>
    </html>
  );
}
