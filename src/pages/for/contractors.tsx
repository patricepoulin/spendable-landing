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
  RiTimeLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiCheckLine,
  RiAlertLine,
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

export default function ForContractorsPage() {
  return (
    <SEOPageLayout
      maxW='860px'
      meta={{
        title:
          'Financial Clarity for Contractors — Know Your Safe-to-Spend Between Contracts',
        description:
          'Gaps between contracts and variable day rates make financial planning hard. Spendable gives contractors a real-time safe-to-spend with tax and buffer already deducted.',
        canonical: '/for/contractors',
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
            Built for contractors
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
          Know your safe-to-spend — even between contracts
        </Text>
        <Text
          fontSize='16px'
          color='#9d8fd4'
          lineHeight='1.65'
          mb={7}
          maxW='520px'
          position='relative'
        >
          Variable day rates, contract gaps, and tax complexity make contractor
          finances uniquely unpredictable. Spendable gives you a single
          real-time number — what you can safely spend right now — with your tax
          reserve and buffer already deducted.
        </Text>
        <HStack spacing={3} flexWrap='wrap' position='relative'>
          <Button
            as='a'
            href={`${APP_URL}?ref=for-contractors`}
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

      {/* The contractor-specific problem */}
      <SectionHeading>The financial challenge contractors face</SectionHeading>
      <P>
        Contractor finances are more complex than either salaried employment or
        typical freelancing. Day rates vary by contract, gaps between
        engagements can be weeks or months, and the tax position — especially
        around IR35 in the UK — can be difficult to predict accurately.
      </P>
      <P>
        The result: even well-paid contractors often lack clarity on the
        question that matters most day-to-day: how much of the money sitting in
        their account is actually safe to spend? How much is earmarked for tax,
        for the next contract gap, for upcoming bills?
      </P>

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
            <strong>The contract gap problem:</strong> a contractor finishing
            one engagement in October and starting the next in January has 3
            months of expenses but no income. Without a clearly maintained
            buffer, this gap creates financial stress even after a highly paid
            contract.
          </Text>
        </HStack>
      </Box>

      {/* Features */}
      <SectionHeading>What Spendable does for contractors</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {[
          {
            icon: RiPercentLine,
            title: 'Rolling tax reserve',
            body: 'Set your effective tax rate (inside or outside IR35, or as a limited company director drawing salary + dividends). Spendable calculates your rolling reserve on every payment logged.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            icon: RiTimeLine,
            title: 'Contract gap runway',
            body: 'Spendable shows your financial runway — how many months you can cover essential expenses from your current safe-to-spend. Know exactly how long you can comfortably be between contracts.',
            color: '#4C5FD5',
            bg: '#eef0fb',
          },
          {
            icon: RiShieldCheckLine,
            title: 'Protected gap buffer',
            body: "Set aside 3–6 months of expenses as a protected buffer. Spendable deducts it automatically — so you can't accidentally spend your contract gap safety net on day-to-day expenses.",
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            icon: RiCalendarLine,
            title: 'Tax deadlines tracked',
            body: 'UK contractors: self-assessment dates (31 Jan / 31 Jul). US contractors: quarterly IRS estimates. Spendable shows your upcoming payment amounts so you plan ahead, not react.',
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

      {/* Tax rate guidance for contractors */}
      <SectionHeading>
        Setting the right tax rate as a contractor
      </SectionHeading>
      <P>
        The correct tax reserve rate depends significantly on your operating
        structure. Here are typical starting points — always confirm with an
        accountant for your specific situation:
      </P>
      <VStack spacing={3} align='stretch' mb={8}>
        {[
          {
            label: 'UK — Inside IR35 (deemed employee)',
            rate: '30–35%',
            detail:
              'Your income is taxed similarly to employment. Income Tax (20–40%) + Employee NI (8–2%). Your agency or client deducts some at source — check what remains owing.',
            color: '#4C5FD5',
          },
          {
            label: 'UK — Outside IR35 (limited company)',
            rate: '20–28%',
            detail:
              'Salary + dividends structure is more tax-efficient. Corporation Tax on profits (25%), then dividend tax. Effective rate varies significantly with the salary/dividend split.',
            color: '#27AE60',
          },
          {
            label: 'UK — Sole trader contractor',
            rate: '25–35%',
            detail:
              'Income Tax (20–40%) + Class 4 NI (9%). Same as self-employed freelancers. Use 25–27% below £50,270, 35–40% above.',
            color: '#D4A800',
          },
          {
            label: 'US — 1099 contractor',
            rate: '25–35%',
            detail:
              'Self-employment tax (15.3%) + federal income tax + state. 28% is a safe estimate for most contractors earning $60k–$120k. Adjust upward in CA, NY, NJ.',
            color: '#EB5757',
          },
        ].map((item) => (
          <Box
            key={item.label}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={1}>
              <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
                {item.label}
              </Text>
              <Box
                px={2.5}
                py={0.5}
                bg='rgba(76,95,213,0.1)'
                borderRadius='full'
              >
                <Text fontSize='12px' fontWeight='700' color={item.color}>
                  {item.rate}
                </Text>
              </Box>
            </HStack>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
              {item.detail}
            </Text>
          </Box>
        ))}
      </VStack>

      <InlineCTA
        headline='Know exactly what you can spend between contracts'
        sub='Set your tax rate, log your contract income, and Spendable shows your safe-to-spend and runway in real time.'
        cta='Start free'
        utmRef='for-contractors-mid'
      />

      {/* How to use between contracts */}
      <SectionHeading>
        How contractors use Spendable between engagements
      </SectionHeading>
      <P>
        The most valuable time to check Spendable isn't during a contract — it's
        the week a contract ends. At that moment, you need to know three things:
      </P>
      <FeatureList
        items={[
          'How long can I sustain my current lifestyle without new income? (Runway)',
          "How much do I have earmarked for tax on this contract's earnings? (Tax reserve)",
          'What is my actual safe-to-spend balance — not including the buffer I need for the gap? (Safe-to-spend)',
        ]}
      />
      <P>
        Spendable shows all three on your dashboard, updated as you log each
        contract payment. When a new contract is signed, logging the first
        payment updates everything automatically — runway extends, safe-to-spend
        rises, tax reserve grows proportionally.
      </P>

      {/* Setup */}
      <SectionHeading>Set up in 5 minutes</SectionHeading>
      <VStack spacing={4} align='stretch' mb={8}>
        {[
          {
            s: '1',
            title: 'Set your tax rate',
            body: 'Enter your effective rate based on your operating structure (see the table above). You can adjust it anytime — for example, if your IR35 status changes.',
          },
          {
            s: '2',
            title: 'Set your buffer',
            body: 'In Settings, set your emergency buffer to 3–6 months of expenses. This is your contract gap protection — Spendable deducts it automatically from safe-to-spend so it stays protected.',
          },
          {
            s: '3',
            title: 'Log contract payments',
            body: 'Add each payment as it arrives. Label it by client or contract for clear source tracking. Takes 10 seconds per entry.',
          },
          {
            s: '4',
            title: 'Add recurring expenses',
            body: 'Add your monthly baseline costs so Spendable can calculate your runway accurately. Include any costs that continue between contracts (insurance, subscriptions, loan repayments).',
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
          'Rolling tax reserve at your chosen rate',
          'Financial runway in months',
          'Confidence score (tax coverage, buffer health, runway)',
          'Up to 5 income entries',
          'Up to 3 recurring expenses',
        ]}
      />
      <P>
        Pro (from £8/mo) adds unlimited income tracking, Tax Tracker with
        self-assessment or quarterly deadlines, 6-month forecast, CSV export,
        and income smoothing analysis.
      </P>

      <InlineCTA
        headline='Start tracking your contractor finances today'
        sub='Free plan available. Set up in under 5 minutes. No bank connection required.'
        cta='Start for free'
        utmRef='for-contractors-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Contractor tax planning: how much to set aside',
            desc: 'How to calculate your rolling tax reserve across different operating structures.',
          },
          {
            href: '/guides/freelance-emergency-fund',
            label: 'How much buffer to hold against contract gaps',
            desc: 'Sizing your gap buffer based on your typical between-contract periods.',
          },
          {
            href: '/for/uk-freelancers',
            label: 'Spendable for UK freelancers and contractors',
            desc: 'UK-specific features including self-assessment deadlines and GBP tracking.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
