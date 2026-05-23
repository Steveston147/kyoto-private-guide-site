// FILE: robots.ts
// PATH: app/robots.ts

import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.umaacademia.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
