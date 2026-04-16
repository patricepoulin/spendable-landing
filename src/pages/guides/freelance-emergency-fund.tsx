import {
  SEOPageLayout,
  ArticleHeader,
  InlineCTA,
  RelatedPages,
} from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag='Savings Guide'
        readTime='4 min read'
        h1='How Much Emergency Fund Does a Freelancer Need?'
        lead="The standard advice says 3 months. For freelancers, that's often not enough. Here's how to calculate your real number based on your income volatility and monthly costs."
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='Calculate my emergency buffer'
        utmRef='seo-emergency-fund'
      />
      <RelatedPages
        links={[
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'How the emergency buffer fits into the 4-bucket framework.',
          },
          {
            href: '/guides/freelance-cash-flow',
            label: 'Cash flow management for freelancers',
            desc: 'How to maintain liquidity even when clients pay late.',
          },
          {
            href: '/guides/irregular-income-budgeting',
            label: 'Budgeting with irregular income',
            desc: 'Strategies for the lean months every freelancer faces.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
