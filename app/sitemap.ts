// FILE: sitemap.ts
// PATH: app/sitemap.ts

import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.umaacademia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
