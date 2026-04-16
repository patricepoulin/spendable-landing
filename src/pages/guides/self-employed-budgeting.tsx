import {
  Box, SimpleGrid, Text, HStack, Icon,
  Table, Thead, Tbody, Tr, Th, Td,
} from '@chakra-ui/react';
import {
  RiMoneyDollarCircleLine, RiShieldCheckLine, RiCalendarLine, RiLineChartLine,
} from 'react-icons/ri';
import {
  SEOPageLayout, ArticleHeader, SectionHeading, P,
  InlineCTA, FeatureList, RelatedPages,
} from '../../components/seo/SEOPageLayout';

const BUCKETS = [
  { icon: RiMoneyDollarCircleLine, num: '01', title: 'Tax bucket', rate: '25–35%',
    body: "Set aside immediately on every payment. Untouchable. This is HMRC's or the IRS's money — not yours. Building this habit eliminates the January shock entirely.",
    color: '#D4A800', bg: '#fefae8', border: 'rgba(212,168,0,0.25)' },
  { icon: RiShieldCheckLine, num: '02', title: 'Emergency buffer', rate: '2–3 months',
    body: "Covers essential expenses if client work disappears. Build it once, maintain it, and never raid it for non-emergencies. This separates freelancers who survive slow months from those who don't.",
    color: '#27AE60', bg: '#eafaf1', border: 'rgba(39,174,96,0.25)' },
  { icon: RiCalendarLine, num: '03', title: 'Upcoming bills', rate: 'Variable',
    body: 'Known one-off costs — accountant fees, equipment, insurance renewals. Set aside monthly so large bills never arrive as surprises.',
    color: '#EB5757', bg: '#fef2f2', border: 'rgba(235,87,87,0.25)' },
  { icon: RiLineChartLine, num: '04', title: 'Safe to spend', rate: 'Everything left',
    body: 'What remains after the first three buckets is genuinely yours — the number that tells you what you can buy today without jeopardising tomorrow.',
    color: '#4C5FD5', bg: '#eef0fb', border: 'rgba(76,95,213,0.25)' },
];

