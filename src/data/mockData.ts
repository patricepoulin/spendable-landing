import type {
  PainPoint,
  HowItWorksStep,
  Feature,
  PricingTier,
  TrustItem,
  DashboardMetric,
  AllocationItem,
} from '../types';

// ─── Dashboard mockup data ────────────────────────────────────────────────────

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: 'Safe to Spend',
    value: '$3,840',
    subtext: 'After reserves & taxes',
    color: '#27AE60',
    trend: '↑ Healthy',
  },
  {
    label: 'Runway',
    value: '6.2 mo',
    subtext: 'At current spend rate',
    color: '#4C5FD5',
    trend: '',
  },
  {
    label: 'Tax Reserve',
    value: '$2,100',
    subtext: 'Set aside this year',
    color: '#D4A800',
    trend: '',
  },
  {
    label: 'Smoothed Income',
    value: '$7,200',
    subtext: '6-month rolling avg',
    color: '#8B5CF6',
    trend: '',
  },
];

export const allocationItems: AllocationItem[] = [
  { label: 'Safe to Spend', pct: 49, color: '#27AE60', amount: '$3,840' },
  { label: 'Tax Reserve', pct: 27, color: '#F2C94C', amount: '$2,100' },
  { label: 'Buffer', pct: 16, color: '#4C5FD5', amount: '$1,250' },
  { label: 'Bills Due', pct: 8, color: '#EB5757', amount: '$630' },
];

export const incomeSparkData = [
  3200, 5800, 2100, 7400, 6200, 4900, 8100, 5400, 7200,
];

// ─── Pain points ─────────────────────────────────────────────────────────────

export const painPoints: PainPoint[] = [
  {
    icon: '📉',
    title: 'Income hits differently every month',
    description:
      'A $12k month followed by a $1.5k month makes it impossible to know what you can actually afford.',
  },
  {
    icon: '😰',
    title: 'Tax time is a nightmare',
    description:
      "You spend freely all year then get hit with a surprise tax bill. Sound familiar? You're not alone.",
  },
  {
    icon: '🤷',
    title: '"Can I spend this?" is unanswerable',
    description:
      "You check your bank balance but that number lies. It doesn't account for tax, emergencies, or slow months ahead.",
  },
];

// ─── How it works ─────────────────────────────────────────────────────────────

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Log your income',
    description:
      'Record each payment as it comes in — client projects, contracts, royalties. Takes 10 seconds per entry.',
    visual: '💰',
  },
  {
    step: 2,
    title: 'Set your rules once',
    description:
      'Tell Spendable your tax rate, how many months of buffer you want, and your recurring expenses.',
    visual: '⚙️',
  },
  {
    step: 3,
    title: 'Get your number',
    description:
      'Every day, Spendable shows you exactly one number: how much you can safely spend right now.',
    visual: '✅',
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    icon: '〜',
    title: 'Income Smoothing',
    description:
      'A 6-month rolling average irons out feast-or-famine swings so your decisions are based on reality, not your best month.',
    accentColor: '#4C5FD5',
    bgColor: '#eef0fb',
  },
  {
    icon: '🧾',
    title: 'Auto Tax Reserve',
    description:
      'Spendable automatically sets aside the right percentage of every payment. No more surprise tax bills — ever.',
    accentColor: '#D4A800',
    bgColor: '#fefae8',
  },
  {
    icon: '🛡️',
    title: 'Emergency Buffer',
    description:
      'Lock away 3–6 months of expenses in your calculations so you never accidentally spend your safety net.',
    accentColor: '#27AE60',
    bgColor: '#eafaf1',
  },
  {
    icon: '🛤️',
    title: 'Runway Prediction',
    description:
      'See exactly how many months you can sustain your lifestyle — critical when deciding whether to take that low-paying project.',
    accentColor: '#8B5CF6',
    bgColor: '#f5f3ff',
  },
  {
    icon: '📊',
    title: '6-Month Forecast',
    description:
      'Project your income, expenses, and safe-to-spend forward six months based on your real history.',
    accentColor: '#EB5757',
    bgColor: '#fef2f2',
  },
  {
    icon: '💯',
    title: 'Confidence Score',
    description:
      'A 0–100 score based on runway, tax coverage, buffer health, and income consistency. Know your financial fitness at a glance.',
    accentColor: '#0EA5E9',
    bgColor: '#f0f9ff',
  },
];

// ─── Trust ────────────────────────────────────────────────────────────────────

export const trustItems: TrustItem[] = [
  {
    icon: '🔒',
    title: 'Your data stays yours',
    description:
      'All financial calculations happen client-side. We never sell your data or share it with third parties.',
  },
  {
    icon: '🏦',
    title: 'No bank linking required',
    description:
      'Spendable works without connecting your accounts. Manual entry keeps you in full control.',
  },
  {
    icon: '📐',
    title: 'Transparent math',
    description:
      'Every number is explained. See exactly how safe-to-spend, runway, and tax reserve are calculated.',
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description:
      'For freelancers just getting started with cash flow awareness.',
    features: [
      'Safe-to-spend calculation',
      'Tax reserve tracking',
      'Financial confidence score',
      'Up to 5 income entries',
      'Up to 3 recurring expenses',
      'Up to 3 upcoming expenses',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 9,
    period: 'month',
    description: 'For serious freelancers who want full financial clarity.',
    features: [
      'Unlimited income & expense tracking',
      '6-month financial forecast',
      'Tax Tracker with payment schedule',
      'CSV & XLSX export',
      'Income smoothing & runway analysis',
      'Unlimited upcoming expenses',
      '30-day data export after cancellation',
      'USD, GBP, EUR, CAD & AUD support',
      'Priority support',
    ],
    cta: 'Start free',
    highlighted: true,
    badge: 'Most popular',
  },
];
