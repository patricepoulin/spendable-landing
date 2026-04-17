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
  RiCheckLine,
  RiCloseLine,
  RiAlertLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import {
  SEOPageLayout,
  ArticleHeader,
  SectionHeading,
  P,
  InlineCTA,
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

const ROWS: [string, React.ReactNode, React.ReactNode][] = [
  ['Log income entries', <Check />, <Check />],
  ['Track recurring expenses', <Partial label='Manual' />, <Check />],
  ['Real-time tax reserve', <Cross />, <Check />],
  ['Income smoothing (6-month avg)', <Cross />, <Check />],
  ['Financial runway calculation', <Cross />, <Check />],
  ['Safe-to-spend figure', <Cross />, <Check />],
  ['Tax payment deadline reminders', <Cross />, <Check />],
  ['3/6/12-month forecast', <Cross />, <Check />],
  ['Works offline', <Check />, <Check />],
  ['Native mobile experience', <Partial label='Poor' />, <Check />],
  ['Auto-updates when income changes', <Cross />, <Check />],
  ['No formula maintenance', <Cross />, <Check />],
  ['CSV export', <Check />, <Check />],
  [
    'Multi-currency (USD/GBP/EUR/CAD/AUD)',
    <Partial label='Manual' />,
    <Check />,
  ],
  ['Free to start', <Check />, <Check />],
];

export default function SpreadsheetVsAppPage() {
  return (
    <SEOPageLayout maxW='860px'>
      <ArticleHeader
        tag='Comparison'
        readTime='5 min read'
        h1='Freelance Finance: Spreadsheet vs App — Which Is Better?'
        lead="Most freelancers start with a spreadsheet. Here's an honest look at what spreadsheets do well, exactly where they fall short, and the one moment that tells you it's time to switch."
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
          Spreadsheets are fine for simple income tracking. They break down when
          you need real-time tax reserves, income smoothing, or runway
          visibility. If you've ever hit January feeling uncertain about your
          tax bill — you've already outgrown yours.
        </Text>
      </Box>

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
                <Th py={4} fontSize='11px' color='#8a9aaa' w='45%'>
                  Feature
                </Th>
                <Th py={4} fontSize='11px' color='#8a9aaa' textAlign='center'>
                  Spreadsheet
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
              {ROWS.map(([feature, sheet, app], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {feature}
                  </Td>
                  <Td py={3} textAlign='center'>
                    {sheet}
                  </Td>
                  <Td py={3} bg='#f8faff'>
                    {app}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <SectionHeading>When a spreadsheet is genuinely fine</SectionHeading>
      <VStack spacing={3} align='stretch' mb={6}>
        {[
          'You earn a single, predictable income stream from one or two long-term clients',
          "You use an accountant for all tax calculations and don't need to track reserves yourself",
          "You review your finances monthly and don't need real-time visibility",
          "You're just starting out and logging income for the first time",
        ].map((item, i) => (
          <HStack key={i} spacing={3} align='flex-start'>
            <Icon
              as={RiCheckboxCircleLine}
              color='#27AE60'
              boxSize='16px'
              mt={0.5}
              flexShrink={0}
            />
            <Text fontSize='14px' color='#475569' lineHeight='1.7'>
              {item}
            </Text>
          </HStack>
        ))}
      </VStack>

      <SectionHeading>Signs you've outgrown your spreadsheet</SectionHeading>
      <VStack spacing={3} align='stretch' mb={6}>
        {[
          "You've had a January shock — your tax bill was larger than expected",
          'After a good month you overspent, then a slow month left you squeezed',
          "You don't know right now how many months of runway you have",
          'Your spreadsheet has grown complex enough that you worry about formula errors',
          'You have multiple income streams and the overview is unclear',
          "You try to use it on your phone and it's unusable",
          "You've missed a tax payment date because you didn't realise it was coming",
        ].map((item, i) => (
          <HStack key={i} spacing={3} align='flex-start'>
            <Icon
              as={RiAlertLine}
              color='#EB5757'
              boxSize='15px'
              mt={0.5}
              flexShrink={0}
            />
            <Text fontSize='14px' color='#475569' lineHeight='1.7'>
              {item}
            </Text>
          </HStack>
        ))}
      </VStack>

      <InlineCTA
        headline='Try Spendable free — set up in under 5 minutes'
        sub='No migration needed. Add your income, set your tax rate, and see your safe-to-spend immediately.'
        cta='Start free — no card needed'
        utmRef='seo-compare-spreadsheet-1'
      />

      <SectionHeading>
        The hidden cost of staying in a spreadsheet
      </SectionHeading>
      <P>
        Spreadsheets are free to run but have an invisible cost: the time to
        maintain them, the risk of formula drift, and the lack of real-time
        visibility. More importantly, they don't prevent the expensive mistakes:
        spending money owed to HMRC, draining your emergency buffer without
        realising it.
      </P>

      <Box
        bg='white'
        border='1px solid rgba(76,95,213,0.2)'
        borderLeft='4px solid #4C5FD5'
        borderRadius='0 12px 12px 0'
        px={5}
        py={5}
        mb={8}
      >
        <Text
          fontFamily="'Fraunces', Georgia, serif"
          fontSize='16px'
          color='#1C2B3A'
          lineHeight='1.8'
          fontStyle='italic'
          mb={2}
        >
          "I had a perfectly good spreadsheet for 3 years. Then I got a surprise
          tax bill in January because I hadn't accounted for payments on account
          properly. That was the moment I realised my spreadsheet wasn't telling
          me what I actually needed to know."
        </Text>
        <Text fontSize='12px' color='#8a9aaa' fontWeight='600'>
          Experience reported by freelancers switching from spreadsheets to
          Spendable
        </Text>
      </Box>

      <SectionHeading>The verdict</SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        <Box bg='white' border='1px solid #E8E8E3' borderRadius='14px' p={5}>
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight='800'
            fontSize='16px'
            color='#1C2B3A'
            mb={3}
          >
            Stick with your spreadsheet if…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'Your income is simple and predictable',
              'You have an accountant who handles tax',
              "You're just getting started",
            ].map((t) => (
              <HStack key={t} spacing={2}>
                <Icon
                  as={RiCheckLine}
                  color='#27AE60'
                  boxSize='14px'
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
            fontSize='16px'
            color='white'
            mb={3}
          >
            Switch to Spendable if…
          </Text>
          <VStack spacing={2} align='stretch'>
            {[
              'You want real-time tax reserve tracking',
              "You've had a January surprise before",
              "You need to know today's safe-to-spend",
              'You check your finances on your phone',
              'You have multiple income streams',
            ].map((t) => (
              <HStack key={t} spacing={2}>
                <Icon
                  as={RiCheckLine}
                  color='#4eca80'
                  boxSize='14px'
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
        headline='See the difference in under 5 minutes'
        sub='Add your first income entry, set your tax rate, and watch Spendable calculate your safe-to-spend instantly.'
        cta='Try Spendable free'
        utmRef='seo-compare-spreadsheet-2'
      />
      <RelatedPages
        links={[
          {
            href: '/compare/spendable-vs-ynab',
            label: 'Spendable vs YNAB for freelancers',
            desc: 'How the two approaches compare for self-employed users.',
          },
          {
            href: '/compare/spendable-vs-quickbooks',
            label: 'Spendable vs QuickBooks',
            desc: 'How Spendable compares to accounting software for freelancers.',
          },
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning guide',
            desc: "How to calculate and manage your tax reserve — the thing spreadsheets can't do in real time.",
          },
        ]}
      />
    </SEOPageLayout>
  );
}
