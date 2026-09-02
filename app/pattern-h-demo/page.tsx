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
  {
    kicker: '01 / FIRST-TIME KYOTO',
    title: 'First-Time Kyoto Half Day',
    time: 'Up to 4 hours',
    bestFor: 'First-time visitors who want classic Kyoto without feeling rushed.',
    flow: 'Kiyomizu-dera → Sannenzaka / Ninenzaka → Yasaka Shrine → Gion',
    text: 'A compact private Kyoto tour with temple views, traditional streets and Gion atmosphere. It works well in either the morning or afternoon.',
    image: photos.lane,
  },
  {
    kicker: '02 / KYOTO HIGHLIGHTS',
    title: 'Kyoto Highlights Full Day',
    time: 'Up to 8 hours',
    bestFor: 'Guests who want several major Kyoto sights in one balanced day.',
    flow: 'Fushimi Inari → Sanjusangendo → lunch → Kiyomizu-dera / Higashiyama → Gion',
    text: 'A full-day route that combines major sights with enough time for lunch, explanations and practical breaks instead of racing through a checklist.',
    image: photos.fushimi,
  },
  {
    kicker: '03 / HISTORY',
    title: 'Nijo Castle & Kyoto History',
    time: 'About 4–6 hours',
    bestFor: 'Guests interested in shogun history, architecture, gardens and cultural background.',
    flow: 'Nijo Castle → Kyoto Gyoen area → lunch or tea → Nishiki / central Kyoto',
    text: 'A calmer history-focused route. Nijo Castle is especially rewarding with a guide because the buildings, political history and details are easy to miss on your own.',
    image: photos.nijo,
  },
  {
    kicker: '04 / ZEN & NORTHWEST',
    title: 'Ryoan-ji & Northwest Kyoto',
    time: 'About 4–5 hours',
    bestFor: 'Guests who enjoy Zen, gardens and a quieter side of Kyoto.',
    flow: 'Ryoan-ji → Kinkaku-ji → Kitano Tenmangu or a local lunch / tea stop',
    text: 'A practical northwest-Kyoto combination with very different temple experiences. The route can be shortened or adjusted depending on crowds and walking pace.',
    image: photos.garden,
  },
  {
    kicker: '05 / FAMILY',
    title: 'Family-Friendly Kyoto Day',
    time: 'About 5–7 hours',
    bestFor: 'Families with children or teenagers who want variety, photos, food and culture.',
    flow: 'Fushimi Inari → lunch or Nishiki area → Yasaka Shrine / Gion → sweets or matcha stop',
    text: 'A flexible day with famous sights, food, photo stops and easy breaks. The order and pace can change during the tour if the family needs it.',
    image: photos.shrine,
  },
  {
    kicker: '06 / COMFORT',
    title: 'Comfortable Kyoto for Senior Travellers',
    time: 'About 5–7 hours',
    bestFor: 'Senior travellers and couples who prefer shorter walks, more breaks and optional taxis.',
    flow: 'Sanjusangendo → Nijo Castle → relaxed lunch or tea → Kyoto Gyoen or Gion',
    text: 'The emphasis is comfort, not the number of stops. We can reduce stairs and long walks, add taxi rides when useful, and keep enough time to sit down and enjoy the day.',
    image: photos.alley,
  },
];

const feedback = [
  'Clear explanations without too much information at once.',
  'A comfortable pace with practical breaks when needed.',
  'Simple planning that makes Kyoto easier for first-time visitors.',
  'Calm communication before and during the tour.',
  'Local Kyoto insight beyond guidebook-level information.',
  'Flexible support for families, senior travellers, and mixed-age groups.',
];

