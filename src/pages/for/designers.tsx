import { SEOPageLayout, ArticleHeader, InlineCTA, RelatedPages } from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="For Freelance Designers"
        readTime="3 min read"
        h1="Financial Clarity for Freelance Designers"
        lead="Retainers, project work, and one-off commissions create an unpredictable income pattern. Spendable smooths out the variance and gives you a single number: what you can safely spend today."
      />
      <InlineCTA
        headline="Know exactly what you can safely spend"
        sub="Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted."
        cta="Start free"
        utmRef="for-designers-cta"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-income-smoothing', label: 'Income smoothing for freelancers', desc: 'How to even out project-based income swings.' },
        { href: '/guides/self-employed-budgeting', label: 'Self-employed budgeting', desc: 'The 4-bucket framework for creative freelancers.' },
        { href: '/guides/freelance-tax-planning', label: 'Freelance tax planning', desc: 'Tax planning when income arrives in lumps.' }
      ]} />
    </SEOPageLayout>
  );
}
