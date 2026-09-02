import type { Metadata } from 'next';
import styles from './pattern-h-demo.module.css';

export const metadata: Metadata = {
  title: 'Uma Academia — Pattern H Demo',
  description: 'Isolated editorial brand experience demo for Uma Academia. Not the live production homepage.',
  robots: { index: false, follow: false },
};

const photos = {
  hero: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=88',
  lane: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=85',
  temple: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=85',
  garden: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=85',
  tea: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=1000&q=85',
  food: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1000&q=85',
  autumn: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1300&q=85',
  shrine: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1300&q=85',
  alley: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1200&q=85',
};

const routes = [
  { kicker: '01 / FIRST KYOTO', title: 'Kyoto, without rushing it', text: 'A calm half-day introduction shaped around your pace, interests, and where you are staying.', image: photos.temple },
  { kicker: '02 / QUIET KYOTO', title: 'Gardens, lanes & small discoveries', text: 'A slower route for travellers who want context, back streets and places that feel lived-in.', image: photos.garden },
  { kicker: '03 / DEEPER CONTEXT', title: 'History that makes the city click', text: 'Temples, castles and neighbourhoods connected through clear stories rather than information overload.', image: photos.lane },
];

export default function PatternHDemo() {
  return (
    <main className={styles.page}>
      <div className={styles.demoBar}>PATTERN H DEMO — isolated prototype, not the live Uma Academia site</div>

      <header className={styles.header}>
        <a href="#top" className={styles.brand}>UMA ACADEMIA</a>
        <nav aria-label="Demo navigation" className={styles.nav}>
          <a href="#experience">Experiences</a><a href="#story">Story</a><a href="#guide">Guide</a><a href="#enquire">Enquire</a>
        </nav>
        <div className={styles.lang}><span>EN</span><span className={styles.langMuted}>JP</span></div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Private Kyoto Guide · Don Tanaka</p>
          <h1>See Kyoto.<br/><em>Understand</em> Kyoto.</h1>
          <p className={styles.lead}>A personal day in Kyoto, shaped around your curiosity — with a Kyoto-born licensed guide who keeps the pace calm and the stories clear.</p>
          <div className={styles.heroActions}><a href="#experience" className={styles.primary}>Explore the experience</a><a href="#enquire" className={styles.textLink}>Ask about a day →</a></div>
        </div>
        <div className={styles.heroVisual}><img src={photos.hero} alt="Traditional Kyoto street at dusk" /></div>
        <div className={styles.verticalWord}>KYOTO / PERSONAL / UNHURRIED</div>
      </section>

      <section className={styles.statement}>
        <p className={styles.sectionNo}>00</p>
        <h2>Not a checklist.<br/>A day that starts to make sense.</h2>
        <p>Uma Academia is a private guiding service for visitors who want more than directions between famous places. The route can be simple; the difference is the context, conversation and flexibility along the way.</p>
      </section>

      <section id="experience" className={styles.experiences}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Choose a starting point</p><h2>Three ways into Kyoto</h2></div>
        {routes.map((route, i) => (
          <article className={styles.route} key={route.title}>
            <div className={styles.routeImage}><img src={route.image} alt="Kyoto experience" /></div>
            <div className={styles.routeCopy}><p className={styles.kicker}>{route.kicker}</p><h3>{route.title}</h3><p>{route.text}</p><a href="#enquire">Use this as a starting point →</a></div>
          </article>
        ))}
      </section>

      <section id="story" className={styles.photoStory}>
        <div className={styles.storyIntro}><p className={styles.eyebrow}>A city in details</p><h2>The parts of Kyoto that stay with you.</h2><p>Tea steam. Stone underfoot. A quiet garden after the crowd turns away. Pattern H uses photography as the structure of the page, not as decoration inside repeated cards.</p></div>
        <div className={styles.mosaic}>
          <figure className={styles.m1}><img src={photos.shrine} alt="Kyoto shrine architecture" /></figure>
          <figure className={styles.m2}><img src={photos.tea} alt="Japanese tea" /></figure>
          <figure className={styles.m3}><img src={photos.food} alt="Japanese food detail" /></figure>
          <figure className={styles.m4}><img src={photos.alley} alt="Quiet Kyoto alley" /></figure>
        </div>
      </section>

      <section className={styles.fullBleed}>
        <img src={photos.autumn} alt="Autumn scenery in Japan" />
        <div className={styles.fullBleedCopy}><span>SEASON / LIGHT / PACE</span><h2>Leave room for the day to breathe.</h2></div>
      </section>

      <section id="guide" className={styles.guide}>
        <div className={styles.guideTitle}><p className={styles.sectionNo}>04</p><h2>A guide, not a tour machine.</h2></div>
        <div className={styles.guideBody}>
          <p className={styles.bigText}>Don Tanaka is Kyoto-born and a National Government Licensed Guide Interpreter. The guiding style is practical, flexible and conversational.</p>
          <div className={styles.facts}>
            <div><span>STYLE</span><strong>Private · calm · flexible</strong></div>
            <div><span>REGULAR AVAILABILITY</span><strong>Primarily weekends & Japanese public holidays</strong></div>
            <div><span>GUIDE RATE</span><strong>¥10,000 / hour · per guide, not per person</strong></div>
            <div><span>SERVICE BOUNDARY</span><strong>Guiding only; transport, meals, entrance fees and taxis are separate</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.feedback}>
        <p className={styles.eyebrow}>Guest feedback themes</p>
        <h2>Clear explanations.<br/>A comfortable pace.<br/>A day that feels personal.</h2>
        <p className={styles.note}>Demo presentation only. No invented quotes or guest identities are used here; a migrated version should reuse only verified feedback from the existing site.</p>
      </section>

      <section className={styles.how}>
        <div><span>01</span><h3>Tell me your date</h3><p>Share your preferred day, group size and rough interests.</p></div>
        <div><span>02</span><h3>Shape the route</h3><p>Use one of the examples above or simply say you are not sure yet.</p></div>
        <div><span>03</span><h3>Walk Kyoto together</h3><p>The final route stays flexible enough to respond to pace, weather and what catches your interest.</p></div>
      </section>

      <section id="enquire" className={styles.enquire}>
        <div><p className={styles.eyebrow}>Start with a conversation</p><h2>What would make Kyoto<br/>feel like <em>your</em> day?</h2></div>
        <div className={styles.enquirePanel}>
          <p>This demo does not submit a real booking or payment. On migration, the existing enquiry flow and privacy safeguards can be preserved.</p>
          <a className={styles.primaryLight} href="mailto:eltontanaka@gmail.com?subject=Uma%20Academia%20Pattern%20H%20Demo%20Enquiry">Open a demo enquiry email</a>
          <p className={styles.small}>Submitting an enquiry does not create or confirm a reservation.</p>
        </div>
      </section>

      <footer className={styles.footer}><strong>UMA ACADEMIA</strong><span>Pattern H / Editorial Brand Experience</span><span>© Demo prototype</span></footer>
    </main>
  );
}
