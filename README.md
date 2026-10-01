# Car Canvas Pakistan

MASTER WEBSITE GENERATION PROMPT

PAKISTAN AUTOMOTIVE SHOWROOM / CAR DISCOVERY PLATFORM

September–October 2026 Edition

01 — ROLE & PRIMARY OBJECTIVE

You are an elite automotive digital-experience architect, senior product designer, motion designer, UX engineer, frontend architect, and full-stack Next.js engineer.

Your task is to design and build a premium Pakistan-focused automotive showroom and vehicle-discovery platform.

This must NOT look like a generic car dealership website.

It must feel like a combination of:

premium automotive showroom

automotive marketplace

vehicle configurator

car discovery engine

comparison platform

digital showroom

immersive 3D automotive experience

modern mobile application translated into a world-class web experience

The experience should feel comparable in ambition to a combination of:

premium automotive manufacturer websites

modern automotive marketplaces

luxury digital showrooms

Apple-level product presentation

Flutter-style modern application interfaces

cinematic automotive launch experiences

The entire website must be Pakistan-first.

02 — MARKET SCOPE

Build the platform around the Pakistani automobile market as of September/October 2026.

The catalog must be capable of representing:

Main established manufacturers

Toyota

Suzuki

Honda

Kia

Hyundai

Changan

MG

Haval

BYD

Chery

Proton

Isuzu

JAC

Peugeot

DFSK

Prince

Expanding / newer automotive brands

Deepal

Jetour

Jaecoo

Omoda

iCAUR

Aion

Hyptec

Xpeng

Zeekr

ORA

Tank

BAIC

GWM

Geely

Nevo

GUGO

Honri

Seres

Kaiyi

Forthing

JMEV

Alektra

Nora

Riddara

JW Forland

Inverex

Dongfeng

and other brands/models currently represented in the Pakistani market

The system must be designed so that new brands and models can be added without changing the frontend architecture.

Do NOT create a static website containing only 10–20 cars.

Create a dynamic automotive data architecture capable of hundreds of models and thousands of variants.

Current market references show a very broad Pakistani catalog, including Toyota, BMW, Kia, MG, Suzuki, Hyundai, Mercedes-Benz, Changan, Honda, Haval, BYD, Jaecoo, Jetour, Xpeng, Zeekr, etc.

03 — IMPORTANT DATA RULE

Never fabricate vehicle specifications.

Every vehicle object should support:

{
  id,
  brand,
  model,
  generation,
  variant,
  year,
  category,
  bodyType,
  fuelType,
  transmission,
  engine,
  displacement,
  horsepower,
  torque,
  drivetrain,
  seatingCapacity,
  dimensions,
  groundClearance,
  bootSpace,
  batteryCapacity,
  electricRange,
  hybridType,
  chargingSpeed,
  safetyFeatures,
  driverAssistance,
  infotainment,
  exteriorFeatures,
  interiorFeatures,
  colors,
  price,
  priceRange,
  availabilityStatus,
  launchDate,
  bookingStatus,
  warranty,
  images,
  gallery,
  videos,
  specifications,
  description,
  highlights,
  pros,
  cons,
  officialSource,
  lastUpdated
}


If exact information is unavailable:

show Not available

show Call for price

show Coming soon

show Price pending

show Verify with dealer

Never invent specifications or prices.

04 — VEHICLE STATUS SYSTEM

Every vehicle must have a clear status:

AVAILABLE

Currently available in Pakistan.

NEWLY LAUNCHED

Recently launched.

UPCOMING

Expected to launch.

ELECTRIC

EV.

HYBRID

HEV/PHEV/other hybrid.

PREMIUM

Premium/luxury segment.

PERFORMANCE

Performance-oriented vehicle.

COMMERCIAL

Pickup, van, truck, commercial vehicle.

DISCONTINUED

Historical model.

IMPORTED

Imported/non-locally assembled.

Status badges should be animated but subtle.

