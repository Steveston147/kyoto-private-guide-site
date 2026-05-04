// FILE: layout.tsx
// PATH: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.umaacademia.com'),
  title: {
    default: 'Kyoto Private Guide | Don Tanaka',
    template: '%s | Kyoto Private Guide',
  },
  description:
    'Private guide service in Kyoto by Don Tanaka, a Kyoto-born licensed guide. Calm, flexible, family-friendly and senior-friendly tours in Kyoto, Osaka and Nara.',
  keywords: [
    'Kyoto private guide',
    'Kyoto licensed guide',
    'Kyoto tour guide',
    'family friendly Kyoto tour',
    'senior friendly Kyoto guide',
    'private Kyoto tour',
    'Kyoto guide service',
    'Osaka private guide',
    'Nara private guide',
    'Don Tanaka',
  ],
  authors: [{ name: 'Don Tanaka' }],
  creator: 'Don Tanaka',
  publisher: 'Kyoto Private Guide',
  openGraph: {
    title: 'Kyoto Private Guide | Don Tanaka',
    description:
      'A calm and flexible private guide service in Kyoto for families, senior travellers, students and visitors who want a personal Kyoto day.',
    url: 'https://www.umaacademia.com',
    siteName: 'Kyoto Private Guide',
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
    title: 'Kyoto Private Guide | Don Tanaka',
    description:
      'Private Kyoto guide service by Don Tanaka. Calm, flexible, family-friendly and senior-friendly tours.',
    images: ['/kyoto-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.umaacademia.com',
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
