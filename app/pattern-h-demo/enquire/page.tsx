import type { Metadata } from 'next';
import DemoNav from '../demo-nav';
import styles from '../pattern-h-demo.module.css';
import { photos } from '../site-data';

export const metadata: Metadata = {
  title: 'Enquire — Uma Academia Demo',
  robots: { index: false, follow: false },
};

const formAction = 'https://formspree.io/f/mykdbwbl';
const email = 'eltontanaka@gmail.com';

const fieldStyle = {
  width: '100%',
  border: '0',
  borderBottom: '1px solid rgba(24,23,22,.28)',
  background: 'transparent',
  padding: '12px 0 13px',
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: '17px',
  lineHeight: 1.45,
  color: '#181716',
  outline: 'none',
} as const;

const labelStyle = {
  display: 'block',
  marginBottom: '3px',
  fontSize: '8px',
  lineHeight: 1.4,
  letterSpacing: '.18em',
  textTransform: 'uppercase' as const,
  fontWeight: 700,
} as const;

const fieldWrapStyle = { marginBottom: '27px' } as const;

export default function Enquire() {
  return (
    <main className={styles.page}>
      <DemoNav />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Check a date</p>
          <h1>You don’t need<br /><em>a finished</em><br />itinerary.</h1>
          <p className={styles.lead}>
            A preferred date, group size, hotel or meeting area and rough interests are enough to start. I personally read every enquiry.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="#enquiry-form">Send an enquiry</a>
            <a className={styles.textLink} href={`mailto:${email}?subject=Kyoto%20Private%20Guide%20Enquiry`}>Email Don →</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src={photos.food} alt="Kyoto travel detail" />
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.sectionNo}>01</p>
        <h2>What to<br />send me.</h2>
        <div className={styles.facts}>
          <div><span>DATE</span><strong>Your preferred Saturday, Sunday or Japanese public holiday</strong></div>
          <div><span>GROUP</span><strong>How many people are travelling</strong></div>
          <div><span>MEETING AREA</span><strong>Your hotel or another practical meeting point</strong></div>
          <div><span>TIME</span><strong>Half day, full day or approximate hours</strong></div>
          <div><span>INTERESTS</span><strong>A sample route, specific places, history, food, photography, slower pace — or simply “not sure yet”</strong></div>
        </div>
      </section>

      <section id="enquiry-form" className={styles.enquire}>
        <div>
          <p className={styles.eyebrow}>Private Kyoto guide enquiry</p>
          <h2>Tell me about<br />your Kyoto day.</h2>
          <p className={styles.lead}>
            You can be specific, or keep it simple. A date and rough idea are enough for the first message.
          </p>
        </div>

        <form action={formAction} method="POST" className={styles.enquirePanel}>
          <input type="hidden" name="_subject" value="Uma Academia — Kyoto Private Guide Enquiry" />
          <input type="hidden" name="service" value="Uma Academia Private Kyoto Guide" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '0 30px' }}>
            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Name *</span>
              <input style={fieldStyle} type="text" name="name" autoComplete="name" required placeholder="Your name" />
            </label>

            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Email *</span>
              <input style={fieldStyle} type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
            </label>

            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Preferred date *</span>
              <input style={fieldStyle} type="date" name="preferred_date" required />
            </label>

            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Group size *</span>
              <input style={fieldStyle} type="number" name="group_size" min="1" required placeholder="2" />
            </label>

            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Preferred length</span>
              <select style={fieldStyle} name="preferred_length" defaultValue="">
                <option value="">Not sure yet</option>
                <option value="Half day — up to 4 hours / ¥40,000">Half day — up to 4 hours / ¥40,000</option>
                <option value="Full day — up to 8 hours / ¥80,000">Full day — up to 8 hours / ¥80,000</option>
                <option value="Other">Other / flexible</option>
              </select>
            </label>

            <label style={fieldWrapStyle}>
              <span style={labelStyle}>Meeting area / hotel</span>
              <input style={fieldStyle} type="text" name="meeting_area" placeholder="Hotel name or area" />
            </label>
          </div>

          <label style={fieldWrapStyle}>
            <span style={labelStyle}>Route idea</span>
            <select style={fieldStyle} name="route_idea" defaultValue="">
              <option value="">Not sure yet</option>
              <option>First-Time Kyoto Half Day</option>
              <option>Kyoto Highlights Full Day</option>
              <option>Nijo Castle & Kyoto History</option>
              <option>Ryoan-ji & Northwest Kyoto</option>
              <option>Family-Friendly Kyoto Day</option>
              <option>Comfortable Kyoto for Senior Travellers</option>
              <option>Custom route</option>
            </select>
          </label>

          <label style={fieldWrapStyle}>
            <span style={labelStyle}>Places / interests</span>
            <input style={fieldStyle} type="text" name="interests" placeholder="History, food, gardens, photography, slower pace…" />
          </label>

          <label style={fieldWrapStyle}>
            <span style={labelStyle}>Message</span>
            <textarea
              style={{ ...fieldStyle, minHeight: '118px', resize: 'vertical' }}
              name="message"
              placeholder="Anything useful about your group, pace, mobility, places you have already visited, or what you hope to experience in Kyoto."
            />
          </label>

          <button
            type="submit"
            className={styles.primary}
            style={{ cursor: 'pointer', width: '100%', minHeight: '54px', marginTop: '5px' }}
          >
            Send enquiry
          </button>

          <p className={styles.small} style={{ marginTop: '18px', lineHeight: 1.65 }}>
            Sending this form is an enquiry only. It does not create or confirm a reservation. Your message is sent through the same Formspree endpoint already used by Uma Academia.
          </p>
        </form>
      </section>
    </main>
  );
}
