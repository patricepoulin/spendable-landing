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
  RiBarChartBoxLine,
  RiArrowDownLine,
  RiArrowUpLine,
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
    <SEOPageLayout>
      <ArticleHeader
        tag='Income Guide'
        readTime='5 min read'
        h1='What Is Income Smoothing — And Why Freelancers Need It'
        lead="A 6-month rolling average protects you from the feast-and-famine cycle. Here's exactly how it works, why your spending decisions should never be based on this month's income, and how to apply it."
      />

      <SectionHeading>The feast-and-famine trap</SectionHeading>
      <P>
        Every freelancer knows the pattern. A strong month arrives — a big
        project lands, two invoices pay at once — and suddenly the bank balance
        looks healthy. It feels like permission to spend. Then a quiet month
        follows, or a client delays payment, and the same freelancer who felt
        flush two weeks ago is now stressed about bills.
      </P>
      <P>
        This isn't a discipline problem. It's a data problem. When you use your
        bank balance as a spending signal, you're reacting to noise. Income
        smoothing replaces the noise with the signal: your true earning capacity
        over time.
      </P>

      <SectionHeading>What income smoothing actually means</SectionHeading>
      <P>
        Income smoothing is simply taking a rolling average of your income over
        the last 3–6 months and using <em>that</em> number — not this month's
        figure — as the basis for your spending decisions.
      </P>
      <P>
        If your last 6 months of income were £3,200 / £6,800 / £1,500 / £9,200 /
        £4,100 / £5,600, your smoothed monthly average is £5,066. That's your
        real earning power. Not £9,200. Not £1,500. £5,066.
      </P>

      {/* Visual: before vs after smoothing */}
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <Box px={5} py={4} bg='#f8fafc' borderBottom='1px solid #E8E8E3'>
          <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
            The same 6 months — two different mental models
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
                  Raw balance thinking
                </Th>
                <Th py={3} fontSize='11px' color='#4C5FD5'>
                  Smoothed thinking
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                [
                  'January',
                  '£3,200',
                  'Anxious, cut spending',
                  'Budget: £3,500',
                ],
                [
                  'February',
                  '£6,800',
                  'Relieved, spend more freely',
                  'Budget: £3,500',
                ],
                ['March', '£1,500', 'Panic, emergency mode', 'Budget: £3,500'],
                [
                  'April',
                  '£9,200',
                  'Spend freely, feel rich',
                  'Budget: £3,500',
                ],
                ['May', '£4,100', 'Back to normal?', 'Budget: £3,500'],
                ['June', '£5,600', 'Comfortable', 'Budget: £3,500'],
              ].map(([m, income, raw, smooth]) => (
                <Tr key={m} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='600'>
                    {m}
                  </Td>
                  <Td py={3} fontSize='13px' color='#27AE60' fontWeight='600'>
                    {income}
                  </Td>
                  <Td py={3} fontSize='13px' color='#EB5757'>
                    {raw}
                  </Td>
                  <Td py={3} fontSize='13px' color='#4C5FD5'>
                    {smooth}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box px={5} py={3} bg='#f8fafc' borderTop='1px solid #E8E8E3'>
          <Text fontSize='12px' color='#5a6a7a'>
            6-month total: £30,400 · Average: £5,066 · After 28% tax: £3,647 →
            smooth budget ≈ £3,500/mo
          </Text>
        </Box>
      </Box>

      <SectionHeading>Why 6 months is the right window</SectionHeading>
      <P>
        3 months is too short — one large project distorts the average. 12
        months is too long — it doesn't reflect recent income trends if your
        business is growing or contracting. 6 months hits the sweet spot: long
        enough to absorb variance, recent enough to be relevant.
      </P>
      <P>
        Spendable uses a 6-month rolling window by default. Every time you log a
        new income entry, the average updates — and so does your safe-to-spend
        figure.
      </P>

      <SectionHeading>How it interacts with your tax reserve</SectionHeading>
      <P>
        Income smoothing and tax reserves work together. Once you've calculated
        your smoothed monthly income, you deduct your tax percentage from it to
        find your real monthly spending power.
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
          The calculation
        </Text>
        <VStack spacing={1.5} align='stretch'>
          {[
            {
              label: '6-month average income',
              value: '£5,066/mo',
              color: '#27AE60',
            },
            {
              label: '− 28% tax reserve',
              value: '− £1,418/mo',
              color: '#D4A800',
            },
            {
              label: '− Recurring expenses',
              value: '− £1,200/mo',
              color: '#EB5757',
            },
            {
              label: '= Safe monthly budget',
              value: '≈ £2,450/mo',
              color: '#4C5FD5',
              bold: true,
            },
          ].map((row) => (
            <HStack key={row.label} justify='space-between'>
              <Text fontSize='14px' color='#5a6a7a'>
                {row.label}
              </Text>
              <Text
                fontSize='14px'
                fontWeight={row.bold ? '800' : '600'}
                color={row.color}
              >
                {row.value}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      <SectionHeading>
        The psychology: why this changes your behaviour
      </SectionHeading>
      <P>
        When you stop reacting to individual months and start spending against
        an average, something important shifts: financial decisions become
        boring in the best possible way.
      </P>
      <P>
        A £9,200 month doesn't feel like permission to splurge — you know your
        budget is still £2,450 this month, and the extra went into tax reserves
        and buffer. A £1,500 month doesn't feel like a crisis — your budget is
        still £2,450, covered by your buffer.
      </P>
      <P>
        The feast-and-famine emotional cycle disappears. You stop making large
        financial decisions in response to monthly noise.
      </P>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box
          bg='#fef2f2'
          border='1px solid rgba(235,87,87,0.2)'
          borderRadius='14px'
          p={5}
        >
          <HStack spacing={2} mb={3}>
            <Icon as={RiArrowDownLine} color='#EB5757' boxSize='16px' />
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              Without smoothing
            </Text>
          </HStack>
          <VStack spacing={2} align='stretch'>
            {[
              'Spending varies wildly month to month',
              'Good months feel like permission to spend',
              'Bad months trigger anxiety and overcorrection',
              'Tax reserves are inconsistent',
              'Financial decisions are emotionally driven',
            ].map((item) => (
              <Text key={item} fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
                • {item}
              </Text>
            ))}
          </VStack>
        </Box>
        <Box
          bg='#eef0fb'
          border='1px solid rgba(76,95,213,0.2)'
          borderRadius='14px'
          p={5}
        >
          <HStack spacing={2} mb={3}>
            <Icon as={RiArrowUpLine} color='#4C5FD5' boxSize='16px' />
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              With smoothing
            </Text>
          </HStack>
          <VStack spacing={2} align='stretch'>
            {[
              'Consistent monthly budget regardless of income',
              'Good months build reserves, not lifestyle inflation',
              'Bad months are absorbed by existing buffer',
              'Tax reserve is calculated on smoothed income',
              'Financial decisions based on averages, not noise',
            ].map((item) => (
              <Text key={item} fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
                • {item}
              </Text>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <InlineCTA
        headline='Spendable calculates your smoothed income automatically'
        sub="Every income entry updates a 6-month rolling average. See your real earning power — not just this month's number."
        cta='See income smoothing in action'
        utmRef='seo-smoothing-mid'
      />

      <SectionHeading>How to apply income smoothing manually</SectionHeading>
      <P>If you're not yet using Spendable, here's how to do this yourself:</P>
      <FeatureList
        items={[
          'At the start of each month, sum your income from the previous 6 months',
          'Divide by 6 to get your monthly average',
          'Deduct your tax percentage (typically 25–30% for UK/US freelancers)',
          'The remaining figure is your monthly spending budget — regardless of what just landed',
          'Revisit and recalculate every month as a new data point enters and an old one falls off',
        ]}
      />

      <SectionHeading>
        The income floor — for retainer-based freelancers
      </SectionHeading>
      <P>
        If you have a minimum guaranteed monthly income (a retainer client, for
        example), you can use that as a floor for your smoothed average. Your
        monthly budget is then the higher of: your 6-month average, or your
        guaranteed minimum.
      </P>
      <P>
        Spendable calls this the <strong>expected monthly income floor</strong>.
        Set it in Settings, and your safe-to-spend will never drop below what
        your retainer can support, even in months where variable project income
        is low.
      </P>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        p={5}
        mb={6}
      >
        <HStack spacing={3} mb={3}>
          <Icon as={RiLineChartLine} color='#4C5FD5' boxSize='18px' />
          <Text fontWeight='700' fontSize='15px' color='#1C2B3A'>
            How Spendable implements income smoothing
          </Text>
        </HStack>
        <FeatureList
          items={[
            '6-month rolling window updated with every income entry',
            'Income floor setting for retainer/guaranteed income',
            'Smoothed average shown as "Avg Income" on your dashboard',
            'Forecast page uses smoothed income to project 3, 6, or 12 months forward',
            'Tax reserve calculated on rolling income — not just this month',
          ]}
        />
      </Box>

      <InlineCTA
        headline='Stop spending based on your bank balance'
        sub='Spendable smooths your income automatically and shows you a single safe-to-spend number. Free plan available.'
        cta='Start for free'
        utmRef='seo-smoothing-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: 'How smoothed income produces a more accurate tax reserve.',
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
