"use client";

import { useState } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openFaqIndex === index;
        const answerId = `faq-answer-${index}`;
        return (
          <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
            <button
              className="faq-button"
              type="button"
              onClick={() => setOpenFaqIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="faq-answer" id={answerId}>{item.a}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
