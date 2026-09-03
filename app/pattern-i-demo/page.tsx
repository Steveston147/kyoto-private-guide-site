import type {Metadata} from 'next';
import HeroMotion from './hero-motion';
import styles from './pattern-i.module.css';

export const metadata:Metadata={title:'Uma Academia — Pattern I Living Kyoto Scrapbook',description:'A high-fidelity scrapbook hero prototype for Uma Academia.',robots:{index:false,follow:false}};

const notes=[
  ['Japanese accessories?','Perfect little gifts to take home.'],
  ['Ramen today?','Why not. Plans can change.'],
  ['Looking for local art?','Let’s see what we can find.'],
  ['Not just temples.','This is everyday Kyoto, too.']
];

export default function PatternI(){return <main className={styles.page}>
  <aside className={styles.rail}>
    <a className={styles.brand} href="/pattern-i-demo">UMA<br/>ACADEMIA</a>
    <nav aria-label="Pattern I navigation"><a href="#story">Story</a><a href="#how">How it works</a><a href="#about">About Don</a><a href="/pattern-h-demo/tours">Tours</a><a href="/pattern-h-demo/rates">Rates</a><a className={styles.enquireLink} href="/pattern-h-demo/enquire">Enquire ↗</a></nav>
    <p>Private guide in Kyoto<br/>Weekends & public holidays</p>
  </aside>

  <div className={styles.content}>
    <div className={styles.demoFlag}>PATTERN I · LIVING KYOTO SCRAPBOOK · REFINEMENT TEST · PRODUCTION UNCHANGED</div>
    <HeroMotion>
      <section className={styles.hero} id="story">
        <div className={styles.paperGrain}/><div className={styles.woodGlow}/>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Kyoto-born · licensed guide · direct from first message to tour day</p>
          <h1>Kyoto is more<br/>than <em>sightseeing.</em></h1>
          <p className={styles.intro}>Spend a real Kyoto weekend with me. Famous temples, of course — but also ramen, shopping, cafés, local art and the unexpected things you decide you want five minutes ago.</p>
          <div className={styles.actions}><a href="/pattern-h-demo/enquire">Tell me your date</a><span>You message me → I reply → I plan → I guide</span></div>
          <p className={styles.marginNote}>You do not need a perfect plan.<br/><strong>Curiosity is enough.</strong></p>
        </div>

        <div className={styles.scrapbook} aria-label="Snapshots from guiding and everyday Kyoto">
          <span className={`${styles.tape} ${styles.tapeA}`}/><span className={`${styles.tape} ${styles.tapeB}`}/><span className={`${styles.tape} ${styles.tapeC}`}/>
          <figure className={`${styles.print} ${styles.accessories}`}><img src="/pattern-i/accessories.webp" alt="Japanese accessories selected during a Kyoto shopping stop"/><figcaption>Japanese accessories</figcaption><span className={styles.photoDate}>11:35 · Kyoto</span></figure>
          <figure className={`${styles.print} ${styles.don}`}><img src="/don.jpg" alt="Don Tanaka in Kyoto"/><figcaption>Hi, I’m Don.</figcaption><span className={styles.pin}/></figure>
          <figure className={`${styles.print} ${styles.fushimi}`}><img src="/kyoto/fushimi-inari.jpg" alt="Fushimi Inari in Kyoto"/><figcaption>Fushimi Inari</figcaption></figure>
          <figure className={`${styles.print} ${styles.guests}`}><img src="/recent-guests-austria.jpg" alt="Guests enjoying a private Kyoto day"/><figcaption>A day together</figcaption></figure>
          <figure className={`${styles.print} ${styles.nijo}`}><img src="/kyoto/nijo-castle.jpg" alt="Nijo Castle in Kyoto"/><figcaption>Nijo Castle</figcaption><span className={styles.officialTag}>official-guide days</span></figure>
          <div className={`${styles.note} ${styles.noteAccessories}`}><strong>{notes[0][0]}</strong><span>{notes[0][1]}</span></div>
          <div className={`${styles.note} ${styles.noteRamen}`}><strong>{notes[1][0]}</strong><span>{notes[1][1]}</span></div>
          <div className={`${styles.note} ${styles.noteArt}`}><strong>{notes[2][0]}</strong><span>{notes[2][1]}</span></div>
          <div className={`${styles.note} ${styles.noteKyoto}`}><strong>{notes[3][0]}</strong><span>{notes[3][1]}</span></div>
          <div className={styles.ticket}><span>KYOTO WEEKEND</span><strong>NO FIXED SCRIPT</strong><small>walk · eat · look · change plans</small></div>
          <svg className={styles.arrowOne} viewBox="0 0 140 90" aria-hidden="true"><path d="M8 74 C45 20 82 18 125 43"/><path d="M109 28 L127 43 L105 52"/></svg>
          <svg className={styles.arrowTwo} viewBox="0 0 150 100" aria-hidden="true"><path d="M142 13 C106 20 88 42 67 72 C52 90 29 92 10 82"/><path d="M27 72 L9 82 L24 92"/></svg>
          <svg className={styles.circleOne} viewBox="0 0 180 110" aria-hidden="true"><path d="M17 59 C27 15 140 2 160 45 C177 82 96 106 38 92 C9 85 4 69 17 59Z"/></svg>
          <svg className={styles.underline} viewBox="0 0 190 28" aria-hidden="true"><path d="M4 16 C55 7 112 22 184 11"/><path d="M14 22 C66 16 117 26 178 17"/></svg>
        </div>
      </section>
    </HeroMotion>

    <section className={styles.direct} id="how">
      <div><p className={styles.sectionLabel}>NO MIDDLE LAYERS</p><h2>One person,<br/>all the way through.</h2><p className={styles.sideCopy}>The website is mine. The email is mine. The plan is mine. And on the day, I am the guide waiting for you.</p></div>
      <div className={styles.chain}><article><span>01</span><h3>You message me.</h3><p>The website, enquiry and reply are handled by me.</p></article><article><span>02</span><h3>We shape the day.</h3><p>I adjust the route around your interests, pace, weather and the things that come up.</p></article><article><span>03</span><h3>I meet you.</h3><p>The person you talked with is the person who guides you in Kyoto.</p></article></div>
    </section>

    <section className={styles.everyday} id="about">
      <div className={styles.everydayPhoto}><img src="/kyoto-hero.jpg" alt="Kyoto street atmosphere"/><span className={styles.cornerNote}>not a tour-bus Kyoto →</span></div>
      <div className={styles.everydayCopy}><p className={styles.sectionLabel}>EVERYDAY KYOTO</p><h2>I live here.<br/>That changes the tour.</h2><p>I was born and raised in Kyoto. I’m a National Government Licensed Guide Interpreter and have guided at Nijo Castle. I’m also a husband, a father of two daughters and a baseball fan. On an ordinary weekend I might shop at AEON, eat ramen or a cheap set meal, stop for sweets, or have an omakase dinner at a friend’s restaurant.</p><p className={styles.handLine}>You don’t need to know everything you want before we meet.</p><a href="/pattern-h-demo/about">More about Don →</a></div>
    </section>
  </div>
</main>}
