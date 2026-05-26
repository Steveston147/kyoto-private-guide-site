// FILE: page.tsx
// PATH: app/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("Kyoto Private Guide Enquiry")}`;
const formAction = "https://formspree.io/f/mykdbwbl";
const yen = String.fromCharCode(165);

const whyItems = [
  {
    title: "Licensed private guide in Kyoto",
    text: "I am a National Government Licensed Guide Interpreter. I value clear communication, punctuality, and a calm, professional guiding style.",
  },
  {
    title: "Kyoto-born local insight",
    text: "I was born and raised in Kyoto. I can introduce famous sights, quiet corners, local manners, and the small details that make Kyoto easier to understand.",
  },
  {
    title: "International background",
    text: "I have long experience supporting overseas guests, students, faculty members, and international visitors. I understand both sightseeing needs and practical travel concerns.",
  },
  {
    title: "Comfortable and flexible pace",
    text: "Tours can be adjusted for families, senior travellers, first-time visitors, academic guests, corporate visitors, and guests who prefer a slower and more personal day.",
  },
];

const whoItems = [
  "First-time visitors to Kyoto",
  "Families and senior travellers",
  "Guests looking for a calm private Kyoto tour",
  "University, corporate, and cultural visitors",
];

const guideItems = [
  {
    name: "Don Tanaka",
    role: "Kyoto-born licensed private guide",
    text: "Don is a Kyoto-born guide with strong international experience and a calm, practical style. He personally handles enquiries and guides the tours. His background includes guiding, cross-cultural support, university-related international work, and many years of Canada-related experience. His goal is to make your Kyoto day easy to enjoy, not rushed, and meaningful.",
  },
];

const guestItems = [
  {
    text: "Clear explanations without too much information at once.",
  },
  {
    text: "A comfortable walking pace with practical breaks when needed.",
  },
  {
    text: "Simple route planning that reduces stress for first-time visitors.",
  },
  {
    text: "Flexible support for families, senior travellers, and mixed-age groups.",
  },
  {
    text: "Local Kyoto insight beyond guidebook-level information.",
  },
  {
    text: "Calm communication before and during the tour.",
  },
];

const scenicItems = [
  {
    img: "/kyoto/kiyomizu-dera.jpg",
    title: "Kiyomizu-dera Area",
    text: "Classic Kyoto atmosphere with temple views, old streets, and a strong sense of place.",
  },
  {
    img: "/kyoto/fushimi-inari.jpg",
    title: "Fushimi Inari",
    text: "One of Kyoto’s most famous sights, ideal for an early visit and a smoother pace.",
  },
  {
    img: "/kyoto/arashiyama.jpg",
    title: "Arashiyama",
    text: "Riverside scenery, seasonal beauty, and a more open and relaxed rhythm.",
  },
  {
    img: "/kyoto/kinkakuji.jpg",
    title: "Kinkaku-ji",
    text: "A well-known Kyoto highlight that works well in a first-time visitor plan.",
  },
  {
    img: "/kyoto/gion-yasaka.jpg",
    title: "Gion & Yasaka Area",
    text: "Traditional streets, quiet corners, and an easy introduction to Kyoto culture.",
  },
  {
    img: "/kyoto/nijo-castle.jpg",
    title: "Nijo Castle",
    text: "A good option for guests interested in history, architecture, and a slower visit.",
  },
];

const tourItems = [
  {
    title: "Private Kyoto highlights",
    text: "A classic Kyoto walking tour for first-time visitors, including temples, traditional streets, local culture, and easy-to-understand background.",
  },
  {
    title: "Gion, Higashiyama, and old Kyoto",
    text: "A calm route through traditional streets, shrines, temples, and quiet corners with a strong Kyoto atmosphere.",
  },
  {
    title: "Fushimi Inari and southern Kyoto",
    text: "A flexible visit to the famous torii gates, with timing and walking distance adjusted to your group.",
  },
  {
    title: "Arashiyama nature and culture",
    text: "A slower-paced route with riverside scenery, bamboo grove areas, temples, and seasonal beauty.",
  },
  {
    title: "Family and senior-friendly Kyoto",
    text: "Shorter walks, more breaks, simple transport, and a route designed around comfort and confidence.",
  },
  {
    title: "Educational, corporate, and special visits",
    text: "Support for university groups, cultural learning, administrative visits, company visits, media-related visits, and bilingual communication needs.",
  },
];

const modelRoutes = [
  {
    title: "First-Time Kyoto Half-Day Route",
    time: "About 4 hours",
    bestFor: "First-time visitors who want classic Kyoto without feeling rushed.",
    route:
      "Kiyomizu-dera area → Sannenzaka and Ninenzaka → Yasaka Shrine → Gion or Kennin-ji area",
    stops: ["Kiyomizu-dera", "Sannenzaka", "Ninenzaka", "Yasaka Shrine", "Gion"],
    notes:
      "A classic first Kyoto route with temple views, old streets, and Gion atmosphere. Good for a morning or afternoon tour.",
    isNightOut: false,
  },
  {
    title: "Senior-Friendly Kyoto One-Day Route",
    time: "About 6 to 7 hours",
    bestFor: "Senior travellers, couples, or families who prefer a slower and easier pace.",
    route:
      "Nijo Castle or Kinkaku-ji → lunch break → Arashiyama riverside area → optional short temple visit",
    stops: ["Nijo Castle", "Lunch", "Arashiyama", "Riverside Walk", "Optional Temple"],
    notes:
      "A slower route with fewer steep streets, more rest time, and taxi use when helpful. The focus is comfort, not rushing.",
    isNightOut: false,
  },
  {
    title: "Family-Friendly Kyoto Route",
    time: "About 5 to 7 hours",
    bestFor: "Families with children or teenagers who want variety, photos, food, and culture.",
    route:
      "Fushimi Inari → Nishiki Market or simple local lunch → Yasaka Shrine and Gion area → optional sweets or matcha stop",
    stops: ["Fushimi Inari", "Lunch or Nishiki", "Yasaka Shrine", "Gion", "Sweets or Matcha"],
    notes:
      "A flexible family route with famous sights, food, photo stops, and easy breaks. The pace can be changed during the day.",
    isNightOut: false,
  },
  {
    title: "Nijo Castle & Kyoto History Route",
    time: "About 4 to 5 hours",
    bestFor: "Guests who enjoy history, architecture, gardens, and a calm cultural pace.",
    route:
      "Nijo Castle → Kyoto Gyoen National Garden → local lunch or tea break → Nishiki Market area",
    stops: ["Nijo Castle", "Kyoto Gyoen", "Tea Break", "Nishiki Area"],
    notes:
      "This route is good for guests who want Kyoto history without too much walking. Nijo Castle gives a strong introduction to samurai-era architecture and political history.",
    isNightOut: false,
  },
  {
    title: "Quiet Kyoto Garden & Tea Route",
    time: "About 4 to 6 hours",
    bestFor: "Repeat visitors, couples, or guests who prefer quieter places and slower travel.",
    route:
      "Nanzen-ji area → Philosopher’s Path → quiet temple or garden → tea or coffee break",
    stops: ["Nanzen-ji", "Philosopher’s Path", "Quiet Temple", "Tea or Coffee"],
    notes:
      "A gentle route for guests who want space, silence, gardens, and a slower Kyoto mood. Good for spring, autumn, or anyone who wants a break from crowded sightseeing.",
    isNightOut: false,
  },
  {
    title: "Kyoto Night Out: Izakaya, Karaoke & Local Fun",
    time: "About 3 to 4 hours in the evening",
    bestFor: "Adults who want a fun, casual, local-style night in Kyoto.",
    route:
      "Casual izakaya → local drinks and small dishes → karaoke → optional late-night ramen or snack",
    stops: ["Izakaya", "Drinks & Small Dishes", "Karaoke", "Late Snack"],
    notes:
      "A cheerful night route for adults: casual food, a few drinks, easy conversation, and karaoke if you feel brave. We keep it friendly, budget-conscious, and relaxed. Alcohol is optional, and the plan can be adjusted for non-drinkers too.",
    isNightOut: true,
  },
];