export default function SelfEmployedBudgetingPage() {
  return (
    <SEOPageLayout>
      <ArticleHeader
        tag="Budgeting Guide" readTime="7 min read"
        h1="Self-Employed Budgeting: The Framework That Actually Works"
        lead="Traditional budgets assume a fixed monthly salary. Yours doesn't work that way. Here's the system that actually works when income changes every month."
      />

      <SectionHeading>Why traditional budgets fail freelancers</SectionHeading>
      <P>Employee budgets work because the input is fixed. The 50/30/20 rule divides a predictable pie. Freelance income is different — one client can account for 70% of your revenue, your best and worst months might be separated by £8,000.</P>
      <P>The right approach budgets against your <em>smoothed average income</em> — what you typically earn — and maintains buffers that absorb the variance.</P>

      <SectionHeading>The 4-bucket framework</SectionHeading>
      <P>Instead of a monthly budget, maintain four permanent buckets. Every payment flows through all four.</P>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {BUCKETS.map(b => (
          <Box key={b.title} bg={b.bg} border="1px solid" borderColor={b.border}
            borderRadius="16px" p={6} position="relative" overflow="hidden">
            <Box position="absolute" top={4} right={5}
              fontFamily="'Fraunces', Georgia, serif"
              fontSize="28px" fontWeight="800" color={b.color} opacity={0.15}>
              {b.num}
            </Box>
            <Box w="40px" h="40px" borderRadius="10px" bg="white"
              display="flex" alignItems="center" justifyContent="center" mb={3}>
              <Icon as={b.icon} color={b.color} boxSize="18px" />
            </Box>
            <HStack spacing={2} mb={2}>
              <Text fontWeight="800" fontSize="15px" color="#1C2B3A">{b.title}</Text>
              <Box px={2} py={0.5} bg="white" borderRadius="full">
                <Text fontSize="11px" fontWeight="700" color={b.color}>{b.rate}</Text>
              </Box>
            </HStack>
            <Text fontSize="13px" color="#5a6a7a" lineHeight="1.7">{b.body}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <InlineCTA
        headline="Spendable runs this framework automatically"
        sub="Log your income, set your tax rate and buffer months, add expenses — and Spendable shows your Safe to Spend in real time."
        cta="Try it free" utmRef="seo-budgeting-1"
      />

      <SectionHeading>The key: spending from your smoothed average</SectionHeading>
      <P>Income smoothing means basing your spending on your average income over the last 3–6 months, not on what arrived this week. It's the single most important technique for financial stability as a freelancer.</P>

      <Box bg="white" border="1px solid #E8E8E3" borderRadius="14px" overflow="hidden" mb={8}>
        <Box px={5} py={4} bg="#f8fafc" borderBottom="1px solid #E8E8E3">
          <Text fontWeight="700" fontSize="13px" color="#1C2B3A">Without vs with income smoothing — same 6 months</Text>
        </Box>
        <Box overflowX="auto">
          <Table size="sm">
            <Thead bg="#f8fafc">
              <Tr>
                <Th py={3} fontSize="11px" color="#8a9aaa">Month</Th>
                <Th py={3} fontSize="11px" color="#8a9aaa">Income</Th>
                <Th py={3} fontSize="11px" color="#EB5757">Without smoothing</Th>
                <Th py={3} fontSize="11px" color="#27AE60">With smoothing</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                ['January','£8,500','Spend freely → overspend','£3,600/mo budget'],
                ['February','£2,200','Panic — cut everything','£3,600/mo budget'],
                ['March','£6,800','Spend freely again','£3,600/mo budget'],
                ['April','£1,500','Crisis mode','£3,600/mo budget'],
                ['May','£9,200','Spend freely again','£3,600/mo budget'],
                ['June','£4,200','Moderate','£3,600/mo budget'],
              ].map(([m,i,w,s]) => (
                <Tr key={m} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize="13px" fontWeight="600">{m}</Td>
                  <Td py={3} fontSize="13px" color="#27AE60" fontWeight="600">{i}</Td>
                  <Td py={3} fontSize="13px" color="#EB5757">{w}</Td>
                  <Td py={3} fontSize="13px" color="#27AE60">{s}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box px={5} py={3} bg="#f8fafc" borderTop="1px solid #E8E8E3">
          <Text fontSize="12px" color="#5a6a7a">6-month avg: £5,400 → after 30% tax = £3,780. Smoothed monthly spend ≈ £3,600.</Text>
        </Box>
      </Box>

      <SectionHeading>Fixed vs variable expenses</SectionHeading>
      <FeatureList items={[
        "Fixed: rent/mortgage, software subscriptions, insurance, phone — identical every month",
        "Semi-fixed: food, utilities, transport — vary slightly but predictable within a range",
        "Variable: dining, entertainment, clothing — your flex category",
        "Lumpy: accountant fees, equipment, training — plan for these in the upcoming bills bucket",
      ]} />

      <SectionHeading>Your financial runway</SectionHeading>
      <P>Runway is the most important number for any freelancer: how long you could cover essential expenses if all client work stopped tomorrow.</P>
      <P>A healthy runway is 3–6 months of essential expenses. Less than 3 months means a slow period could become a crisis. More than 6 months may mean holding cash that could be deployed more productively.</P>

      <Box bg="white" border="1px solid #E8E8E3" borderLeft="4px solid #4C5FD5"
        borderRadius="0 12px 12px 0" px={5} py={5} mb={6}>
        <Text fontFamily="'Fraunces', Georgia, serif" fontSize="17px" color="#1C2B3A"
          fontWeight="700" mb={1}>The Spendable formula</Text>
        <Text fontSize="14px" color="#5a6a7a" lineHeight="1.7">
          Balance − Tax Reserve − Emergency Buffer − Upcoming Bills = <strong>Safe to Spend</strong>
        </Text>
      </Box>

      <InlineCTA
        headline="See your safe-to-spend right now"
        sub="Spendable calculates your real spending power in real time — tax reserve, buffer, and bills already deducted."
        cta="Calculate my safe-to-spend" utmRef="seo-budgeting-2"
      />
      <RelatedPages links={[
        { href: '/guides/freelance-tax-planning', label: 'Freelance tax planning: how much to set aside', desc: 'The complete guide to calculating and managing your tax reserve.' },
        { href: '/guides/freelance-income-smoothing', label: 'What is income smoothing?', desc: 'How averaging your income prevents feast-and-famine overspending.' },
        { href: '/guides/freelance-emergency-fund', label: 'How much emergency fund does a freelancer need?', desc: "Why 3 months isn't always enough, and how to find your number." },
      ]} />
    </SEOPageLayout>
  );
}