05 — CORE TECHNOLOGY STACK

Use the latest stable versions available at implementation time.

Target stack:

Next.js 16.x

React 19.x compatible with the selected Next.js release

TypeScript

Tailwind CSS 4.x

Vite where appropriate for isolated tooling/components/packages

modern JavaScript

ESLint

modern component architecture

server components where appropriate

client components only where interaction requires them

Turbopack-compatible development

responsive architecture

semantic HTML

accessible UI

optimized image pipeline

Next.js should use the modern App Router architecture.

The September 2026 Next.js release line includes 16.3.x, with 16.3.8 listed as Active LTS on September 30, 2026.

Tailwind CSS should target the modern v4.x architecture; Tailwind CSS 4.3 introduced additional utility and styling capabilities in May 2026.

Vite should use the latest stable version available during implementation. The Vite ecosystem reached v8 in 2026 and subsequently shipped 8.1 and later releases.

06 — DESIGN LANGUAGE

Create a premium automotive design system.

Visual language:

cinematic

futuristic

luxurious

minimal

technical

sophisticated

high contrast

premium typography

large automotive photography

deep spatial layouts

glass surfaces used carefully

metallic-inspired UI details

subtle gradients

dramatic shadows

large typography

floating cards

responsive grids

immersive full-screen sections

Do NOT create:

generic Bootstrap-looking cards

old-fashioned dealership layouts

excessive rounded rectangles

cheap gradients

excessive neon

random animation

template-like sections

cluttered dashboards

07 — FLUTTER-INSPIRED COMPONENT LANGUAGE

The user specifically wants the visual/component philosophy of modern Flutter applications translated into web UI.

Use Flutter-inspired principles:

Material-style elevation concepts

floating action controls

bottom navigation concepts on mobile

adaptive layouts

modal sheets

draggable sheets

segmented controls

chips

cards

animated containers

expansion panels

carousels

tabs

navigation rails

floating buttons

interactive sliders

responsive surfaces

BUT:

Do not make the website look literally like a Material Design demo.

Blend Flutter-style interaction patterns with a premium automotive visual identity.

08 — GLOBAL NAVIGATION

Desktop navigation:

logo

Cars

Brands

SUVs

Sedans

EVs

Hybrids

Luxury

Compare

New Arrivals

Upcoming

Deals

Finance

Dealers

More

Primary CTA:

Explore Cars

Secondary CTA:

Compare Cars

Mobile:

Use a premium mobile navigation system.

Options:

bottom navigation

floating navigation

expandable menu

gesture-friendly navigation

Navigation should animate smoothly between states.

09 — HOMEPAGE

The homepage must be the most visually impressive part of the platform.

It should feel like entering a digital automotive showroom.

HERO SECTION

Create an immersive full-screen hero.

Minimum height:

min-height: 100svh;


Hero structure:

Layer 01

Full-screen automotive visual.

Layer 02

Dark cinematic gradient.

Layer 03

Animated atmospheric elements.

Layer 04

Vehicle.

Layer 05

Typography.

Layer 06

Interactive controls.

Layer 07

Vehicle metadata.

Layer 08

Scroll indicator.

10 — HERO CAROUSEL

Create a cinematic vehicle carousel.

Minimum:

5–8 hero vehicles.

Each slide should contain:

vehicle image

brand

model

tagline

starting price

engine/fuel information

CTA

secondary CTA

slide number

progress indicator

Example:

01 / 08

TOYOTA

COROLLA CROSS

Driven for more.

From PKR XXXXX

[Explore Vehicle]
[Compare]


Slides should support:

autoplay

drag

touch swipe

mouse drag

keyboard navigation

wheel interaction

swipe-up transition

swipe-down transition

next/previous controls

11 — HERO ANIMATION SYSTEM

Use advanced modern motion design.

Use:

GSAP

Framer Motion / Motion

CSS transforms

CSS scroll-driven animation where appropriate

WebGL/Three.js where justified

