// FILE: layout.tsx
// PATH: app/layout.tsx

import './globals.css';
import './uat.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://www.umaacademia.com';
const siteName = 'Kyoto Private Guide';
const title = 'Private Kyoto Guide | Don Tanaka, Licensed Guide Interpreter';
const description =
  'Private guiding in Kyoto by Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. Clear guide fees, calm private tours, and regular guiding mainly on weekends and Japanese public holidays.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'Kyoto private guide',
    'private Kyoto guide',
    'licensed Kyoto guide',
    'Kyoto licensed guide interpreter',
    'National Government Licensed Guide Interpreter Kyoto',
    'Kyoto-born guide',
    'Kyoto private tour',
    'private Kyoto tour',
    'Kyoto walking tour',
    'family friendly Kyoto tour',
    'senior friendly Kyoto guide',
    'Gion private tour',
    'Fushimi Inari private guide',
    'Kyoto weekend guide',
    'Don Tanaka',
  ],
  authors: [{ name: 'Don Tanaka', url: siteUrl }],
  creator: 'Don Tanaka',
  publisher: siteName,
  category: 'travel',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description:
      'A calm private guide service in Kyoto by Don Tanaka, a Kyoto-born licensed guide. Clear fees and regular guiding mainly on weekends and Japanese public holidays.',
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/kyoto-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Kyoto street view with Yasaka Pagoda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Private Kyoto guiding by Don Tanaka, a Kyoto-born licensed guide. Clear fees and regular guiding mainly on weekends and Japanese public holidays.',
    images: ['/kyoto-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