const processItems = [
  {
    step: "1",
    title: "Send me a message",
    text: "Tell me your date, group size, hotel area if known, and what kind of day you hope to have.",
  },
  {
    step: "2",
    title: "I suggest a simple plan",
    text: "I will reply with a route idea that matches your pace, interests, and practical needs.",
  },
  {
    step: "3",
    title: "We adjust together",
    text: "We can fine-tune the route, transport, walking distance, breaks, and lunch plan before the day.",
  },
  {
    step: "4",
    title: "Enjoy Kyoto with confidence",
    text: "On the day, I guide calmly and clearly so you can focus on enjoying Kyoto.",
  },
];

const faqItems = [
  {
    q: "Are you a licensed guide?",
    a: "Yes. I am a National Government Licensed Guide Interpreter in Japan.",
  },
  {
    q: "Is this a private tour?",
    a: "Yes. My tours are private. I guide your group only, so the route and pace can be adjusted more easily.",
  },
  {
    q: "Can you customise the tour?",
    a: "Yes. I can adjust the route based on your interests, pace, age group, walking comfort, and travel style.",
  },
  {
    q: "Are your tours good for families or senior travellers?",
    a: "Yes. I often plan tours with slower walking, more breaks, simple transport, and flexible timing.",
  },
  {
    q: "How long is a half-day or full-day tour?",
    a: "A half-day tour is usually up to 4 hours. A full-day tour is usually up to 8 hours. The exact timing can be adjusted when we plan your day.",
  },
  {
    q: "How many people can join?",
    a: "Small private groups are best. Groups of 1 to 6 are usually comfortable. Larger groups may also be possible depending on the route and purpose.",
  },
  {
    q: "How do we get around?",
    a: "We mainly use public transport. Please prepare an ICOCA or SUICA card or app. If you do not have one, we can buy one at the station on the day.",
  },
  {
    q: "Can we use taxis?",
    a: "Yes. Taxis can be used when they are helpful, especially for senior travellers, families, rainy days, or routes with long walking distances. Taxi fares are not included in the guide fee.",
  },
  {
    q: "Can you meet us at our hotel?",
    a: "In many cases, yes. The meeting point depends on your hotel location, station access, and the tour route. I will suggest a simple and practical meeting point.",
  },
  {
    q: "Can you help with lunch?",
    a: "Yes. I can suggest simple local options and help choose a place that fits your preferences. Meal costs are not included in the guide fee.",
  },
  {
    q: "Do you guide outside Kyoto?",
    a: "Yes. I can also arrange guiding for nearby areas such as Osaka or Nara depending on the plan and schedule.",
  },
  {
    q: "Do you support educational or corporate visits?",
    a: "Yes. I can support university-related visits, cultural learning, administrative visits, company visits, and bilingual communication needs. Please share the purpose in your enquiry.",
  },
  {
    q: "Who will guide us?",
    a: "Don Tanaka will guide you. If I am not available on your preferred date, I may suggest another possible date.",
  },
  {
    q: "Are weekdays available?",
    a: "Weekends and Japanese public holidays are easier to accept. For weekdays, please send an enquiry first.",
  },
  {
    q: "What happens if it rains?",
    a: "Kyoto can still be enjoyable in light rain. I can adjust the route, transport, walking distance, or indoor balance if needed.",
  },
  {
    q: "How much walking is involved?",
    a: "That depends on the route. I can reduce walking, add taxi use when needed, and plan more breaks if your group prefers a slower pace.",
  },
  {
    q: "What is not included in the guide fee?",
    a: "Transport, meals, entrance fees, taxi fares, and personal expenses are not included unless agreed in advance.",
  },
  {
    q: "Can we pay in Japanese yen or US dollars?",
    a: "Japanese yen is easiest. US dollars may also be possible by agreement. Please ask in advance so we can confirm the amount and method clearly.",
  },
  {
    q: "Can you arrange an evening izakaya or karaoke route?",
    a: "Yes. I can suggest a casual adult evening route with an izakaya, light drinks, karaoke, or late-night food. Alcohol is optional, and all food, drinks, karaoke, taxi, and personal costs are separate from the guide fee.",
  },
  {
    q: "How should I contact you?",
    a: "You can use the contact form or email me directly. Please tell me your date, group size, hotel area if known, walking pace, and what kind of day you want.",
  },
];



type RouteForm = {
  places: string[];
  tourLength: string;
  startingPoint: string;
  startingPointNote: string;
  guests: string;
  travellerTypes: string[];
  walkingPace: string;
  interests: string[];
  season: string;
  travelDate: string;
  foodPreferences: string[];
  transportation: string;
  avoidItems: string[];
  otherRequests: string;
};

type MultiSelectKey = "places" | "travellerTypes" | "interests" | "foodPreferences" | "avoidItems";

type RouteStep = {
  time: string;
  place: string;
  notes: string;
};

type GeneratedRoute = {
  title: string;
  routeStyle: string;
  summary: string[];
  itinerary: RouteStep[];
  why: string[];
  travelNotes: string[];
};

const initialRouteForm: RouteForm = {
  places: [],
  tourLength: "Half day / 4 hours",
  startingPoint: "Kyoto Station",
  startingPointNote: "",
  guests: "2",
  travellerTypes: [],
  walkingPace: "Standard walking",
  interests: [],
  season: "Not decided yet",
  travelDate: "",
  foodPreferences: [],
  transportation: "Public transportation, with taxi when useful",
  avoidItems: [],
  otherRequests: "",
};

const placeOptions = [
  "Kiyomizu-dera / Higashiyama",
  "Fushimi Inari Shrine",
  "Arashiyama",
  "Kinkakuji",
  "Gion / Yasaka Shrine",
  "Nijo Castle",
  "Nishiki Market",
  "Nara",
  "Osaka",
  "Quiet local areas",
  "Izakaya / evening food",
  "Not sure / Please suggest",
];

const tourLengthOptions = [
  "3 hours",
  "Half day / 4 hours",
  "5–6 hours",
  "Full day / 8 hours",
  "2 days",
  "Not sure yet",
];

const startingPointOptions = [
  "Kyoto Station",
  "Hotel in Kyoto City",
  "Osaka",
  "Nara",
  "Cruise port / Airport",
  "Not decided yet",
];

