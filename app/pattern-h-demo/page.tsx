import type { Metadata } from 'next';
import styles from './pattern-h-demo.module.css';

export const metadata: Metadata = {
  title: 'Uma Academia — Pattern H Demo',
  description: 'Isolated Pattern H editorial demo using the current Uma Academia service content. Not the live production homepage.',
  robots: { index: false, follow: false },
};

const photos = {
  hero: '/kyoto-hero.jpg',
  guests: '/recent-guests-austria.jpg',
  don: '/don.jpg',
  fushimi: '/kyoto/fushimi-inari.jpg',
  nijo: '/kyoto/nijo-castle.jpg',
  lane: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=85',
  garden: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1400&q=85',
  tea: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=1100&q=85',
  food: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1100&q=85',
  autumn: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1500&q=85',
  shrine: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1400&q=85',
  alley: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1400&q=85',
};

const routes = [
  { kicker: '01 / FIRST-TIME KYOTO', title: 'First-Time Kyoto Half Day', time: 'Up to 4 hours · ¥40,000', bestFor: 'First-time visitors who want classic Kyoto without feeling rushed.', flow: 'Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion', text: 'I guide you through the main sights, explain what you are seeing, help with practical navigation, and adjust the pace as we go. Morning or afternoon both work well.', image: photos.lane },
  { kicker: '02 / KYOTO HIGHLIGHTS', title: 'Kyoto Highlights Full Day', time: 'Up to 8 hours · ¥80,000', bestFor: 'Guests who want several major Kyoto sights in one balanced day.', flow: 'Fushimi Inari → Sanjusangendo → lunch → Kiyomizu-dera / Higashiyama → Gion', text: 'A full private day with major sights, context, lunch, transport decisions and practical breaks built into the plan rather than racing through a checklist.', image: photos.fushimi },
  { kicker: '03 / HISTORY', title: 'Nijo Castle & Kyoto History', time: 'About 4–6 hours · ¥10,000/hour', bestFor: 'Guests interested in shogun history, architecture, gardens and cultural background.', flow: 'Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto', text: 'I connect the buildings and places to Kyoto history in plain English, point out details that are easy to miss, and shape the route around your level of interest.', image: photos.nijo },
  { kicker: '04 / ZEN & NORTHWEST', title: 'Ryoan-ji & Northwest Kyoto', time: 'About 4–5 hours · ¥10,000/hour', bestFor: 'Guests who enjoy Zen, gardens and a quieter side of Kyoto.', flow: 'Ryoan-ji → Kinkaku-ji → Kitano Tenmangu or a local lunch / tea stop', text: 'A slower route with very different temple experiences. I help you understand the cultural background while keeping walking, transfers and crowds manageable.', image: photos.garden },
  { kicker: '05 / FAMILY', title: 'Family-Friendly Kyoto Day', time: 'About 5–7 hours · ¥10,000/hour', bestFor: 'Families with children or teenagers who want variety, photos, food and culture.', flow: 'Fushimi Inari → lunch or Nishiki area → Yasaka Shrine / Gion → sweets or matcha stop', text: 'The route stays flexible. We can shorten explanations, add food and photo stops, change the order, or take a taxi if the family needs a break.', image: photos.shrine },
  { kicker: '06 / COMFORT', title: 'Comfortable Kyoto for Senior Travellers', time: 'About 5–7 hours · ¥10,000/hour', bestFor: 'Senior travellers and couples who prefer shorter walks, more breaks and optional taxis.', flow: 'Sanjusangendo → Nijo Castle → relaxed lunch or tea → Kyoto Gyoen or Gion', text: 'The goal is a comfortable Kyoto day, not the maximum number of stops. I can reduce stairs and long walks, use taxis when useful, and leave time to sit down.', image: photos.alley },
];

const feedback = [
  'Clear explanations without too much information at once.',
  'A comfortable pace with practical breaks when needed.',
  'Simple planning that makes Kyoto easier for first-time visitors.',
];

const faqs = [
  ['When are you available?', 'Regular guiding is mainly on Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available.'],
  ['How much is the guide fee?', '¥10,000 per hour. Half day: up to 4 hours / ¥40,000. Full day: up to 8 hours / ¥80,000. The fee is per guide, not per person.'],
  ['What exactly do you do?', 'I plan a practical route with you, meet you at an agreed location such as your hotel when practical, guide you through Kyoto, explain the history and culture, help with navigation and transport decisions, and adjust the route during the day for pace, weather and crowds.'],
  ['Can you arrange a car, van, or hotel?', 'No. Uma Academia provides guiding services only. Public transport or taxis may be used, and guests pay the transport provider directly.'],
  ['What is not included?', 'Transport, meals, entrance fees, taxi fares, and personal expenses are separate from the guide fee.'],
  ['Can the route be customised?', 'Yes. Sample routes are starting points. The final plan can be adjusted to interests, walking pace, group, weather, crowds, and meeting area.'],
];

