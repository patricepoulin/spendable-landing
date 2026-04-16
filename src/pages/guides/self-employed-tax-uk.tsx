import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Icon,
  Badge,
} from '@chakra-ui/react';
import {
  RiCalendarLine,
  RiAlertLine,
  RiPercentLine,
  RiInformationLine,
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

function DeadlineCard({
  date,
  label,
  desc,
  amount,
  urgent = false,
}: {
  date: string;
  label: string;
  desc: string;
  amount?: string;
  urgent?: boolean;
}) {
  return (
    <Box
      bg={urgent ? '#fff8f0' : 'white'}
      border='1px solid'
      borderColor={urgent ? '#fde8c8' : '#E8E8E3'}
      borderRadius='12px'
      p={4}
      position='relative'
      overflow='hidden'
    >
      {urgent && (
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          h='3px'
          bg='linear-gradient(90deg, #d4622a, transparent)'
        />
      )}
      <HStack spacing={3} align='flex-start'>
        <Icon
          as={RiCalendarLine}
          color={urgent ? '#d4622a' : '#4C5FD5'}
          boxSize='15px'
          mt={0.5}
          flexShrink={0}
        />
        <Box flex={1}>
          <HStack spacing={2} mb={0.5} flexWrap='wrap'>
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              {date}
            </Text>
            {urgent && (
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
            {amount && (
              <Badge
                bg='rgba(76,95,213,0.1)'
                color='#4C5FD5'
                fontSize='10px'
                borderRadius='5px'
                px={2}
                fontWeight='700'
              >
                {amount}
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

export default function Page() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag='Tax Guide · UK'
        readTime='8 min read'
        h1='UK Self-Assessment Tax: A Complete Guide for Freelancers'
        lead="Everything UK freelancers need to know about self-assessment — registration, payment dates, payments on account, and how to ensure you're never caught short by HMRC again."
      />

      <SectionHeading>
        Do you need to register for self-assessment?
      </SectionHeading>
      <P>
        If you're self-employed and earning more than £1,000 per tax year from
        freelance work, you must register for self-assessment. This applies
        whether it's your only income or you also have employment income on the
        side.
      </P>
      <Box
        bg='rgba(76,95,213,0.06)'
        border='1px solid rgba(76,95,213,0.15)'
        borderRadius='10px'
        px={4}
        py={3}
        mb={6}
      >
        <HStack spacing={2.5} align='flex-start'>
          <Icon
            as={RiInformationLine}
            color='#4C5FD5'
            boxSize='15px'
            mt={0.5}
            flexShrink={0}
          />
          <Text
            fontSize='13px'
            color='#4C5FD5'
            lineHeight='1.7'
            fontWeight='500'
          >
            You must register by <strong>5 October</strong> in the second tax
            year of self-employment. For example, if you started freelancing in
            the 2024–25 tax year, register by 5 October 2025. Late registration
            triggers penalties.
          </Text>
        </HStack>
      </Box>

      <SectionHeading>The UK tax year — and why it matters</SectionHeading>
      <P>
        The UK tax year runs from <strong>6 April to 5 April</strong> the
        following year. This is not the calendar year. Your self-assessment
        return covers income earned within this window, and your payment
        deadlines are calculated from it.
      </P>
      <P>
        For most freelancers, the relevant year is identified by its end year —
        "the 2025–26 tax year" means 6 April 2025 to 5 April 2026. Spendable
        uses the UK tax year for its Tax Tracker, so your deadlines and reserve
        calculations are aligned correctly.
      </P>

      <SectionHeading>The four key self-assessment dates</SectionHeading>
      <VStack spacing={3} align='stretch' mb={8}>
        <DeadlineCard
          date='31 January'
          label='Balancing payment + 1st payment on account'
          desc="The most important date. You pay: (1) the tax owed for the previous tax year minus any payments on account already made, and (2) your first payment on account for the current year — 50% of last year's bill. Both are due simultaneously, which is why January feels brutal."
          amount='Two payments at once'
          urgent
        />
        <DeadlineCard
          date='31 July'
          label='2nd payment on account'
          desc="The second 50% of your estimated current-year tax bill. Based on last year's total tax. If your income has dropped significantly this year, you can apply to reduce both payments on account using HMRC's self-assessment system."
          amount='50% of estimated bill'
        />
        <DeadlineCard
          date='31 January (filing)'
          label='Online self-assessment return deadline'
          desc='File your return for the tax year just ended online. The paper return deadline is 31 October — much earlier. An automatic £100 penalty applies for missing the online deadline, even if you owe no tax.'
        />
        <DeadlineCard
          date='5 October'
          label='Register for self-assessment (new)'
          desc="If you started freelancing in the last tax year and haven't yet registered, this is the deadline. Missing it means you're late registering and may face penalties on top of your tax bill."
        />
      </VStack>

      <SectionHeading>Understanding payments on account</SectionHeading>
      <P>
        Payments on account are advance payments toward your next year's tax
        bill. HMRC introduced them to prevent the situation where you owe a full
        year's tax in one lump sum. Here's how they work:
      </P>
      <VStack spacing={3} align='stretch' mb={6}>
        {[
          {
            step: '1',
            text: 'HMRC assumes your income next year will be similar to this year',
            color: '#4C5FD5',
          },
          {
            step: '2',
            text: "They ask you to pre-pay 50% of this year's tax bill on 31 January",
            color: '#4C5FD5',
          },
          { step: '3', text: 'Then another 50% on 31 July', color: '#4C5FD5' },
          {
            step: '4',
            text: 'When you file next January, if you earned more, you pay the difference (the balancing payment); if you earned less, you get a refund',
            color: '#27AE60',
          },
        ].map((item) => (
          <HStack key={item.step} spacing={4} align='flex-start'>
            <Box
              w={7}
              h={7}
              borderRadius='full'
              bg={item.color}
              color='white'
              flexShrink={0}
              display='flex'
              alignItems='center'
              justifyContent='center'
              fontWeight='700'
              fontSize='12px'
            >
              {item.step}
            </Box>
            <Text fontSize='14px' color='#475569' lineHeight='1.7' pt={0.5}>
              {item.text}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Box
        bg='#eef0fb'
        border='1px solid rgba(76,95,213,0.2)'
        borderRadius='12px'
        px={5}
        py={4}
        mb={6}
      >
        <Text fontSize='13px' color='#4C5FD5' lineHeight='1.7' fontWeight='500'>
          <strong>Example:</strong> Your 2024–25 tax bill was £8,000. On 31
          January 2026, you pay: £8,000 balancing payment + £4,000 (50% on
          account for 2025–26) = £12,000 total. Then £4,000 again on 31 July
          2026. If your 2025–26 income turns out to be the same, you'll owe
          nothing when you file in January 2027.
        </Text>
      </Box>

      <SectionHeading>How much to set aside</SectionHeading>
      <P>
        For most UK freelancers, 25–30% of gross income is the right starting
        point. Here's how to narrow it down:
      </P>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        {[
          {
            range: '£12,570–£50,270',
            rate: '25–27%',
            detail:
              'Basic rate Income Tax (20%) + Class 4 NI (9%). Personal allowance reduces effective rate.',
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            range: '£50,270–£100,000',
            rate: '35–40%',
            detail:
              'Higher rate Income Tax (40%) + Class 4 NI (9% below, 2% above). Set aside more.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            range: '£100,000–£125,140',
            rate: '55–60%',
            detail:
              'Personal allowance tapers, creating an effective 60% marginal rate. Seek accountant advice.',
            color: '#EB5757',
            bg: '#fef2f2',
          },
        ].map((band) => (
          <Box
            key={band.range}
            bg={band.bg}
            border='1px solid #E8E8E3'
            borderRadius='14px'
            p={5}
          >
            <Icon as={RiPercentLine} color={band.color} boxSize='16px' mb={2} />
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1}>
              {band.range}
            </Text>
            <Box
              px={2}
              py={0.5}
              bg='white'
              borderRadius='full'
              display='inline-flex'
              mb={2}
            >
              <Text fontSize='12px' fontWeight='700' color={band.color}>
                {band.rate}
              </Text>
            </Box>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
              {band.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <InlineCTA
        headline='Spendable tracks your self-assessment reserve automatically'
        sub='Set your tax rate once. Every income entry updates your rolling reserve — and your Tax Tracker shows your 31 Jan and 31 Jul deadlines with estimated amounts.'
        cta='Track my self-assessment deadlines'
        utmRef='seo-uk-tax-mid'
      />

      <SectionHeading>What counts as a deductible expense?</SectionHeading>
      <P>
        Allowable expenses reduce your taxable profit — so they reduce your tax
        bill. You can only claim expenses that are "wholly and exclusively" for
        business purposes.
      </P>
      <FeatureList
        items={[
          'Software and subscriptions used for work (e.g. design tools, project management, accounting)',
          'Professional fees — accountant, solicitor, business insurance',
          'Equipment — computers, cameras, specialist tools (may need to be capitalised over time)',
          'Home office costs — a proportion of heating, internet, electricity (calculated carefully)',
          'Professional development — courses, training, relevant books',
          'Travel for business purposes (not commuting to a fixed place)',
          'Marketing and advertising costs',
          'Bank charges on business accounts',
        ]}
      />
      <Box
        bg='#fff8f0'
        border='1px solid #fde8c8'
        borderRadius='12px'
        px={5}
        py={4}
        mb={6}
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
            <strong>Don't guess on expenses.</strong> HMRC audits can go back 4
            years (20 years in cases of fraud). Keep receipts, use accounting
            software, and have an accountant review your return if you're
            unsure.
          </Text>
        </HStack>
      </Box>

      <SectionHeading>Reducing payments on account</SectionHeading>
      <P>
        If your income this year is significantly lower than last year, you can
        apply to reduce your payments on account. You can do this through your
        HMRC online self-assessment account.
      </P>
      <P>
        However, be careful: if you reduce them and then earn more than
        expected, you'll owe interest on the shortfall. Only reduce them if
        you're confident your income has genuinely dropped.
      </P>

      <SectionHeading>
        The self-assessment penalties you want to avoid
      </SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <VStack spacing={0} align='stretch'>
          {[
            {
              trigger: 'Filing 1 day late',
              penalty: '£100 automatic penalty',
              even: 'Even if you owe nothing',
            },
            {
              trigger: 'Filing 3+ months late',
              penalty: '£10/day (up to £900)',
              even: 'On top of the £100',
            },
            {
              trigger: 'Filing 6+ months late',
              penalty: '5% of tax owed or £300 (whichever is greater)',
              even: '',
            },
            {
              trigger: 'Payment 30 days late',
              penalty: '5% of unpaid tax',
              even: '',
            },
            {
              trigger: 'Payment 6 months late',
              penalty: 'Additional 5%',
              even: '',
            },
            {
              trigger: 'Payment 12 months late',
              penalty: 'Another 5%',
              even: 'Plus interest on all unpaid amounts',
            },
          ].map((row, i) => (
            <Box
              key={i}
              px={5}
              py={3}
              borderTop={i > 0 ? '1px solid #f0f0ea' : undefined}
            >
              <HStack
                justify='space-between'
                align='flex-start'
                flexWrap='wrap'
                gap={2}
              >
                <Text fontSize='13px' fontWeight='600' color='#1C2B3A'>
                  {row.trigger}
                </Text>
                <VStack align='flex-end' spacing={0}>
                  <Text fontSize='13px' fontWeight='700' color='#EB5757'>
                    {row.penalty}
                  </Text>
                  {row.even && (
                    <Text fontSize='11px' color='#8a9aaa'>
                      {row.even}
                    </Text>
                  )}
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>

      <SectionHeading>A simple self-assessment checklist</SectionHeading>
      <FeatureList
        items={[
          'Register for self-assessment by 5 October (if newly self-employed)',
          'Keep records of all income — every invoice, every payment',
          'Keep receipts for all business expenses',
          'Set aside your tax rate on every payment received (25–30% for most)',
          'File your online return by 31 January',
          'Pay your balancing payment + 1st payment on account by 31 January',
          'Pay your 2nd payment on account by 31 July',
          'If income dropped significantly, consider reducing payments on account',
        ]}
      />

      <InlineCTA
        headline='Never miss a self-assessment deadline again'
        sub="Spendable's Tax Tracker shows your 31 January and 31 July dates with estimated amounts — updated as your income grows."
        cta='Start for free'
        utmRef='seo-uk-tax-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning: how much to set aside',
            desc: 'The complete guide to calculating your rolling tax reserve.',
          },
          {
            href: '/for/uk-freelancers',
            label: 'Spendable for UK freelancers',
            desc: 'UK-specific features: self-assessment deadlines, GBP pricing, April–April tax year.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting',
            desc: 'The 4-bucket framework that works alongside your tax reserve.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