requestAnimationFrame for custom effects

Do NOT animate everything simultaneously.

Animation must follow a hierarchy.

Hero entrance

background fades in

atmosphere appears

vehicle enters

vehicle depth/parallax activates

headline reveals

metadata appears

buttons animate

navigation becomes active

Use:

opacity

translate

scale

clip-path

blur

perspective

depth

mask reveal

image displacement where appropriate

12 — 3D AUTOMOTIVE HERO

Where suitable, implement a 3D vehicle presentation using:

Three.js

React Three Fiber

Drei

Support:

mouse-based camera movement

touch-based camera movement

controlled vehicle rotation

lighting transitions

environment reflections

showroom floor

shadow plane

subtle camera dolly

scroll-based camera movement

If a real 3D model is unavailable:

DO NOT fabricate a fake 3D model.

Use:

high-resolution transparent vehicle photography

layered parallax

depth effects

CSS perspective

controlled image transforms

The fallback must still feel 3D.

13 — HERO SWIPE EXPERIENCE

On mobile, create a premium vertical interaction.

Swipe upward:

Hero
↓
Vehicle information
↓
Highlights
↓
Explore vehicle


Swipe sideways:

Vehicle 01
→ Vehicle 02
→ Vehicle 03


Use gesture physics.

The transition should feel:

fluid

tactile

premium

momentum-based

Avoid hard snapping unless necessary.

14 — HERO QUICK SEARCH

Place a floating vehicle discovery control over the hero.

Example:

What are you looking for?

[ Make / Model ]

[ Budget ]

[ Body Type ]

[ Fuel ]

[ Search Cars ]


Search should support:

instant suggestions

brand matching

model matching

fuzzy search

keyboard navigation

recent searches

popular searches

15 — DISCOVER CARS SECTION

Immediately after hero.

Headline:

Find Your Next Car

Interactive category chips:

All

Hatchback

Sedan

SUV

Crossover

Pickup

MPV

EV

Hybrid

Luxury

Performance

Commercial

Vehicle cards should support:

hover transformation

image zoom

vehicle tilt

price reveal

quick specs

favorite button

compare checkbox

quick view

view details

16 — VEHICLE CARD DESIGN

Vehicle cards should NOT be ordinary rectangular cards.

Create layered cards.

Structure:

┌──────────────────────────────┐
│ STATUS                       │
│                              │
│       VEHICLE IMAGE          │
│                              │
│   floating action buttons    │
├──────────────────────────────┤
│ BRAND                        │
│ MODEL                        │
│                              │
│ PKR XX,XXX,XXX               │
│                              │
│ 1.5L • Automatic • Petrol    │
│                              │
│ [Explore]     [Compare]      │
└──────────────────────────────┘


Hover:

image scale

card elevation

subtle rotation

spec reveal

CTA slide

lighting shift

17 — FEATURED BRANDS

Create a horizontally scrollable brand ecosystem.

Display brand logos.

Interaction:

Hover/tap brand.

Then:

brand logo enlarges

background changes

available vehicles appear

brand description appears

CTA appears

Example:

Toyota
Honda
Suzuki
Kia
Hyundai
Changan
MG
BYD
Haval
BMW
Mercedes-Benz
Audi
...


18 — BODY TYPE EXPERIENCE

Create a visually immersive section:

SEDANS
SUVs
HATCHBACKS
CROSSOVERS
PICKUPS
MPVs
EVs


Use large vehicle imagery.

On hover:

category expands

background vehicle changes

stats animate

model count updates

19 — ELECTRIC VEHICLE SECTION

Create a futuristic EV section.

Visual style:

clean

minimal

futuristic

technology-focused

Display:

EV range

battery capacity

charging time

drivetrain

power

price

Use animated energy-flow visuals.

Example:

EV RANGE

██████████████████░░

520 KM

Fast Charging
10–80%


20 — NEWLY LAUNCHED

Create an animated launch rail.

Each vehicle:

NEW

