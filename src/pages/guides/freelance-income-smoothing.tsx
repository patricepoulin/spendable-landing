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
        tag='Income Guide'
        readTime='4 min read'
        h1='What Is Income Smoothing — And Why Freelancers Need It'
        lead="A 6-month rolling average protects you from the feast-and-famine cycle. Here's exactly how it works and why your spending decisions should never be based on this month's income."
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='See income smoothing in action'
        utmRef='seo-smoothing'
      />
      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: 'How income smoothing helps you set a more accurate tax reserve.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'The 4-bucket system that uses smoothed income as its foundation.',
          },
          {
            href: '/guides/irregular-income-budgeting',
            label: 'Budgeting with irregular income',
            desc: "More strategies for when you can't predict next month's earnings.",
          },
        ]}
      />
    </SEOPageLayout>
  );
}
