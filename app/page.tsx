"use client";

import { useState } from "react";

const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("Kyoto Private Guide Enquiry")}`;
const formAction = "https://formspree.io/f/mykdbwbl";

const guestFeedback = [
  "Clear explanations without too much information at once.",
  "A comfortable pace with practical breaks when needed.",
  "Simple planning that makes Kyoto easier for first-time visitors.",
  "Calm communication before and during the tour.",
  "Local Kyoto insight beyond guidebook-level information.",
  "Flexible support for families, senior travellers, and mixed-age groups.",
];

const routes = [
  { title: "Classic Kyoto Half Day", time: "Up to 4 hours", route: "Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion", text: "A simple first-Kyoto route with temple views, old streets, and Gion atmosphere." },
  { title: "Kyoto Highlights Full Day", time: "Up to 8 hours", route: "Fushimi Inari → lunch → Kiyomizu-dera / Higashiyama → Gion", text: "A balanced full day for first-time visitors, with enough time for lunch and breaks." },
  { title: "Nijo Castle & Kyoto History", time: "About 4–6 hours", route: "Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto", text: "A calmer route for guests interested in history, architecture, and cultural background." },
];

const faqItems = [
  { q: "When are you available?", a: "My regular guiding days are mainly Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available." },
  { q: "How much is the guide fee?", a: "My rate is ¥10,000 per hour. A half day is up to 4 hours / ¥40,000, and a full day is up to 8 hours / ¥80,000. The fee is per guide, not per person." },
  { q: "Can you arrange a car, van, or hotel?", a: "No. I provide guiding services only. I do not arrange or book private cars, vans, hired vehicles, transport services, or hotel accommodation. We can use public transport or taxis during the tour, and guests pay the provider directly." },
  { q: "What is not included in the guide fee?", a: "Transport, meals, entrance fees, taxi fares, and personal expenses are not included in the guide fee." },
  { q: "Can you customise the route and meet us at our hotel?", a: "Yes. The routes shown here are examples. I can adjust the final route to your interests, walking pace, group, weather, and meeting area. A hotel can usually be used as the meeting point when practical, but I do not arrange accommodation." },
];

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kyoto Private Guide home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Don Tanaka</small></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#pricing">Rates</a><a href="#feedback">Guest feedback</a><a href="#routes">Routes</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Weekend private guide in Kyoto</p>
          <h1>Kyoto made simple, calm, and personal.</h1>
          <p className="hero-text">I am Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. I guide private groups mainly on Saturdays, Sundays, and Japanese public holidays.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#contact">Send an enquiry</a><a className="btn btn-secondary" href="#pricing">See guide fees</a></div>
          <div className="badge-row" aria-label="Key service details"><span>From ¥40,000</span><span>Weekends & public holidays</span><span>Guiding service only</span><span>Kyoto-born licensed guide</span></div>
        </div>
        <div className="hero-image-wrap"><img src="/kyoto-hero.jpg" alt="Kyoto street view with Yasaka Pagoda" className="hero-image" fetchPriority="high" /></div>
      </section>

      <section className="content-section pricing-section" id="pricing">
        <div className="section-head"><p className="section-kicker">Guide fee</p><h2>Price first — clear and simple</h2><p className="section-intro">Rates are per guide, not per person.</p></div>
        <div className="pricing-grid">
          <article className="price-card"><h3>Half Day</h3><div className="price">¥40,000</div><p>Up to 4 hours</p></article>
          <article className="price-card featured"><div className="price-badge">Most requested</div><h3>Full Day</h3><div className="price">¥80,000</div><p>Up to 8 hours</p></article>
          <article className="price-card"><h3>Extra Hour</h3><div className="price">¥10,000</div><p>Per additional hour</p></article>
        </div>
        <div className="service-grid">
          <article className="info-card"><h3>Mainly weekends</h3><p>Regular guiding is mainly on Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available.</p></article>
          <article className="info-card"><h3>Guiding only</h3><p>I provide private guide services only. I do not arrange or book hotels, private cars, vans, hired vehicles, or transportation services.</p></article>
          <article className="info-card"><h3>Other costs</h3><p>Transport, meals, entrance fees, taxi fares, and personal expenses are paid separately by the guests.</p></article>
        </div>
        <p className="pricing-note">Public transport and taxis may be used during the tour, but guests book or pay the transport provider directly.</p>
      </section>

      <section className="content-section" id="feedback">
        <div className="section-head"><p className="section-kicker">Guest feedback</p><h2>What guests value about the experience</h2></div>
        <div className="guest-grid">{guestFeedback.map((text) => <article className="guest-card" key={text}><p className="guest-text">{text}</p></article>)}</div>
        <p className="section-note">Recurring feedback themes from guests.</p>

        <article className="recent-experience-card" aria-label="Recent guest experience">
          <div className="recent-experience-image-wrap">
            <img src="/recent-guests-austria.jpg" alt="Don Tanaka with recent guests from Austria after a private Kyoto tour" className="recent-experience-image" loading="lazy" />
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
        <div className="section-head"><p className="section-kicker">Representative routes</p><h2>Three simple ideas — then we adjust</h2></div>
        <div className="kyoto-icon-grid" aria-label="Iconic Kyoto views">
          <figure className="kyoto-icon-card">
            <img src="/kyoto/fushimi-inari.jpg" alt="Vermilion torii gates at Fushimi Inari Shrine in Kyoto" loading="lazy" />
            <figcaption><strong>Fushimi Inari</strong><span>Thousands of vermilion torii gates — one of Kyoto’s most recognisable sights.</span></figcaption>
          </figure>
          <figure className="kyoto-icon-card">
            <img src="/kyoto/nijo-castle.jpg" alt="Historic Nijo Castle in Kyoto" loading="lazy" />
            <figcaption><strong>Nijo Castle</strong><span>Shogun history in the heart of Kyoto.</span></figcaption>
          </figure>
        </div>
        <div className="route-grid">{routes.map((item, index) => <article className="route-card" key={item.title}><span className="route-number">0{index + 1}</span><h3>{item.title}</h3><p className="route-time">{item.time}</p><p className="route-flow">{item.route}</p><p>{item.text}</p></article>)}</div>
        <p className="section-note">This is a sample route, not a final reservation. The final plan depends on your group, meeting area, walking pace, weather, crowds, and opening conditions.</p>
      </section>

      <section className="content-section" id="about">
        <div className="section-head"><p className="section-kicker">About your guide</p><h2>Hello, I’m Don Tanaka</h2></div>
        <div className="about-grid"><div className="about-photo-card"><img src="/don.jpg" alt="Don Tanaka, private guide in Kyoto" className="about-photo" /></div><div className="about-copy"><p>I was born and raised in Kyoto and I am a National Government Licensed Guide Interpreter. I have many years of international experience supporting visitors from overseas.</p><p>My guiding style is calm and practical. I prefer a comfortable day with enough time to understand Kyoto rather than rushing through a long checklist of places.</p><p>I personally handle enquiries and normally guide the tour myself. Families, senior travellers, first-time visitors, and mixed-age groups are especially welcome.</p></div></div>
      </section>

      <section className="content-section" id="faq">
        <div className="section-head compact-head"><p className="section-kicker">FAQ</p><h2>The questions I receive most often</h2></div>
        <div className="faq-list">{faqItems.map((item, index) => { const isOpen = openFaqIndex === index; const answerId = `faq-answer-${index}`; return <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}><button className="faq-button" type="button" onClick={() => setOpenFaqIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId}><span>{item.q}</span><span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span></button>{isOpen ? <p className="faq-answer" id={answerId}>{item.a}</p> : null}</article>; })}</div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head compact-head"><p className="section-kicker">Contact</p><h2>Check a weekend date</h2></div>
        <div className="contact-card"><p className="contact-lead">Send your preferred Saturday, Sunday, or Japanese public-holiday date, group size, meeting area, and the kind of Kyoto experience you want. A rough idea is enough.</p>
          <form action={formAction} method="POST" className="contact-form"><input type="hidden" name="_subject" value="Kyoto Private Guide Enquiry" />
            <div className="form-grid"><div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" autoComplete="name" required /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="preferred-date">Preferred date</label><input id="preferred-date" name="preferred_date" type="text" placeholder="Saturday, Sunday, or public holiday" required /></div><div className="form-field"><label htmlFor="group-size">Group size</label><input id="group-size" name="group_size" type="text" inputMode="numeric" /></div><div className="form-field"><label htmlFor="meeting-area">Meeting area / hotel name</label><input id="meeting-area" name="meeting_area" type="text" /></div><div className="form-field"><label htmlFor="tour-length">Preferred length</label><select id="tour-length" name="tour_length" defaultValue="Half day / 4 hours"><option>Half day / 4 hours</option><option>Full day / 8 hours</option><option>Not sure yet</option></select></div></div>
            <div className="form-field form-field-full"><label htmlFor="interests">Places or interests</label><input id="interests" name="places_or_interests" type="text" placeholder="Gion, Fushimi Inari, history, food, family trip, etc." /></div>
            <div className="form-field form-field-full"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={4} required placeholder="Please tell me your rough plan, walking pace, or any questions." /></div>
            <div className="contact-actions contact-actions-form"><button className="btn btn-primary" type="submit">Send enquiry</button><a className="btn btn-secondary" href={mailto}>Email directly</a></div>
          </form><p className="contact-direct-note">Sending this form is an enquiry only. It does not create a reservation.</p></div>
      </section>

      <footer className="site-footer"><p><strong>Don Tanaka | Kyoto Private Guide</strong></p><p>Private guiding mainly on weekends and Japanese public holidays.</p></footer>
    </main>
  );
}
