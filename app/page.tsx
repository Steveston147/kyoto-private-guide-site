// FILE: page.tsx
// PATH: app/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("Kyoto Private Guide Enquiry")}`;
const formAction = "https://formspree.io/f/mykdbwbl";

const whyItems = [
  {
    title: "Licensed and reliable",
    text: "I am a licensed guide in Japan, and I value clear communication, punctuality, and a calm, professional approach.",
  },
  {
    title: "Deep Kyoto knowledge",
    text: "I was born and raised in Kyoto. I can guide you through famous places and also quieter areas with local meaning.",
  },
  {
    title: "University and international experience",
    text: "I have long experience in international education and cross-cultural support, so I understand practical needs as well as sightseeing.",
  },
  {
    title: "Flexible support",
    text: "We can adjust the pace, route, transport, and rest breaks for families, senior travellers, academic visitors, and media needs.",
  },
];

const whoItems = [
  "First-time visitors to Kyoto",
  "Families with children",
  "Senior travellers who prefer a slower pace",
  "Guests who want a calm and personal day",
];

const guideItems = [
  {
    name: "Don Tanaka",
    role: "Main guide",
    text: "Born and raised in Kyoto, Don is a licensed guide known for his calm and reliable approach. He personally handles tours whenever available and is the first point of contact for bookings.\n\nHe spent over 20 years in Vancouver, where he also worked as a guide, building strong international experience.\n\nAs a father of two daughters, he understands the importance of flexibility, comfort, and thoughtful pacing for families and senior travellers.",
  },
  {
    name: "Mai",
    role: "Guide by enquiry",
    text: "Kyoto-born and educated at a well-known university in Kyoto. She has rich international experience and strong university teaching experience, and works fluently in both American English and Japanese.\n\nShe may be arranged by enquiry, especially when Don is unavailable. She can also support interviews for TV, magazines, and other media.",
  },
];

const guestItems = [
  {
    img: "/guests/guest01.jpg",
    text: "Don was kind, knowledgeable, and very easy to talk to.",
  },
  {
    img: "/guests/guest02.jpg",
    text: "We felt relaxed and well looked after throughout the day.",
  },
  {
    img: "/guests/guest03.jpg",
    text: "He made Kyoto easy to enjoy, even for first-time visitors.",
  },
  {
    img: "/guests/guest04.jpg",
    text: "Don was flexible, thoughtful, and very professional.",
  },
  {
    img: "/guests/guest05.jpg",
    text: "Our family had a wonderful and comfortable day.",
  },
  {
    img: "/guests/guest06.jpg",
    text: "We would happily recommend Don to anyone visiting Kyoto.",
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
    text: "Traditional Kyoto streets, quieter corners, and easy cultural atmosphere.",
  },
  {
    img: "/kyoto/nijo-castle.jpg",
    title: "Nijo Castle",
    text: "A good option for guests interested in history, architecture, and a slower visit.",
  },
];

const tourItems = [
  {
    title: "Kyoto highlights",
    text: "A classic day covering major Kyoto sights at a comfortable pace.",
  },
  {
    title: "Beyond Kyoto",
    text: "Day trips or custom routes in nearby areas such as Osaka or Nara.",
  },
  {
    title: "Families",
    text: "Easy-going tours with flexible timing, breaks, and child-friendly planning.",
  },
  {
    title: "Senior travellers",
    text: "Slow-paced guiding with more rest stops and simple transport choices.",
  },
  {
    title: "Students and academic groups",
    text: "Support for educational visits, cultural learning, and university-related travel.",
  },
  {
    title: "Media and special visits",
    text: "Support for interviews, filming-related visits, and guests who need bilingual communication.",
  },
];

const sampleCourses = [
  {
    title: "Kyoto Highlights Full Day",
    text: "A balanced full-day route for first-time visitors who want the essential Kyoto experience.",
  },
  {
    title: "Arashiyama Nature and Culture Day",
    text: "A day with bamboo grove areas, riverside views, temples, and a slower rhythm.",
  },
  {
    title: "Family or Senior-Friendly Kyoto Day",
    text: "A gentle plan with shorter walks, more breaks, and flexible transport.",
  },
];

const processItems = [
  {
    step: "1",
    title: "Send me a message",
    text: "Tell me your date, group size, and what kind of day you hope to have.",
  },
  {
    step: "2",
    title: "I suggest a simple plan",
    text: "I will reply with an idea that matches your pace, interests, and practical needs.",
  },
  {
    step: "3",
    title: "We adjust together",
    text: "We can fine-tune the route, transport, breaks, and lunch plan before the day.",
  },
  {
    step: "4",
    title: "Enjoy Kyoto with confidence",
    text: "On the day, I guide calmly and clearly so you can focus on enjoying the experience.",
  },
];

