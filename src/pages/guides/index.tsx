import { Box, SimpleGrid, Text, HStack, Icon } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { SEOPageLayout, InlineCTA } from '../../components/seo/SEOPageLayout';

const GUIDES = [
  {
    href: '/guides/freelance-tax-planning',
    title: 'Freelance Tax Planning: How Much to Set Aside',
    desc: 'Calculate your tax reserve, understand UK and US deadlines, and eliminate the January shock.',
    tag: 'Tax',
    color: '#D4A800',
    time: '6 min',
  },
  {
    href: '/guides/self-employed-budgeting',
    title: 'Self-Employed Budgeting: The 4-Bucket Framework',
    desc: 'A practical system for budgeting when your income changes every month.',
    tag: 'Budgeting',
    color: '#4C5FD5',
    time: '7 min',
  },
  {
    href: '/guides/freelance-income-smoothing',
    title: 'What Is Income Smoothing and Why You Need It',
    desc: 'How averaging your income over 6 months prevents feast-and-famine overspending.',
    tag: 'Income',
    color: '#27AE60',
    time: '4 min',
  },
  {
    href: '/guides/freelance-emergency-fund',
    title: 'How Much Emergency Fund Does a Freelancer Need?',
    desc: "Why 3 months isn't always enough, and how to calculate your number.",
    tag: 'Savings',
    color: '#8B5CF6',
    time: '4 min',
  },
  {
    href: '/guides/self-employed-tax-uk',
    title: 'UK Self-Assessment: A Complete Guide',
    desc: 'Deadlines, payments on account, and everything self-employed people need to know.',
    tag: 'Tax · UK',
    color: '#EB5757',
    time: '8 min',
  },
  {
    href: '/guides/how-much-to-save-for-taxes',
    title: 'How Much Should You Save for Taxes as a Freelancer?',
    desc: 'Percentages by country, income level, and tax schedule — with worked examples.',
    tag: 'Tax',
    color: '#D4A800',
    time: '5 min',
  },
  {
    href: '/guides/freelance-cash-flow',
    title: 'Cash Flow Management for Freelancers',
    desc: 'How to maintain healthy cash flow even when clients pay late.',
    tag: 'Cash Flow',
    color: '#0EA5E9',
    time: '5 min',
  },
  {
    href: '/guides/irregular-income-budgeting',
    title: 'Budgeting With Irregular Income: A Practical Guide',
    desc: "The strategies that work when you can't predict next month's income.",
    tag: 'Budgeting',
    color: '#4C5FD5',
    time: '6 min',
  },
];

const COMPARISONS = [
  {
    href: '/compare/freelance-finance-spreadsheet-vs-app',
    title: 'Spreadsheet vs App for Freelance Finance',
    desc: "When a spreadsheet is fine — and the exact moment you've outgrown it.",
  },
  {
    href: '/compare/spendable-vs-ynab',
    title: 'Spendable vs YNAB for Freelancers',
    desc: 'How the two approaches compare for self-employed users with irregular income.',
  },
  {
    href: '/compare/spendable-vs-quickbooks',
    title: 'Spendable vs QuickBooks for Freelancers',
    desc: 'Accounting software vs financial clarity tool — which one answers the daily spending question.',
  },
];

export default function GuidesIndexPage() {
  return (
    <SEOPageLayout maxW='960px'>
      <Box mb={12}>
        <Text
          fontSize='11px'
          fontWeight='700'
          color='#4C5FD5'
          textTransform='uppercase'
          letterSpacing='1.5px'
          mb={4}
        >
          Free resources
        </Text>
        <Text
          as='h1'
          fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '32px', md: '46px' }}
          fontWeight='800'
          letterSpacing='-1.5px'
          color='#1C2B3A'
          lineHeight='1.1'
          mb={4}
        >
          Freelance Finance Guides
        </Text>
        <Text fontSize='17px' color='#5a6a7a' lineHeight='1.65' maxW='560px'>
          Practical, jargon-free guides on tax planning, budgeting with
          irregular income, and always knowing exactly what you can safely
          spend.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mb={12}>
        {GUIDES.map((g) => (
          <Box
            key={g.href}
            as='a'
            href={g.href}
            display='block'
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='16px'
            p={5}
            _hover={{
              borderColor: '#4C5FD5',
              boxShadow: '0 8px 24px rgba(76,95,213,0.1)',
              transform: 'translateY(-2px)',
            }}
            transition='all 0.2s'
            textDecoration='none'
          >
            <HStack justify='space-between' mb={3}>
              <Box px={2.5} py={0.5} bg={g.color + '18'} borderRadius='full'>
                <Text
                  fontSize='10px'
                  fontWeight='700'
                  color={g.color}
                  textTransform='uppercase'
                  letterSpacing='0.6px'
                >
                  {g.tag}
                </Text>
              </Box>
              <Text fontSize='12px' color='#8a9aaa'>
                {g.time}
              </Text>
            </HStack>
            <Text
              fontWeight='700'
              fontSize='14px'
              color='#1C2B3A'
              mb={2}
              lineHeight='1.4'
            >
              {g.title}
            </Text>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6' mb={3}>
              {g.desc}
            </Text>
            <HStack spacing={1} color='#4C5FD5'>
              <Text fontSize='13px' fontWeight='600'>
                Read guide
              </Text>
              <Icon as={RiArrowRightLine} boxSize='13px' />
            </HStack>
          </Box>
        ))}
      </SimpleGrid>

      <Box mb={10}>
        <Text
          fontSize='11px'
          fontWeight='700'
          color='#4C5FD5'
          textTransform='uppercase'
          letterSpacing='1.5px'
          mb={4}
        >
          Comparisons
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {COMPARISONS.map((c) => (
            <Box
              key={c.href}
              as='a'
              href={c.href}
              display='block'
              bg='white'
              border='1px solid #E8E8E3'
              borderRadius='14px'
              p={5}
              _hover={{ borderColor: '#4C5FD5', bg: '#f8f9ff' }}
              transition='all 0.15s'
              textDecoration='none'
            >
              <HStack justify='space-between' mb={2}>
                <Box
                  px={2.5}
                  py={0.5}
                  bg='rgba(76,95,213,0.1)'
                  borderRadius='full'
                >
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color='#4C5FD5'
                    textTransform='uppercase'
                    letterSpacing='0.6px'
                  >
                    Comparison
                  </Text>
                </Box>
                <Icon as={RiArrowRightLine} color='#4C5FD5' boxSize='14px' />
              </HStack>
              <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1.5}>
                {c.title}
              </Text>
              <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
                {c.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <InlineCTA
        headline='See your safe-to-spend right now'
        sub='Spendable applies everything in these guides automatically. Free plan, no card required.'
        cta='Start for free'
        utmRef='seo-guides-index'
      />
    </SEOPageLayout>
  );
}
