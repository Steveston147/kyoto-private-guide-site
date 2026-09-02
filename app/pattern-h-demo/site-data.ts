export const photos = {
  hero: '/kyoto-hero.jpg',
  guests: '/recent-guests-austria.jpg',
  don: '/don.jpg',
  culture: '/kyoto/nijo-castle.jpg',
  fushimi: '/kyoto/fushimi-inari.jpg',
  nijo: '/kyoto/nijo-castle.jpg',
  lane: '/kyoto-hero.jpg',
  garden: '/kyoto/nijo-castle.jpg',
  tea: '/kyoto-hero.jpg',
  food: '/recent-guests-austria.jpg',
  autumn: '/kyoto-hero.jpg',
  shrine: '/kyoto/fushimi-inari.jpg',
  alley: '/kyoto-hero.jpg',
};

export const routes = [
  { slug:'first-time-kyoto', title:'First-Time Kyoto Half Day', time:'Up to 4 hours', price:'¥40,000', bestFor:'First-time visitors who want classic Kyoto without feeling rushed.', flow:'Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion', text:'Temple views, traditional streets and Gion atmosphere in a practical half day. I guide, explain, navigate and adjust the pace as we go.', image:photos.hero },
  { slug:'kyoto-highlights', title:'Kyoto Highlights Full Day', time:'Up to 8 hours', price:'¥80,000', bestFor:'Guests who want several major Kyoto sights in one balanced day.', flow:'Fushimi Inari → Sanjusangendo → lunch → Kiyomizu-dera / Higashiyama → Gion', text:'A full private day with major sights, cultural context, lunch, transport decisions and practical breaks built into the plan.', image:photos.guests },
  { slug:'nijo-history', title:'Nijo Castle & Kyoto History', time:'About 4–6 hours', price:'¥10,000/hour', bestFor:'Guests interested in shogun history, architecture, gardens and cultural background.', flow:'Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto', text:'I connect buildings and places to Kyoto history in plain English and point out details that are easy to miss on your own.', image:photos.nijo },
  { slug:'zen-northwest', title:'Ryoan-ji & Northwest Kyoto', time:'About 4–5 hours', price:'¥10,000/hour', bestFor:'Guests who enjoy Zen, gardens and a quieter side of Kyoto.', flow:'Ryoan-ji → Kinkaku-ji → Kitano Tenmangu or a local lunch / tea stop', text:'A slower route with contrasting temple experiences, cultural background and manageable transfers.', image:photos.culture },
  { slug:'family-kyoto', title:'Family-Friendly Kyoto Day', time:'About 5–7 hours', price:'¥10,000/hour', bestFor:'Families with children or teenagers who want variety, photos, food and culture.', flow:'Fushimi Inari → lunch or Nishiki area → Yasaka Shrine / Gion → sweets or matcha stop', text:'A flexible day where we can shorten explanations, add food and photo stops, change the order or use a taxi when useful.', image:photos.guests },
  { slug:'comfortable-kyoto', title:'Comfortable Kyoto for Senior Travellers', time:'About 5–7 hours', price:'¥10,000/hour', bestFor:'Senior travellers and couples who prefer shorter walks, more breaks and optional taxis.', flow:'Sanjusangendo → Nijo Castle → relaxed lunch or tea → Kyoto Gyoen or Gion', text:'The goal is a comfortable Kyoto day, not the maximum number of stops. We can reduce stairs and long walks and leave time to sit down.', image:photos.don },
];
