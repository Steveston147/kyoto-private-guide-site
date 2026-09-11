"use client";

import "./tours.css";
import { useMemo } from "react";

const formAction = "https://formspree.io/f/mykdbwbl";

const tourIdeas = [
  { title: "First-Time Kyoto", time: "4 hours", route: "Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion", image: "/kyoto/kiyomizu-dera.jpg" },
  { title: "Fushimi Inari & Higashiyama", time: "4–6 hours", route: "Fushimi Inari → Sanjusangendo → Kiyomizu-dera / Higashiyama → Gion", image: "/kyoto/fushimi-inari.jpg" },
  { title: "Arashiyama & Northwest Kyoto", time: "4–6 hours", route: "Arashiyama → Ryoan-ji → Kinkaku-ji", image: "/kyoto/arashiyama.jpg" },
];

const places = [
  ["Fushimi Inari", "/kyoto/fushimi-inari.jpg"],
  ["Kiyomizu-dera", "/kyoto/kiyomizu-dera.jpg"],
  ["Arashiyama", "/kyoto/arashiyama.jpg"],
  ["Kinkaku-ji", "/kyoto/kinkakuji.jpg"],
  ["Gion & Yasaka", "/kyoto/gion-yasaka.jpg"],
  ["Nijo Castle", "/kyoto/nijo-castle.jpg"],
];

const guestPhotos = [
  ["/recent-tour-arashiyama-couple.jpg", "Recent guests in Arashiyama"],
  ["/recent-tour-arashiyama-family.jpg", "A family day in Arashiyama"],
  ["/recent-tour-kiyomizudera-couple.jpg", "Recent guests at Kiyomizu-dera"],
  ["/recent-tour-kiyomizudera-family.jpg", "A family visit to Kiyomizu-dera"],
];

const jpHolidays2026 = new Set(["2026-09-21", "2026-09-22", "2026-09-23", "2026-10-12", "2026-11-03", "2026-11-23", "2027-01-01", "2027-01-11", "2027-02-11", "2027-02-23", "2027-03-20"]);

function pad(n: number) { return String(n).padStart(2, "0"); }
function monthData(offset: number) {
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const y = first.getFullYear();
  const m = first.getMonth();
  const start = first.getDay();
  const total = new Date(y, m + 1, 0).getDate();
  const cells: Array<{ day: number | null; weekend?: boolean; holiday?: boolean }> = [];
  for (let i = 0; i < start; i++) cells.push({ day: null });
  for (let d = 1; d <= total; d++) {
    const date = new Date(y, m, d);
    const key = `${y}-${pad(m + 1)}-${pad(d)}`;
    cells.push({ day: d, weekend: date.getDay() === 0 || date.getDay() === 6, holiday: jpHolidays2026.has(key) });
  }
  return { label: first.toLocaleString("en-US", { month: "long", year: "numeric" }), cells };
}

