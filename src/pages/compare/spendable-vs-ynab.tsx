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
        tag='Comparison'
        readTime='5 min read'
        h1='Spendable vs YNAB for Freelancers — Which Is Better?'
        lead="YNAB is built around zero-based budgeting with a fixed salary in mind. Spendable is built for irregular income, automatic tax reserves, and the specific needs of self-employed people. Here's the honest difference."
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='Try Spendable free'
        utmRef='seo-vs-ynab'
      />
      <RelatedPages
        links={[
          {
            href: '/compare/freelance-finance-spreadsheet-vs-app',
            label: 'Spreadsheet vs app for freelance finance',
            desc: "Still using a spreadsheet? Here's when to switch.",
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: "The feature YNAB doesn't have: real-time tax reserves.",
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'The budgeting method built for irregular income.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
