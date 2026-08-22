# Kyoto Private Guide Site — Project Specification

Last updated: 2026-08-22

## 1. Purpose

This repository contains the public website for Don Tanaka's private guiding service and a Japanese-language private guide page for Kitajiri.

The site has two jobs:

1. Explain each guide service, price, availability, and service boundaries quickly and clearly.
2. Turn suitable visitors into direct enquiries without implying a booking or travel-agency service.

The website is a marketing and enquiry tool. It is not a booking engine, availability system, payment system, transport service, hotel booking service, or autonomous travel agent.

## 2. Canonical source of truth

When instructions conflict, use this priority:

1. `PROJECT.md` — business purpose, scope, service rules, and product boundaries.
2. `DESIGN.md` — visual and interaction rules.
3. `AGENTS.md` — rules for AI-assisted development.
4. `TECH.md` / `UPGRADE.md` — technical constraints and upgrade procedure.
5. Current production code where the documents above are silent.

Do not silently change business rules because old code differs.

## 3. Service positioning

### Don Tanaka

The site should present Don Tanaka as:

- a Kyoto-born private guide;
- a National Government Licensed Guide Interpreter;
- calm, practical, flexible, and easy to communicate with;
- suitable for families, senior travellers, first-time visitors, and international guests;
- focused on understandable cultural and historical context rather than information overload;
- primarily available on Saturdays, Sundays, and Japanese public holidays.

### Kitajiri Japanese guide

The Japanese-language page should present Kitajiri as:

- a Kyoto-based, experienced Japanese-language private guide;
- a long-time guide with major travel-company tour experience, including Club Tourism;
- holder of Kyoto Kentei Level 1 and other history/culture-related qualifications;
- especially suitable for repeat Kyoto visitors who want quieter temples, back streets, local history, and less-obvious places;
- calm and unhurried in guiding style;
- available by enquiry when the requested date is open, including Saturdays and Sundays.

#### Primary target persona for the Japanese page

Design and copy should be optimised primarily for:

- an affluent couple living in Tokyo;
- repeat Kyoto visitors who already consider themselves knowledgeable about Kyoto;
- guests who are not looking for a first-time highlights checklist;
- guests who want to learn from an experienced Kyoto-based guide and understand the history, culture, people, buildings, gardens, and local context behind what they see;
- guests who value quieter temples, back streets, lesser-known places, and places their friends are unlikely to have visited;
- guests who value comfort and are willing to use taxis at their own expense when this improves the route, pace, or experience.

Do not explicitly label public visitors as wealthy or affluent. Express this positioning through calm editorial design, depth, customisation, quality, discretion, and comfort rather than luxury clichés.

The tone for both services should be personal and professional rather than luxury-agency, mass-tour, or overly promotional.

## 4. Core business rules

### Don Tanaka service

These are controlled business rules and require explicit human approval before changing:

- Tours are private unless explicitly agreed otherwise.
- Don Tanaka personally handles enquiries and normally guides the tour.
- Regular availability is primarily Saturdays, Sundays, and Japanese public holidays.
- Weekday guiding is generally not offered. Do not invite weekday enquiries as if they are normally available.
- The guide rate is ¥10,000 per hour.
- Half day is up to 4 hours / ¥40,000.
- Full day is up to 8 hours / ¥80,000.
- Rates are per guide, not per person.
- The service offered is guiding only.
- Don does not arrange, book, or sell hotel accommodation.
- Don does not arrange, book, or sell private cars, vans, hired vehicles, or transportation services.
- Guests may use public transport or taxis and pay those providers directly.
- Transport, meals, entrance fees, taxi fares, and personal expenses are separate from the guide fee.
- The site must not imply real-time availability.
- The site must not automatically confirm a reservation or accept payment.

### Kitajiri Japanese guide service

These are controlled business rules and require explicit human approval before changing:

- Tours are private unless explicitly agreed otherwise.
- The standard guide fee is ¥26,000 for 4 hours per group.
- Extension is ¥6,000 per additional hour.
- The guide fee is paid in cash on the tour day.
- The service offered is guiding only.
- Public transport and walking are the normal means of travel.
- Guests may also use taxis during the tour when useful for comfort, distance, weather, or itinerary quality; taxi fares are paid separately by the guests.
- The service does not pre-arrange or book hotels, private cars, vans, taxis, hired vehicles, or transportation services.
- Transport, meals, entrance/admission fees, and personal expenses are separate from the guide fee.
- When Kitajiri needs admission to accompany the guests, Kitajiri's admission fee is also paid separately by the guests on the day.
- Enquiries use `eltontanaka@gmail.com`.
- Saturdays and Sundays may be requested, but the site must not imply live or guaranteed availability.
- The site must not automatically confirm a reservation or accept online payment.

