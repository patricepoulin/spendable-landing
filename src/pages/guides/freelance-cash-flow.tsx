import { Box, SimpleGrid, Text, HStack, VStack, Icon } from '@chakra-ui/react';
import {
  RiAlertLine,
  RiTimeLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiCheckLine,
} from 'react-icons/ri';
import {
  SEOPageLayout,
  ArticleHeader,
  SectionHeading,
  P,
  InlineCTA,
  FeatureList,
  RelatedPages,
} from '../../components/seo/SEOPageLayout';

export default function Page() {
  return (
    <SEOPageLayout
      meta={{
        title: 'Cash Flow Management for Freelancers',
        description:
          'Late-paying clients, irregular income, and surprise bills can all threaten cash flow. Here are the five systems that keep freelancers financially stable.',
        canonical: '/guides/freelance-cash-flow',
      }}
    >
      <ArticleHeader
        tag='Cash Flow Guide'
        readTime='6 min read'
        h1='Cash Flow Management for Freelancers'
        lead="Late-paying clients, feast-and-famine income, and unplanned expenses can all destabilise a freelance business that's otherwise healthy. Here are the systems that prevent cash flow from becoming a crisis."
      />

      <SectionHeading>Why freelancer cash flow is different</SectionHeading>
      <P>
        A salaried employee's cash flow is straightforward: money in on the same
        day each month, predictable bills, surplus or deficit. The variables are
        small.
      </P>
      <P>
        Freelancer cash flow is more complex. Income arrives in lumps — often
        delayed by 30, 60, or even 90 days after work is completed. Multiple
        income streams with different payment cycles mean money isn't
        predictable. Large invoices can create periods of false abundance
        followed by weeks of no income at all.
      </P>
      <P>
        The businesses that struggle aren't always the ones with low income —
        they're often the ones with unpredictable timing. A freelancer earning
        £60,000 a year can still face a cash crisis if three large invoices all
        pay in the same week and then nothing arrives for six weeks.
      </P>

      <SectionHeading>
        The three cash flow risks every freelancer faces
      </SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        {[
          {
            icon: RiTimeLine,
            title: 'Payment timing gaps',
            body: 'You complete work in March. The client pays in May. You have expenses in April. This 30–60 day gap between earning and receiving is the most common cash flow problem freelancers face.',
            color: '#4C5FD5',
            bg: '#eef0fb',
          },
          {
            icon: RiLineChartLine,
            title: 'Income volatility',
            body: "A £9,000 month followed by a £1,200 month isn't a business problem — it's a cash flow management challenge. Without a buffer, the lean month forces reactive decisions.",
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            icon: RiAlertLine,
            title: 'Unplanned outgoings',
            body: "Equipment failure, an unexpected professional cost, or a tax bill that's larger than expected can all arrive at the wrong moment. Without reserve, they become emergencies.",
            color: '#EB5757',
            bg: '#fef2f2',
          },
        ].map((item) => (
          <Box
            key={item.title}
            bg={item.bg}
            border='1px solid #E8E8E3'
            borderRadius='14px'
            p={5}
          >
            <Box
              w={9}
              h={9}
              borderRadius='9px'
              bg='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
              mb={3}
            >
              <Icon as={item.icon} color={item.color} boxSize='16px' />
            </Box>
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1.5}>
              {item.title}
            </Text>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
              {item.body}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <SectionHeading>System 1: Maintain a cash flow buffer</SectionHeading>
      <P>
        The most important cash flow tool is also the most straightforward: a
        buffer that covers 2–3 months of essential expenses, held in an
        easy-access savings account. This buffer is distinct from your tax
        reserve — it's specifically for bridging income gaps, not for paying
        HMRC.
      </P>
      <P>
        With a 2–3 month buffer in place, a slow month or a late payment becomes
        an inconvenience rather than a crisis. You pay your bills from the
        buffer and replenish it when the late payment eventually arrives.
      </P>
      <FeatureList
        items={[
          'Keep your buffer in a separate account — not your current account',
          'Target 2–3 months of essential expenses (rent, food, insurance, phone)',
          'Replenish it as a priority whenever you draw it down',
          "Never use it for tax payments — that's what the tax reserve is for",
          "Never use it for discretionary spending — it's emergency-only",
        ]}
      />

      <SectionHeading>System 2: Invoice earlier, chase faster</SectionHeading>
      <P>
        Most cash flow problems start with invoicing habits. Delaying an invoice
        by a week delays payment by a week. On 30-day payment terms, a week's
        delay compounds every month.
      </P>
      <VStack spacing={3} align='stretch' mb={6}>
        {[
          {
            title: 'Invoice immediately on completion',
            body: "Don't wait until the end of the month to batch invoices. Invoice the moment work is delivered or a milestone is hit. Every day of delay is a day added to your cash flow gap.",
          },
          {
            title: 'Use shorter payment terms than you think you need',
            body: 'If you currently invoice on 30-day terms, try 14 days for new clients. Many clients will pay within your stated terms — but only if the terms are clear and visible on the invoice.',
          },
          {
            title: "Chase invoices before they're due",
            body: "Send a friendly reminder 3–5 days before the due date. Most late payments aren't deliberate — the invoice just got lost. A gentle nudge before the due date prevents the awkward chasing-after-the-fact conversation.",
          },
          {
            title: 'Require deposits on large projects',
            body: "A 25–50% upfront deposit on significant projects solves two cash flow problems at once: it reduces your payment gap and it filters out clients who weren't serious in the first place.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack spacing={3} align='flex-start'>
              <Icon
                as={RiCheckLine}
                color='#4C5FD5'
                boxSize='14px'
                mt={0.5}
                flexShrink={0}
              />
              <Box>
                <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={0.5}>
                  {item.title}
                </Text>
                <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
                  {item.body}
                </Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>

      <InlineCTA
        headline='See your financial runway in real time'
        sub='Spendable shows exactly how many months you can cover your expenses — updated every time you log income or add a bill.'
        cta='See my financial runway'
        utmRef='seo-cash-flow-mid'
      />

      <SectionHeading>System 3: Know your runway at all times</SectionHeading>
      <P>
        Runway is the cash flow metric that matters most: how many months you
        can cover essential expenses from your current balance, assuming no new
        income arrives. It's the number that tells you when to get proactive.
      </P>
      <P>
        A healthy freelancer runway is 3–6 months. Below 2 months, you should be
        actively seeking new work regardless of how busy you currently are.
        Above 6 months, you may be holding cash that could be working harder.
      </P>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderLeft='4px solid #4C5FD5'
        borderRadius='0 12px 12px 0'
        px={5}
        py={5}
        mb={6}
      >
        <Text
          fontFamily="'Fraunces', Georgia, serif"
          fontSize='16px'
          color='#1C2B3A'
          fontWeight='700'
          mb={2}
        >
          Runway formula
        </Text>
        <Text fontSize='14px' color='#5a6a7a' lineHeight='1.7'>
          Safe to Spend ÷ Monthly Expenses = Runway in months
        </Text>
        <Text fontSize='13px' color='#8a9aaa' mt={2}>
          Spendable calculates this automatically and shows it on your
          dashboard. It updates every time you log income or add an expense.
        </Text>
      </Box>

      <SectionHeading>
        System 4: Separate your money into clear pots
      </SectionHeading>
      <P>
        One of the most practical cash flow improvements a freelancer can make
        costs nothing and takes 30 minutes: opening separate bank accounts for
        different purposes.
      </P>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={8}>
        {[
          {
            account: 'Current account',
            purpose: 'Day-to-day spending only',
            note: 'What you see here is truly yours to spend',
          },
          {
            account: 'Tax reserve savings',
            purpose: 'Your % set aside from every payment',
            note: 'Never touched except for tax bills',
          },
          {
            account: 'Cash flow buffer',
            purpose: '2–3 months of essential expenses',
            note: 'Emergency-only access',
          },
          {
            account: 'Upcoming bills pot',
            purpose: 'Annual/irregular known costs',
            note: 'Accountant, insurance, equipment',
          },
        ].map((pot) => (
          <Box
            key={pot.account}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <Text fontWeight='700' fontSize='13px' color='#1C2B3A' mb={0.5}>
              {pot.account}
            </Text>
            <Text fontSize='13px' color='#4C5FD5' fontWeight='600' mb={0.5}>
              {pot.purpose}
            </Text>
            <Text fontSize='12px' color='#8a9aaa'>
              {pot.note}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <SectionHeading>
        System 5: Smooth your income before you spend it
      </SectionHeading>
      <P>
        The spending decisions that create cash flow problems are usually made
        in response to a single good month. A large payment arrives, the balance
        looks healthy, and discretionary spending increases — without accounting
        for the quiet month that often follows.
      </P>
      <P>
        Income smoothing prevents this by basing spending decisions on a 6-month
        rolling average rather than the current balance. After a strong month,
        the average only moves slightly upward — not enough to justify a major
        lifestyle upgrade. After a quiet month, the average only moves slightly
        down — not enough to trigger panic cuts.
      </P>
      <P>
        Spendable uses income smoothing by default. Your safe-to-spend is always
        based on a 6-month rolling average, not this month's income — so your
        cash flow stays stable regardless of what just landed.
      </P>

      <SectionHeading>When a client is genuinely late</SectionHeading>
      <P>
        Despite good systems, sometimes clients pay late. Here's a
        straightforward escalation:
      </P>
      <FeatureList
        items={[
          "Day 1 after due date: friendly email reminder, assume it's an oversight",
          'Day 7: second email, politely reference the original due date and invoice number',
          'Day 14: phone call — harder to ignore than email, keeps relationship professional',
          "Day 21: formal letter before action, stating you'll pursue via small claims if unpaid within 7 days",
          'Day 28+: consider small claims court (UK: Money Claim Online for under £10,000; US: varies by state)',
          'Ongoing: add a late payment interest clause to all future contracts (UK law supports 8% + Bank of England base rate)',
        ]}
      />

      <InlineCTA
        headline='Know exactly what you can safely spend — always'
        sub='Spendable gives you a live safe-to-spend figure, runway calculation, and cash flow visibility. Free plan available.'
        cta='Start for free'
        utmRef='seo-cash-flow-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-emergency-fund',
            label: 'How much emergency fund does a freelancer need?',
            desc: 'The cash flow safety net — how much to hold and how to build it.',
          },
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'How a 6-month average prevents the feast-and-famine cash flow cycle.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'The 4-bucket system for managing irregular income and cash flow.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
