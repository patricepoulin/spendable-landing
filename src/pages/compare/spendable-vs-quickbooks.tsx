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
import { RiCheckLine, RiCloseLine } from 'react-icons/ri';
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
        title:
          'Spendable vs QuickBooks for Freelancers — Which Is Right for You?',
        description:
          'QuickBooks is accounting software. Spendable is a financial clarity tool. Most freelancers need one, not both — here is how to choose.',
        canonical: '/compare/spendable-vs-quickbooks',
      }}
    >
      <ArticleHeader
        tag='Comparison'
        readTime='5 min read'
        h1='Spendable vs QuickBooks for Freelancers — Which Is Right for You?'
        lead="QuickBooks is accounting software built for running a business. Spendable is a financial clarity tool built for knowing what you can spend. Most freelancers don't need both — here's how to choose."
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
          The one-line summary
        </Text>
        <Text fontSize='14px' color='#5a6a7a' lineHeight='1.7'>
          If you need to send invoices, file VAT returns, manage payroll, or
          produce P&L reports for an accountant or investor — you need
          QuickBooks. If you need to know how much you can safely spend today,
          whether your tax reserve is adequate, and how long your runway is —
          you need Spendable. Many freelancers end up using both for different
          purposes.
        </Text>
      </Box>

      <SectionHeading>What each product is actually for</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='14px' p={5}>
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='16px'
            color='#1C2B3A'
            mb={3}
          >
            QuickBooks is...
          </Text>
          <P>
            Accounting software. Its primary purpose is to help you comply with
            financial reporting requirements: invoicing, expense tracking for
            HMRC/IRS purposes, VAT calculations, payroll, and producing the
            reports your accountant needs at year-end.
          </P>
          <P>
            It's comprehensive, powerful, and complex. It's built around the
            accounting model of a business — assets, liabilities, profit and
            loss. It gives you rigorous financial records.
          </P>
          <Text fontSize='13px' color='#8a9aaa' fontWeight='600'>
            Built for: accounting compliance, invoicing, tax filing support
          </Text>
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
            fontSize='16px'
            color='white'
            mb={3}
          >
            Spendable is...
          </Text>
          <P>
            A financial clarity tool. Its primary purpose is to answer one
            question in real time: how much can I safely spend right now? It
            does this by smoothing your irregular income, maintaining a rolling
            tax reserve, tracking your emergency buffer, and subtracting
            upcoming bills — leaving a single safe-to-spend figure.
          </P>
          <P>
            It's focused, simple, and built specifically for freelancers with
            irregular income. It doesn't replace accounting software — it
            replaces the mental arithmetic you do to answer the question
            QuickBooks can't.
          </P>
          <Text fontSize='13px' color='#9d8fd4' fontWeight='600'>
            Built for: spending confidence, tax reserves, financial clarity
          </Text>
        </Box>
      </SimpleGrid>

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
                  QuickBooks
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
                  ['Send invoices to clients', <Check />, <Cross />],
                  ['Track expenses for tax purposes', <Check />, <Cross />],
                  ['VAT / GST returns', <Check />, <Cross />],
                  ['Profit & loss reports', <Check />, <Cross />],
                  ['Bank reconciliation', <Check />, <Cross />],
                  ['Payroll', <Check />, <Cross />],
                  [
                    'Multi-currency accounting',
                    <Check />,
                    <Partial label='Tracking' />,
                  ],
                  ['Real-time safe-to-spend calculation', <Cross />, <Check />],
                  [
                    'Income smoothing (6-month rolling avg)',
                    <Cross />,
                    <Check />,
                  ],
                  [
                    'Automatic tax reserve tracking',
                    <Partial label='Manual' />,
                    <Check />,
                  ],
                  [
                    'Self-assessment / quarterly deadlines',
                    <Partial label='Reminders' />,
                    <Check />,
                  ],
                  [
                    'Financial runway calculation',
                    <Partial label='Via reports' />,
                    <Check />,
                  ],
                  ['Emergency buffer tracking', <Cross />, <Check />],
                  [
                    '6-month income forecast',
                    <Partial label='Basic' />,
                    <Check />,
                  ],
                  ['Free plan', <Cross />, <Check />],
                  [
                    'Monthly cost (paid)',
                    <Partial label='£12–30+/mo' />,
                    <Partial label='£8/mo' />,
                  ],
                ] as [string, React.ReactNode, React.ReactNode][]
              ).map(([feature, qb, sp], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {feature}
                  </Td>
                  <Td py={3} textAlign='center'>
                    {qb}
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

      <SectionHeading>The gap QuickBooks doesn't fill</SectionHeading>
      <P>
        Many freelancers who use QuickBooks still don't know the answer to the
        question they check most often: "can I spend this money?" QuickBooks
        tells you what you earned, what you spent, and what your profit is. It
        doesn't tell you whether the money in your account right now is safe to
        spend.
      </P>
      <P>
        That's because QuickBooks doesn't know about your upcoming tax bill,
        your emergency buffer, your next month's expected slow patch, or your
        income smoothing. It's a rear-facing tool — it records what happened.
        Spendable is a forward-facing tool — it tells you what's available.
      </P>
      <Box
        bg='white'
        border='1px solid rgba(76,95,213,0.2)'
        borderLeft='4px solid #4C5FD5'
        borderRadius='0 12px 12px 0'
        px={5}
        py={5}
        mb={6}
      >
        <Text
          fontFamily="'Fraunces', Georgia, serif"
          fontSize='16px'
          color='#1C2B3A'
          fontWeight='700'
          mb={2}
        >
          The question QuickBooks can't answer
        </Text>
        <Text fontSize='14px' color='#5a6a7a' lineHeight='1.7'>
          "I have £12,400 in my account. My QuickBooks P&L says I've had a good
          year. But I have a self-assessment bill coming in January, I'm not
          sure how big a slow patch is ahead, and I need to decide if I can
          afford a new laptop. Can I?"
        </Text>
        <Text fontSize='13px' color='#8a9aaa' mt={2}>
          QuickBooks will show you what you earned. It won't show you your
          safe-to-spend.
        </Text>
      </Box>

      <SectionHeading>Why some freelancers use both</SectionHeading>
      <P>
        If you're VAT-registered, have an accountant who needs QuickBooks
        reports, or send a high volume of invoices — QuickBooks is the right
        accounting tool. But it still won't tell you what you can spend day to
        day.
      </P>
      <P>
        In that case, using both makes sense: QuickBooks for compliance and
        accounting, Spendable for the daily financial clarity question. They
        serve different purposes and don't overlap in functionality.
      </P>
      <P>
        Spendable doesn't need to connect to QuickBooks. You log income in
        Spendable (which takes seconds per entry) and your accounting in
        QuickBooks separately. The overlap is minor; the benefit is significant.
      </P>

      <InlineCTA
        headline="Answer the question QuickBooks can't"
        sub='Spendable gives you a live safe-to-spend figure — tax reserve, buffer, and upcoming bills already deducted. Free plan available.'
        cta='Try Spendable free'
        utmRef='seo-vs-quickbooks-mid'
      />

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
            You need QuickBooks if…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              "You're VAT-registered and need to file returns",
              'You employ anyone (even part-time)',
              'Your accountant requires formal P&L reports',
              'You invoice clients formally and need invoice tracking',
              'You have complex business finances with multiple cost centres',
            ].map((t) => (
              <HStack key={t} spacing={2} align='flex-start'>
                <Icon
                  as={RiCheckLine}
                  color='#27AE60'
                  boxSize='13px'
                  flexShrink={0}
                  mt={0.5}
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
            You need Spendable if…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'You want to know your safe-to-spend in real time',
              'Your income is irregular and you need a rolling average',
              'You want automatic tax reserve tracking',
              'You want self-assessment / quarterly tax deadlines',
              'You want a simple financial health dashboard',
              'You want a free starting point',
            ].map((t) => (
              <HStack key={t} spacing={2} align='flex-start'>
                <Icon
                  as={RiCheckLine}
                  color='#4eca80'
                  boxSize='13px'
                  flexShrink={0}
                  mt={0.5}
                />
                <Text fontSize='13px' color='#9d8fd4'>
                  {t}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <SectionHeading>Cost comparison</SectionHeading>
      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='14px'
        overflow='hidden'
        mb={8}
      >
        <Box overflowX='auto'>
          <Table size='sm'>
            <Thead bg='#f8fafc'>
              <Tr>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Plan
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa' textAlign='center'>
                  QuickBooks
                </Th>
                <Th py={3} fontSize='11px' color='#4C5FD5' textAlign='center'>
                  Spendable
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                ['Free plan', 'None', 'Yes — core features'],
                ['Entry level', '~£12/mo', '£8/mo (Pro)'],
                ['Standard', '~£22/mo', '£8/mo (everything included)'],
                ['Advanced', '£30–90/mo+', 'N/A — one Pro plan'],
              ].map(([plan, qb, sp], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {plan}
                  </Td>
                  <Td py={3} fontSize='13px' textAlign='center' color='#5a6a7a'>
                    {qb}
                  </Td>
                  <Td
                    py={3}
                    fontSize='13px'
                    textAlign='center'
                    fontWeight='600'
                    color='#4C5FD5'
                    bg='#f8faff'
                  >
                    {sp}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <InlineCTA
        headline='Try Spendable free — no card required'
        sub='Set up in under 5 minutes. See your safe-to-spend, tax reserve, and runway immediately.'
        cta='Start free'
        utmRef='seo-vs-quickbooks-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/compare/spendable-vs-ynab',
            label: 'Spendable vs YNAB for freelancers',
            desc: 'Another comparison for freelancers evaluating their financial tools.',
          },
          {
            href: '/compare/freelance-finance-spreadsheet-vs-app',
            label: 'Spreadsheet vs dedicated app',
            desc: "If you're still in a spreadsheet, this comparison comes first.",
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: "The tax reserve tracking QuickBooks doesn't provide automatically.",
          },
        ]}
      />
    </SEOPageLayout>
  );
}
