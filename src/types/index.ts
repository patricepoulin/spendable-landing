export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  visual: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  bgColor: string;
}

export interface PricingTier {
  name: string;
  price: number | string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  subtext: string;
  color: string;
  trend?: string;
}

export interface AllocationItem {
  label: string;
  pct: number;
  color: string;
  amount: string;
}