## 5. Website content priorities

The homepage should be intentionally short. Priority order:

1. Who Don is and what the service is.
2. Price.
3. Weekend/public-holiday availability.
4. Clear service boundary: guiding only; no hotel or vehicle arrangement.
5. Guest feedback themes / reasons guests value the service.
6. A small number of representative route examples.
7. Short guide introduction.
8. Short FAQ.
9. Enquiry form.

The Japanese guide page should prioritise:

1. A clear repeat-visitor proposition: move from simply seeing Kyoto to learning and understanding Kyoto.
2. Kitajiri's identity, experience, qualifications, guiding style, and credibility.
3. Quiet and less-obvious Kyoto, with representative routes rather than a long generic sightseeing catalogue.
4. Private customisation and a comfortable pace, including optional guest-paid taxi use when useful.
5. The 4-hour ¥26,000 guide fee and ¥6,000/hour extension.
6. Cash payment on the tour day.
7. Guiding-only service boundaries and excluded costs.
8. A clear direct enquiry path that does not imply booking confirmation.

Avoid duplicating the same message across multiple sections.

## 6. Route examples

Route content should be simple and representative, not a catalogue.

Sample routes must:

- be labelled as examples, not confirmed itineraries;
- avoid guaranteeing opening hours, travel times, reservations, or availability;
- be geographically realistic;
- allow the guide to adjust the final route after enquiry;
- never imply that the service arranges transport, vehicles, hotels, or reservations as part of the guide service.

## 7. Availability

Do not use a large calendar unless there is a real operational need.

For Don, a simple statement such as “Primarily Saturdays, Sundays and Japanese public holidays” is preferred over a long calendar. It must not be presented as live availability.

For Kitajiri, visitors may enquire about dates including Saturdays and Sundays. Do not present any date as available until the enquiry has been reviewed.

## 8. Enquiry and privacy

The enquiry form or email prompt should collect only information useful to answer a guide enquiry, such as:

- preferred date;
- group size;
- hotel or meeting area for pickup/meeting purposes only;
- desired tour length;
- mobility/walking pace;
- interests;
- special requests.

Do not request hotel booking details for the purpose of arranging accommodation. Do not request vehicle booking details for arranging transport.

An enquiry must not imply that submission creates a reservation.

For the Japanese guide page:

- the on-page enquiry form posts directly to the approved Formspree endpoint;
- the form is rendered directly in the contact section, not injected later through DOM queries or a Portal;
- the form must not revert to a `mailto:`-only flow;
- a short privacy disclosure and link to `/privacy` must be visible near the form;
- automated browser tests must not submit real enquiries.

## 9. SEO and trust

SEO should support genuine search intent such as private Kyoto guide, licensed Kyoto guide, family-friendly Kyoto tour, senior-friendly Kyoto guide, weekend Kyoto guide, 京都 日本語ガイド, 京都 プライベートガイド, 京都 穴場 ガイド, 京都 リピーター 観光, and 京都 歴史 ガイド.

Do not introduce fake reviews, invented awards, unsupported claims, keyword stuffing, or misleading availability.

Current activity evidence such as third-party travel-company listings must be presented with a clear disclaimer that the external company's tours are separate products.

## 10. Definition of done

Before merge, changes should be checked for:

- business-rule accuracy;
- price visibility near the top of each relevant service page;
- correct availability wording for the relevant guide;
- clear guiding-only boundary;
- correct taxi wording: taxis may be used and paid directly/at cost by guests, without implying pre-arranged vehicle service;
- mobile and desktop readability;
- balanced multi-card layouts without orphan cards or misleading component styling;
- working enquiry/contact paths;
- privacy disclosure consistency when form fields/providers change;
- correct Japanese social metadata for the Japanese page;
- no misleading booking or availability claims;
- build/type/lint/test health;
- real-browser desktop/mobile UAT for Japanese-page changes;
- preservation of the calm, personal brand.

## 11. V1 freeze / hardening rule

After the Japanese guide V1 is hardened and merged, prefer operating and observing real enquiries over adding speculative features.

The V1 hardening baseline includes:

- documentation synchronised to production behaviour;
- direct Formspree enquiry form with successful human receipt test;
- privacy disclosure and `/privacy` page;
- Kitajiri hero portrait committed as a normal WebP asset rather than reconstructed during build;
- source-level regression tests plus Playwright desktop/mobile browser UAT.

Dependency/framework modernisation is a separate technical PR and must not be mixed into V1 hardening.
