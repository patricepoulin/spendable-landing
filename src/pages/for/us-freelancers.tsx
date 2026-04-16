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
        tag='For US Freelancers'
        readTime='3 min read'
        h1='Financial Clarity for US Freelancers — Quarterly Taxes Made Simple'
        lead="Spendable tracks your quarterly estimated tax reserve, monitors your April/June/September/January deadlines, and tells you exactly what's safe to spend — in USD, in real time."
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='Start free'
        utmRef='for-us-cta'
      />
      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: 'How to calculate your reserve and handle quarterly estimates.',
          },
          {
            href: '/guides/how-much-to-save-for-taxes',
            label: 'How much to save for taxes',
            desc: 'US-specific tax percentages and quarterly payment guide.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting',
            desc: 'The budgeting framework for irregular income.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
