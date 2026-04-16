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
  RiShieldCheckLine,
  RiAlertLine,
  RiCalculatorLine,
  RiBankLine,
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
        tag='Savings Guide'
        readTime='5 min read'
        h1='How Much Emergency Fund Does a Freelancer Need?'
        lead="The standard advice says 3 months of expenses. For freelancers, that's often not enough. Here's how to calculate your real number based on your income volatility, client concentration, and monthly costs."
      />

      <SectionHeading>
        Why the standard advice doesn't apply to freelancers
      </SectionHeading>
      <P>
        The 3-month emergency fund rule was designed for salaried workers. If
        you lose your job, 3 months of expenses buys you time to find a new one.
        The risk is binary: employed or not.
      </P>
      <P>
        Freelancer risk is different. You rarely go from full income to zero
        overnight. More commonly, you experience: a slow month where income
        drops 60%; a client who delays payment for 6 weeks; a project that ends
        earlier than expected; or a dry spell between contracts. These aren't
        catastrophic events — they're the normal texture of freelance work.
      </P>
      <P>
        3 months of expenses might be enough for a salaried worker who loses
        their job. For a freelancer navigating normal income variance, it can
        disappear in a single bad quarter.
      </P>

      <SectionHeading>
        The two things your emergency fund must cover
      </SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box
          bg='#eafaf1'
          border='1px solid rgba(39,174,96,0.2)'
          borderRadius='14px'
          p={5}
        >
          <HStack spacing={2} mb={3}>
            <Icon as={RiShieldCheckLine} color='#27AE60' boxSize='16px' />
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              Income gaps
            </Text>
          </HStack>
          <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
            Periods where income drops significantly below your average — client
            pauses, payment delays, seasonal slowdowns, or simply a quiet
            stretch. Your fund bridges the gap without touching your tax reserve
            or going into debt.
          </Text>
        </Box>
        <Box
          bg='#fff8f0'
          border='1px solid rgba(212,168,0,0.2)'
          borderRadius='14px'
          p={5}
        >
          <HStack spacing={2} mb={3}>
            <Icon as={RiAlertLine} color='#D4A800' boxSize='16px' />
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
              Unexpected costs
            </Text>
          </HStack>
          <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
            Equipment failure, medical bills, urgent repairs, or a sudden
            professional expense. These don't wait for a good month. Your fund
            means you can handle them without derailing your finances.
          </Text>
        </Box>
      </SimpleGrid>

      <SectionHeading>How to calculate your number</SectionHeading>
      <P>
        There's no single right answer — it depends on three factors specific to
        your situation. Work through each one:
      </P>

      <VStack spacing={4} align='stretch' mb={8}>
        {[
          {
            step: '1',
            title: 'Calculate your monthly essentials',
            body: "This is your absolute floor — rent/mortgage, utilities, food, insurance, loan repayments. Not your typical spending. Not your lifestyle. The minimum you need to keep the lights on. For most UK freelancers this is £1,500–£2,500/mo. For US freelancers it's typically $2,000–$3,500/mo.",
            color: '#4C5FD5',
          },
          {
            step: '2',
            title: 'Assess your income volatility',
            body: 'Look at your worst 3 months over the past 2 years. What did you earn? How long did the drought last? If you had one client account for over 50% of your income, your risk is higher. If you had 6+ steady clients, your risk is lower. Higher volatility = larger buffer needed.',
            color: '#D4A800',
          },
          {
            step: '3',
            title: 'Factor in your payment terms',
            body: 'If your clients typically pay in 30 days, you could have a 4-week gap between completing work and receiving payment. If you have clients on 60-day terms, that gap doubles. Your emergency fund needs to bridge the payment cycle, not just the income gap.',
            color: '#27AE60',
          },
        ].map((item) => (
          <HStack key={item.step} spacing={4} align='flex-start'>
            <Box
              w={8}
              h={8}
              borderRadius='full'
              bg={item.color}
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

      <SectionHeading>The freelancer emergency fund formula</SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <Box px={5} py={4} bg='#f8fafc' borderBottom='1px solid #E8E8E3'>
          <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
            Recommended buffer by freelancer profile
          </Text>
        </Box>
        <Box overflowX='auto'>
          <Table size='sm'>
            <Thead bg='#f8fafc'>
              <Tr>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Profile
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Recommended buffer
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Why
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                [
                  'Stable retainer (1–2 long-term clients)',
                  '2–3 months',
                  'Low volatility, predictable income',
                ],
                [
                  'Mixed (retainer + project work)',
                  '3–4 months',
                  'Project gaps create short-term variance',
                ],
                [
                  'Project-only (no retainers)',
                  '4–6 months',
                  'High volatility, longer dry spells possible',
                ],
                [
                  'Single dominant client (>60% income)',
                  '5–6 months',
                  'Client departure is catastrophic risk',
                ],
                [
                  'Recently started freelancing',
                  '6 months',
                  'Unpredictable until client base is established',
                ],
              ].map(([profile, buffer, why], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {profile}
                  </Td>
                  <Td py={3} fontSize='13px' fontWeight='700' color='#4C5FD5'>
                    {buffer}
                  </Td>
                  <Td py={3} fontSize='13px' color='#5a6a7a'>
                    {why}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <InlineCTA
        headline='See your current emergency buffer in Spendable'
        sub="Spendable shows your buffer as part of your safe-to-spend calculation — so you always know if it's intact."
        cta='Calculate my emergency buffer'
        utmRef='seo-emergency-fund-mid'
      />

      <SectionHeading>Where to keep your emergency fund</SectionHeading>
      <P>
        Your emergency fund has one job: be there when you need it. That means:
      </P>
      <FeatureList
        items={[
          'Easy access — not locked away in a notice account or investment',
          "Separate from your current account — so you can't accidentally spend it",
          'Separate from your tax reserve — these serve different purposes',
          'Interest-bearing — high-interest easy-access savings account is ideal',
          'Labelled clearly — "Emergency Buffer" or "Runway Fund" in your banking app',
        ]}
      />

      <SectionHeading>
        The common mistake: raiding the wrong fund
      </SectionHeading>
      <P>
        The most destructive freelance financial habit is conflating the
        emergency fund with the tax reserve. Both sit in savings. Both feel like
        "money I could use." But they're completely different pots.
      </P>
      <P>
        If you dip into your tax reserve during a slow month, you're borrowing
        from HMRC or the IRS. You'll get that slow month covered, then face a
        tax bill you can't pay 6 months later. This is how freelancers end up in
        serious financial trouble.
      </P>
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
            <strong>Rule:</strong> slow months get covered from the emergency
            fund, not the tax reserve. If both are depleted, that's when you
            actively seek new work — not when you start borrowing from the tax
            pot.
          </Text>
        </HStack>
      </Box>

      <SectionHeading>
        How to build it if you're starting from zero
      </SectionHeading>
      <P>
        Building a full 3–6 month buffer takes time. Don't try to do it in one
        month — that creates its own cash flow problem. Instead, allocate a
        fixed percentage of every payment to the buffer until it's full.
      </P>
      <FeatureList
        items={[
          'Decide your target: e.g. 3 months × £2,000 essentials = £6,000',
          'Allocate 10–15% of every invoice payment to your buffer account',
          'Treat it like tax: set aside on receipt, not at month end',
          'Once the target is reached, stop — redirect that percentage to investments or lifestyle',
          'If you draw it down, rebuild it before anything else',
        ]}
      />

      <SectionHeading>
        How Spendable handles your emergency buffer
      </SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        p={5}
        mb={6}
      >
        <HStack spacing={3} mb={3}>
          <Icon as={RiCalculatorLine} color='#4C5FD5' boxSize='18px' />
          <Text fontWeight='700' fontSize='15px' color='#1C2B3A'>
            Built into the safe-to-spend formula
          </Text>
        </HStack>
        <P>
          In Settings, you set how many months of expenses you want to hold as a
          buffer (typically 2–3). Spendable then deducts that amount from your
          balance before calculating your safe-to-spend.
        </P>
        <P>
          This means your buffer is protected by design — you can't accidentally
          spend it because it's already removed from what Spendable shows as
          available.
        </P>
        <FeatureList
          items={[
            'Set your buffer in months (e.g. 3 months)',
            'Spendable calculates the £ value based on your monthly expenses',
            'Deducted from balance before safe-to-spend is shown',
            'Visible on the Balance Breakdown on your dashboard',
          ]}
        />
      </Box>

      <InlineCTA
        headline='Know your buffer is always protected'
        sub='Spendable deducts your emergency buffer before showing safe-to-spend — so you can never accidentally spend it.'
        cta='Start for free'
        utmRef='seo-emergency-fund-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/self-employed-budgeting',
            label: 'Self-employed budgeting framework',
            desc: 'How the emergency buffer fits into the 4-bucket system.',
          },
          {
            href: '/guides/freelance-cash-flow',
            label: 'Cash flow management for freelancers',
            desc: 'How to maintain liquidity even when clients pay late.',
          },
          {
            href: '/guides/freelance-income-smoothing',
            label: 'What is income smoothing?',
            desc: 'How averaging your income prevents the slow months from feeling like emergencies.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