const faqItems = [
  {
    q: "Can you customise the tour?",
    a: "Yes. I can adjust the route based on your interests, pace, age group, and travel style.",
  },
  {
    q: "Are your tours good for families or senior travellers?",
    a: "Yes. I often plan tours with slower walking, more breaks, and easy transport options.",
  },
  {
    q: "How do we get around?",
    a: "We can walk, use taxis, or use public transport depending on your comfort, budget, and destination.",
  },
  {
    q: "Can you help with lunch?",
    a: "Yes. I can suggest simple local options and help choose a place that fits your preferences.",
  },
  {
    q: "Do you guide outside Kyoto?",
    a: "Yes. I can also arrange guiding for nearby areas such as Osaka or Nara depending on the plan.",
  },
  {
    q: "Who will guide us?",
    a: "Don is the main guide. If Don is not available, Mai may be arranged by enquiry depending on the date and type of visit.",
  },
  {
    q: "Are weekdays available?",
    a: "Weekends and Japanese public holidays are easier to accept. For weekdays, please send an enquiry first.",
  },
  {
    q: "Where do we meet?",
    a: "This depends on your hotel, station access, and the route. I usually suggest a simple and practical meeting point.",
  },
  {
    q: "What happens if it rains?",
    a: "Kyoto can still be enjoyable in light rain. I can adjust the plan, transport, or indoor balance if needed.",
  },
  {
    q: "How much walking is involved?",
    a: "That depends on the route, but I can reduce walking, add taxi use, and plan more breaks if needed.",
  },
  {
    q: "Can children join?",
    a: "Yes. I can make the day easier for children with more flexible timing and a lighter pace.",
  },
  {
    q: "How should I contact you?",
    a: "You can use the contact form or email me directly. Please tell me your date, group size, and what kind of day you want.",
  },
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

export default function Page() {
  const [today, setToday] = useState<Date | null>(null);
  const [windowOffset, setWindowOffset] = useState(0);

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

  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Don Tanaka home">
          <div className="brand-title">Kyoto Guide Service</div>
          <div className="brand-subtitle">Kyoto Private Guide</div>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#guides">Guides</a>
          <a href="#guests">Guests</a>
          <a href="#availability">Availability</a>
          <a href="#tours">Tours</a>
          <a href="#kyoto-scenes">Kyoto</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Kyoto-born and Kyoto-raised</p>
          <h1>
            Not rushed.
            <br />
            Not confusing.
            <br />
            Just a calm Kyoto day with a guide you can trust.
          </h1>
          <p className="hero-text">
            I guide families, senior travellers, students, and visitors who want a relaxed and
            meaningful day in Kyoto. My style is simple: clear communication, a comfortable pace,
            and a plan that feels personal.
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
            <span>Kyoto-born and Kyoto-raised</span>
            <span>10+ years of guiding in Japan</span>
            <span>Canada-related experience</span>
            <span>Senior-friendly and family-friendly</span>
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
          <p className="section-kicker">Why guide with us</p>
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
              alt="Don Tanaka in traditional Japanese clothing"
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
              I also have many years of Canada-related experience, and I have worked in
              international education at a university. Because of that background, I am used to
              supporting guests from overseas in a practical and thoughtful way.
            </p>
            <p>
              I am a father of two daughters, and I also have an elderly mother. This has made me
              especially aware of how important pace, rest, and comfort can be for family groups
              and senior travellers.
            </p>
            <p>
              My goal is simple: to help you enjoy Kyoto with confidence, without stress, and in a
              way that feels personal.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" id="guides">
        <div className="section-head">
          <p className="section-kicker">Guides</p>
          <h2>Don first, with Mai available by enquiry</h2>
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
          Don is the main guide for bookings. If Don is not available, Mai may be arranged
          depending on the date and your needs.
        </p>
      </section>

      <section className="content-section" id="guests">
        <div className="section-head">
          <p className="section-kicker">Guests</p>
          <h2>Guest Photos & Kind Words</h2>
        </div>

        <div className="guest-grid">
          {guestItems.map((item, i) => (
            <article className="guest-card" key={i}>
              <div className="guest-image-wrap">
                <img
                  src={item.img}
                  alt="Guest experience in Kyoto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
              Final availability depends on the date, group type, and guide schedule. Mai is
              arranged on an enquiry basis.
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
          <p className="section-kicker">Tours and Areas</p>
          <h2>Flexible guiding for different travellers</h2>
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

      <section className="content-section">
        <div className="section-head">
          <p className="section-kicker">Sample Courses</p>
          <h2>Simple ideas for your day</h2>
        </div>

        <div className="card-grid three">
          {sampleCourses.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
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
            <div className="price">¥20,000</div>
            <p>Approx. US$135</p>
          </article>

          <article className="price-card featured">
            <div className="price-badge">Most requested</div>
            <h3>Full Day</h3>
            <div className="price">¥40,000</div>
            <p>Approx. US$270</p>
          </article>

          <article className="price-card">
            <h3>Extra Hour</h3>
            <div className="price">¥5,000</div>
            <p>Approx. US$35</p>
          </article>
        </div>

        <p className="pricing-note">
          Transport, meals, entrance fees, and personal expenses are not included unless agreed in
          advance.
        </p>
      </section>

      <section className="content-section" id="faq">
        <div className="section-head">
          <p className="section-kicker">FAQ</p>
          <h2>Questions guests often ask</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head">
          <p className="section-kicker">Contact</p>
          <h2>Let’s plan your Kyoto day</h2>
        </div>

        <div className="contact-card">
          <p>
            Please send me a short message with your travel date, group size, and what kind of
            tour you are hoping for.
          </p>

          <div className="contact-points">
            <span>Date</span>
            <span>Group size</span>
            <span>Kyoto only or beyond Kyoto</span>
            <span>Family or senior-friendly needs</span>
            <span>Weekend/holiday or weekday</span>
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
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required />
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
        <p>Personal guiding in Kyoto with a calm and flexible approach.</p>
      </footer>
    </main>
  );
}