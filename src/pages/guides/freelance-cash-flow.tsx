import { SEOPageLayout, ArticleHeader, InlineCTA, RelatedPages } from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="Cash Flow Guide"
        readTime="5 min read"
        h1="Cash Flow Management for Freelancers"
        lead="Late-paying clients, feast-and-famine income, and surprise bills can all threaten your cash flow. Here are the practical systems that keep freelancers financially stable."
      />
      <InlineCTA
        headline="Know exactly what you can safely spend"
        sub="Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted."
        cta="See my financial runway"
        utmRef="seo-cash-flow"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-emergency-fund', label: 'How much emergency fund does a freelancer need?', desc: 'Your cash flow safety net — how much to hold and where.' },
        { href: '/guides/self-employed-budgeting', label: 'Self-employed budgeting framework', desc: 'The 4-bucket system for managing irregular income.' },
        { href: '/guides/irregular-income-budgeting', label: 'Budgeting with irregular income', desc: 'Strategies specifically for unpredictable monthly earnings.' }
      ]} />
    </SEOPageLayout>
  );
}
