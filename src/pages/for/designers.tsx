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
  RiLineChartLine,
  RiPercentLine,
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

export default function ForDesignersPage() {
  return (
    <SEOPageLayout
      maxW='860px'
      meta={{
        title: 'Financial Clarity for Freelance Designers',
        description:
          'Retainers, projects, and commissions create unpredictable income. Spendable smooths the variance and gives you a single safe-to-spend number — updated in real time.',
        canonical: '/for/designers',
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
          bottom='-40px'
          left='-40px'
          w='220px'
          h='220px'
          borderRadius='full'
          bg='radial-gradient(circle, rgba(39,174,96,0.12) 0%, transparent 70%)'
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
            For freelance designers
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
          Stop guessing what you can spend after a big project pays
        </Text>
        <Text
          fontSize='16px'
          color='#9d8fd4'
          lineHeight='1.65'
          mb={7}
          maxW='520px'
          position='relative'
        >
          A £12,000 branding project followed by two quiet months. A retainer
          that covers the basics plus occasional commissions. Spendable smooths
          out the variance and gives you one number — what you can safely spend
          today — with tax and buffer already deducted.
        </Text>
        <HStack spacing={3} flexWrap='wrap' position='relative'>
          <Button
            as='a'
            href={`${APP_URL}?ref=for-designers`}
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

      {/* The designer-specific problem */}
      <SectionHeading>The freelance designer income problem</SectionHeading>
      <P>
        Freelance designers typically earn from a mix of sources: a monthly
        retainer with a primary client, project work that arrives in uneven
        chunks, occasional one-off commissions, and sometimes passive income
        from assets or templates. Each stream has a different cadence and
        different amounts.
      </P>
      <P>
        The result is an income pattern that makes standard budgeting almost
        useless. One month you might receive £9,500 from a brand identity
        project; the next, your retainer of £2,200 and nothing else. Your
        average annual income might be healthy — but on a month-by-month basis,
        the variance makes spending decisions feel like guesswork.
      </P>
      <P>
        Spendable resolves this by replacing the guesswork with a single real
        number: your 6-month rolling average income, minus tax reserves, minus
        your buffer, minus upcoming bills. That number is what's genuinely yours
        to spend — regardless of what arrived this month.
      </P>

      {/* Income smoothing for designers */}
      <SectionHeading>
        Income smoothing: the core technique for designers
      </SectionHeading>
      <P>
        When you receive a £12,000 project payment, Spendable doesn't treat that
        as £12,000 available to spend. It adds it to your 6-month rolling
        average and recalculates your monthly spending capacity.
      </P>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        p={5}
        mb={8}
      >
        <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={4}>
          Example: designer income over 6 months
        </Text>
        <VStack spacing={2} align='stretch'>
          {[
            {
              month: 'January',
              income: '£9,500',
              note: 'Brand identity project',
            },
            { month: 'February', income: '£2,200', note: 'Retainer only' },
            {
              month: 'March',
              income: '£5,800',
              note: 'Retainer + website project',
            },
            { month: 'April', income: '£2,200', note: 'Retainer only' },
            {
              month: 'May',
              income: '£7,100',
              note: 'Retainer + packaging project',
            },
            { month: 'June', income: '£2,200', note: 'Retainer only' },
          ].map((row) => (
            <HStack
              key={row.month}
              justify='space-between'
              borderBottom='1px solid #f0f0ea'
              pb={1.5}
            >
              <HStack spacing={3}>
                <Text fontSize='13px' fontWeight='600' color='#1C2B3A' w='80px'>
                  {row.month}
                </Text>
                <Text fontSize='12px' color='#8a9aaa'>
                  {row.note}
                </Text>
              </HStack>
              <Text fontSize='13px' fontWeight='600' color='#27AE60'>
                {row.income}
              </Text>
            </HStack>
          ))}
          <HStack justify='space-between' pt={1}>
            <Text fontSize='13px' fontWeight='700' color='#1C2B3A'>
              6-month average
            </Text>
            <Text fontSize='14px' fontWeight='800' color='#4C5FD5'>
              £4,833/mo
            </Text>
          </HStack>
          <HStack justify='space-between'>
            <Text fontSize='13px' color='#5a6a7a'>
              After 27% tax reserve
            </Text>
            <Text fontSize='13px' fontWeight='600' color='#D4A800'>
              − £1,305/mo
            </Text>
          </HStack>
          <HStack justify='space-between'>
            <Text fontSize='13px' color='#5a6a7a'>
              Monthly expenses
            </Text>
            <Text fontSize='13px' fontWeight='600' color='#EB5757'>
              − £1,800/mo
            </Text>
          </HStack>
          <HStack justify='space-between' borderTop='1px solid #e2e8f0' pt={2}>
            <Text fontSize='13px' fontWeight='700' color='#1C2B3A'>
              Monthly safe-to-spend
            </Text>
            <Text fontSize='14px' fontWeight='800' color='#27AE60'>
              ≈ £1,728/mo
            </Text>
          </HStack>
        </VStack>
        <Text fontSize='12px' color='#8a9aaa' mt={3}>
          This is your real spending power — the same in February (retainer
          month) as in January (project month).
        </Text>
      </Box>

      {/* Features */}
      <SectionHeading>Built for how designers actually earn</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {[
          {
            icon: RiLineChartLine,
            title: 'Income smoothing',
            body: "6-month rolling average automatically adjusts as each payment arrives. A large project doesn't spike your budget — it builds your reserves instead.",
            color: '#4C5FD5',
            bg: '#eef0fb',
          },
          {
            icon: RiPercentLine,
            title: 'Automatic tax reserve',
            body: 'Set your rate once (25–30% for most UK designers). Every payment you log builds the reserve automatically. No mental maths, no manual transfers.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            icon: RiShieldCheckLine,
            title: 'Project gap buffer',
            body: 'Set 2–3 months of expenses as a protected buffer. Covers the quiet months between projects without touching your tax reserve or going into debt.',
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            icon: RiWalletLine,
            title: 'Multiple income sources',
            body: 'Track retainers, project payments, commissions, and passive income separately. The "By Source" view shows your all-time income breakdown by client or type.',
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

      <InlineCTA
        headline='Know what you can spend after every project payment'
        sub='Spendable smooths your designer income automatically and shows a real-time safe-to-spend. Free plan available.'
        cta='Start free'
        utmRef='for-designers-mid'
      />

      {/* Retainer + project structure */}
      <SectionHeading>
        Handling the retainer + project income mix
      </SectionHeading>
      <P>
        Many designers have a hybrid income structure: a monthly retainer that
        covers the floor, plus irregular project income on top. Spendable
        handles this well with two features:
      </P>
      <VStack spacing={3} align='stretch' mb={6}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='12px' p={4}>
          <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1}>
            Income floor setting
          </Text>
          <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
            Set your retainer as an expected monthly income floor. Spendable
            uses whichever is higher — your floor or your 6-month average — as
            the basis for your safe-to-spend. This means your budget never drops
            below what your retainer can support, even in months where no
            project income arrived.
          </Text>
        </Box>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='12px' p={4}>
          <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1}>
            Source tracking
          </Text>
          <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
            Log each payment with a source label — "Studio A retainer", "Brand
            identity project", "Stock illustration sales". The By Source tab
            shows your all-time breakdown, so you can see which clients or work
            types are most valuable over time.
          </Text>
        </Box>
      </VStack>

      {/* Tax section specific to designers */}
      <SectionHeading>Tax for freelance designers: the basics</SectionHeading>
      <P>
        Most freelance designers operate as sole traders (UK) or sole
        proprietors / single-member LLCs (US). The key points:
      </P>
      <FeatureList
        items={[
          'UK: set aside 25–27% of gross income if earning £30k–£50k; 35–40% above £50,270',
          "UK: two self-assessment payment dates — 31 January and 31 July (Spendable's Tax Tracker shows both)",
          'US: set aside 25–30% federal + state; pay quarterly estimates in April, June, September, January',
          'Deductible: software (Adobe, Figma, Sketch), hardware, home office proportion, professional development, client travel',
          'Keep receipts for everything — a good year of deductions can meaningfully reduce your bill',
        ]}
      />

      {/* Setup */}
      <SectionHeading>Get started in 5 minutes</SectionHeading>
      <VStack spacing={4} align='stretch' mb={8}>
        {[
          {
            s: '1',
            title: 'Set your tax rate',
            body: 'UK designers earning £30k–£50k: use 25–27%. Above £50k: use 35%. US designers: use 28–30% plus your state rate.',
          },
          {
            s: '2',
            title: 'Log your recent income',
            body: 'Add the last few months of payments to seed your rolling average. Label each by source — retainer, project, or commission.',
          },
          {
            s: '3',
            title: 'Set your income floor (optional)',
            body: 'If you have a regular retainer, set it as your expected monthly income floor in Settings. This protects your budget in project-free months.',
          },
          {
            s: '4',
            title: 'Add recurring expenses',
            body: 'Software subscriptions, insurance, phone, equipment financing. Spendable uses these to calculate your monthly baseline and runway.',
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

      <SectionHeading>What's included on the free plan</SectionHeading>
      <FeatureList
        items={[
          'Safe-to-spend calculation',
          'Rolling tax reserve',
          'Financial runway in months',
          'Confidence score',
          'Up to 5 income entries',
          'Up to 3 recurring expenses',
        ]}
      />
      <P>
        Pro (from £8/mo) adds unlimited income tracking, By Source breakdown,
        Tax Tracker with UK self-assessment deadlines, 6-month forecast, income
        floor setting, and CSV export.
      </P>

      <InlineCTA
        headline='Try Spendable free — built for how designers earn'
        sub='Income smoothing, tax reserve, and a single safe-to-spend number. Set up in 5 minutes.'
        cta='Start for free'
        utmRef='for-designers-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'How the 6-month rolling average prevents overspending after big project payments.',
          },
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting for creative freelancers',
            desc: 'The 4-bucket framework for managing retainer + project income.',
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: 'How to calculate your tax reserve when income arrives in lumps.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
