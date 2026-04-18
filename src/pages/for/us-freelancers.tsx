import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  RiPercentLine,
  RiCalendarLine,
  RiWalletLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiCheckLine,
} from 'react-icons/ri';
import {
  SEOPageLayout,
  SectionHeading,
  P,
  InlineCTA,
  FeatureList,
  RelatedPages,
} from '../../components/seo/SEOPageLayout';

const APP_URL = 'https://app.spendable.finance';

export default function Page() {
  return (
    <SEOPageLayout
      maxW='860px'
      meta={{
        title: 'Financial Clarity for US Freelancers — Quarterly Taxes Handled',
        description:
          'Spendable tracks your quarterly estimated tax reserve, monitors IRS deadlines, and shows your safe-to-spend in USD — in real time.',
        canonical: '/for/us-freelancers',
      }}
    >
      {/* Hero */}
      <Box
        bg='#1e1245'
        borderRadius='20px'
        px={{ base: 6, md: 10 }}
        py={{ base: 10, md: 12 }}
        mb={10}
        position='relative'
        overflow='hidden'
      >
        <Box
          position='absolute'
          top='-80px'
          right='-80px'
          w='350px'
          h='350px'
          borderRadius='full'
          bg='radial-gradient(circle, rgba(124,92,246,0.25) 0%, transparent 70%)'
          pointerEvents='none'
        />
        <Box
          position='absolute'
          bottom='-50px'
          left='-50px'
          w='250px'
          h='250px'
          borderRadius='full'
          bg='radial-gradient(circle, rgba(76,95,213,0.18) 0%, transparent 70%)'
          pointerEvents='none'
        />

        <Box
          display='inline-flex'
          alignItems='center'
          px={3}
          py={1}
          mb={5}
          bg='rgba(124,92,246,0.15)'
          border='1px solid rgba(124,92,246,0.35)'
          borderRadius='full'
        >
          <Box w={1.5} h={1.5} borderRadius='full' bg='#4eca80' mr={2} />
          <Text fontSize='12px' fontWeight='600' color='rgba(167,139,248,0.9)'>
            Built for US freelancers
          </Text>
        </Box>

        <Text
          as='h1'
          fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '28px', md: '40px' }}
          fontWeight='800'
          letterSpacing='-1.5px'
          color='white'
          lineHeight='1.15'
          mb={4}
          position='relative'
        >
          Know your safe-to-spend — quarterly taxes already accounted for
        </Text>
        <Text
          fontSize='16px'
          color='#9d8fd4'
          lineHeight='1.65'
          mb={7}
          maxW='520px'
          position='relative'
        >
          Spendable tracks your rolling federal and state tax reserve, monitors
          your April / June / September / January estimated tax deadlines, and
          shows you exactly what's safe to spend in USD — updated with every
          income entry.
        </Text>
        <HStack spacing={3} flexWrap='wrap' position='relative'>
          <Button
            as='a'
            href={`${APP_URL}?ref=for-us`}
            bg='#4C5FD5'
            color='white'
            fontWeight='700'
            fontSize='15px'
            borderRadius='10px'
            h='46px'
            px={7}
            rightIcon={<Icon as={RiArrowRightLine} />}
            _hover={{
              bg: '#3D4FBF',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 32px rgba(76,95,213,0.45)',
            }}
            transition='all 0.2s'
          >
            Start free
          </Button>
          <Text
            fontSize='13px'
            color='rgba(157,143,212,0.6)'
            alignSelf='center'
          >
            Free plan · No credit card
          </Text>
        </HStack>
      </Box>

      {/* US-specific features */}
      <SectionHeading>Built for US self-employment taxes</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {[
          {
            icon: RiPercentLine,
            title: 'Rolling tax reserve',
            body: 'Set your effective federal + state tax rate (typically 25–30%). Spendable calculates your running reserve on every payment logged — never be caught short at April 15.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            icon: RiCalendarLine,
            title: 'Quarterly estimated tax deadlines',
            body: 'Your Tax Tracker shows all four IRS estimated tax deadlines: April 15, June 17, September 15, and January 15 — with your estimated payment amounts.',
            color: '#4C5FD5',
            bg: '#eef0fb',
          },
          {
            icon: RiWalletLine,
            title: 'Safe to spend in USD',
            body: "Your live safe-to-spend in dollars, updated every time you log income or add an expense. No mental math. No guessing what's yours.",
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            icon: RiShieldCheckLine,
            title: 'Emergency buffer',
            body: "Set aside 3–4 months of expenses as a protected buffer. Spendable deducts it automatically — you can't accidentally spend your safety net.",
            color: '#8B5CF6',
            bg: '#f5f3ff',
          },
        ].map((f) => (
          <Box
            key={f.title}
            bg={f.bg}
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
              <Icon as={f.icon} color={f.color} boxSize='16px' />
            </Box>
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1.5}>
              {f.title}
            </Text>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
              {f.body}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* The quarterly tax problem */}
      <SectionHeading>
        The quarterly tax problem every US freelancer faces
      </SectionHeading>
      <P>
        Salaried employees have taxes withheld automatically from every
        paycheck. As a freelancer, you're responsible for estimating and paying
        your taxes four times a year — and the IRS charges underpayment
        penalties if you miss a quarter or pay too little.
      </P>
      <P>
        The result: freelancers typically face two failure modes. They either
        underpay throughout the year and get hit with a large bill plus
        penalties in April, or they overpay and tie up cash unnecessarily.
        Neither is good.
      </P>
      <P>
        Spendable solves this by tracking your income in real time and
        maintaining a rolling tax reserve — so you always know exactly how much
        you've set aside and how much you owe at each quarterly deadline.
      </P>

      {/* Q Tax deadlines */}
      <SectionHeading>Your quarterly estimated tax deadlines</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={8}>
        {[
          {
            q: 'Q1',
            period: 'January 1 – March 31',
            due: 'April 15',
            note: 'Same day as annual return',
          },
          {
            q: 'Q2',
            period: 'April 1 – May 31',
            due: 'June 17',
            note: 'Only covers 2 months',
          },
          {
            q: 'Q3',
            period: 'June 1 – August 31',
            due: 'September 15',
            note: '',
          },
          {
            q: 'Q4',
            period: 'September 1 – December 31',
            due: 'January 15',
            note: 'Following year',
          },
        ].map((q) => (
          <Box
            key={q.q}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={2}>
              <Box
                px={2.5}
                py={0.5}
                bg='rgba(76,95,213,0.1)'
                borderRadius='full'
              >
                <Text fontSize='11px' fontWeight='700' color='#4C5FD5'>
                  {q.q}
                </Text>
              </Box>
              <Text fontSize='13px' fontWeight='700' color='#1C2B3A'>
                {q.due}
              </Text>
            </HStack>
            <Text fontSize='12px' color='#5a6a7a' mb={q.note ? 0.5 : 0}>
              {q.period}
            </Text>
            {q.note && (
              <Text fontSize='11px' color='#8a9aaa'>
                {q.note}
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>

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
            as={RiCalendarLine}
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
            <strong>Safe harbor rule:</strong> You can avoid underpayment
            penalties by paying either 100% of last year's tax liability (or
            110% if AGI was over $150,000) in equal quarterly installments,
            regardless of what you actually owe this year. This is worth knowing
            if your income is unpredictable.
          </Text>
        </HStack>
      </Box>

      {/* How much to set aside */}
      <SectionHeading>How much should US freelancers set aside?</SectionHeading>
      <P>
        The right percentage depends on your total annual income and your state.
        Here are typical ranges to use as a starting point:
      </P>
      <VStack spacing={3} align='stretch' mb={8}>
        {[
          {
            range: 'Under $40,000',
            rate: '20–25%',
            detail:
              'Self-employment tax (15.3%) + 10–12% federal. Low state tax states may be at the lower end.',
          },
          {
            range: '$40,000–$80,000',
            rate: '25–30%',
            detail:
              'SE tax + 22% federal bracket. Most freelancers in this range use 28% as a safe estimate.',
          },
          {
            range: '$80,000–$150,000',
            rate: '30–35%',
            detail:
              'SE tax + 22–24% federal. Add 8–13% for high-tax states (CA, NY, NJ).',
          },
          {
            range: 'Over $150,000',
            rate: '35–40%+',
            detail:
              'Higher federal brackets plus state taxes. Work with an accountant to get an accurate rate.',
          },
        ].map((row) => (
          <Box
            key={row.range}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={1}>
              <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
                {row.range}
              </Text>
              <Box
                px={2.5}
                py={0.5}
                bg='rgba(76,95,213,0.1)'
                borderRadius='full'
              >
                <Text fontSize='12px' fontWeight='700' color='#4C5FD5'>
                  {row.rate}
                </Text>
              </Box>
            </HStack>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
              {row.detail}
            </Text>
          </Box>
        ))}
      </VStack>

      {/* Setup */}
      <SectionHeading>Set up in under 5 minutes</SectionHeading>
      <VStack spacing={4} align='stretch' mb={8}>
        {[
          {
            s: '1',
            title: 'Set your tax rate',
            body: 'Enter your federal + state effective rate. Most US freelancers earning $40k–$80k use 28%. You can adjust anytime as your situation changes.',
          },
          {
            s: '2',
            title: 'Log your income',
            body: 'Add each client payment as it arrives. Spendable updates your tax reserve and safe-to-spend immediately.',
          },
          {
            s: '3',
            title: 'Add recurring expenses',
            body: 'Monthly costs — rent, health insurance, software, subscriptions. Spendable uses these for your monthly expense baseline and runway calculation.',
          },
          {
            s: '4',
            title: 'Know your number',
            body: 'Your dashboard shows your live safe-to-spend in USD — current balance minus tax reserve, buffer, and upcoming bills. One number, always current.',
          },
        ].map((item) => (
          <HStack key={item.s} spacing={4} align='flex-start'>
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
              {item.s}
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

      {/* Free plan */}
      <SectionHeading>What's included on the free plan</SectionHeading>
      <FeatureList
        items={[
          'Safe-to-spend calculation in USD',
          'Rolling tax reserve (customisable rate)',
          'Financial confidence score',
          'Up to 5 income entries',
          'Up to 3 recurring expenses',
          'Works fully offline',
        ]}
      />
      <P>
        Upgrade to Pro ($10/mo) for unlimited income tracking, Tax Tracker with
        quarterly IRS deadlines and estimated payment amounts, 3/6/12-month
        forecast, CSV export, and full income smoothing analysis.
      </P>

      <InlineCTA
        headline='Try Spendable free — setup in 5 minutes'
        sub='US freelancers on the free plan can track income and see their quarterly tax reserve from day one. No card required.'
        cta='Start for free'
        utmRef='for-us-cta'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning: how much to set aside',
            desc: 'How to calculate your quarterly reserve and avoid underpayment penalties.',
          },
          {
            href: '/guides/how-much-to-save-for-taxes',
            label: 'How much to save for taxes',
            desc: 'US-specific tax percentages by income level and state.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'The 4-bucket system that works for irregular 1099 income.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
