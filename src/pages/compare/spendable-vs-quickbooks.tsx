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
        readTime='4 min read'
        h1='Spendable vs QuickBooks for Freelancers — Which Is Right for You?'
        lead='QuickBooks is accounting software. Spendable is a financial clarity tool. If you need invoicing, VAT returns, or payroll — QuickBooks. If you need to know what you can safely spend right now — Spendable.'
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='Try Spendable free'
        utmRef='seo-vs-quickbooks'
      />
      <RelatedPages
        links={[
          {
            href: '/compare/freelance-finance-spreadsheet-vs-app',
            label: 'Spreadsheet vs app',
            desc: 'A simpler starting point for comparing freelance finance tools.',
          },
          {
            href: '/compare/spendable-vs-ynab',
            label: 'Spendable vs YNAB',
            desc: 'Comparing two non-accounting approaches.',
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning',
            desc: "The tax reserve tracking that QuickBooks doesn't provide by default.",
          },
        ]}
      />
    </SEOPageLayout>
  );
}
