import { SEOPageLayout, ArticleHeader, InlineCTA, RelatedPages } from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="Tax Guide · UK"
        readTime="8 min read"
        h1="UK Self-Assessment Tax: A Complete Guide for Freelancers"
        lead="Everything UK freelancers need to know about self-assessment — registration deadlines, payment dates, payments on account, and how to never be caught short by HMRC again."
      />
      <InlineCTA
        headline="Know exactly what you can safely spend"
        sub="Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted."
        cta="Track my self-assessment deadlines"
        utmRef="seo-uk-tax"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-tax-planning', label: 'Freelance tax planning: how much to set aside', desc: 'The complete guide to calculating your tax reserve.' },
        { href: '/for/uk-freelancers', label: 'Spendable for UK freelancers', desc: 'UK-specific features: self-assessment deadlines, GBP pricing.' },
        { href: '/guides/self-employed-budgeting', label: 'Self-employed budgeting', desc: 'The budgeting framework that works alongside your tax reserve.' }
      ]} />
    </SEOPageLayout>
  );
}
