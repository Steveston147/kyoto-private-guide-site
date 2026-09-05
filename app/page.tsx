import Image from "next/image";
import type { Metadata } from "next";
import FaqList, { type FaqItem } from "./FaqList";

const siteUrl = "https://www.umaacademia.com";
const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("Kyoto Private Guide Enquiry")}`;
const formAction = "https://formspree.io/f/mykdbwbl";

export const metadata: Metadata = {
  title: { absolute: "Private Kyoto Guide | Don Tanaka, Licensed Guide Interpreter" },
  description:
    "Private Kyoto guide Don Tanaka is a Kyoto-born National Government Licensed Guide Interpreter. Custom half-day and full-day Kyoto tours, including a Kyoto Station Arrival Tour for Shinkansen travellers, mainly on weekends and Japanese public holidays.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ja-JP": "/japanese-guide",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Private Kyoto Guide | Don Tanaka, Licensed Guide Interpreter",
    description:
      "Calm, custom private Kyoto tours with a Kyoto-born licensed guide, including a Kyoto Station Arrival Tour for travellers arriving by Shinkansen.",
    url: "/",
    locale: "en_US",
    type: "website",
    images: [{ url: "/kyoto-hero.jpg", width: 1200, height: 630, alt: "Kyoto street view with Yasaka Pagoda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Kyoto Guide | Don Tanaka",
    description: "Custom private Kyoto tours with a Kyoto-born National Government Licensed Guide Interpreter.",
    images: ["/kyoto-hero.jpg"],
  },
};

const guestFeedback = [
  "Clear explanations without too much information at once.",
  "A comfortable pace with practical breaks when needed.",
  "Simple planning that makes Kyoto easier for first-time visitors.",
  "Calm communication before and during the tour.",
  "Local Kyoto insight beyond guidebook-level information.",
  "Flexible support for families, senior travellers, and mixed-age groups.",
];

const routes = [
  {
    title: "Kyoto Station Arrival Tour",
    time: "Up to 4 or 8 hours",
    bestFor: "Travellers arriving from Tokyo or elsewhere by Shinkansen who want to start exploring Kyoto immediately.",
    route: "Shinkansen platform welcome → same-day luggage delivery → start sightseeing → finish at your Kyoto hotel",
    text: "I meet you on the Shinkansen platform at Kyoto Station. If your arrival time, luggage and hotel are eligible, we can use JR West's pikuraku PORTER so your bags are delivered to your hotel the same day. Then we start your private Kyoto tour without first going to the hotel. The route remains flexible and can use walking, public transport or taxis when useful. The tour finishes at your Kyoto hotel.",
  },
  {
    title: "First-Time Kyoto Half Day",
    time: "Up to 4 hours",
    bestFor: "First-time visitors who want classic Kyoto without feeling rushed.",
    route: "Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion",
    text: "A compact private Kyoto tour with temple views, traditional streets and Gion atmosphere. It works well in either the morning or afternoon.",
  },
  {
    title: "Kyoto Highlights Full Day",
    time: "Up to 8 hours",
    bestFor: "Guests who want several major Kyoto sights in one balanced day.",
    route: "Fushimi Inari → Sanjusangendo → lunch → Kiyomizu-dera / Higashiyama → Gion",
    text: "A full-day route that combines major sights with enough time for lunch, explanations and practical breaks instead of racing through a checklist.",
  },
  {
    title: "Nijo Castle & Kyoto History",
    time: "About 4–6 hours",
    bestFor: "Guests interested in shogun history, architecture, gardens and cultural background.",
    route: "Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto",
    text: "A calmer history-focused route. Nijo Castle is especially rewarding with a guide because the buildings, political history and details are easy to miss on your own.",
  },
  {
    title: "Ryoan-ji & Northwest Kyoto",
    time: "About 4–5 hours",
    bestFor: "Guests who enjoy Zen, gardens and a quieter side of Kyoto.",
    route: "Ryoan-ji → Kinkaku-ji → Kitano Tenmangu or a local lunch / tea stop",
    text: "A practical northwest-Kyoto combination with very different temple experiences. The route can be shortened or adjusted depending on crowds and walking pace.",
  },
  {
    title: "Family-Friendly Kyoto Day",
    time: "About 5–7 hours",
    bestFor: "Families with children or teenagers who want variety, photos, food and culture.",
    route: "Fushimi Inari → lunch or Nishiki area → Yasaka Shrine / Gion → sweets or matcha stop",
    text: "A flexible day with famous sights, food, photo stops and easy breaks. The order and pace can change during the tour if the family needs it.",
  },
  {
    title: "Comfortable Kyoto for Senior Travellers",
    time: "About 5–7 hours",
    bestFor: "Senior travellers and couples who prefer shorter walks, more breaks and optional taxis.",
    route: "Sanjusangendo → Nijo Castle → relaxed lunch or tea → Kyoto Gyoen or Gion",
    text: "The emphasis is comfort, not the number of stops. We can reduce stairs and long walks, add taxi rides when useful, and keep enough time to sit down and enjoy the day.",
  },
];

const faqItems: FaqItem[] = [
  { q: "When are you available?", a: "My regular guiding days are mainly Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available." },
  { q: "How much is the guide fee?", a: "My rate is ¥10,000 per hour. A half day is up to 4 hours / ¥40,000, and a full day is up to 8 hours / ¥80,000. The fee is per guide, not per person. The Kyoto Station Arrival Tour uses the same guide fee." },
  { q: "Can you meet us when our Shinkansen arrives at Kyoto Station?", a: "Yes. For the Kyoto Station Arrival Tour, I can meet you on the Shinkansen platform at Kyoto Station. After meeting, we can deal with your luggage and start sightseeing without first travelling to your hotel." },
  { q: "Can our luggage be sent to our hotel on the same day?", a: "Often, yes. JR West's pikuraku PORTER accepts eligible luggage at Kyoto Station for same-day delivery to participating Kyoto hotels when deposited by 2:00 p.m. Availability depends on your arrival time, hotel, luggage size and service conditions. The delivery charge is not included in my guide fee and is paid directly to the service provider." },
  { q: "Can you arrange a car, van, or hotel?", a: "No. I provide guiding services only. I do not arrange or book private cars, vans, hired vehicles, transport services, or hotel accommodation. We can use public transport or taxis during the tour, and guests pay the provider directly." },
  { q: "What is not included in the guide fee?", a: "Transport, luggage delivery, meals, entrance fees, taxi fares, and personal expenses are not included in the guide fee." },
  { q: "Can you customise the route and meet us at our hotel?", a: "Yes. The routes shown here are examples. I can adjust the final route to your interests, walking pace, group, weather, and meeting area. A hotel can usually be used as the meeting point when practical, but I do not arrange accommodation." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kyoto Private Guide",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#don-tanaka`,
      name: "Don Tanaka",
      url: siteUrl,
      jobTitle: "National Government Licensed Guide Interpreter",
      homeLocation: { "@type": "City", name: "Kyoto" },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#private-kyoto-guide-service`,
      name: "Private Kyoto Guide Service",
      serviceType: "Private tour guiding in Kyoto",
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#don-tanaka` },
      areaServed: { "@type": "City", name: "Kyoto" },
      description: "Private half-day and full-day Kyoto guiding with custom route planning, including a Kyoto Station Arrival Tour for Shinkansen travellers.",
      offers: [
        {
          "@type": "Offer",
          name: "Half Day Private Kyoto Guide",
          price: "40000",
          priceCurrency: "JPY",
          url: `${siteUrl}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Full Day Private Kyoto Guide",
          price: "80000",
          priceCurrency: "JPY",
          url: `${siteUrl}/#pricing`,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kyoto Private Guide home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Don Tanaka</small></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#pricing">Rates</a><a href="#feedback">Guest feedback</a><a href="#routes">Routes</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a href="/japanese-guide" lang="ja">日本語ガイド</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Weekend private guide in Kyoto</p>
          <h1>Kyoto made simple, calm, and personal.</h1>
          <p className="hero-text">I am Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. I plan calm private Kyoto tours for couples, families, senior travellers and first-time visitors, mainly on Saturdays, Sundays, and Japanese public holidays. Arriving by Shinkansen? I can meet you at Kyoto Station and your tour can start there.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#contact">Send an enquiry</a><a className="btn btn-secondary" href="#routes">See tour ideas</a></div>
          <div className="badge-row" aria-label="Key service details"><span>From ¥40,000</span><span>Weekends & public holidays</span><span>Kyoto Station arrival option</span><span>Kyoto-born licensed guide</span></div>
        </div>
        <div className="hero-image-wrap"><img src="/kyoto-hero.jpg" alt="Kyoto street view with Yasaka Pagoda" className="hero-image" fetchPriority="high" /></div>
      </section>

      <section className="content-section pricing-section" id="pricing">
        <div className="section-head"><p className="section-kicker">Guide fee</p><h2>Price first — clear and simple</h2><p className="section-intro">Rates are per guide, not per person. The Kyoto Station Arrival Tour uses exactly the same guide rates.</p></div>
        <div className="pricing-grid">
          <article className="price-card"><h3>Half Day</h3><div className="price">¥40,000</div><p>Up to 4 hours</p></article>
          <article className="price-card featured"><div className="price-badge">Most requested</div><h3>Full Day</h3><div className="price">¥80,000</div><p>Up to 8 hours</p></article>
          <article className="price-card"><h3>Extra Hour</h3><div className="price">¥10,000</div><p>Per additional hour</p></article>
        </div>
        <div className="service-grid">
          <article className="info-card"><h3>Mainly weekends</h3><p>Regular guiding is mainly on Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available.</p></article>
          <article className="info-card"><h3>Guiding only</h3><p>I provide private guide services only. I do not arrange or book hotels, private cars, vans, hired vehicles, or transportation services.</p></article>
          <article className="info-card"><h3>Other costs</h3><p>Transport, luggage delivery, meals, entrance fees, taxi fares, and personal expenses are paid separately by the guests.</p></article>
        </div>
        <p className="pricing-note">Public transport and taxis may be used during the tour, but guests book or pay the transport provider directly.</p>
      </section>

      <section className="content-section" id="feedback">
        <div className="section-head"><p className="section-kicker">Guest feedback</p><h2>What guests value about the experience</h2></div>
        <div className="guest-grid">{guestFeedback.map((text) => <article className="guest-card" key={text}><p className="guest-text">{text}</p></article>)}</div>
        <p className="section-note">Recurring feedback themes from guests.</p>

        <article className="recent-experience-card" aria-label="Recent guest experience">
          <div className="recent-experience-image-wrap">
            <img src="/recent-guests-austria.jpg" alt="Don Tanaka with recent guests from Austria after a private Kyoto tour" className="recent-experience-image" loading="lazy" decoding="async" />
          </div>
          <div className="recent-experience-copy">
            <p className="section-kicker">Recent guest experience</p>
            <h3>Four hours across Kyoto with guests from Austria</h3>
            <p>Fushimi Inari · Arashiyama Bamboo Grove · Tenryu-ji · Nijo Castle</p>
            <p>A real recent guiding day, shared with permission from the guests.</p>
          </div>
        </article>
      </section>

      <section className="content-section" id="routes">
        <div className="section-head route-section-head">
          <p className="section-kicker">Private Kyoto tour ideas</p>
          <h2>Seven useful starting points — then we adjust them to you</h2>
          <p className="section-intro">A private tour is easier to picture when you can see a real route. These are practical examples, not fixed packages. I adjust the final plan to your interests, hotel area, walking pace, weather and crowds.</p>
        </div>
        <div className="kyoto-icon-grid" aria-label="Iconic Kyoto views">
          <figure className="kyoto-icon-card">
            <Image src="/kyoto/fushimi-inari.jpg" alt="Vermilion torii gates at Fushimi Inari Shrine in Kyoto" width={2832} height={1888} sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption><strong>Fushimi Inari</strong><span>Thousands of vermilion torii gates — one of Kyoto’s most recognisable sights.</span></figcaption>
          </figure>
          <figure className="kyoto-icon-card">
            <Image src="/kyoto/nijo-castle.jpg" alt="Historic Nijo Castle in Kyoto" width={4080} height={3072} sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption><strong>Nijo Castle</strong><span>Shogun history in the heart of Kyoto.</span></figcaption>
          </figure>
        </div>
        <div className="route-grid">{routes.map((item, index) => <article className="route-card" key={item.title}><span className="route-number">0{index + 1}</span><h3>{item.title}</h3><p className="route-time">{item.time}</p><p className="route-best-for"><strong>Best for:</strong> {item.bestFor}</p><p className="route-flow">{item.route}</p><p>{item.text}</p></article>)}</div>
        <p className="section-note">Think of each as a sample route, not a final reservation. The final plan depends on your group, meeting area, walking pace, weather, crowds, and opening conditions. Same-day luggage delivery is provided by a third party and is subject to that provider's eligibility and operating conditions.</p>
        <div className="route-cta"><div><strong>See something close to what you want?</strong><span>Choose a route in the enquiry form, or simply select “Not sure yet.”</span></div><a className="btn btn-primary" href="#contact">Ask me to adjust a route</a></div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head"><p className="section-kicker">About your guide</p><h2>Hello, I’m Don Tanaka</h2></div>
        <div className="about-grid"><div className="about-photo-card"><img src="/don.jpg" alt="Don Tanaka, private guide in Kyoto" className="about-photo" loading="lazy" decoding="async" /></div><div className="about-copy"><p>I was born and raised in Kyoto and I am a National Government Licensed Guide Interpreter. I have many years of international experience supporting visitors from overseas.</p><p>My guiding style is calm and practical. I prefer a comfortable day with enough time to understand Kyoto rather than rushing through a long checklist of places.</p><p>I personally handle enquiries and normally guide the tour myself. Families, senior travellers, first-time visitors, and mixed-age groups are especially welcome.</p></div></div>
      </section>

      <section className="content-section" id="faq">
        <div className="section-head compact-head"><p className="section-kicker">FAQ</p><h2>The questions I receive most often</h2></div>
        <FaqList items={faqItems} />
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head compact-head"><p className="section-kicker">Contact</p><h2>Check a weekend date</h2><p className="section-intro">You do not need a finished itinerary before contacting me. A date and rough idea are enough.</p></div>
        <div className="contact-card"><p className="contact-lead">Send your preferred Saturday, Sunday, or Japanese public-holiday date, group size, meeting area, and the kind of Kyoto experience you want. If you are arriving by Shinkansen, select “Kyoto Station Arrival Tour” and tell me your train or approximate arrival time.</p>
          <form action={formAction} method="POST" className="contact-form"><input type="hidden" name="_subject" value="Kyoto Private Guide Enquiry" /><input type="hidden" name="source" value={siteUrl} />
            <div className="form-grid"><div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" autoComplete="name" required /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="preferred-date">Preferred date</label><input id="preferred-date" name="preferred_date" type="text" placeholder="Saturday, Sunday, or public holiday" required /></div><div className="form-field"><label htmlFor="group-size">Group size</label><input id="group-size" name="group_size" type="text" inputMode="numeric" /></div><div className="form-field"><label htmlFor="route-interest">Route idea</label><select id="route-interest" name="route_interest" defaultValue="Not sure yet"><option>Not sure yet</option>{routes.map((route) => <option key={route.title}>{route.title}</option>)}</select></div><div className="form-field"><label htmlFor="meeting-area">Meeting area / hotel name</label><input id="meeting-area" name="meeting_area" type="text" placeholder="Kyoto Station, hotel name, etc." /></div><div className="form-field"><label htmlFor="tour-length">Preferred length</label><select id="tour-length" name="tour_length" defaultValue="Half day / 4 hours"><option>Half day / 4 hours</option><option>Full day / 8 hours</option><option>Not sure yet</option></select></div></div>
            <div className="form-field form-field-full"><label htmlFor="interests">Places or interests</label><input id="interests" name="places_or_interests" type="text" placeholder="Gion, Fushimi Inari, history, food, family trip, etc." /></div>
            <div className="form-field form-field-full"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={4} required placeholder="Please tell me your rough plan, walking pace, Shinkansen arrival time, or any questions." /></div>
            <div className="contact-actions contact-actions-form"><button className="btn btn-primary" type="submit">Send enquiry</button><a className="btn btn-secondary" href={mailto}>Email directly</a></div>
          </form><p className="contact-direct-note">Sending this form is an enquiry only. It does not create a reservation.</p></div>
      </section>

      <footer className="site-footer"><p><strong>Don Tanaka | Kyoto Private Guide</strong></p><p>Private guiding mainly on weekends and Japanese public holidays.</p></footer>
    </main>
  );
}
