# Spendable — Landing Page

Marketing site for [Spendable](https://spendable.finance) — financial clarity for freelancers with irregular income.

Deployed at **spendable.finance** · App at **app.spendable.finance**

---

## Tech Stack

- React 18 + TypeScript + Vite
- Chakra UI
- Fraunces (display) + DM Sans (body) via Google Fonts

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── LegalModal.tsx  # Terms, Privacy, Security, Cookies
│   └── ui/
│       └── DashboardMockup.tsx  # Animated app preview in hero
├── data/
│   └── mockData.ts         # All copy and pricing data
├── types/
└── LandingPage.tsx
```

## Getting Started

```bash
yarn install
yarn dev     # http://localhost:3000
```

## Deployment

Deployed via Vercel. The root domain (`spendable.finance`) and `www.spendable.finance` both point here.

All "Get started" CTAs link to `https://app.spendable.finance`.

## Updating Content

All marketing copy and pricing data lives in `src/data/mockData.ts`. Edit there to update features, pricing tiers, pain points, and how-it-works steps without touching component code.

Pricing tier features and prices are defined in the `pricingTiers` array — update there if plans change.