export default function ToursPage() {
  const calendars = useMemo(() => [monthData(0), monthData(1)], []);
  return (
    <main className="toursPage">
      <header className="tourHeader">
        <a href="/" className="tourBrand"><strong>Kyoto Private Guide</strong><span>Don Tanaka</span></a>
        <nav><a href="#rates">Rates</a><a href="#routes">Tours</a><a href="#arrival">Shinkansen</a><a href="#availability">Availability</a><a href="#planner">Plan your tour</a></nav>
      </header>

      <section className="tourHero">
        <img src="/kyoto-hero.jpg" alt="Kyoto street view with Yasaka Pagoda" />
        <div className="tourHeroShade" />
        <div className="tourHeroCopy"><p className="kicker light">PRIVATE KYOTO TOURS</p><h1>Kyoto, at your pace.</h1><p>A private day in Kyoto with a local licensed guide. Tell me what you want to see, how you like to travel, and I will help shape the route around you.</p><a className="pill primary" href="#planner">Plan your tour →</a></div>
      </section>

      <section className="tourSection donSection">
        <div className="donPhoto"><img src="/don.jpg" alt="Don Tanaka, private guide in Kyoto" /></div>
        <div className="donCopy"><p className="kicker">YOUR GUIDE</p><h2>Hi, I’m Don.</h2><p>I was born and raised in Kyoto and I am a National Government Licensed Guide Interpreter. This is a small personal guide service: you contact me directly, I plan the day with you, and I normally guide the tour myself.</p><p>I keep the service simple, flexible and personal rather than running fixed group packages.</p><div className="trustRow"><span>Kyoto-born</span><span>Licensed guide</span><span>Direct contact</span><span>Private groups</span></div></div>
      </section>

      <section id="rates" className="tourSection rateSection">
        <div className="sectionTitle"><p className="kicker">RATES & PAYMENT</p><h2>Clear from the start.</h2></div>
        <div className="rateCards"><article><small>PRIVATE TOUR</small><strong>¥40,000</strong><span>up to 4 hours</span></article><article><small>ADDITIONAL TIME</small><strong>¥10,000</strong><span>per hour</span></article><article><small>PAYMENT</small><strong>Cash</strong><span>on the day</span></article></div>
        <div className="rateNotes"><p><strong>No advance payment is required.</strong> Please pay the guide fee in cash on the day of the tour.</p><p>Transportation, meals, admission fees, taxi fares and personal expenses are separate.</p><p>Send me an enquiry and I will normally reply by the next day.</p></div>
      </section>

      <section id="routes" className="tourSection">
        <div className="sectionTitle"><p className="kicker">SAMPLE ITINERARIES</p><h2>Ideas, not fixed packages.</h2><p>Start with one of these and adjust it to your interests, pace, hotel location and season.</p></div>
        <div className="routeCards">{tourIdeas.map((tour) => <article key={tour.title}><img src={tour.image} alt={tour.title}/><div><small>{tour.time}</small><h3>{tour.title}</h3><p>{tour.route}</p></div></article>)}</div>
        <div className="midCta"><span>See something close to what you want?</span><a href="#planner">Choose it in the planner →</a></div>
      </section>

      <section id="arrival" className="arrivalSection">
        <div className="arrivalInner"><p className="kicker light">ARRIVING IN KYOTO BY SHINKANSEN</p><div className="arrivalIntro"><h2>Your Kyoto tour can start<br/>the moment you arrive.</h2><p>I can meet you at Kyoto Station when your Shinkansen arrives. Leave your luggage for same-day delivery when available, start exploring Kyoto together, and finish the tour at your hotel.</p></div>
          <div className="arrivalHero"><img src="/tours/shinkansen.jpg" alt="Shinkansen bullet train"/><div><strong>SHINKANSEN ARRIVAL</strong><span>Meet at Kyoto Station and start your tour from there.</span></div></div>
          <div className="arrivalSteps">
            <article><b>01</b><img src="/tours/shinkansen.jpg" alt="Shinkansen"/><h3>SHINKANSEN</h3><p>Arrive at Kyoto Station by bullet train.</p></article>
            <article><b>02</b><img src="/tours/arrival-greeting.jpg" alt="Don greeting guests beside a Shinkansen at Kyoto Station"/><h3>MEET AT KYOTO STATION</h3><p>I’ll meet you at the Shinkansen area when your train arrives.</p></article>
            <article><b>03</b><img src="/tours/randen-station.jpg" alt="Randen tram in Kyoto"/><h3>START YOUR KYOTO TOUR</h3><p>Explore Kyoto together by public transportation and on foot.</p></article>
            <article><b>04</b><img src="/kyoto/gion-yasaka.jpg" alt="Kyoto street"/><h3>FINISH AT YOUR HOTEL</h3><p>Finish sightseeing at your hotel and check in.</p></article>
          </div>
        </div>
      </section>

      <section className="tourSection">
        <div className="sectionTitle"><p className="kicker">RECENT GUESTS</p><h2>Real days in Kyoto.</h2><p>Recent guiding moments, shared with permission from the guests.</p></div>
        <div className="guestGrid">{guestPhotos.map(([src, alt]) => <figure key={src}><img src={src} alt={alt}/></figure>)}</div>
      </section>

      <section className="tourSection">
        <div className="sectionTitle"><p className="kicker">PLACES WE CAN VISIT</p><h2>Classic Kyoto, shaped around you.</h2></div>
        <div className="placeGrid">{places.map(([name, src]) => <figure key={name}><img src={src} alt={name}/><figcaption>{name}</figcaption></figure>)}</div>
      </section>

      <section id="availability" className="tourSection availabilitySection">
        <div className="sectionTitle"><p className="kicker">AVAILABILITY</p><h2>Weekends and public holidays are my main tour days.</h2><p>Weekdays are possible only by enquiry. This calendar shows my normal guiding pattern, not confirmed availability.</p></div>
        <div className="calendarGrid">{calendars.map((month) => <article className="calendar" key={month.label}><h3>{month.label}</h3><div className="weekdays">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <span key={d}>{d}</span>)}</div><div className="days">{month.cells.map((c, i) => <span key={i} className={c.day && (c.weekend || c.holiday) ? "tourDay" : c.day ? "weekday" : "empty"}>{c.day ?? ""}</span>)}</div></article>)}</div>
        <div className="calendarLegend"><span><i className="legendTour"/>Weekend / public holiday — tour day</span><span><i className="legendWeek"/>Weekday — please enquire</span></div>
      </section>

      <section id="planner" className="plannerSection">
        <div className="plannerIntro"><p className="kicker">PLAN YOUR TOUR</p><h2>Tell me what your Kyoto day looks like.</h2><p>You do not need a finished itinerary. Click anything that sounds right, add your date, and send it to me.</p></div>
        <form action={formAction} method="POST" className="planner"><input type="hidden" name="_subject" value="Kyoto Private Guide Tour Planner"/><input type="hidden" name="source" value="Tours page sample"/>
          <fieldset className="full"><legend>Sample route</legend><div className="compactChoices">{["First-Time Kyoto","Fushimi Inari & Higashiyama","Arashiyama & Northwest Kyoto","Not sure — Don, please suggest"].map(v => <label key={v}><input type="radio" name="sample_route" value={v}/><span>{v}</span></label>)}</div></fieldset>
          <fieldset className="full"><legend>Places you want to visit</legend><div className="compactChoices placesChoices">{["Fushimi Inari","Kiyomizu-dera","Gion","Nijo Castle","Kinkaku-ji","Arashiyama","Nishiki Market","Ryoan-ji","Sanjusangendo","Kyoto Gyoen"].map(v => <label key={v}><input type="checkbox" name="places" value={v}/><span>{v}</span></label>)}</div></fieldset>
          <div className="plannerColumns">
            <fieldset><legend>Your group</legend>{["Couple","Family","Senior travellers","Solo","Friends"].map(v => <label key={v}><input type="radio" name="group_type" value={v}/>{v}</label>)}</fieldset>
            <fieldset><legend>Walking pace</legend>{["Easy","Normal","Active","Not sure"].map(v => <label key={v}><input type="radio" name="walking_pace" value={v}/>{v}</label>)}</fieldset>
            <fieldset><legend>Tour length</legend>{["4 hours","6 hours","8 hours","Not sure"].map(v => <label key={v}><input type="radio" name="tour_length" value={v}/>{v}</label>)}</fieldset>
            <fieldset><legend>Transport</legend>{["Public transport","Walking","Taxi when useful","Please suggest"].map(v => <label key={v}><input type="checkbox" name="transport" value={v}/>{v}</label>)}</fieldset>
          </div>
          <fieldset className="full"><legend>What interests you?</legend><div className="compactChoices">{["History","Temples & shrines","Gardens","Food","Photography","Shopping","Local life","Tea & matcha","Traditional streets","Seasonal scenery"].map(v => <label key={v}><input type="checkbox" name="interests" value={v}/><span>{v}</span></label>)}</div></fieldset>
          <div className="plannerColumns two">
            <fieldset><legend>Food preferences</legend>{["No preference","Japanese food","Vegetarian","Halal-friendly","Allergies / restrictions"].map(v => <label key={v}><input type="checkbox" name="food_preferences" value={v}/>{v}</label>)}</fieldset>
            <fieldset><legend>Things to avoid</legend>{["Long walks","Lots of stairs","Crowds","Early starts","Nothing in particular"].map(v => <label key={v}><input type="checkbox" name="avoid" value={v}/>{v}</label>)}</fieldset>
          </div>
          <div className="textFields"><label>Name<input type="text" name="name" required/></label><label>Email<input type="email" name="email" required/></label><label>Preferred date<input type="text" name="preferred_date" placeholder="e.g. Saturday, October 17" required/></label><label>Group size<input type="text" name="group_size"/></label><label>Where are you visiting from?<input type="text" name="visiting_from" placeholder="United Kingdom, Canada, etc." required/></label><label>Hotel / meeting area<input type="text" name="meeting_area"/></label></div>
          <fieldset className="full"><legend>How did you find me?</legend><div className="compactChoices">{["ChatGPT / another AI","Google Search","Recommendation","Social media","Other"].map(v => <label key={v}><input type="radio" name="discovery_source" value={v}/><span>{v}</span></label>)}</div></fieldset>
          <label className="messageField">Anything else you want to do?<textarea name="message" rows={5} placeholder="Tell me anything important about your group or the kind of day you want."/></label>
          <div className="submitRow"><button type="submit">Send enquiry →</button><p>No advance payment. I normally reply by the next day.</p></div>
        </form>
      </section>

      <section className="finalCta"><p className="kicker light">PRIVATE KYOTO GUIDE</p><h2>Ready to plan your day?</h2><p>Four hours from ¥40,000. Pay in cash on the day. No advance payment required.</p><a className="pill primary" href="#planner">Plan your tour →</a></section>
      <footer className="tourFooter"><strong>Kyoto Private Guide — Don Tanaka</strong><span>Private guiding mainly on weekends and Japanese public holidays.</span></footer>
    </main>
  );
}