MODEL

Launch September 2026

[Explore]


Use:

horizontal drag

magnetic cursor

scroll snap

image transition

date/status badge

September 2026 market listings include newly launched vehicles such as Chery Q, iCAUR V27, iCAUR V23 and Jetour T1, among others.

21 — UPCOMING VEHICLES

Create a dedicated cinematic timeline.

Example:

COMING SOON

OCT 2026
CHANGAN LUMIN

OCT 2026
GEELY EX2

OCT 2026
GEELY EX5

OCT 2026
AVATR 11

DEC 2026
DEEPAL S09


Each upcoming model should have:

expected launch period

brand

model

category

expected specs where verified

teaser image

notify-me CTA

Do not present expected dates as confirmed launch dates.

Current automotive-market listings include multiple vehicles expected across late 2026, so the UI should distinguish “upcoming/expected” from confirmed availability.

22 — PRICE DISCOVERY

Create an interactive price section.

Find cars by budget

Under 30 Lakh
30–50 Lakh
50–75 Lakh
75 Lakh–1 Crore
1–1.5 Crore
1.5–2 Crore
2 Crore+


Slider:

PKR 0 ─────────────── PKR 10 Crore+


As the slider moves:

vehicles update

cards animate

count updates

average price updates

23 — SMART CAR COMPARISON

Build a dedicated comparison system.

Users can select:

2 cars

3 cars

optionally 4 cars

Compare:

price

engine

power

torque

transmission

fuel economy

fuel type

drivetrain

dimensions

ground clearance

boot

seating

safety

ADAS

infotainment

warranty

EV range

battery

charging

Use animated comparison tables.

Differences should be visually emphasized without assigning a “winner” automatically.

24 — FINANCE CALCULATOR

Create an interactive Pakistan-focused financing interface.

Inputs:

vehicle price

down payment

tenure

interest/profit rate

Outputs:

monthly installment

total financing

total payable

down payment

estimated schedule

Clearly label calculations as estimates.

Currency:

PKR

Use Pakistani number formatting.

Example:

PKR 8,499,000


not:

$8,499,000


25 — ON-ROAD PRICE EXPERIENCE

Create a dedicated calculator architecture for:

ex-factory price

registration

taxes

freight

insurance

other configurable charges

Do not hard-code tax assumptions permanently.

Build the pricing engine so tax/rate rules can be updated independently.

26 — DEALER FINDER

Create:

city selector

province selector

dealer cards

map

contact

directions

phone

WhatsApp CTA

opening hours

Cities should include major Pakistani cities such as:

Lahore

Karachi

Islamabad

Rawalpindi

Faisalabad

Multan

Peshawar

Quetta

Gujranwala

Sialkot

Hyderabad

Bahawalpur

Sargodha

Abbottabad

other supported cities

27 — VEHICLE DETAIL PAGE

Every model must have its own premium detail page.

Structure:

Hero

Full-screen vehicle.

Overview

Key Specs

Exterior

Interior

Performance

Safety

Technology

Variants

Colors

Pricing

Finance

Comparison

Gallery

Video

Dealer CTA

Similar Cars

28 — VEHICLE CONFIGURATOR

Where data/assets allow, create a configurator.

Users can select:

exterior color

interior

trim

wheels

variant

Update the displayed vehicle dynamically.

Use:

crossfade

image morph

lighting changes

animated swatches

zoom

29 — SCROLL EXPERIENCE

The homepage should feel like a continuous automotive story.

Use:

scroll-triggered reveals

sticky vehicle sections

pinned content

horizontal scroll sections

parallax

scale transitions

image masking

text choreography

progressive blur

depth transitions

Use scroll-driven animation responsibly.

Respect:

prefers-reduced-motion


30 — CURSOR EXPERIENCE

Desktop:

Create an optional premium cursor system.

Cursor states:

DEFAULT
VIEW
DRAG
EXPLORE
COMPARE
OPEN


Examples:

Hover vehicle:

VIEW


Drag carousel:

DRAG


Compare:

+


Do not allow custom cursor behavior to interfere with usability.

Disable/reduce it on touch devices.

31 — PAGE ARCHITECTURE

Build at minimum:

PAGE 01

Home

PAGE 02

All Cars / Vehicle Explorer

PAGE 03

Vehicle Detail

PAGE 04

Brands

PAGE 05

Compare

PAGE 06

New & Upcoming

PAGE 07

EV Hub

PAGE 08

Finance / Calculator

PAGE 09

Dealers

The architecture must allow future pages without redesigning the core system.

32 — RESPONSIVE DESIGN

Desktop:

1440px+

1920px+

ultrawide

Laptop:

1280px

1440px

Tablet:

768px+

landscape

portrait

Mobile:

320px+

375px

390px

414px

430px+

Every animation must have mobile-specific behavior.

Do NOT simply shrink desktop.

33 — MOBILE EXPERIENCE

Mobile should feel like a native automotive app.

Use:

bottom navigation

swipe cards

bottom sheets

full-screen vehicle previews

sticky CTA

gesture navigation

touch-friendly controls

haptic-like visual feedback

expandable specification panels

Mobile hero:

FULL SCREEN
↓
SWIPE
↓
NEXT VEHICLE


34 — PERFORMANCE

Despite heavy animation, maintain excellent performance.

Use:

lazy loading

dynamic imports

route-level code splitting

responsive images

AVIF/WebP

preload only critical assets

intersection observers

animation cleanup

GPU-friendly transforms

avoid layout thrashing

avoid excessive DOM nodes

defer noncritical 3D

progressive image loading

Never sacrifice performance merely to add animation.

35 — ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

visible focus

ARIA labels

accessible dialogs

accessible carousels

reduced-motion support

proper contrast

screen-reader-friendly specs

accessible buttons

touch targets

36 — SEO

Every vehicle should have SEO metadata.

Generate:

title

description

canonical

Open Graph

Twitter metadata

structured data

Vehicle/Product schema where appropriate

Breadcrumb schema

Organization schema

Example:

Pakistan Cars | Compare Prices, Specs & Models


Vehicle URLs:

/cars/toyota/corolla
/cars/honda/civic
/cars/byd/atto-3
/cars/kia/sportage-l


37 — DATA ARCHITECTURE

Do NOT embed the entire vehicle catalog directly inside React components.

Separate:

/components
/data
/lib
/types
/hooks
/config
/public


Example:

data/
  brands.ts
  vehicles.ts
  variants.ts
  categories.ts
  cities.ts
  finance.ts


Later this should be replaceable with:

CMS

database

API

admin dashboard

without rebuilding the frontend.

38 — ADMIN-READY ARCHITECTURE

Prepare the system for an admin panel.

Admin should eventually be able to:

add brand

add model

add variant

update price

update specs

upload images

mark new

mark upcoming

mark discontinued

update launch status

update availability

update dealer

update finance data

39 — VISUAL QUALITY STANDARD

The final output must look like a professionally funded automotive technology startup.

Not:

student project
template website
basic dealership
generic React dashboard


It should communicate:

Premium
Fast
Modern
Automotive
Trustworthy
Technical
Cinematic
Pakistani


40 — FINAL IMPLEMENTATION RULE

Do not stop after creating the homepage shell.

Build the complete design system first.

Then build:

navigation

hero

vehicle data architecture

vehicle cards

filters

brand explorer

categories

new arrivals

upcoming vehicles

EV hub

comparison

finance

dealers

vehicle detail pages

responsive behavior

accessibility

SEO

performance optimization

Every section must feel like part of the same automotive product ecosystem.

The result must be production-oriented, scalable, responsive, data-driven, animation-rich, and visually exceptional.

END OF SEGMENT 01.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://auto-discovery-pk.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a3d30f42-8fa0-414f-9ac1-79dac18ebf3c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
