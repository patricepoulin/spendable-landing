import { SEOPageLayout, ArticleHeader, InlineCTA, RelatedPages } from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="For Contractors"
        readTime="3 min read"
        h1="Financial Clarity for Contractors — Know Your Safe-to-Spend Between Contracts"
        lead="Gaps between contracts, IR35 complexity, and variable day rates make financial planning hard. Spendable gives contractors a real-time safe-to-spend that accounts for tax, buffer, and runway."
      />
      <InlineCTA
        headline="Know exactly what you can safely spend"
        sub="Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted."
        cta="Start free"
        utmRef="for-contractors-cta"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-tax-planning', label: 'Contractor tax planning', desc: 'How to calculate your tax reserve between contracts.' },
        { href: '/guides/freelance-emergency-fund', label: 'Emergency fund for contractors', desc: 'How much buffer to hold against contract gaps.' },
        { href: '/for/uk-freelancers', label: 'Spendable for UK freelancers', desc: 'UK-specific features for self-employed contractors.' }
      ]} />
    </SEOPageLayout>
  );
}
