export type GalleryCrop = 'guide-left' | 'center';

export type SiteAsset = {
  src: string;
  alt: string;
  crop?: GalleryCrop;
};

export const siteAssets = {
  hero: {
    src: '/kyoto/fushimi-inari.jpg',
    alt: 'Vermilion torii gates at Fushimi Inari Taisha in Kyoto',
  },
  experience: {
    src: '/kyoto/yasaka-pagoda.jpg',
    alt: 'Yasaka Pagoda and the historic Higashiyama streets in Kyoto',
  },
  tours: {
    firstTime: '/kyoto-hero.jpg',
    highlights: '/kyoto/fushimi-inari.jpg',
    gentlePace: '/kyoto/nijo-castle.jpg',
  },
  gallery: [
    { src: '/recent-tour-arashiyama-family.jpg', alt: 'A recent private guiding day in Arashiyama', crop: 'guide-left' },
    { src: '/guests/guest02.jpg', alt: 'Recent private guiding moment in Kyoto', crop: 'guide-left' },
    { src: '/guests/guest03.jpg', alt: 'Recent private guiding moment in Kyoto', crop: 'guide-left' },
    { src: '/guests/guest04.jpg', alt: 'Recent private guiding moment in Kyoto', crop: 'guide-left' },
    { src: '/gallery/kiyomizudera-couple.jpg', alt: 'Recent private guiding moment at Kiyomizu-dera', crop: 'guide-left' },
    { src: '/gallery/kiyomizudera-family.jpg', alt: 'Recent private guiding moment at Kiyomizu-dera', crop: 'guide-left' },
    { src: '/kyoto/yasaka-pagoda.jpg', alt: 'Yasaka Pagoda in Higashiyama', crop: 'center' },
    { src: '/kyoto/nijo-castle.jpg', alt: 'Nijo Castle in Kyoto', crop: 'center' },
    { src: '/kyoto/fushimi-inari.jpg', alt: 'Fushimi Inari Taisha in Kyoto', crop: 'center' },
    { src: '/kyoto-hero.jpg', alt: 'A Kyoto streetscape', crop: 'center' },
  ] satisfies SiteAsset[],
  guide: {
    src: '/don.jpg',
    alt: 'Don Tanaka, private Kyoto guide',
  },
} as const;