const faqs = [
  ['When are you available?', 'Regular guiding is mainly on Saturdays, Sundays, and Japanese public holidays. Weekdays are generally not available.'],
  ['How much is the guide fee?', '¥10,000 per hour. Half day: up to 4 hours / ¥40,000. Full day: up to 8 hours / ¥80,000. The fee is per guide, not per person.'],
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
          <a href="#rates">Rates</a><a href="#experience">Routes</a><a href="#story">Story</a><a href="#guide">Guide</a><a href="#faq">FAQ</a><a href="#enquire">Enquire</a>
        </nav>
        <div className={styles.lang}><span>EN</span><a className={styles.langMuted} href="/japanese-guide">JP</a></div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Weekend private guide in Kyoto</p>
          <h1>Kyoto made<br/><em>simple, calm,</em><br/>and personal.</h1>
          <p className={styles.lead}>I am Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. I plan calm private Kyoto tours for couples, families, senior travellers and first-time visitors, mainly on Saturdays, Sundays, and Japanese public holidays.</p>
          <div className={styles.heroActions}><a href="#enquire" className={styles.primary}>Send an enquiry</a><a href="#experience" className={styles.textLink}>See tour ideas →</a></div>
        </div>
        <div className={styles.heroVisual}><img src={photos.hero} alt="Kyoto street view with Yasaka Pagoda" /></div>
        <div className={styles.verticalWord}>KYOTO / PRIVATE / CALM / PERSONAL</div>
      </section>

      <section id="rates" className={styles.statement}>
        <p className={styles.sectionNo}>01</p>
        <h2>Price first.<br/>Clear and simple.</h2>
        <div>
          <p className={styles.bigText}>Rates are per guide, not per person.</p>
          <div className={styles.facts}>
            <div><span>HALF DAY</span><strong>¥40,000 · up to 4 hours</strong></div>
            <div><span>FULL DAY</span><strong>¥80,000 · up to 8 hours</strong></div>
            <div><span>EXTRA HOUR</span><strong>¥10,000 · per additional hour</strong></div>
            <div><span>REGULAR DAYS</span><strong>Mainly Saturdays, Sundays & Japanese public holidays</strong></div>
            <div><span>SERVICE</span><strong>Guiding only · no hotel or vehicle arrangement</strong></div>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.experiences}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Private Kyoto tour ideas</p><h2>Six useful starting points.</h2><p className={styles.lead}>These are practical examples, not fixed packages. I adjust the final plan to your interests, hotel area, walking pace, weather and crowds.</p></div>
        {routes.map((route) => (
          <article className={styles.route} key={route.title}>
            <div className={styles.routeImage}><img src={route.image} alt="Kyoto experience" /></div>
            <div className={styles.routeCopy}>
              <p className={styles.kicker}>{route.kicker}</p>
              <h3>{route.title}</h3>
              <p><strong>{route.time}</strong></p>
              <p><strong>Best for:</strong> {route.bestFor}</p>
              <p>{route.flow}</p>
              <p>{route.text}</p>
              <a href="#enquire">Use this as a starting point →</a>
            </div>
          </article>
        ))}
      </section>

      <section id="story" className={styles.photoStory}>
        <div className={styles.storyIntro}><p className={styles.eyebrow}>What guests value</p><h2>A day that feels personal.</h2><p>Recurring feedback from guests is strikingly consistent: calm communication, clear explanations, a practical pace and enough flexibility to make Kyoto easier rather than more exhausting.</p></div>
        <div className={styles.mosaic}>
          <figure className={styles.m1}><img src={photos.guests} alt="Don Tanaka with recent guests from Austria after a private Kyoto tour" /></figure>
          <figure className={styles.m2}><img src={photos.tea} alt="Japanese tea" /></figure>
          <figure className={styles.m3}><img src={photos.food} alt="Japanese food detail" /></figure>
          <figure className={styles.m4}><img src={photos.alley} alt="Quiet Kyoto alley" /></figure>
        </div>
      </section>

      <section className={styles.fullBleed}>
        <img src={photos.autumn} alt="Autumn scenery in Japan" />
        <div className={styles.fullBleedCopy}><span>PACE / CONTEXT / FLEXIBILITY</span><h2>Leave room for the day to breathe.</h2></div>
      </section>

      <section id="guide" className={styles.guide}>
        <div className={styles.guideTitle}><p className={styles.sectionNo}>04</p><h2>Hello,<br/>I’m Don Tanaka.</h2><div className={styles.routeImage}><img src={photos.don} alt="Don Tanaka, private guide in Kyoto" /></div></div>
        <div className={styles.guideBody}>
          <p className={styles.bigText}>I was born and raised in Kyoto and I am a National Government Licensed Guide Interpreter. I have many years of international experience supporting visitors from overseas.</p>
          <p className={styles.lead}>My guiding style is calm and practical. I prefer a comfortable day with enough time to understand Kyoto rather than rushing through a long checklist of places. I personally handle enquiries and normally guide the tour myself.</p>
          <div className={styles.facts}>
            <div><span>STYLE</span><strong>Private · calm · practical · flexible</strong></div>
            <div><span>GOOD FIT FOR</span><strong>Couples · families · senior travellers · first-time visitors · mixed-age groups</strong></div>
            <div><span>TRANSPORT</span><strong>Public transport and guest-paid taxis may be used during the tour</strong></div>
            <div><span>OTHER COSTS</span><strong>Transport, meals, entrance fees, taxi fares and personal expenses are separate</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.feedback}>
        <p className={styles.eyebrow}>Guest feedback themes</p>
        <h2>Clear explanations.<br/>A comfortable pace.<br/>Local Kyoto insight.</h2>
        <div className={styles.how}>
          {feedback.slice(0,3).map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
        <p className={styles.note}>These are recurring themes from real guest feedback on the current Uma Academia site, not invented quotations.</p>
      </section>

      <section className={styles.guide}>
        <div className={styles.guideTitle}><p className={styles.sectionNo}>05</p><h2>A recent real guiding day.</h2></div>
        <div className={styles.guideBody}>
          <p className={styles.eyebrow}>Guests from Austria · shared with permission</p>
          <p className={styles.bigText}>Four hours across Kyoto: Fushimi Inari · Arashiyama Bamboo Grove · Tenryu-ji · Nijo Castle.</p>
          <p className={styles.lead}>This section preserves an actual recent guest experience already published on the live site, while giving it a more visual editorial treatment.</p>
        </div>
      </section>

      <section id="faq" className={styles.photoStory}>
        <div className={styles.storyIntro}><p className={styles.eyebrow}>FAQ</p><h2>The questions I receive most often.</h2><p>The operational details below are carried over from the live site rather than rewritten as new marketing claims.</p></div>
        <div className={styles.facts}>
          {faqs.map(([q,a]) => <div key={q}><span>{q}</span><strong>{a}</strong></div>)}
        </div>
      </section>

      <section className={styles.how}>
        <div><span>01</span><h3>Tell me your date</h3><p>Send a preferred Saturday, Sunday or Japanese public-holiday date, group size and meeting area.</p></div>
        <div><span>02</span><h3>Shape the route</h3><p>Choose one of the six examples or simply tell me the places and interests that matter to you.</p></div>
        <div><span>03</span><h3>Walk Kyoto together</h3><p>The final route can respond to walking pace, weather, crowds and what catches your interest.</p></div>
      </section>

      <section id="enquire" className={styles.enquire}>
        <div><p className={styles.eyebrow}>Check a weekend date</p><h2>You do not need<br/>a finished itinerary.</h2></div>
        <div className={styles.enquirePanel}>
          <p>A date and rough idea are enough. The current enquiry form already asks for the useful basics: preferred date, group size, route idea, meeting area or hotel name, preferred length, places or interests, and a message.</p>
          <a className={styles.primaryLight} href="https://www.umaacademia.com/#contact">Use the current enquiry form</a>
          <a className={styles.textLink} href="mailto:eltontanaka@gmail.com?subject=Kyoto%20Private%20Guide%20Enquiry">Email directly →</a>
          <p className={styles.small}>Sending an enquiry does not create or confirm a reservation. This Pattern H page remains a visual demo; the live enquiry system is unchanged.</p>
        </div>
      </section>

      <footer className={styles.footer}><strong>UMA ACADEMIA</strong><span>Kyoto Private Guide · Don Tanaka</span><span>Pattern H demo · production unchanged</span></footer>
    </main>
  );
}