export default function PatternHDemo() {
  return (
    <main className={styles.page}>
      <div className={styles.demoBar}>PATTERN H DEMO — current Uma Academia content, new editorial design — production site unchanged</div>

      <header className={styles.header}>
        <a href="#top" className={styles.brand}>UMA ACADEMIA</a>
        <nav aria-label="Demo navigation" className={styles.nav}>
          <a href="#service">Service</a><a href="#rates">Rates</a><a href="#experience">Routes</a><a href="#guide">Guide</a><a href="#faq">FAQ</a><a href="#enquire">Enquire</a>
        </nav>
        <div className={styles.lang}><span>EN</span><a className={styles.langMuted} href="/japanese-guide">JP</a></div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Private Kyoto guide · weekends & public holidays</p>
          <h1>See Kyoto.<br/><em>With someone</em><br/>who knows it.</h1>
          <p className={styles.lead}>I am Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. I plan and personally guide private Kyoto days for couples, families, senior travellers and first-time visitors.</p>
          <div className={styles.heroActions}><a href="#experience" className={styles.primary}>See real route ideas</a><a href="#enquire" className={styles.textLink}>Check a date →</a></div>
        </div>
        <div className={styles.heroVisual}><img src={photos.hero} alt="Kyoto street view with Yasaka Pagoda" /></div>
        <div className={styles.verticalWord}>KYOTO / PRIVATE / LOCAL / PERSONAL</div>
      </section>

      <section id="service" className={styles.statement}>
        <p className={styles.sectionNo}>01</p>
        <h2>So, what do I<br/>actually do?</h2>
        <div>
          <p className={styles.bigText}>I help you turn “we want to see Kyoto” into a practical day that works.</p>
          <div className={styles.facts}>
            <div><span>BEFORE THE DAY</span><strong>We discuss your date, group, interests, hotel or meeting area, preferred length and any mobility or pacing needs.</strong></div>
            <div><span>ROUTE PLANNING</span><strong>I suggest a realistic route using your priorities, opening conditions, geography, likely crowds and transport.</strong></div>
            <div><span>ON THE DAY</span><strong>I meet you at the agreed place, guide the route, explain the history and culture, help with navigation, and keep the day moving comfortably.</strong></div>
            <div><span>FLEXIBILITY</span><strong>If you are tired, the weather changes or a place is crowded, we can shorten, reorder, take a taxi, stop for lunch or change direction.</strong></div>
            <div><span>WHAT I DO NOT SELL</span><strong>No hotel package, no private-car package, no compulsory shopping stop. This is a private guiding service.</strong></div>
          </div>
        </div>
      </section>

      <section id="rates" className={styles.statement}>
        <p className={styles.sectionNo}>02</p>
        <h2>Price first.<br/>Clear and simple.</h2>
        <div>
          <p className={styles.bigText}>Rates are per guide, not per person.</p>
          <div className={styles.facts}>
            <div><span>HALF DAY</span><strong>¥40,000 · up to 4 hours</strong></div>
            <div><span>FULL DAY</span><strong>¥80,000 · up to 8 hours</strong></div>
            <div><span>EXTRA HOUR</span><strong>¥10,000 · per additional hour</strong></div>
            <div><span>REGULAR DAYS</span><strong>Mainly Saturdays, Sundays & Japanese public holidays</strong></div>
            <div><span>NOT INCLUDED</span><strong>Transport, meals, entrance fees, taxi fares and personal expenses</strong></div>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.experiences}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Concrete private Kyoto tour ideas</p><h2>Choose the day you can picture.</h2><p className={styles.lead}>These are not rigid packages. They show what a day with me can actually look like — places, time, pace and price included.</p></div>
        {routes.map((route) => (
          <article className={styles.route} key={route.title}>
            <div className={styles.routeImage}><img src={route.image} alt="Kyoto experience" /></div>
            <div className={styles.routeCopy}>
              <p className={styles.kicker}>{route.kicker}</p>
              <h3>{route.title}</h3>
              <p><strong>{route.time}</strong></p>
              <p><strong>Best for:</strong> {route.bestFor}</p>
              <p><strong>Example route:</strong> {route.flow}</p>
              <p>{route.text}</p>
              <a href="#enquire">Ask about this route →</a>
            </div>
          </article>
        ))}
      </section>

      <section id="story" className={styles.photoStory}>
        <div className={styles.storyIntro}><p className={styles.eyebrow}>A real recent guiding day</p><h2>Four hours across Kyoto.</h2><p>Guests from Austria visited Fushimi Inari, Arashiyama Bamboo Grove, Tenryu-ji and Nijo Castle. This is an actual recent guiding day already published on the live site, shared with permission.</p></div>
        <div className={styles.mosaic}>
          <figure className={styles.m1}><img src={photos.guests} alt="Don Tanaka with recent guests from Austria after a private Kyoto tour" /></figure>
          <figure className={styles.m2}><img src={photos.fushimi} alt="Fushimi Inari torii gates" /></figure>
          <figure className={styles.m3}><img src={photos.nijo} alt="Nijo Castle" /></figure>
          <figure className={styles.m4}><img src={photos.alley} alt="Quiet Kyoto alley" /></figure>
        </div>
      </section>

      <section className={styles.fullBleed}>
        <img src={photos.autumn} alt="Autumn scenery in Japan" />
        <div className={styles.fullBleedCopy}><span>PACE / CONTEXT / FLEXIBILITY</span><h2>See the sights.<br/>Understand what you are seeing.</h2></div>
      </section>

      <section id="guide" className={styles.guide}>
        <div className={styles.guideTitle}><p className={styles.sectionNo}>05</p><h2>Hello,<br/>I’m Don Tanaka.</h2><div className={styles.routeImage}><img src={photos.don} alt="Don Tanaka, private guide in Kyoto" /></div></div>
        <div className={styles.guideBody}>
          <p className={styles.bigText}>I was born and raised in Kyoto and I am a National Government Licensed Guide Interpreter. I have many years of international experience supporting visitors from overseas.</p>
          <p className={styles.lead}>My guiding style is calm and practical. I prefer a comfortable day with enough time to understand Kyoto rather than rushing through a long checklist. I personally handle enquiries and normally guide the tour myself.</p>
          <div className={styles.facts}>
            <div><span>STYLE</span><strong>Private · calm · practical · flexible</strong></div>
            <div><span>GOOD FIT FOR</span><strong>Couples · families · senior travellers · first-time visitors · mixed-age groups</strong></div>
            <div><span>TRANSPORT</span><strong>Public transport and guest-paid taxis may be used during the tour</strong></div>
            <div><span>MEETING</span><strong>A hotel or another practical location can usually be used as the meeting point</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.feedback}>
        <p className={styles.eyebrow}>What guests value</p>
        <h2>Clear explanations.<br/>A comfortable pace.<br/>Local Kyoto insight.</h2>
        <div className={styles.how}>{feedback.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        <p className={styles.note}>Recurring themes from guest feedback already used on the current Uma Academia site.</p>
      </section>

      <section id="faq" className={styles.photoStory}>
        <div className={styles.storyIntro}><p className={styles.eyebrow}>FAQ</p><h2>Before you send an enquiry.</h2><p>The practical details matter. The aim is that you know the service, the price and the boundaries before contacting me.</p></div>
        <div className={styles.facts}>{faqs.map(([q,a]) => <div key={q}><span>{q}</span><strong>{a}</strong></div>)}</div>
      </section>

      <section className={styles.how}>
        <div><span>01</span><h3>Tell me your date</h3><p>Send your preferred date, group size, hotel or meeting area, and rough interests.</p></div>
        <div><span>02</span><h3>I help shape the day</h3><p>Choose one of the six routes or tell me what you want to see. You do not need to design the itinerary yourself.</p></div>
        <div><span>03</span><h3>We walk Kyoto together</h3><p>I guide, explain, navigate and adjust the day as needed for pace, weather and crowds.</p></div>
      </section>

      <section id="enquire" className={styles.enquire}>
        <div><p className={styles.eyebrow}>Check a date</p><h2>Tell me when<br/>you’ll be in Kyoto.</h2></div>
        <div className={styles.enquirePanel}>
          <p>You do not need a finished itinerary. A date, group size and a few interests are enough. If one of the six example routes looks close, mention it and I can adjust it.</p>
          <a className={styles.primaryLight} href="https://www.umaacademia.com/#contact">Use the current enquiry form</a>
          <a className={styles.textLink} href="mailto:eltontanaka@gmail.com?subject=Kyoto%20Private%20Guide%20Enquiry">Email directly →</a>
          <p className={styles.small}>Sending an enquiry does not create or confirm a reservation. This Pattern H page remains a visual demo; the live enquiry system is unchanged.</p>
        </div>
      </section>

      <footer className={styles.footer}><strong>UMA ACADEMIA</strong><span>Kyoto Private Guide · Don Tanaka</span><span>Pattern H demo · production unchanged</span></footer>
    </main>
  );
}
