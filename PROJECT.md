# Kyoto Private Guide Site — Project Specification

Last updated: 2026-08-13

## 1. Purpose

This repository contains the public website for Don Tanaka's private guiding service in Kyoto and nearby areas.

The site has two jobs:

1. Explain the guide service clearly and build trust with prospective guests.
2. Turn suitable visitors into direct enquiries without making promises that Don has not personally confirmed.

The website is a marketing and enquiry tool. It is not a booking engine, availability system, payment system, or autonomous travel agent.

## 2. Canonical source of truth

For future development, the following priority applies when instructions conflict:

1. `PROJECT.md` — business purpose, scope, service rules, and product boundaries.
2. `CONTENT.md` — public-facing wording, claims, pricing presentation, and enquiry rules.
3. `DESIGN.md` — visual and interaction rules.
4. `TECH.md` — implementation, dependencies, deployment, and maintenance.
5. `AGENTS.md` — rules for AI-assisted development.
6. Current production code, where the documents above are silent.

Do not silently change business rules just because the current code differs. When code and specification disagree, flag the discrepancy and resolve it deliberately.

## 3. Service positioning

The site should present Don Tanaka as:

- a Kyoto-born private guide;
- a National Government Licensed Guide Interpreter;
- calm, practical, flexible, and easy to communicate with;
- suitable for families, senior travellers, first-time visitors, university guests, corporate visitors, and mixed-age groups;
- focused on understandable cultural and historical context rather than information overload;
- able to guide in Kyoto and, depending on schedule and plan, nearby areas such as Osaka and Nara.

The tone should be personal and professional rather than luxury-agency, mass-tour, or overly promotional.

## 4. Business rules that require deliberate approval before changing

The following are business rules, not ordinary UI copy. AI or developers must not change them casually:

- Tours are private unless explicitly agreed otherwise.
- Don Tanaka personally handles enquiries and normally guides the tour.
- Weekends and Japanese public holidays are easier to accept; weekdays require enquiry and confirmation.
- The site must not imply real-time availability.
- The site must not automatically confirm a reservation.
- The site must not automatically accept payment.
- Transport, meals, entrance fees, taxi fares, and personal expenses are separate unless explicitly agreed otherwise.
- Public transport is the normal transport assumption; taxis may be suggested when useful.
- Larger groups may require separate discussion.
- Osaka and Nara guiding are possible only depending on plan and schedule.
- Any statement about accepting USD or another currency must be treated as a business decision and confirmed before changing.
- Any public price, cancellation condition, payment method, or group-size limit is controlled content and must be reviewed before modification.

## 5. Current product scope

The current site may include:

- guide introduction and credentials;
- service strengths;
- suggested Kyoto experiences;
- model routes;
- family- and senior-friendly positioning;
- educational/corporate visit support;
- FAQ;
- availability guidance based on general working-day preferences;
- sample route generator based on visitor preferences;
- contact/enquiry form;
- direct email contact;
- SEO metadata, sitemap, robots rules, Open Graph and social metadata.

## 6. Explicit non-goals

Do not add the following without a separate approved project decision:

- live booking and automatic reservation confirmation;
- live calendar exposure;
- customer accounts;
- card payment processing;
- automated emails that appear to come personally from Don;
- automated itinerary commitments based on unverified opening hours, transport conditions, weather, crowding, or availability;
- storing sensitive traveller information beyond what is necessary for an enquiry;
- publishing private personal information, employer information, internal work schedules, family information, or unrelated professional details.

## 7. Route generator rules

The route generator is a planning aid only.

It must:

- clearly identify outputs as sample routes rather than confirmed itineraries;
- avoid claiming that venues are open or available on a specific date unless verified by a live data source;
- avoid promising travel times as exact;
- remind users that weather, crowds, closures, transport disruption, and seasonal conditions can affect the final plan;
- allow Don to adjust the plan after receiving the enquiry;
- avoid unsafe or unrealistic combinations of distant destinations in limited tour time;
- respect walking pace, stairs, rest needs, group age, food preferences, and transport preferences where provided.

## 8. Availability/calendar rules

A visual calendar may indicate broad guidance such as weekends/public holidays being easier to accept, but it must never be presented as live availability unless a real availability source is implemented.

Hard-coded holiday lists are maintenance-sensitive. If retained, they must be documented in `TECH.md`, tested, and updated before they expire.

## 9. Enquiry and privacy rules

The enquiry form should collect only information useful to answer a tour enquiry, such as:

- preferred date;
- group size;
- hotel or starting area;
- desired tour length;
- mobility/walking pace;
- interests;
- food preferences where relevant;
- special requests.

Avoid requesting passport details, health diagnoses, payment-card information, or other unnecessary sensitive information.

The form must not imply that submission creates a reservation.

## 10. SEO and trust

SEO should support genuine search intent such as private Kyoto guide, licensed Kyoto guide, family-friendly Kyoto tour, senior-friendly Kyoto guide, and related location-based terms.

SEO work must not introduce unsupported claims, fake reviews, invented awards, misleading availability, keyword stuffing, or fabricated experience statistics.

Structured data, metadata, and visible copy must remain consistent.

## 11. Quality bar

A change is not complete solely because it renders correctly.

Before merge, changes should be checked for:

- factual/business-rule accuracy;
- mobile and desktop readability;
- accessibility basics;
- working contact paths;
- no accidental leakage of personal/internal information;
- no misleading booking or availability claims;
- build/type/lint health appropriate to the current toolchain;
- SEO metadata consistency;
- preservation of the calm, personal brand.

## 12. Change discipline

When changing business-facing content, identify whether the change is one of:

- cosmetic;
- UX;
- factual content;
- business rule;
- legal/privacy-sensitive content;
- technical maintenance.

Business-rule, legal/privacy-sensitive, pricing, payment, availability, and cancellation changes require explicit human review.

Major code modernisation should be separated from content/specification changes whenever practical so that regressions are easier to isolate.