import {
  Box, SimpleGrid, Text, VStack, HStack, Icon, Button,
} from '@chakra-ui/react';
import {
  RiPercentLine, RiCalendarLine, RiWalletLine, RiShieldCheckLine, RiArrowRightLine,
} from 'react-icons/ri';
import {
  SEOPageLayout, SectionHeading, P, InlineCTA, FeatureList, RelatedPages,
} from '../../components/seo/SEOPageLayout';

const APP_URL = 'https://app.spendable.finance';

export default function ForUkFreelancersPage() {
  return (
    <SEOPageLayout maxW="860px">
      {/* Hero — uses live #1e1245 dark palette */}
      <Box bg="#1e1245" borderRadius="20px" px={{ base: 6, md: 10 }} py={{ base: 10, md: 12 }}
        mb={10} position="relative" overflow="hidden">
        <Box position="absolute" top="-80px" right="-80px" w="350px" h="350px" borderRadius="full"
          bg="radial-gradient(circle, rgba(124,92,246,0.25) 0%, transparent 70%)" pointerEvents="none" />
        <Box display="inline-flex" alignItems="center" px={3} py={1} mb={5}
          bg="rgba(124,92,246,0.15)" border="1px solid rgba(124,92,246,0.35)" borderRadius="full">
          <Box w={1.5} h={1.5} borderRadius="full" bg="#4eca80" mr={2} />
          <Text fontSize="12px" fontWeight="600" color="rgba(167,139,248,0.9)">Built for UK freelancers</Text>
        </Box>
        <Text as="h1" fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '28px', md: '40px' }} fontWeight="800"
          letterSpacing="-1.5px" color="white" lineHeight="1.15" mb={4} position="relative">
          Know exactly what's safe to spend — before HMRC takes their share
        </Text>
        <Text fontSize="16px" color="#9d8fd4" lineHeight="1.65" mb={7} maxW="520px" position="relative">
          Spendable tracks your rolling self-assessment tax reserve, monitors your 31 January and 31 July
          payment deadlines, and shows a live safe-to-spend figure in GBP — updated with every income entry.
        </Text>
        <HStack spacing={3} flexWrap="wrap" position="relative">
          <Button as="a" href={`${APP_URL}?ref=for-uk`}
            bg="#4C5FD5" color="white" fontWeight="700" fontSize="15px"
            borderRadius="10px" h="46px" px={7}
            rightIcon={<Icon as={RiArrowRightLine} />}
            _hover={{ bg: '#3D4FBF', transform: 'translateY(-2px)', boxShadow: '0 12px 32px rgba(76,95,213,0.45)' }}
            transition="all 0.2s">
            Start free
          </Button>
          <Text fontSize="13px" color="rgba(157,143,212,0.6)" alignSelf="center">Free plan · No credit card</Text>
        </HStack>
      </Box>

      <SectionHeading>Built specifically for UK self-assessment</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {[
          { icon: RiPercentLine, title: 'Rolling tax reserve', color: '#D4A800', bg: '#fefae8',
            body: 'Spendable calculates your Income Tax and NI reserve in real time, based on the last 12 months of logged income.' },
          { icon: RiCalendarLine, title: 'Self-assessment deadlines', color: '#4C5FD5', bg: '#eef0fb',
            body: 'Your Tax Tracker shows 31 January and 31 July payment dates with estimated amounts — so you always know what\'s coming.' },
          { icon: RiWalletLine, title: 'Safe to spend in GBP', color: '#27AE60', bg: '#eafaf1',
            body: 'Your live safe-to-spend in pounds, updated every time you log income or add an expense. No guessing.' },
          { icon: RiShieldCheckLine, title: 'Emergency buffer', color: '#8B5CF6', bg: '#f5f3ff',
            body: 'Set aside 2–3 months of expenses so you never accidentally spend your safety net during a slow patch.' },
        ].map(f => (
          <Box key={f.title} bg={f.bg} border="1px solid #E8E8E3" borderRadius="14px" p={5}>
            <Box w={9} h={9} borderRadius="9px" bg="white"
              display="flex" alignItems="center" justifyContent="center" mb={3}>
              <Icon as={f.icon} color={f.color} boxSize="16px" />
            </Box>
            <Text fontWeight="700" fontSize="14px" color="#1C2B3A" mb={1.5}>{f.title}</Text>
            <Text fontSize="13px" color="#5a6a7a" lineHeight="1.7">{f.body}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <SectionHeading>Get started in under 5 minutes</SectionHeading>
      <VStack spacing={4} align="stretch" mb={8}>
        {[
          { s: '1', title: 'Set your tax rate', body: 'Enter your effective Income Tax + NI rate. Most UK freelancers earning £30k–£80k use 25–30%.' },
          { s: '2', title: 'Log your income', body: 'Add each payment as it arrives. Spendable tracks source, date, and amount — building your rolling reserve automatically.' },
          { s: '3', title: 'Add recurring expenses', body: 'Add monthly outgoings — rent, software, insurance. Used to calculate your safe-to-spend and runway.' },
          { s: '4', title: 'Know your number', body: 'Your dashboard shows live safe-to-spend in GBP — current balance minus tax reserve, buffer, and upcoming bills.' },
        ].map(item => (
          <HStack key={item.s} spacing={4} align="flex-start">
            <Box w={8} h={8} borderRadius="full" bg="#4C5FD5" color="white"
              display="flex" alignItems="center" justifyContent="center" flexShrink={0}
              fontWeight="700" fontSize="13px" fontFamily="'Fraunces', Georgia, serif">
              {item.s}
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="14px" color="#1C2B3A" mb={0.5}>{item.title}</Text>
              <Text fontSize="13px" color="#5a6a7a" lineHeight="1.7">{item.body}</Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      <SectionHeading>What's included on the free plan</SectionHeading>
      <FeatureList items={[
        'Safe-to-spend calculation in GBP',
        'Rolling tax reserve (Income Tax + NI)',
        'Financial confidence score',
        'Up to 5 income entries',
        'Up to 3 recurring expenses',
      ]} />
      <P>Upgrade to Pro (£8/mo) for unlimited income tracking, Tax Tracker with 31 Jan/31 Jul deadlines, 6-month forecast, CSV export, and full income smoothing analysis.</P>

      <InlineCTA
        headline="Try Spendable free — 5-minute setup"
        sub="UK freelancers on the free plan can track income and see their tax reserve from day one. No card required."
        cta="Start for free" utmRef="for-uk-cta"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-tax-planning', label: 'Freelance tax planning: how much to set aside', desc: 'Full guide to calculating your reserve and avoiding the January panic.' },
        { href: '/guides/self-employed-tax-uk', label: 'UK self-assessment: a complete guide', desc: 'Deadlines, payments on account, and what to expect from HMRC.' },
        { href: '/guides/self-employed-budgeting', label: 'Self-employed budgeting for irregular income', desc: 'The 4-bucket framework for when income changes every month.' },
      ]} />
    </SEOPageLayout>
  );
}