const guestOptions = ["1", "2", "3–4", "5–6", "7 or more"];

const travellerTypeOptions = [
  "Solo traveller",
  "Couple",
  "Family with children",
  "Senior travellers",
  "Multi-generation family",
  "Students",
  "Business / university visitors",
  "First-time visitors to Japan",
  "Repeat visitors to Japan",
];

const walkingPaceOptions = [
  "Relaxed pace / less walking",
  "Standard walking",
  "Active / I do not mind walking a lot",
  "Need many breaks",
  "Avoid stairs and steep slopes if possible",
];

const interestOptions = [
  "Temples and shrines",
  "Traditional streets",
  "Gardens",
  "History and culture",
  "Samurai / castles",
  "Food and markets",
  "Tea / matcha",
  "Sake",
  "Anime / pop culture",
  "Shopping",
  "Photography spots",
  "Quiet local places",
  "Seasonal flowers / autumn leaves",
  "University / academic visit",
  "Business / company visit",
  "Family-friendly activities",
];

const seasonOptions = [
  "Spring / cherry blossom season",
  "Early summer",
  "Summer",
  "Autumn leaves season",
  "Winter",
  "Rainy season",
  "Not decided yet",
];

const foodOptions = [
  "Japanese lunch",
  "Sushi",
  "Ramen",
  "Udon / soba",
  "Kaiseki / traditional meal",
  "Casual local food",
  "Nishiki Market food walk",
  "Matcha sweets",
  "Vegetarian",
  "Vegan",
  "Halal-friendly",
  "No meal needed",
];

const transportationOptions = [
  "Public transportation",
  "Public transportation, with taxi when useful",
  "Taxi when needed",
  "Mostly walking",
  "Private car / van",
  "Not sure / Please suggest",
];

const avoidOptions = [
  "Very crowded places",
  "Too many stairs",
  "Long bus rides",
  "Too much walking",
  "Shopping",
  "Touristy souvenir shops",
  "Early morning",
  "Late evening",
  "Expensive restaurants",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const jpHolidays = [
  "2026-01-01",
  "2026-01-12",
  "2026-02-11",
  "2026-02-23",
  "2026-03-20",
  "2026-04-29",
  "2026-05-03",
  "2026-05-04",
  "2026-05-05",
  "2026-05-06",
  "2026-07-20",
  "2026-08-11",
  "2026-09-21",
  "2026-09-22",
  "2026-09-23",
  "2026-10-12",
  "2026-11-03",
  "2026-11-23",
  "2027-01-01",
  "2027-01-11",
  "2027-02-11",
  "2027-02-23",
  "2027-03-21",
  "2027-03-22",
  "2027-04-29",
  "2027-05-03",
  "2027-05-04",
  "2027-05-05",
  "2027-07-19",
  "2027-08-11",
  "2027-09-20",
  "2027-09-23",
  "2027-10-11",
  "2027-11-03",
  "2027-11-23",
];

const holidaySet = new Set(jpHolidays);

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatKey(year: number, month: number, day: number) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function shiftMonth(year: number, month: number, offset: number) {
  const shifted = new Date(year, month + offset, 1);
  return {
    year: shifted.getFullYear(),
    month: shifted.getMonth(),
  };
}

function buildCalendarMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const firstWeekday = firstDay.getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const cells: Array<{
    day: number | null;
    status: "weekend" | "weekday" | "empty";
  }> = [];

  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: null, status: "empty" });
  }

  for (let day = 1; day <= lastDate; day++) {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    const key = formatKey(year, month, day);
    const isHoliday = holidaySet.has(key);
    const isWeekend = weekday === 0 || weekday === 6;

    cells.push({
      day,
      status: isWeekend || isHoliday ? "weekend" : "weekday",
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: null, status: "empty" });
  }

  return {
    label: `${monthNames[month]} ${year}`,
    cells,
  };
}

function buildCalendarWindow(baseYear: number, baseMonth: number, windowOffset: number) {
  return [0, 1, 2].map((index) => {
    const { year, month } = shiftMonth(baseYear, baseMonth, windowOffset + index);
    return buildCalendarMonth(year, month);
  });
}



