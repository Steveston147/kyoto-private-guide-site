// FILE: layout.tsx
// PATH: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://www.umaacademia.com';
const siteName = 'Kyoto Private Guide';
const title = 'Private Kyoto Guide | Don Tanaka, Licensed Guide Interpreter';
const description =
  'Private Kyoto tours by Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. Calm, flexible, family-friendly and senior-friendly guiding in Kyoto, Osaka and Nara.';

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
    'Arashiyama private tour',
    'Nara private guide',
    'Osaka private guide',
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
      'A calm and flexible private guide service in Kyoto by Don Tanaka, a Kyoto-born licensed guide. Good for families, senior travellers, students and visitors who want a personal Kyoto day.',
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
      'Private Kyoto tours by Don Tanaka, a Kyoto-born licensed guide. Calm, flexible, family-friendly and senior-friendly.',
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
