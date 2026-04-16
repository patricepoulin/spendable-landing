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
        tag='Budgeting Guide'
        readTime='6 min read'
        h1='Budgeting With Irregular Income: A Practical Guide'
        lead="When you can't predict next month's earnings, standard budgeting advice fails. Here are the strategies that actually work — built around averages, buffers, and a clear safe-to-spend number."
      />
      <InlineCTA
        headline='Know exactly what you can safely spend'
        sub='Spendable gives freelancers a real-time safe-to-spend figure — tax reserve, emergency buffer, and upcoming bills already deducted.'
        cta='Know my safe-to-spend'
        utmRef='seo-irregular-income'
      />
      <RelatedPages
        links={[
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'The core technique for budgeting with irregular income.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'The full 4-bucket system for irregular income.',
          },
          {
            href: '/guides/freelance-emergency-fund',
            label: 'How much emergency fund does a freelancer need?',
            desc: 'Your financial buffer against slow months.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
