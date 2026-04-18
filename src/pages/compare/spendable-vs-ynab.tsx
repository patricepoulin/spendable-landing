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
import { RiCheckLine, RiCloseLine, RiQuestionLine } from 'react-icons/ri';
import {
  SEOPageLayout,
  ArticleHeader,
  SectionHeading,
  P,
  InlineCTA,
  FeatureList,
  RelatedPages,
} from '../../components/seo/SEOPageLayout';

const Check = () => (
  <Box display='flex' justifyContent='center'>
    <Icon as={RiCheckLine} color='#27AE60' boxSize='15px' />
  </Box>
);
const Cross = () => (
  <Box display='flex' justifyContent='center'>
    <Icon as={RiCloseLine} color='#EB5757' boxSize='15px' />
  </Box>
);
const Partial = ({ label }: { label: string }) => (
  <Box display='flex' justifyContent='center'>
    <Text fontSize='12px' color='#D4A800' fontWeight='600'>
      {label}
    </Text>
  </Box>
);

export default function Page() {
  return (
    <SEOPageLayout
      maxW='860px'
      meta={{
        title: 'Spendable vs YNAB for Freelancers — Which Is Better?',
        description:
          'YNAB is built for regular paychecks. Spendable is built for irregular income, automatic tax reserves, and the specific needs of self-employed people.',
        canonical: '/compare/spendable-vs-ynab',
      }}
    >
      <ArticleHeader
        tag='Comparison'
        readTime='5 min read'
        h1='Spendable vs YNAB for Freelancers — Which Is Better?'
        lead="YNAB is a well-built budgeting tool. But it was designed around a regular paycheck. If your income varies every month, here's an honest look at where each tool fits — and where each one falls short."
      />

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='12px'
        px={5}
        py={4}
        mb={8}
      >
        <Text fontWeight='700' fontSize='13px' color='#1C2B3A' mb={2}>
          TL;DR
        </Text>
        <Text fontSize='14px' color='#5a6a7a' lineHeight='1.7'>
          YNAB is excellent for people who want granular category-level
          budgeting and have stable income. Spendable is built specifically for
          freelancers with irregular income — automatic tax reserves, income
          smoothing, and runway tracking are core, not add-ons. If you're
          freelance, Spendable will feel like it was made for you. YNAB will
          feel like you're constantly fighting the system.
        </Text>
      </Box>

      <SectionHeading>The fundamental difference in philosophy</SectionHeading>
      <P>
        YNAB is built on zero-based budgeting: every pound you have gets
        assigned to a category before you spend it. It works beautifully when
        income is predictable. You receive your paycheck, assign it, spend from
        categories.
      </P>
      <P>
        The problem for freelancers: income arrives unpredictably, in varying
        amounts. A £9,200 month followed by a £1,400 month makes zero-based
        budgeting stressful — you're constantly re-assigning, rolling with
        punches, and re-budgeting each time a payment arrives or doesn't.
      </P>
      <P>
        Spendable takes a different approach. Rather than assigning every pound
        to a category, it calculates a single number — your safe-to-spend —
        derived from your smoothed average income, minus tax reserves, buffer,
        and upcoming bills. You don't budget categories. You know your spending
        power and stay within it.
      </P>

      <SectionHeading>Feature comparison</SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <Box overflowX='auto'>
          <Table size='sm'>
            <Thead>
              <Tr bg='#f8fafc'>
                <Th py={4} fontSize='11px' color='#8a9aaa' w='40%'>
                  Feature
                </Th>
                <Th py={4} fontSize='11px' color='#5a6a7a' textAlign='center'>
                  YNAB
                </Th>
                <Th
                  py={4}
                  fontSize='11px'
                  color='#4C5FD5'
                  textAlign='center'
                  bg='#f0f3ff'
                >
                  Spendable
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {(
                [
                  ['Zero-based budgeting', <Check />, <Cross />],
                  ['Category-level spending control', <Check />, <Cross />],
                  ['Bank sync (automatic imports)', <Check />, <Cross />],
                  [
                    'Irregular income handling',
                    <Partial label='Partial' />,
                    <Check />,
                  ],
                  ['Income smoothing (rolling average)', <Cross />, <Check />],
                  ['Automatic tax reserve calculation', <Cross />, <Check />],
                  [
                    'Self-assessment / quarterly deadlines',
                    <Cross />,
                    <Check />,
                  ],
                  [
                    'Financial runway calculation',
                    <Partial label='Via reports' />,
                    <Check />,
                  ],
                  ['Safe-to-spend single number', <Cross />, <Check />],
                  ['6-month income forecast', <Cross />, <Check />],
                  ['No bank login required', <Cross />, <Check />],
                  ['Designed for freelancers', <Cross />, <Check />],
                  ['Mobile app', <Check />, <Check />],
                  ['CSV export', <Check />, <Check />],
                  ['Free plan available', <Cross />, <Check />],
                  [
                    'Monthly cost (paid plan)',
                    <Partial label='~£15/mo' />,
                    <Partial label='£8/mo' />,
                  ],
                ] as [string, React.ReactNode, React.ReactNode][]
              ).map(([feature, ynab, sp], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {feature}
                  </Td>
                  <Td py={3} textAlign='center'>
                    {ynab}
                  </Td>
                  <Td py={3} bg='#f8faff'>
                    {sp}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <SectionHeading>Where YNAB genuinely wins</SectionHeading>
      <P>
        YNAB isn't the wrong choice for everyone. It's the right choice if you
        want granular control over spending categories, or if your income is
        more regular than typical. Be honest about what you actually need:
      </P>
      <FeatureList
        items={[
          "You want to track exactly how much you're spending on food, entertainment, clothing, etc.",
          "You find category-level discipline helpful and you'll actually use it",
          'You have a partner with salary income that stabilises your household cash flow',
          "You want automatic bank syncing so you don't have to log entries manually",
          "You've tried YNAB before and the methodology clicked for you",
        ]}
      />

      <SectionHeading>Where YNAB falls short for freelancers</SectionHeading>
      <P>
        The issues aren't bugs — they're the result of YNAB being designed for a
        different use case.
      </P>
      <VStack spacing={4} align='stretch' mb={6}>
        {[
          {
            title: 'No tax reserve calculation',
            body: 'YNAB has no concept of tax reserves. You can create a category called "Tax" and manually assign money to it, but there\'s no automatic calculation based on your income, no percentage setting, and no connection to actual tax deadlines. For freelancers, this is a significant gap.',
          },
          {
            title: 'Zero-based budgeting fights irregular income',
            body: 'YNAB\'s methodology requires you to "age your money" — only budget money you already have. A variable £1,400 month followed by a £9,200 month means dramatically different budgets. YNAB handles this by asking you to "roll with the punches" and re-assign constantly. It works, but it\'s laborious.',
          },
          {
            title: 'No income smoothing',
            body: "YNAB doesn't have a concept of a rolling income average. Every month is treated independently. This means your budget varies with your income rather than with your actual long-term earning power — the source of feast-and-famine behaviour.",
          },
          {
            title: 'Requires bank connection',
            body: 'YNAB works best when connected to your bank accounts for automatic import. This requires giving YNAB (or a third-party service) access to your banking. Some freelancers are uncomfortable with this. Spendable requires no bank connection — you log income manually, which also means every entry is intentional.',
          },
          {
            title: 'Cost',
            body: "YNAB costs approximately £15/mo (or ~£105/year). Spendable Pro is £8/mo. Spendable also has a free plan — YNAB doesn't.",
          },
        ].map((item, i) => (
          <Box
            key={i}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <Text fontWeight='700' fontSize='14px' color='#1C2B3A' mb={1.5}>
              {item.title}
            </Text>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
              {item.body}
            </Text>
          </Box>
        ))}
      </VStack>

      <InlineCTA
        headline='Built for freelancers from the ground up'
        sub='Tax reserves, income smoothing, runway tracking, and a single safe-to-spend number. Free plan available.'
        cta='Try Spendable free'
        utmRef='seo-vs-ynab-mid'
      />

      <SectionHeading>The workflow comparison</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='14px' p={5}>
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='15px'
            color='#1C2B3A'
            mb={3}
          >
            YNAB workflow (freelancer)
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Client pays invoice',
              'Open YNAB, record income',
              'Manually assign money to Tax category',
              'Re-assign remaining money across categories',
              '"Roll with the punches" as income varies',
              'Check reports to estimate tax owed',
              'Hope the Tax category is large enough by January',
            ].map((step, i) => (
              <HStack key={i} spacing={2} align='flex-start'>
                <Text
                  fontSize='12px'
                  color='#8a9aaa'
                  fontWeight='600'
                  flexShrink={0}
                  mt={0.5}
                >
                  {String(i + 1).padStart(2, '0')}
                </Text>
                <Text fontSize='13px' color='#5a6a7a'>
                  {step}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
        <Box
          bg='#1e1245'
          border='1px solid rgba(124,92,246,0.35)'
          borderRadius='14px'
          p={5}
        >
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='15px'
            color='white'
            mb={3}
          >
            Spendable workflow (freelancer)
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Client pays invoice',
              'Log payment in Spendable (10 seconds)',
              'Safe-to-spend updates automatically',
              'Tax reserve recalculates automatically',
              'Runway updates automatically',
              'Check dashboard — one number tells you everything',
              'Tax Tracker shows exact 31 Jan/31 Jul amounts',
            ].map((step, i) => (
              <HStack key={i} spacing={2} align='flex-start'>
                <Icon
                  as={RiCheckLine}
                  color='#4eca80'
                  boxSize='13px'
                  flexShrink={0}
                  mt={0.5}
                />
                <Text fontSize='13px' color='#9d8fd4'>
                  {step}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <SectionHeading>Who should use each tool</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='14px' p={5}>
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='15px'
            color='#1C2B3A'
            mb={3}
          >
            YNAB is better if you…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Want category-by-category spending control',
              'Have relatively stable income month to month',
              'Have a household with mixed salary + freelance income',
              'Want automatic bank imports',
              'Find zero-based budgeting motivating',
            ].map((t) => (
              <HStack key={t} spacing={2}>
                <Icon
                  as={RiCheckLine}
                  color='#27AE60'
                  boxSize='13px'
                  flexShrink={0}
                />
                <Text fontSize='13px' color='#5a6a7a'>
                  {t}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
        <Box
          bg='#1e1245'
          border='1px solid rgba(124,92,246,0.35)'
          borderRadius='14px'
          p={5}
        >
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='15px'
            color='white'
            mb={3}
          >
            Spendable is better if you…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Have genuinely irregular income month to month',
              'Want automatic tax reserve tracking',
              'Need self-assessment / quarterly tax deadlines',
              'Prefer not to connect your bank',
              'Want one number that answers "can I spend this?"',
              'Want a free plan to start',
            ].map((t) => (
              <HStack key={t} spacing={2}>
                <Icon
                  as={RiCheckLine}
                  color='#4eca80'
                  boxSize='13px'
                  flexShrink={0}
                />
                <Text fontSize='13px' color='#9d8fd4'>
                  {t}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <InlineCTA
        headline='Try Spendable free — no card, no commitment'
        sub='See your safe-to-spend, tax reserve, and runway in real time. Built specifically for freelancers with irregular income.'
        cta='Start free'
        utmRef='seo-vs-ynab-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/compare/freelance-finance-spreadsheet-vs-app',
            label: 'Spreadsheet vs dedicated app',
            desc: "If you're still in a spreadsheet, here's the comparison to read first.",
          },
          {
            href: '/compare/spendable-vs-quickbooks',
            label: 'Spendable vs QuickBooks',
            desc: 'How Spendable compares to accounting software for freelancers.',
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: "The tax reserve feature YNAB doesn't have.",
          },
        ]}
      />
    </SEOPageLayout>
  );
}
