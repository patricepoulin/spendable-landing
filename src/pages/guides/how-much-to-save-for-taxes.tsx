import { SEOPageLayout, ArticleHeader, InlineCTA, RelatedPages } from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="Tax Guide"
        readTime="5 min read"
        h1="How Much Should You Save for Taxes as a Freelancer?"
        lead="The honest answer depends on your country, income level, and what expenses you can deduct. Here are the exact percentages — with worked examples — for UK, US, Canada, and Australia."
      />
      <InlineCTA
        headline="Know exactly what you can safely spend"
        sub="Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted."
        cta="Set my tax rate in Spendable"
        utmRef="seo-how-much-tax"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-tax-planning', label: 'Freelance tax planning guide', desc: 'The full step-by-step system for managing your tax reserve.' },
        { href: '/guides/self-employed-tax-uk', label: 'UK self-assessment: a complete guide', desc: 'UK-specific deadlines, rates, and payment schedules.' },
        { href: '/for/uk-freelancers', label: 'Spendable for UK freelancers', desc: 'See how Spendable tracks your UK tax reserve automatically.' }
      ]} />
    </SEOPageLayout>
  );
}