function toggleArrayValue(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function joinOrFallback(items: string[], fallback: string) {
  return items.length ? items.join(", ") : fallback;
}

function hasAny(items: string[], words: string[]) {
  return items.some((item) => words.some((word) => item.toLowerCase().includes(word.toLowerCase())));
}

function buildRouteFromForm(form: RouteForm): GeneratedRoute {
  const combined = [...form.places, ...form.travellerTypes, ...form.interests, ...form.avoidItems];
  const isSeniorFriendly =
    hasAny(form.travellerTypes, ["Senior", "Multi-generation"]) ||
    form.walkingPace.includes("Relaxed") ||
    form.walkingPace.includes("many breaks") ||
    form.walkingPace.includes("Avoid stairs") ||
    hasAny(form.avoidItems, ["stairs", "walking"]);
  const isFamily = hasAny(form.travellerTypes, ["Family", "children"]) || hasAny(form.interests, ["Family"]);
  const isEducational = hasAny(form.travellerTypes, ["Business", "university", "Students"]) || hasAny(form.interests, ["University", "Business", "academic", "company"]);
  const wantsQuiet = hasAny(combined, ["Quiet", "Gardens"]);
  const wantsFood = hasAny([...form.interests, ...form.foodPreferences, ...form.places], ["Food", "Market", "lunch", "Ramen", "Sushi", "Matcha", "Izakaya"]);
  const wantsNara = hasAny(form.places, ["Nara"]);
  const wantsArashiyama = hasAny(form.places, ["Arashiyama"]);
  const wantsFushimi = hasAny(form.places, ["Fushimi"]);
  const wantsEvening = hasAny(form.places, ["Izakaya", "evening"]);
  const wantsHistory = hasAny(form.interests, ["History", "Samurai", "castles"]) || hasAny(form.places, ["Nijo"]);

  let title = "Your Sample Kyoto Private Tour Route";
  let routeStyle = "Classic Kyoto highlights";
  let itinerary: RouteStep[] = [
    {
      time: "9:00",
      place: "Meet at Kyoto Station or your hotel area",
      notes: "Short orientation and a quick check of walking pace and transport for the day.",
    },
    {
      time: "9:30",
      place: "Kiyomizu-dera / Higashiyama",
      notes: "Temple views, old streets, and a classic first impression of Kyoto.",
    },
    {
      time: "11:30",
      place: "Yasaka Shrine and Gion area",
      notes: "Traditional streets and a gentle walk through one of Kyoto’s most atmospheric areas.",
    },
    {
      time: "13:00",
      place: "Lunch or tea break",
      notes: "A simple local lunch, matcha sweets, or a short rest depending on your preference.",
    },
    {
      time: "14:30",
      place: "Nishiki Market or optional extra stop",
      notes: "A flexible finish with food, shopping, or a quiet temple depending on your interests.",
    },
    {
      time: "16:00",
      place: "End of tour",
      notes: "The ending point can be adjusted to your hotel, dinner area, or next destination.",
    },
  ];

  if (wantsEvening) {
    title = "Your Sample Kyoto Evening Food Route";
    routeStyle = "Casual adult evening route";
    itinerary = [
      {
        time: "18:00",
        place: "Meet near your hotel or a central Kyoto station",
        notes: "A short orientation and check of food, drink, and walking preferences.",
      },
      {
        time: "18:30",
        place: "Casual izakaya",
        notes: "Small dishes, local atmosphere, and easy conversation. Alcohol is optional.",
      },
      {
        time: "20:00",
        place: "Short walk through Pontocho, Gion, or Kawaramachi area",
        notes: "A relaxed evening walk with local atmosphere and photo opportunities.",
      },
      {
        time: "21:00",
        place: "Karaoke or late-night snack",
        notes: "Optional karaoke, ramen, or a simple dessert stop depending on your mood.",
      },
      {
        time: "22:00",
        place: "End near a convenient station or taxi point",
        notes: "The finish can be adjusted for safe and simple return to your accommodation.",
      },
    ];
  } else if (isEducational) {
    title = "Your Sample Kyoto Educational / Professional Visit Route";
    routeStyle = "Culture, context, and practical bilingual support";
    itinerary = [
      {
        time: "9:30",
        place: "Meet at Kyoto Station or your hotel area",
        notes: "Confirm the purpose of the visit, timing, and communication needs.",
      },
      {
        time: "10:15",
        place: "Nijo Castle or Kyoto cultural site",
        notes: "A clear introduction to Kyoto history, governance, architecture, and cultural background.",
      },
      {
        time: "12:00",
        place: "Lunch and discussion time",
        notes: "A calm break with time to discuss questions from academic, corporate, or cultural visitors.",
      },
      {
        time: "13:30",
        place: "University, company, or cultural visit by arrangement",
        notes: "This part requires advance coordination. I can support bilingual communication and smooth movement.",
      },
      {
        time: "15:30",
        place: "Gion / traditional Kyoto area",
        notes: "A softer cultural finish after the formal visit or meeting.",
      },
      {
        time: "17:00",
        place: "End of tour",
        notes: "Return to your hotel, station, or dinner area.",
      },
    ];
  } else if (isSeniorFriendly) {
    title = "Your Sample Senior-Friendly Kyoto Route";
    routeStyle = "Relaxed pace, fewer stairs, more rest time";
    itinerary = [
      {
        time: "9:30",
        place: "Meet at hotel lobby or Kyoto Station",
        notes: "Start slowly and confirm the day’s walking comfort before moving.",
      },
      {
        time: "10:15",
        place: "Nijo Castle or Kinkakuji",
        notes: "A strong Kyoto highlight with a manageable visit and clear cultural explanation.",
      },
      {
        time: "11:45",
        place: "Taxi or easy public transport transfer",
        notes: "Use taxi when it meaningfully reduces walking or complicated transfers.",
      },
      {
        time: "12:15",
        place: "Lunch break",
        notes: "A relaxed lunch with enough time to sit, talk, and rest.",
      },
      {
        time: "13:45",
        place: "Arashiyama riverside or quiet garden area",
        notes: "A scenic area with flexible walking distance and several places to pause.",
      },
      {
        time: "15:30",
        place: "Tea or coffee break",
        notes: "A final rest before returning to your hotel or station.",
      },
    ];
  } else if (isFamily) {
    title = "Your Sample Family-Friendly Kyoto Route";
    routeStyle = "Flexible, photogenic, and easy to adjust";
    itinerary = [
      {
        time: "9:00",
        place: "Meet at Kyoto Station or your hotel area",
        notes: "Confirm children’s energy level, food needs, and bathroom break timing.",
      },
      {
        time: "9:45",
        place: "Fushimi Inari Shrine",
        notes: "A short torii gate walk. We do not need to climb all the way up the mountain.",
      },
      {
        time: "11:30",
        place: "Nishiki Market or casual local lunch",
        notes: "Food, snacks, and an easy change of rhythm after the shrine visit.",
      },
      {
        time: "13:30",
        place: "Yasaka Shrine and Gion area",
        notes: "A simple cultural walk with good photo stops and flexible breaks.",
      },
      {
        time: "15:00",
        place: "Matcha sweets or optional short temple stop",
        notes: "Choose a calm finish depending on weather and energy level.",
      },
    ];
  } else if (wantsNara) {
    title = "Your Sample Nara Day Route";
    routeStyle = "Kyoto-based day trip to Nara";
    itinerary = [
      {
        time: "9:00",
        place: "Meet at Kyoto Station",
        notes: "Travel to Nara by train and review the day’s walking plan.",
      },
      {
        time: "10:15",
        place: "Todaiji Temple and Nara Park",
        notes: "A classic Nara visit with history, deer, and large temple architecture.",
      },
      {
        time: "12:30",
        place: "Lunch in Nara",
        notes: "Simple lunch near the main sightseeing area.",
      },
      {
        time: "14:00",
        place: "Kasuga Taisha or quiet old town area",
        notes: "Choose a shrine, garden, or calmer neighbourhood depending on your pace.",
      },
      {
        time: "16:00",
        place: "Return toward Kyoto or end in Nara",
        notes: "The ending can be adjusted based on your hotel and evening plans.",
      },
    ];
  } else if (wantsQuiet) {
    title = "Your Sample Quiet Kyoto Garden Route";
    routeStyle = "Slower Kyoto with gardens, tea, and local atmosphere";
    itinerary = [
      {
        time: "9:30",
        place: "Meet at your hotel area or a convenient station",
        notes: "Start calmly and avoid unnecessary rushing.",
      },
      {
        time: "10:15",
        place: "Nanzen-ji area",
        notes: "Temple atmosphere, spacious grounds, and a quieter Kyoto mood.",
      },
      {
        time: "11:30",
        place: "Philosopher’s Path or nearby garden",
        notes: "A gentle walk that works well in spring, autumn, and quieter seasons.",
      },
      {
        time: "12:45",
        place: "Tea, coffee, or light lunch",
        notes: "A relaxed pause rather than a packed sightseeing schedule.",
      },
      {
        time: "14:00",
        place: "Quiet temple or local neighbourhood",
        notes: "A flexible final stop chosen according to weather, crowds, and your interests.",
      },
    ];
  } else if (wantsArashiyama) {
    title = "Your Sample Arashiyama Nature and Culture Route";
    routeStyle = "Scenery, seasonal beauty, and a softer pace";
    itinerary = [
      {
        time: "9:00",
        place: "Meet at Kyoto Station or your hotel area",
        notes: "Move to Arashiyama by train or taxi depending on your starting point.",
      },
      {
        time: "10:00",
        place: "Arashiyama riverside area",
        notes: "Open scenery and a relaxed introduction to the area.",
      },
      {
        time: "10:45",
        place: "Bamboo grove area or nearby temple",
        notes: "A photogenic stop, adjusted to avoid the worst crowding when possible.",
      },
      {
        time: "12:15",
        place: "Lunch or tea break",
        notes: "A practical break before deciding whether to continue or return toward central Kyoto.",
      },
      {
        time: "13:45",
        place: "Kinkakuji or quiet extra stop",
        notes: "Add a second highlight if the group still has enough energy.",
      },
    ];
  } else if (wantsFushimi || wantsFood) {
    title = "Your Sample Fushimi Inari, Food and Gion Route";
    routeStyle = "Famous sights with food and flexible breaks";
    itinerary = [
      {
        time: "9:00",
        place: "Meet at Kyoto Station or your hotel area",
        notes: "Confirm walking pace and food preferences before starting.",
      },
      {
        time: "9:30",
        place: "Fushimi Inari Shrine",
        notes: "Walk through the main torii gates. The walking distance can be shortened easily.",
      },
      {
        time: "11:30",
        place: "Nishiki Market or casual Japanese lunch",
        notes: "Choose market food, ramen, sushi, soba, or a simple local meal depending on preference.",
      },
      {
        time: "13:30",
        place: "Yasaka Shrine and Gion area",
        notes: "Traditional Kyoto atmosphere after lunch, with photo stops and flexible breaks.",
      },
      {
        time: "15:00",
        place: "Matcha sweets or quiet finish",
        notes: "A soft ending that can be adjusted to the weather and crowd level.",
      },
    ];
  } else if (wantsHistory) {
    title = "Your Sample Kyoto History Route";
    routeStyle = "History, architecture, and cultural background";
    itinerary = [
      {
        time: "9:30",
        place: "Meet at Kyoto Station or your hotel area",
        notes: "Start with a short overview of Kyoto’s historical geography.",
      },
      {
        time: "10:15",
        place: "Nijo Castle",
        notes: "A strong introduction to samurai-era architecture and political history.",
      },
      {
        time: "12:00",
        place: "Lunch or tea break",
        notes: "A slower pause before moving to the next cultural area.",
      },
      {
        time: "13:30",
        place: "Kyoto Gyoen or Higashiyama area",
        notes: "Choose imperial history, gardens, or classic Kyoto streets depending on interest.",
      },
      {
        time: "15:30",
        place: "Nishiki Market or Gion",
        notes: "A lighter finish after the history-focused part of the day.",
      },
    ];
  }

  const summary = [
    `Preferred length: ${form.tourLength || "Not decided yet"}`,
    `Starting point: ${form.startingPointNote || form.startingPoint || "Not decided yet"}`,
    `Guests: ${form.guests || "Not decided yet"}`,
    `Travellers: ${joinOrFallback(form.travellerTypes, "Private Kyoto visitors")}`,
    `Walking pace: ${form.walkingPace || "Standard walking"}`,
    `Main interests: ${joinOrFallback(form.interests, "Kyoto highlights and local culture")}`,
  ];

  if (form.places.length) {
    summary.push(`Requested places: ${form.places.join(", ")}`);
  }

  if (form.season || form.travelDate) {
    summary.push(`Season or date: ${form.travelDate || form.season}`);
  }

  const why = [
    isSeniorFriendly
      ? "This route keeps the pace gentle, with fewer steep streets, more rest time, and taxi use when useful."
      : "This route balances famous Kyoto sights with a manageable pace, so the day does not feel too rushed.",
    wantsFood
      ? "Food and break time are built into the plan, so lunch, snacks, or matcha can become part of the experience."
      : "There is enough flexibility to add lunch, tea, or a short rest when the group needs it.",
    form.transportation.includes("taxi") || form.transportation.includes("Taxi")
      ? "Taxi use can be added where it makes the day easier, especially in rain, heat, or long-transfer sections."
      : "Public transportation and walking are used in a practical way, with the route adjusted to the group’s comfort.",
  ];

  if (isEducational) {
    why.push(
      "The plan can also support academic, corporate, or cultural visitors who need clear bilingual communication and a more structured day."
    );
  }

  if (isFamily) {
    why.push("The route can be shortened or reshaped during the day if children become tired or the weather changes.");
  }

  if (form.otherRequests.trim()) {
    why.push(`Your note has been considered: ${form.otherRequests.trim()}`);
  }

  const travelNotes = [
    "This is a sample route, not a final reservation or exact walking map.",
    "Opening hours, closing days, weather, traffic, and crowd levels should be checked before the actual tour.",
    "Transport, meals, entrance fees, taxi fares, and personal expenses are not included in the guide fee.",
    "Don can customise this route more realistically after receiving your hotel area, travel date, group details, and walking pace.",
  ];

  if (form.avoidItems.length) {
    travelNotes.unshift(`Special care: try to avoid ${form.avoidItems.join(", ").toLowerCase()}.`);
  }

  return {
    title,
    routeStyle,
    summary,
    itinerary,
    why,
    travelNotes,
  };
}

export default function Page() {
  const [today, setToday] = useState<Date | null>(null);
  const [windowOffset, setWindowOffset] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [routeForm, setRouteForm] = useState<RouteForm>(initialRouteForm);
  const [generatedRoute, setGeneratedRoute] = useState<GeneratedRoute | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const calendarMonths = useMemo(() => {
    if (!today) return [];
    return buildCalendarWindow(today.getFullYear(), today.getMonth(), windowOffset);
  }, [today, windowOffset]);

  const visibleRangeLabel = useMemo(() => {
    if (!calendarMonths.length) return "";
    return `${calendarMonths[0].label} - ${calendarMonths[2].label}`;
  }, [calendarMonths]);

  const updateRouteForm = (field: keyof RouteForm, value: string) => {
    setRouteForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleRouteOption = (field: MultiSelectKey, value: string) => {
    setRouteForm((prev) => ({ ...prev, [field]: toggleArrayValue(prev[field], value) }));
  };

  const handleGenerateRoute = () => {
    const route = buildRouteFromForm(routeForm);
    setGeneratedRoute(route);
    window.setTimeout(() => {
      document.getElementById("route-planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleResetPlanner = () => {
    setRouteForm(initialRouteForm);
    setGeneratedRoute(null);
  };

  const handlePrintRoute = () => {
    if (!generatedRoute) return;
    window.print();
  };

  const renderCheckboxGroup = (field: MultiSelectKey, options: string[]) => (
    <div className="planner-options">
      {options.map((option) => {
        const checked = routeForm[field].includes(option);

        return (
          <label className={checked ? "planner-option is-selected" : "planner-option"} key={option}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggleRouteOption(field, option)}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );

  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Don Tanaka home">
          <div className="brand-title">Kyoto Guide Service</div>
          <div className="brand-subtitle">Private Kyoto Guide</div>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#guides">Guide</a>
          <a href="#guests">Style</a>
          <a href="#availability">Availability</a>
          <a href="#tours">Tours</a>
          <a href="#model-routes">Routes</a>
          <a href="#route-planner">Planner</a>
          <a href="#kyoto-scenes">Kyoto</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Kyoto-born licensed private guide</p>
          <h1>
            Private Kyoto tours,
            <br />
            calmly guided by
            <br />
            a local you can trust.
          </h1>
          <p className="hero-text">
            I guide families, senior travellers, first-time visitors, and international guests who
            want a relaxed and meaningful Kyoto experience. The plan is private, flexible, and easy
            to understand from the first message to the tour day.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Check availability and enquire
            </a>
            <a className="btn btn-secondary" href={mailto}>
              Send a quick email
            </a>
          </div>

          <div className="hero-actions hero-actions-small">
            <a className="text-cta" href="#pricing">
              View rates first
            </a>
            <a className="text-cta" href="#faq">
              See common questions
            </a>
          </div>

          <div className="badge-row">
            <span>National Government Licensed Guide Interpreter</span>
            <span>Kyoto-born and Kyoto-raised</span>
            <span>Family and senior-friendly</span>
            <span>Kyoto / Osaka / Nara</span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="/kyoto-hero.jpg"
            alt="Kyoto street view with Yasaka Pagoda"
            className="hero-image"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-card">
          <p className="trust-kicker">A good fit for</p>
          <div className="trust-list" role="list" aria-label="Best for these guests">
            {whoItems.map((item) => (
              <span className="trust-pill" key={item} role="listitem">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="section-kicker">Why guide with me</p>
          <h2>Clear, calm, and personal support</h2>
        </div>

        <div className="card-grid four">
          {whyItems.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head">
          <p className="section-kicker">About</p>
          <h2>Hello, I’m Don Tanaka</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo-card">
            <img
              src="/don.jpg"
              alt="Don Tanaka, private guide in Kyoto"
              className="about-photo"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="about-copy">
            <p>
              I was born and raised in Kyoto, and I have guided visitors in Japan for more than 10
              years.
            </p>
            <p>
              I am a National Government Licensed Guide Interpreter. I also have many years of
              Canada-related experience and international education work at a university, where I
              have supported overseas students, faculty members, and visitors from many countries.
            </p>
            <p>
              This background helps me guide not only sightseeing guests, but also families, senior
              travellers, academic groups, corporate visitors, and people who need clear bilingual
              support.
            </p>
            <p>
              My style is calm and practical. I do not try to rush you through too many places. I
              prefer to make the day comfortable, clear, and meaningful, with enough time to enjoy
              Kyoto properly.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" id="guides">
        <div className="section-head">
          <p className="section-kicker">Guide</p>
          <h2>Your private guide: Don Tanaka</h2>
        </div>

        <div className="card-grid two">
          {guideItems.map((item) => (
            <article className="info-card guide-card" key={item.name}>
              <div className="guide-label">{item.role}</div>
              <h3>{item.name}</h3>
              <p className="guide-text">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="section-note">
          Don personally handles enquiries and guides the tours. Availability depends on the date,
          group size, and type of visit.
        </p>
      </section>

      <section className="content-section" id="guests">
        <div className="section-head">
          <p className="section-kicker">Guiding style</p>
          <h2>What guests often appreciate</h2>
        </div>

        <div className="guest-grid">
          {guestItems.map((item, i) => (
            <article className="guest-card" key={i}>
              <p className="guest-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="availability">
        <div className="section-head">
          <p className="section-kicker">Availability</p>
          <h2>Weekends and public holidays are easiest to accept</h2>
        </div>

        <div className="availability-card">
          <div className="availability-copy">
            <p>The calendar below is a simple guide only.</p>
            <div className="availability-legend">
              <span className="legend-item">
                <strong>◎</strong> Weekends and Japanese public holidays
              </span>
              <span className="legend-item">
                <strong>△</strong> Weekdays — please enquire first
              </span>
            </div>
            <p className="availability-note">
              Final availability depends on the date, group type, route, and Don&apos;s schedule.
            </p>
          </div>

          <div className="calendar-toolbar">
            <button
              type="button"
              className="calendar-nav-btn"
              onClick={() => setWindowOffset((prev) => prev - 1)}
              aria-label="Show previous months"
              disabled={!today}
            >
              ←
            </button>

            <div className="calendar-range" aria-live="polite">
              {today ? visibleRangeLabel : "Loading calendar..."}
            </div>

            <button
              type="button"
              className="calendar-nav-btn"
              onClick={() => setWindowOffset((prev) => prev + 1)}
              aria-label="Show next months"
              disabled={!today}
            >
              →
            </button>
          </div>

          <div className="calendar-toolbar calendar-toolbar-small">
            <button
              type="button"
              className="calendar-link-btn"
              onClick={() => setWindowOffset(0)}
              disabled={!today || windowOffset === 0}
            >
              Back to this month
            </button>
          </div>

          <div className="calendar-grid">
            {today ? (
              calendarMonths.map((month) => (
                <div className="mini-calendar" key={month.label}>
                  <div className="calendar-title">{month.label}</div>
                  <div className="calendar-weekdays">
                    {weekdayLabels.map((label) => (
                      <div key={label} className="calendar-weekday">
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="calendar-days">
                    {month.cells.map((cell, index) => (
                      <div key={`${month.label}-${index}`} className={`calendar-day ${cell.status}`}>
                        {cell.day !== null ? (
                          <>
                            <span className="day-number">{cell.day}</span>
                            <span className="day-mark">
                              {cell.status === "weekend" ? "◎" : "△"}
                            </span>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <>
                {[0, 1, 2].map((item) => (
                  <div className="mini-calendar mini-calendar-loading" key={item}>
                    <div className="calendar-title skeleton-block short" />
                    <div className="calendar-loading-grid">
                      {Array.from({ length: 35 }).map((_, idx) => (
                        <div className="calendar-loading-cell" key={idx} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="content-section" id="tours">
        <div className="section-head">
          <p className="section-kicker">Tours and areas</p>
          <h2>Flexible private guiding for different travellers</h2>
        </div>

        <div className="card-grid three">
          {tourItems.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="kyoto-scenes">
        <div className="section-head">
          <p className="section-kicker">Kyoto scenes</p>
          <h2>Well-known places, shown in a calm and simple way</h2>
        </div>

        <div className="scenic-grid">
          {scenicItems.map((item, index) => (
            <article className="scenic-card" key={item.title}>
              <div className="scenic-image-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="scenic-image"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <div className="scenic-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="model-routes">
        <div className="section-head">
          <p className="section-kicker">Free model routes</p>
          <h2>Six calm Kyoto route ideas you can start from</h2>
        </div>

        <div className="card-grid three">
          {modelRoutes.map((item) => (
            <article
              className="info-card"
              key={item.title}
              style={
                item.isNightOut
                  ? {
                      borderColor: "rgba(159, 115, 66, 0.62)",
                      background:
                        "linear-gradient(180deg, rgba(255, 250, 244, 0.96), rgba(246, 234, 216, 0.92))",
                      boxShadow: "0 18px 44px rgba(107, 71, 29, 0.12)",
                    }
                  : undefined
              }
            >
              {item.isNightOut ? (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    minHeight: "28px",
                    padding: "6px 10px",
                    marginBottom: "12px",
                    borderRadius: "999px",
                    background: "#9f7342",
                    color: "#ffffff",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Kanpai night route
                </div>
              ) : null}
              <h3>{item.title}</h3>

              <div
                aria-label={`${item.title} simple route flow`}
                style={{
                  margin: "14px 0 16px",
                  padding: "14px",
                  borderRadius: "16px",
                  border: "1px solid #eadfce",
                  background: "#fffaf4",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "7px",
                  }}
                >
                  {item.stops.map((stop, index) => (
                    <div key={stop}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "28px",
                            height: "28px",
                            flex: "0 0 28px",
                            borderRadius: "999px",
                            background: "#9f7342",
                            color: "#ffffff",
                            fontSize: "0.82rem",
                            fontWeight: 800,
                            lineHeight: 1,
                          }}
                        >
                          {index + 1}
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            minHeight: "34px",
                            padding: "7px 11px",
                            borderRadius: "999px",
                            background: "#f3e4cf",
                            border: "1px solid #e1cfb8",
                            color: "#5b5045",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            lineHeight: 1.25,
                          }}
                        >
                          {stop}
                        </span>
                      </div>

                      {index < item.stops.length - 1 ? (
                        <div
                          aria-hidden="true"
                          style={{
                            marginLeft: "13px",
                            height: "18px",
                            borderLeft: "2px solid #d8c3a7",
                          }}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <p>
                <strong>Time:</strong> {item.time}
              </p>
              <p>
                <strong>Best for:</strong> {item.bestFor}
              </p>
              <p>
                <strong>Route idea:</strong> {item.route}
              </p>
              <p>
                <strong>Why this works:</strong> {item.notes}
              </p>
            </article>
          ))}
        </div>

        <p className="section-note">
          These are simple route-flow ideas, not exact walking maps. I can adjust the route for
          your hotel area, season, walking pace, group size, weather, and interests.
        </p>

        <p className="section-note">
          The night-out route is for adults. Alcohol is optional, and food, drinks, karaoke, taxi,
          and other personal expenses are not included in the guide fee.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Ask me to adjust a route
          </a>
          <a className="btn btn-secondary" href={mailto}>
            Email your travel date
          </a>
        </div>
      </section>

      <section className="content-section" id="route-planner">
        <div className="section-head">
          <p className="section-kicker">Kyoto Route Planner</p>
          <h2>Create your sample private Kyoto route</h2>
        </div>

        <div className="planner-card planner-form-card">
          <div className="planner-intro-grid">
            <div>
              <p className="planner-lead">
                Choose a few items below, and this planner will create a simple sample route you can
                save as a PDF. It is not a fixed reservation, but it is a useful starting point for
                a private Kyoto tour enquiry.
              </p>
            </div>
            <div className="planner-mini-note">
              <strong>Good for:</strong> first-time visitors, families, senior travellers, academic
              guests, and people who want a calm route before contacting a guide.
            </div>
          </div>

          <div className="planner-form-grid">
            <div className="planner-field planner-field-wide">
              <label>Places you would like to visit</label>
              {renderCheckboxGroup("places", placeOptions)}
            </div>

            <div className="planner-field">
              <label htmlFor="planner-tour-length">Preferred tour length</label>
              <select
                id="planner-tour-length"
                className="planner-select"
                value={routeForm.tourLength}
                onChange={(event) => updateRouteForm("tourLength", event.target.value)}
              >
                {tourLengthOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="planner-starting-point">Starting point</label>
              <select
                id="planner-starting-point"
                className="planner-select"
                value={routeForm.startingPoint}
                onChange={(event) => updateRouteForm("startingPoint", event.target.value)}
              >
                {startingPointOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="planner-starting-note">Hotel name or nearest station, if known</label>
              <input
                id="planner-starting-note"
                className="planner-input"
                type="text"
                value={routeForm.startingPointNote}
                onChange={(event) => updateRouteForm("startingPointNote", event.target.value)}
                placeholder="Example: near Kyoto Station, Gion, Osaka hotel, etc."
              />
            </div>

            <div className="planner-field">
              <label htmlFor="planner-guests">Number of guests</label>
              <select
                id="planner-guests"
                className="planner-select"
                value={routeForm.guests}
                onChange={(event) => updateRouteForm("guests", event.target.value)}
              >
                {guestOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field planner-field-wide">
              <label>Type of travellers</label>
              {renderCheckboxGroup("travellerTypes", travellerTypeOptions)}
            </div>

            <div className="planner-field">
              <label htmlFor="planner-walking-pace">Walking pace</label>
              <select
                id="planner-walking-pace"
                className="planner-select"
                value={routeForm.walkingPace}
                onChange={(event) => updateRouteForm("walkingPace", event.target.value)}
              >
                {walkingPaceOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="planner-season">Travel season</label>
              <select
                id="planner-season"
                className="planner-select"
                value={routeForm.season}
                onChange={(event) => updateRouteForm("season", event.target.value)}
              >
                {seasonOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="planner-travel-date">Travel date, if decided</label>
              <input
                id="planner-travel-date"
                className="planner-input"
                type="text"
                value={routeForm.travelDate}
                onChange={(event) => updateRouteForm("travelDate", event.target.value)}
                placeholder="Example: October 12, 2026"
              />
            </div>

            <div className="planner-field">
              <label htmlFor="planner-transportation">Transportation preference</label>
              <select
                id="planner-transportation"
                className="planner-select"
                value={routeForm.transportation}
                onChange={(event) => updateRouteForm("transportation", event.target.value)}
              >
                {transportationOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field planner-field-wide">
              <label>Interests</label>
              {renderCheckboxGroup("interests", interestOptions)}
            </div>

            <div className="planner-field planner-field-wide">
              <label>Food preferences</label>
              {renderCheckboxGroup("foodPreferences", foodOptions)}
            </div>

            <div className="planner-field planner-field-wide">
              <label>Things you would like to avoid</label>
              {renderCheckboxGroup("avoidItems", avoidOptions)}
            </div>

            <div className="planner-field planner-field-wide">
              <label htmlFor="planner-other-requests">Other requests</label>
              <textarea
                id="planner-other-requests"
                className="planner-textarea"
                value={routeForm.otherRequests}
                onChange={(event) => updateRouteForm("otherRequests", event.target.value)}
                placeholder="Example: My mother cannot walk too much. We like quiet places and matcha sweets."
                rows={4}
              />
            </div>
          </div>

          <div className="planner-actions">
            <button className="btn btn-primary" type="button" onClick={handleGenerateRoute}>
              Create My Sample Route
            </button>
            <button className="btn btn-secondary" type="button" onClick={handleResetPlanner}>
              Reset planner
            </button>
          </div>
        </div>

        {generatedRoute ? (
          <div className="planner-result planner-print-area" id="route-planner-result">
            <div className="planner-result-header">
              <div>
                <p className="section-kicker">Sample route PDF</p>
                <h3>{generatedRoute.title}</h3>
                <p>{generatedRoute.routeStyle}</p>
              </div>
              <div className="planner-result-badge">Created by Kyoto Guide Service</div>
            </div>

            <div className="planner-summary-grid">
              {generatedRoute.summary.map((item) => (
                <div className="planner-summary-item" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="planner-result-section">
              <h4>Suggested itinerary</h4>
              <div className="planner-itinerary">
                {generatedRoute.itinerary.map((step) => (
                  <div className="planner-itinerary-row" key={`${step.time}-${step.place}`}>
                    <div className="planner-itinerary-time">{step.time}</div>
                    <div className="planner-itinerary-body">
                      <strong>{step.place}</strong>
                      <p>{step.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="planner-result-section">
              <h4>Why this route fits you</h4>
              <ul className="planner-note-list">
                {generatedRoute.why.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="planner-result-section">
              <h4>Travel notes</h4>
              <ul className="planner-note-list">
                {generatedRoute.travelNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="planner-pdf-footer">
              <p>
                This is a sample route. I can make it more realistic based on your hotel, travel
                date, group members, weather, and walking pace.
              </p>
              <p>
                Contact: <a href={mailto}>{email}</a> | Kyoto Guide Service by Don Tanaka
              </p>
            </div>

            <div className="planner-actions planner-result-actions">
              <button className="btn btn-primary" type="button" onClick={handlePrintRoute}>
                Download / Save as PDF
              </button>
              <a className="btn btn-secondary" href="#contact">
                Ask Don to Customise This Route
              </a>
            </div>
          </div>
        ) : (
          <div className="planner-empty-card">
            <h3>Your route will appear here</h3>
            <p>
              After you create a sample route, you can review the itinerary, save it as a PDF, and
              send an enquiry if you would like Don to customise it.
            </p>
          </div>
        )}
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="section-kicker">How it works</p>
          <h2>Easy from first message to tour day</h2>
        </div>

        <div className="process-grid">
          {processItems.map((item) => (
            <article className="process-card" key={item.step}>
              <div className="process-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="pricing">
        <div className="section-head">
          <p className="section-kicker">Pricing</p>
          <h2>Clear and simple rates</h2>
        </div>

        <div className="pricing-grid">
          <article className="price-card">
            <h3>Half Day</h3>
            <div className="price">{yen}40,000</div>
            <p>Up to 4 hours / Approx. US$270</p>
          </article>

          <article className="price-card featured">
            <div className="price-badge">Most requested</div>
            <h3>Full Day</h3>
            <div className="price">{yen}80,000</div>
            <p>Up to 8 hours / Approx. US$535</p>
          </article>

          <article className="price-card">
            <h3>Extra Hour</h3>
            <div className="price">{yen}10,000</div>
            <p>Per additional hour / Approx. US$70</p>
          </article>
        </div>

        <p className="pricing-note">
          Don&apos;s guide rate is {yen}10,000 per hour. Rates are per guide, not per person. For small
          private groups, the guide fee stays the same regardless of the number of guests.
        </p>

        <p className="pricing-note">
          Transport, meals, entrance fees, taxi fares, and personal expenses are not included unless
          agreed in advance.
        </p>

        <p className="pricing-note">
          We mainly use public transport. Please prepare an ICOCA or SUICA card or app. If you do
          not have one, we can buy one at the station on the day.
        </p>

        <p className="pricing-note">
          Japanese yen is easiest for payment. US dollars may also be possible by agreement. The US
          dollar amounts above are approximate and may change depending on the exchange rate.
        </p>

        <div className="pricing-cta-card">
          <div className="pricing-cta-copy">
            <p className="pricing-cta-kicker">Ready to check a date?</p>
            <h3>Send a short enquiry and I will suggest a simple plan.</h3>
            <p>
              Please tell me your preferred date, group size, hotel area if known, and what kind of
              Kyoto day you are hoping for. A rough idea is enough.
            </p>
          </div>

          <div className="pricing-cta-actions">
            <a className="btn btn-primary" href="#contact">
              Send an enquiry
            </a>
            <a className="btn btn-secondary" href={mailto}>
              Email directly
            </a>
          </div>
        </div>
      </section>

      <section className="content-section" id="faq">
        <div className="section-head">
          <p className="section-kicker">FAQ</p>
          <h2>Questions guests often ask</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <article className="faq-item" key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "20px 20px",
                    color: "#2f2a24",
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    lineHeight: 1.45,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      flex: "0 0 28px",
                      borderRadius: "999px",
                      background: "#f3e4cf",
                      color: "#7b5730",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen ? <p className="faq-answer">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head">
          <p className="section-kicker">Contact</p>
          <h2>Let’s plan your Kyoto day</h2>
        </div>

        <div className="contact-card">
          <p>
            Please send me a short message with your travel date, group size, hotel area if known,
            and what kind of tour you are hoping for. You can also choose one of the model routes
            above. A rough idea is enough, and I can suggest a simple plan from there.
          </p>

          <div className="contact-points">
            <span>Date</span>
            <span>Group size</span>
            <span>Hotel or meeting area</span>
            <span>Kyoto only or beyond Kyoto</span>
            <span>Preferred model route or sample PDF</span>
            <span>Family or senior-friendly needs</span>
            <span>Walking pace</span>
          </div>

          <form action={formAction} method="POST" className="contact-form">
            <input type="hidden" name="_subject" value="Kyoto Private Guide Enquiry" />

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>

              <div className="form-field">
                <label htmlFor="preferred-date">Preferred date</label>
                <input id="preferred-date" name="preferred_date" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="group-size">Group size</label>
                <input id="group-size" name="group_size" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="route-interest">Which route are you interested in?</label>
                <select
                  id="route-interest"
                  name="route_interest"
                  defaultValue=""
                  style={{
                    width: "100%",
                    border: "1px solid #ddcfbc",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "14px 15px",
                    color: "#2f2a24",
                  }}
                >
                  <option value="" disabled>
                    Please choose one if you know
                  </option>
                  <option value="First-Time Kyoto Half-Day Route">
                    First-Time Kyoto Half-Day Route
                  </option>
                  <option value="Senior-Friendly Kyoto One-Day Route">
                    Senior-Friendly Kyoto One-Day Route
                  </option>
                  <option value="Family-Friendly Kyoto Route">Family-Friendly Kyoto Route</option>
                  <option value="Nijo Castle & Kyoto History Route">
                    Nijo Castle & Kyoto History Route
                  </option>
                  <option value="Quiet Kyoto Garden & Tea Route">
                    Quiet Kyoto Garden & Tea Route
                  </option>
                  <option value="Kyoto Night Out: Izakaya, Karaoke & Local Fun">
                    Kyoto Night Out: Izakaya, Karaoke & Local Fun
                  </option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="hotel-area">Hotel or meeting area</label>
                <input id="hotel-area" name="hotel_or_meeting_area" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="walking-pace">Preferred walking pace</label>
                <input
                  id="walking-pace"
                  name="walking_pace"
                  type="text"
                  placeholder="Normal, slow, many breaks, etc."
                />
              </div>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="interests">Places or interests</label>
              <input
                id="interests"
                name="places_or_interests"
                type="text"
                placeholder="Gion, Fushimi Inari, temples, food, family trip, etc."
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Please tell me your rough plan, questions, or any special needs."
              />
            </div>

            <div className="contact-actions contact-actions-form">
              <button className="btn btn-primary" type="submit">
                Send enquiry
              </button>
              <a className="btn btn-secondary" href="#availability">
                Check the calendar again
              </a>
            </div>
          </form>

          <div className="contact-divider">
            <span>or email directly</span>
          </div>

          <p className="contact-email">
            <a href={mailto}>{email}</a>
          </p>

          <p className="contact-direct-note">
            A short message is enough. I will reply as clearly and simply as possible.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <p>Don Tanaka | Kyoto Private Guide</p>
        <p>Private Kyoto tours with a calm, flexible, and local approach.</p>
      </footer>
    </main>
  );
}
