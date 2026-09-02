export const photos = {
  hero: '/kyoto-hero.jpg',
  guests: '/recent-guests-austria.jpg',
  don: '/don.jpg',
  fushimi: '/kyoto/fushimi-inari.jpg',
  nijo: '/kyoto/nijo-castle.jpg',
  lane: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=85',
  garden: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1600&q=85',
  tea: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=1400&q=85',
  food: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1400&q=85',
  autumn: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1800&q=85',
  shrine: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1600&q=85',
  alley: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1600&q=85',
};

export const routes = [
  { slug:'first-time-kyoto', title:'First-Time Kyoto Half Day', time:'Up to 4 hours', price:'¥40,000', bestFor:'First-time visitors who want classic Kyoto without feeling rushed.', flow:'Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion', text:'Temple views, traditional streets and Gion atmosphere in a practical half day. I guide, explain, navigate and adjust the pace as we go.', image:photos.lane },
  { slug:'kyoto-highlights', title:'Kyoto Highlights Full Day', time:'Up to 8 hours', price:'¥80,000', bestFor:'Guests who want several major Kyoto sights in one balanced day.', flow:'Fushimi Inari → Sanjusangendo → lunch → Kiyomizu-dera / Higashiyama → Gion', text:'A full private day with major sights, cultural context, lunch, transport decisions and practical breaks built into the plan.', image:photos.fushimi },
  { slug:'nijo-history', title:'Nijo Castle & Kyoto History', time:'About 4–6 hours', price:'¥10,000/hour', bestFor:'Guests interested in shogun history, architecture, gardens and cultural background.', flow:'Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto', text:'I connect buildings and places to Kyoto history in plain English and point out details that are easy to miss on your own.', image:photos.nijo },
  { slug:'zen-northwest', title:'Ryoan-ji & Northwest Kyoto', time:'About 4–5 hours', price:'¥10,000/hour', bestFor:'Guests who enjoy Zen, gardens and a quieter side of Kyoto.', flow:'Ryoan-ji → Kinkaku-ji → Kitano Tenmangu or a local lunch / tea stop', text:'A slower route with contrasting temple experiences, cultural background and manageable transfers.', image:photos.garden },
  { slug:'family-kyoto', title:'Family-Friendly Kyoto Day', time:'About 5–7 hours', price:'¥10,000/hour', bestFor:'Families with children or teenagers who want variety, photos, food and culture.', flow:'Fushimi Inari → lunch or Nishiki area → Yasaka Shrine / Gion → sweets or matcha stop', text:'A flexible day where we can shorten explanations, add food and photo stops, change the order or use a taxi when useful.', image:photos.shrine },
  { slug:'comfortable-kyoto', title:'Comfortable Kyoto for Senior Travellers', time:'About 5–7 hours', price:'¥10,000/hour', bestFor:'Senior travellers and couples who prefer shorter walks, more breaks and optional taxis.', flow:'Sanjusangendo → Nijo Castle → relaxed lunch or tea → Kyoto Gyoen or Gion', text:'The goal is a comfortable Kyoto day, not the maximum number of stops. We can reduce stairs and long walks and leave time to sit down.', image:photos.alley },
];
