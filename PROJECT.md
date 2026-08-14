# Kyoto Private Guide Site — Project Specification

Last updated: 2026-08-14

## 1. Purpose

This repository contains the public website for Don Tanaka's private guiding service.

The site has two jobs:

1. Explain the guide service, price, availability, and service boundaries quickly and clearly.
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

The site should present Don Tanaka as:

- a Kyoto-born private guide;
- a National Government Licensed Guide Interpreter;
- calm, practical, flexible, and easy to communicate with;
- suitable for families, senior travellers, first-time visitors, and international guests;
- focused on understandable cultural and historical context rather than information overload;
- primarily available on Saturdays, Sundays, and Japanese public holidays.

The tone should be personal and professional rather than luxury-agency, mass-tour, or overly promotional.

## 4. Core business rules

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

Avoid duplicating the same message across multiple sections.

## 6. Route examples

Route content should be simple and representative, not a catalogue.

The homepage should normally show about three representative sample routes rather than many route cards or an interactive route generator.

Sample routes must:

- be labelled as examples, not confirmed itineraries;
- avoid guaranteeing opening hours, travel times, reservations, or availability;
- be geographically realistic;
- allow Don to adjust the final route after enquiry;
- never imply that Don arranges transport, vehicles, hotels, or reservations as part of the guide service.

## 7. Availability

Do not use a large calendar unless there is a real operational need.

A simple statement such as “Primarily Saturdays, Sundays and Japanese public holidays” is preferred over a long calendar. It must not be presented as live availability.

## 8. Enquiry and privacy

The enquiry form should collect only information useful to answer a guide enquiry, such as:

- preferred date;
- group size;
- hotel or meeting area for pickup/meeting purposes only;
- desired tour length;
- mobility/walking pace;
- interests;
- special requests.

Do not request hotel booking details for the purpose of arranging accommodation. Do not request vehicle booking details for arranging transport.

The form must not imply that submission creates a reservation.

## 9. SEO and trust

SEO should support genuine search intent such as private Kyoto guide, licensed Kyoto guide, family-friendly Kyoto tour, senior-friendly Kyoto guide, and weekend Kyoto guide.

Do not introduce fake reviews, invented awards, unsupported claims, keyword stuffing, or misleading availability.

## 10. Definition of done

Before merge, changes should be checked for:

- business-rule accuracy;
- price visibility near the top of the page;
- clear weekend/public-holiday availability wording;
- clear guiding-only boundary;
- no hotel or vehicle arrangement claims;
- mobile and desktop readability;
- working enquiry/contact paths;
- no misleading booking or availability claims;
- build/type/lint/test health;
- preservation of the calm, personal brand.
