import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
} from '@chakra-ui/react';
import {
  RiPercentLine,
  RiCalendarLine,
  RiAlertLine,
  RiShieldCheckLine,
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

function TaxCard({
  region,
  rate,
  detail,
}: {
  region: string;
  rate: string;
  detail: string;
}) {
  return (
    <Box
      bg='white'
      border='1px solid #E8E8E3'
      borderRadius='14px'
      p={5}
      _hover={{
        borderColor: '#4C5FD5',
        boxShadow: '0 4px 16px rgba(76,95,213,0.08)',
      }}
      transition='all 0.2s'
    >
      <HStack justify='space-between' mb={2}>
        <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
          {region}
        </Text>
        <Box px={2.5} py={0.5} bg='rgba(76,95,213,0.1)' borderRadius='full'>
          <Text fontSize='12px' fontWeight='700' color='#4C5FD5'>
            {rate}
          </Text>
        </Box>
      </HStack>
      <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
        {detail}
      </Text>
    </Box>
  );
}

function DeadlineRow({
  date,
  label,
  desc,
  highlight = false,
}: {
  date: string;
  label: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <Box
      bg={highlight ? '#fff8f0' : 'white'}
      border='1px solid'
      borderColor={highlight ? '#fde8c8' : '#E8E8E3'}
      borderRadius='12px'
      p={4}
    >
      <HStack spacing={3} align='flex-start'>
        <Icon
          as={RiCalendarLine}
          color={highlight ? '#d4622a' : '#4C5FD5'}
          boxSize='15px'
          mt={0.5}
          flexShrink={0}
        />
        <Box flex={1}>
          <HStack spacing={2} mb={0.5} flexWrap='wrap'>
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              {date}
            </Text>
            {highlight && (
              <Badge
                bg='#fff3e0'
                color='#d4622a'
                fontSize='10px'
                borderRadius='5px'
                px={2}
                fontWeight='700'
              >
                High priority
              </Badge>
            )}
          </HStack>
          <Text fontWeight='600' fontSize='13px' color='#1C2B3A' mb={0.5}>
            {label}
          </Text>
          <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
            {desc}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default function FreelanceTaxPlanningPage() {
  return (
    <SEOPageLayout
      meta={{
        title: 'Freelance Tax Planning: How Much to Set Aside (And When)',
        description:
          'How to calculate your tax reserve, understand UK self-assessment and US quarterly deadlines, and never be caught short again.',
        canonical: '/guides/freelance-tax-planning',
      }}
    >
      <ArticleHeader
        tag='Tax Guide'
        readTime='6 min read'
        h1='Freelance Tax Planning: How Much to Set Aside (And When)'
        lead="Irregular income makes tax planning harder than it is for employees. Here's exactly how to calculate your reserve, avoid the January shock, and stop spending money that belongs to HMRC."
      />

      <Box
        bg='#fff8f0'
        border='1px solid #fde8c8'
        borderRadius='12px'
        px={5}
        py={4}
        mb={8}
      >
        <HStack spacing={2.5} align='flex-start'>
          <Icon
            as={RiAlertLine}
            color='#d4622a'
            boxSize='15px'
            mt={0.5}
            flexShrink={0}
          />
          <Text
            fontSize='13px'
            color='#7a3a10'
            lineHeight='1.7'
            fontWeight='500'
          >
            <strong>The most common freelance tax mistake:</strong> spending
            money that belongs to the taxman. A good month feels rich, so you
            spend freely — then January arrives and the bill wipes out your
            buffer.
          </Text>
        </HStack>
      </Box>

      <SectionHeading>Step 1: Know your effective tax rate</SectionHeading>
      <P>
        Before you can set money aside, you need a real number — not a rough
        guess — based on your country and expected annual earnings.
      </P>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
        <TaxCard
          region='🇬🇧 UK Freelancers'
          rate='25–30%'
          detail='Income Tax (20%) + Class 4 NI (9%). Above £50,270 the rate rises to 40% — bump your reserve to 35–40%.'
        />
        <TaxCard
          region='🇺🇸 US Freelancers'
          rate='25–30%'
          detail='Self-employment tax (15.3%) + federal income tax. High earners in CA/NY should use 35%. State tax varies.'
        />
        <TaxCard
          region='🇨🇦 Canadian Freelancers'
          rate='30–35%'
          detail='CPP contributions (11.9%) + federal + provincial income tax. More if you have limited deductions.'
        />
        <TaxCard
          region='🇦🇺 Australian Freelancers'
          rate='25–30%'
          detail='PAYG instalments paid quarterly to the ATO. 25–30% covers most sole traders earning $50k–$120k.'
        />
      </SimpleGrid>

      <SectionHeading>
        Step 2: Set aside money with every payment
      </SectionHeading>
      <P>
        Every time a client pays you, immediately transfer your tax percentage
        to a separate savings account. Not weekly. Not monthly. The moment it
        lands. Treat it like it was never yours.
      </P>
      <FeatureList
        items={[
          'Open a separate high-interest easy-access savings account labelled "Tax"',
          'Transfer X% of every inbound payment immediately on arrival',
          'Never dip into this account for anything except an actual tax bill',
          'Review your rate every January — adjust upward if income is rising',
        ]}
      />

      <InlineCTA
        headline='Spendable tracks your tax reserve automatically'
        sub='Every income entry builds a rolling tax reserve in real time. See exactly what you owe — before the deadline.'
        cta='Calculate my tax reserve'
        utmRef='seo-tax-1'
      />

      <SectionHeading>
        UK self-assessment: the two dates that matter
      </SectionHeading>
      <P>
        UK self-assessment has two annual payment dates. Both carry penalties if
        missed. Most freelancers only worry about 31 January — but 31 July is
        equally important.
      </P>

      <VStack spacing={3} align='stretch' mb={6}>
        <DeadlineRow
          date='31 January'
          label='Balancing payment + 1st payment on account'
          desc="You pay the tax owed for the previous year, plus 50% of your estimated current-year bill — both on the same day. This is why January feels brutal: you're paying for two periods at once."
          highlight
        />
        <DeadlineRow
          date='31 July'
          label='2nd payment on account'
          desc='The remaining 50% of your estimated current-year bill. If your income dropped you can apply to reduce this — but act before the deadline.'
        />
        <DeadlineRow
          date='31 January (filing)'
          label='Online self-assessment return deadline'
          desc='File your return for the tax year just ended. Missing this triggers an automatic £100 penalty, even if you owe nothing.'
        />
        <DeadlineRow
          date='5 October'
          label='Register for self-assessment (new freelancers)'
          desc="If you started freelancing in the last tax year and haven't registered, this is your deadline."
        />
      </VStack>

      <SectionHeading>US quarterly estimated taxes</SectionHeading>
      <P>
        US freelancers who expect to owe more than $1,000 must pay quarterly
        estimates. Missing a quarter means an underpayment penalty — even if you
        pay the full amount in April.
      </P>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3} mb={6}>
        {[
          { period: 'Jan–Mar', due: '15 April' },
          { period: 'Apr–May', due: '17 June' },
          { period: 'Jun–Aug', due: '15 September' },
          { period: 'Sep–Dec', due: '15 January' },
        ].map((q) => (
          <Box
            key={q.due}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='10px'
            p={3}
            textAlign='center'
          >
            <Text fontSize='11px' color='#8a9aaa' fontWeight='600' mb={0.5}>
              {q.period}
            </Text>
            <Text fontSize='14px' fontWeight='700' color='#1C2B3A'>
              {q.due}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <SectionHeading>
        The deeper problem: knowing what's safe to spend
      </SectionHeading>
      <P>
        Tax planning isn't only about setting money aside — it's about knowing,
        at any moment, how much of your bank balance is actually yours. After
        tax reserves, emergency buffer, upcoming bills.
      </P>
      <P>
        Most freelancers use a rough mental model: "I have £8,000, roughly 25%
        is tax, so maybe £6,000?" This leads to overspending in good months and
        panic in slow ones.
      </P>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        p={5}
        mb={6}
      >
        <HStack spacing={3} mb={3}>
          <Icon as={RiShieldCheckLine} color='#4C5FD5' boxSize='18px' />
          <Text fontWeight='700' fontSize='15px' color='#1C2B3A'>
            How Spendable calculates your tax reserve
          </Text>
        </HStack>
        <FeatureList
          items={[
            'Rolling 12-month income window — not just this calendar year',
            'Your custom tax rate applied to every logged payment',
            'UK self-assessment deadlines tracked in the Tax Tracker (Pro)',
            'US, CA, AU quarterly dates also supported',
          ]}
        />
      </Box>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={6}
      >
        <VStack spacing={0} align='stretch'>
          {[
            {
              q: 'What if I underpay?',
              a: 'HMRC charges 7.5% interest plus 5% penalties after 30 days, 6 months, and 12 months. The IRS charges interest plus a 0.5% monthly penalty.',
            },
            {
              q: 'Should my reserve be in a separate account?',
              a: 'Yes — always. Keeping it in your current account makes it too easy to spend. An easy-access savings account is ideal.',
            },
            {
              q: 'Can business expenses reduce my tax bill?',
              a: 'Yes. Software, equipment, professional fees, home office, and travel reduce your taxable profit. Keep receipts and consult an accountant for complex cases.',
            },
          ].map((faq, i) => (
            <Box
              key={i}
              px={5}
              py={4}
              borderTop={i > 0 ? '1px solid #f0f0ea' : undefined}
            >
              <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1.5}>
                {faq.q}
              </Text>
              <Text fontSize='14px' color='#5a6a7a' lineHeight='1.7'>
                {faq.a}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <InlineCTA
        headline='Stop guessing. Know your number.'
        sub='Spendable shows your safe-to-spend in real time — tax reserve already deducted. Free plan, no credit card.'
        cta='Start for free'
        utmRef='seo-tax-2'
      />
      <RelatedPages
        links={[
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting with irregular income',
            desc: 'The 4-bucket framework that works when income changes every month.',
          },
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'How a 6-month rolling average prevents feast-and-famine spending.',
          },
          {
            href: '/for/uk-freelancers',
            label: 'Spendable for UK freelancers',
            desc: 'UK-specific features: self-assessment deadlines, GBP, April–April tax year.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
