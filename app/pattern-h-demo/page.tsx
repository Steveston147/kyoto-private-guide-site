import type {Metadata} from 'next';
import DemoNav from './demo-nav';
import styles from './pattern-h-demo.module.css';
import scrap from './scrapbook.module.css';
import {photos,routes} from './site-data';

export const metadata:Metadata={title:'Uma Academia — Pattern H Memory Table Demo',description:'Editorial scrapbook-style prototype for Uma Academia.',robots:{index:false,follow:false}};

const memories=[photos.hero,photos.don,photos.guests,photos.nijo,photos.fushimi,photos.culture];

export default function Home(){return <main className={styles.page}><DemoNav/>
<section className={scrap.memoryHero}>
  <div className={scrap.memoryCopy}>
    <p className={styles.eyebrow}>Private Kyoto guide · weekends & public holidays</p>
    <h1>See Kyoto.<br/><em>With someone</em><br/>who knows it.</h1>
    <p className={styles.lead}>I’m Don Tanaka, a Kyoto-born National Government Licensed Guide Interpreter. I plan and personally guide private Kyoto days for couples, families, senior travellers and first-time visitors.</p>
    <div className={styles.heroActions}><a href="/pattern-h-demo/tours" className={styles.primary}>Explore the tours</a><a href="/pattern-h-demo/enquire" className={styles.textLink}>Check a date →</a></div>
  </div>
  <div className={scrap.desk} aria-label="Kyoto memories from real guiding days">
    <span className={`${scrap.tape} ${scrap.t1}`}></span><span className={`${scrap.tape} ${scrap.t2}`}></span>
    <span className={`${scrap.handNote} ${scrap.note1}`}>Kyoto, one day at a time</span><span className={`${scrap.handNote} ${scrap.note2}`}>real places · real days</span>
    <figure className={`${scrap.photo} ${scrap.p1}`}><img src={photos.hero} alt="Cherry blossoms beside a Kyoto canal"/></figure>
    <figure className={`${scrap.photo} ${scrap.p2}`}><img src={photos.don} alt="Don in Kyoto"/></figure>
    <figure className={`${scrap.photo} ${scrap.p3}`}><img src={photos.guests} alt="Guests enjoying Kyoto"/></figure>
    <figure className={`${scrap.photo} ${scrap.p4}`}><img src={photos.nijo} alt="Historic Kyoto architecture"/></figure>
  </div>
</section>

<section className={styles.statement}><p className={styles.sectionNo}>01</p><h2>What does a day<br/>with Don look like?</h2><div><p className={styles.bigText}>You tell me what matters. I turn it into a practical Kyoto day — then guide, explain, navigate and adjust it with you.</p><div className={styles.facts}><div><span>BEFORE</span><strong>Date · group · hotel · interests · pace</strong></div><div><span>PLAN</span><strong>A realistic route shaped around geography, crowds and opening conditions</strong></div><div><span>ON THE DAY</span><strong>Meet → travel together → understand the places → lunch or breaks → adapt as needed</strong></div></div><a className={styles.textLink} href="/pattern-h-demo/rates">Rates & how it works →</a></div></section>

<section className={scrap.memorySection}>
  <div className={scrap.memoryIntro}><p className={styles.eyebrow}>A day becomes a memory</p><h2>Not a catalogue.<br/>A table full of Kyoto.</h2><p>Some photographs deserve to be large. Others work better as fragments — like the pictures you spread out after a trip and look through again.</p></div>
  <div className={scrap.tableScatter}>
    <figure className={`${scrap.card} ${scrap.c1}`}><img src={photos.guests} alt="A guest day in Kyoto"/></figure>
    <figure className={`${scrap.card} ${scrap.c2}`}><img src={photos.hero} alt="Kyoto cherry blossom memory"/></figure>
    <figure className={`${scrap.card} ${scrap.c3}`}><img src={photos.don} alt="Don during a Kyoto outing"/></figure>
    <figure className={`${scrap.card} ${scrap.c4}`}><img src={photos.fushimi} alt="Kyoto shrine scene"/></figure>
    <figure className={`${scrap.card} ${scrap.c5}`}><img src={photos.nijo} alt="Kyoto history and architecture"/></figure>
  </div>
</section>

<section className={scrap.tourStrip}>
  <div className={scrap.tourStripHeader}><div><p className={styles.eyebrow}>Featured private tours</p><a className={styles.textLink} href="/pattern-h-demo/tours">See all tours →</a></div><h2>Start with something concrete.</h2></div>
  <div className={scrap.tourCards}>{routes.map((r)=><article className={scrap.tourCard} key={r.slug}><div className={scrap.tourCardImg}><img src={r.image} alt="Kyoto tour memory"/></div><h3>{r.title}</h3><p><strong>{r.time} · {r.price}</strong></p><p>{r.bestFor}</p><a href="/pattern-h-demo/tours">Tour details →</a></article>)}</div>
</section>

<section className={scrap.quietBand}><div><p className={styles.sectionNo}>03</p><h2>One strong image<br/>still matters.</h2><p className={styles.lead}>The larger photographs create pauses in the story. The smaller ones make the site feel personal — more like remembering a trip than browsing a brochure.</p></div><div className={scrap.heroShot}><img src={photos.culture} alt="A quieter Kyoto scene"/></div></section>

<section className={scrap.memorySection}>
  <div className={scrap.memoryIntro}><p className={styles.eyebrow}>From the camera roll</p><h2>Small moments,<br/>kept together.</h2><p>Swipe through these on a phone. On desktop they behave like a loose row of prints laid across the table.</p></div>
</section>
<div className={scrap.carousel}>{memories.map((src,i)=><figure key={`${src}-${i}`}><img src={src} alt={`Kyoto memory ${i+1}`}/></figure>)}</div>

<section className={scrap.quietBand}><div className={scrap.portraitFrame}><img src={photos.don} alt="Don Tanaka in Kyoto"/></div><div><p className={styles.sectionNo}>04</p><h2>Hello,<br/>I’m Don.</h2><p className={styles.bigText}>Kyoto-born. National Government Licensed Guide Interpreter.</p><p className={styles.lead}>Calm, practical and flexible private guiding. I personally handle enquiries and normally guide the tour myself.</p><a className={styles.textLink} href="/pattern-h-demo/about">About Don →</a></div></section>

<section className={styles.enquire}><div><p className={styles.eyebrow}>Ready to explore?</p><h2>Tell me when<br/>you’ll be in Kyoto.</h2></div><div className={styles.enquirePanel}><p>You do not need a finished itinerary. A date and rough idea are enough.</p><a className={styles.primaryLight} href="/pattern-h-demo/enquire">Enquire</a></div></section>
</main>}
