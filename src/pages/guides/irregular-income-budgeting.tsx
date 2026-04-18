import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import {
  RiLineChartLine,
  RiAlertLine,
  RiShieldCheckLine,
  RiCheckLine,
  RiArrowRightLine,
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
        title: 'Budgeting With Irregular Income: A Practical Guide',
        description:
          "Standard budgeting advice assumes fixed income. Here are the strategies that actually work when you can't predict next month's earnings.",
        canonical: '/guides/irregular-income-budgeting',
      }}
    >
      <ArticleHeader
        tag='Budgeting Guide'
        readTime='6 min read'
        h1='Budgeting With Irregular Income: A Practical Guide'
        lead="Standard budgeting advice assumes you know what's coming in next month. When you don't, those frameworks break. Here are the strategies that actually work when income changes every month."
      />

      <SectionHeading>
        Why standard budgeting fails with irregular income
      </SectionHeading>
      <P>
        The 50/30/20 rule. Zero-based budgeting. Monthly spending plans. All of
        these share a single assumption: that your income next month will be
        roughly the same as last month. Divide the expected income into
        categories, track against the plan, adjust as needed.
      </P>
      <P>
        Freelance income doesn't work this way. You might earn £1,800 in
        February, £7,400 in March, and £2,100 in April. A budget built in
        January is obsolete by the first week of February when a large invoice
        clears unexpectedly — or by March when a project you'd counted on gets
        delayed.
      </P>
      <P>
        The solution isn't to try harder at traditional budgeting. It's to use a
        framework designed for variance rather than one that fights it.
      </P>

      <SectionHeading>
        Principle 1: Budget against your average, not your latest payment
      </SectionHeading>
      <P>
        The single most important shift for irregular-income budgeting: stop
        making spending decisions based on your current bank balance and start
        making them based on your rolling average income.
      </P>
      <P>
        Your 6-month rolling average is your real earning power. If that average
        is £4,200/month, that's your budget — regardless of whether this month
        brought £1,400 or £8,900. The large month builds reserves. The small
        month draws on them. Your spending stays stable.
      </P>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <Box px={5} py={4} bg='#f8fafc' borderBottom='1px solid #E8E8E3'>
          <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
            Same income, two different budgeting approaches
          </Text>
        </Box>
        <Box overflowX='auto'>
          <Table size='sm'>
            <Thead bg='#f8fafc'>
              <Tr>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Month
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Income
                </Th>
                <Th py={3} fontSize='11px' color='#EB5757'>
                  Reactive budget
                </Th>
                <Th py={3} fontSize='11px' color='#4C5FD5'>
                  Average-based budget
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                [
                  'Jan',
                  '£4,800',
                  '£2,880 (60% of income)',
                  '£2,500 (avg-based)',
                ],
                ['Feb', '£1,400', '£840 — stress, cut back', '£2,500 — stable'],
                [
                  'Mar',
                  '£7,200',
                  '£4,320 — overspend',
                  '£2,500 — builds reserve',
                ],
                ['Apr', '£2,100', '£1,260 — anxiety', '£2,500 — stable'],
                [
                  'May',
                  '£6,100',
                  '£3,660 — overspend again',
                  '£2,500 — builds reserve',
                ],
                ['Jun', '£3,400', '£2,040 — uncertain', '£2,500 — stable'],
              ].map(([m, income, reactive, avg]) => (
                <Tr key={m} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='600'>
                    {m}
                  </Td>
                  <Td py={3} fontSize='13px' color='#27AE60' fontWeight='600'>
                    {income}
                  </Td>
                  <Td py={3} fontSize='13px' color='#EB5757'>
                    {reactive}
                  </Td>
                  <Td py={3} fontSize='13px' color='#4C5FD5'>
                    {avg}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box px={5} py={3} bg='#f8fafc' borderTop='1px solid #E8E8E3'>
          <Text fontSize='12px' color='#5a6a7a'>
            6-month total: £25,000 · Average: £4,166/mo · After 28% tax: ~£3,000
            · Budget ≈ £2,500/mo
          </Text>
        </Box>
      </Box>

      <SectionHeading>
        Principle 2: Separate decisions from income events
      </SectionHeading>
      <P>
        One of the most important mental habits in irregular-income budgeting:
        never make a significant financial decision in the first 48 hours after
        a large payment arrives.
      </P>
      <P>
        A large invoice clearing feels like abundance. It triggers the urge to
        upgrade, invest, spend on things you've been deferring. Most of those
        decisions, made at that moment, are responses to a transient peak in
        your balance — not to your actual financial position.
      </P>
      <P>
        Wait 48 hours. Let the money settle into your framework: tax reserve
        takes its percentage, the buffer is assessed, upcoming bills are
        checked. What remains is your safe-to-spend — and only that number
        should drive spending decisions.
      </P>

      <SectionHeading>
        Principle 3: Cover fixed costs first, flex the rest
      </SectionHeading>
      <P>
        Not all expenses are equal when income is uncertain. The key is
        understanding which costs are non-negotiable and ensuring those are
        always covered before any discretionary spending happens.
      </P>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='14px' p={5}>
          <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={3}>
            Non-negotiable (always cover first)
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Rent or mortgage',
              'Utility bills',
              'Food',
              'Insurance (health, professional)',
              'Minimum debt payments',
              'Tax reserve transfers',
            ].map((item) => (
              <HStack key={item} spacing={2}>
                <Icon
                  as={RiCheckLine}
                  color='#EB5757'
                  boxSize='13px'
                  flexShrink={0}
                />
                <Text fontSize='13px' color='#475569'>
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
        <Box
          bg='#eef0fb'
          border='1px solid rgba(76,95,213,0.2)'
          borderRadius='14px'
          p={5}
        >
          <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={3}>
            Flexible (adjust with income)
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Dining out and entertainment',
              'Clothing and personal items',
              'Holidays and travel',
              'Subscriptions beyond essentials',
              'Home improvements',
              'Equipment upgrades',
            ].map((item) => (
              <HStack key={item} spacing={2}>
                <Icon
                  as={RiArrowRightLine}
                  color='#4C5FD5'
                  boxSize='13px'
                  flexShrink={0}
                />
                <Text fontSize='13px' color='#475569'>
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <SectionHeading>
        Principle 4: Set a monthly floor — not just a budget
      </SectionHeading>
      <P>
        A budget is what you plan to spend. A floor is the minimum you must
        spend to maintain your life and business. The gap between them is your
        true flex budget.
      </P>
      <P>
        Calculate your monthly floor by adding up only the non-negotiables:
        rent, utilities, food, insurance, tax reserve transfers. For most UK
        freelancers this is £1,400–£2,500/month. For US freelancers,
        $1,800–$3,500.
      </P>
      <P>
        Once you know your floor, you know the minimum income level you must hit
        each month to avoid drawing on your buffer. Any income above the floor
        builds reserves and funds discretionary spending — in that order.
      </P>

      <InlineCTA
        headline='Spendable calculates your floor automatically'
        sub='Add your recurring expenses and Spendable shows your monthly baseline — so you always know the minimum your income needs to cover.'
        cta='Know my safe-to-spend'
        utmRef='seo-irregular-income-mid'
      />

      <SectionHeading>
        Principle 5: Build a 3-month buffer before anything else
      </SectionHeading>
      <P>
        Before investing, before upgrading your lifestyle, before anything —
        build a 3-month cash buffer. This single step removes the anxiety that
        makes irregular income feel precarious. When the buffer exists, a bad
        month is just a bad month. When it doesn't, it's a crisis.
      </P>
      <FeatureList
        items={[
          'Calculate your floor: minimum monthly essential expenses',
          'Multiply by 3 (or more if your income is highly volatile)',
          'Open a separate easy-access savings account labelled "Cash Buffer"',
          'Allocate 10–15% of every payment to this account until the target is reached',
          'Once full, maintain it — replenish as a priority whenever you draw it down',
          'Don\'t count this as part of your "savings" or general balance',
        ]}
      />

      <SectionHeading>Practical setup: what to do this week</SectionHeading>
      <P>
        Getting this right doesn't require a perfect system from day one. Here's
        a practical starting sequence:
      </P>
      <VStack spacing={3} align='stretch' mb={8}>
        {[
          {
            step: '1',
            title: 'Calculate your 6-month average income',
            body: 'Add up the last 6 months of income and divide by 6. This is your monthly budget basis — write it down.',
          },
          {
            step: '2',
            title: 'Calculate your monthly floor',
            body: 'List every non-negotiable expense. Add them up. This is your minimum monthly requirement.',
          },
          {
            step: '3',
            title: 'Open two separate savings accounts',
            body: 'One for tax reserve (X% of every payment), one for cash buffer (10–15% of every payment until target is reached).',
          },
          {
            step: '4',
            title: 'Set your discretionary budget',
            body: '6-month average − tax reserve − floor expenses = your monthly flex budget. This is what you actually have to spend on everything else.',
          },
          {
            step: '5',
            title: 'Review monthly — not more, not less',
            body: "Check your average once a month. Adjust your budget if it's moved significantly. Don't obsess over weekly fluctuations.",
          },
        ].map((item) => (
          <HStack key={item.step} spacing={4} align='flex-start'>
            <Box
              w={8}
              h={8}
              borderRadius='full'
              bg='#4C5FD5'
              color='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexShrink={0}
              fontWeight='700'
              fontSize='13px'
              fontFamily="'Fraunces', Georgia, serif"
            >
              {item.step}
            </Box>
            <Box>
              <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={0.5}>
                {item.title}
              </Text>
              <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
                {item.body}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      <SectionHeading>How Spendable implements all of this</SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        p={5}
        mb={6}
      >
        <P>
          Rather than asking you to manually calculate rolling averages,
          maintain multiple spreadsheet tabs, and remember to transfer
          percentages — Spendable does all of it automatically.
        </P>
        <FeatureList
          items={[
            '6-month rolling average updated with every income entry',
            'Tax reserve calculated automatically at your chosen rate',
            'Cash buffer (emergency buffer) set in months and deducted from safe-to-spend',
            "Upcoming bills tracked and deducted before showing what's available",
            'Runway shown in months — how long you can cover the floor with current balance',
            'Income floor setting for guaranteed/retainer income',
          ]}
        />
      </Box>

      <InlineCTA
        headline='Budget for irregular income without the spreadsheet'
        sub='Spendable tracks your rolling average, reserves, and buffer automatically — so you always know what you can safely spend.'
        cta='Start for free'
        utmRef='seo-irregular-income-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'The core technique behind average-based budgeting for freelancers.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting: the 4-bucket framework',
            desc: 'The complete budgeting system built around irregular income.',
          },
          {
            href: '/guides/freelance-emergency-fund',
            label: 'How much emergency fund does a freelancer need?',
            desc: 'Sizing your cash buffer correctly for your income volatility.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
