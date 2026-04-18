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
  RiPercentLine,
  RiInformationLine,
  RiAlertLine,
  RiCheckLine,
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

function RateCard({
  flag,
  country,
  range,
  rate,
  detail,
  color,
  bg,
}: {
  flag: string;
  country: string;
  range: string;
  rate: string;
  detail: string;
  color: string;
  bg: string;
}) {
  return (
    <Box
      bg={bg}
      border='1px solid #E8E8E3'
      borderRadius='14px'
      p={5}
      _hover={{ borderColor: color, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
      transition='all 0.2s'
    >
      <HStack justify='space-between' mb={2}>
        <HStack spacing={2}>
          <Text fontSize='18px'>{flag}</Text>
          <Text fontWeight='700' fontSize='14px' color='#1C2B3A'>
            {country}
          </Text>
        </HStack>
        <Box
          px={2.5}
          py={0.5}
          bg='white'
          borderRadius='full'
          border='1px solid #E8E8E3'
        >
          <Text fontSize='12px' fontWeight='700' color={color}>
            {rate}
          </Text>
        </Box>
      </HStack>
      <Text fontSize='12px' color='#8a9aaa' fontWeight='600' mb={1.5}>
        {range}
      </Text>
      <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7'>
        {detail}
      </Text>
    </Box>
  );
}

export default function Page() {
  return (
    <SEOPageLayout
      meta={{
        title: 'How Much Should You Save for Taxes as a Freelancer?',
        description:
          'Concrete tax percentages for UK, US, Canada, and Australia — with worked examples you can apply immediately.',
        canonical: '/guides/how-much-to-save-for-taxes',
      }}
    >
      <ArticleHeader
        tag='Tax Guide'
        readTime='6 min read'
        h1='How Much Should You Save for Taxes as a Freelancer?'
        lead='The right percentage depends on your country, income level, and deductible expenses. Here are concrete figures for UK, US, Canada, and Australia — with worked examples you can use immediately.'
      />

      <Box
        bg='rgba(76,95,213,0.06)'
        border='1px solid rgba(76,95,213,0.15)'
        borderRadius='10px'
        px={4}
        py={3}
        mb={8}
      >
        <HStack spacing={2.5} align='flex-start'>
          <Icon
            as={RiInformationLine}
            color='#4C5FD5'
            boxSize='15px'
            mt={0.5}
            flexShrink={0}
          />
          <Text
            fontSize='13px'
            color='#4C5FD5'
            lineHeight='1.7'
            fontWeight='500'
          >
            <strong>The quick answer:</strong> 25–30% covers most freelancers in
            the UK and US earning between £30k–£80k / $40k–$100k. Set this aside
            from every payment and you'll rarely be caught short. The sections
            below explain exactly how to refine that number.
          </Text>
        </HStack>
      </Box>

      <SectionHeading>Why there's no single universal answer</SectionHeading>
      <P>
        Every "save 30% for taxes" article oversimplifies. Your actual rate
        depends on: your country, your total income (different brackets apply),
        your deductible business expenses (which reduce your taxable profit),
        and whether you have any other income sources that affect your total tax
        position.
      </P>
      <P>
        The good news: you don't need a precise figure. You need a number that's
        safely above your real liability so you never face a shortfall. The
        ranges below are conservative starting points — meaning you'll likely
        have some surplus when the bill arrives, which is a better problem to
        have than the alternative.
      </P>

      <SectionHeading>UK: Income Tax + National Insurance</SectionHeading>
      <P>
        UK freelancers pay Income Tax and Class 4 National Insurance on their
        profits. The tax-free Personal Allowance (currently £12,570) reduces
        your effective rate.
      </P>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
        {[
          {
            range: '£12,571–£50,270',
            rate: '25–27%',
            detail:
              'Basic rate Income Tax (20%) + Class 4 NI (9%). Personal allowance lowers your effective rate slightly below the headline number.',
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            range: '£50,271–£100,000',
            rate: '35–40%',
            detail:
              'Higher rate Income Tax (40%) kicks in. NI above £50,270 drops to 2%, but the income tax rise is significant. Set aside more.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            range: '£100,001–£125,140',
            rate: '55–60%',
            detail:
              'The personal allowance tapers, creating an effective 60% marginal rate on income in this band. Seek accountant advice — pension contributions can help.',
            color: '#EB5757',
            bg: '#fef2f2',
          },
          {
            range: 'Over £125,140',
            rate: '42–47%',
            detail:
              'Full personal allowance is gone. 45% Additional Rate + 2% NI = 47% effective marginal rate. A good accountant is non-negotiable at this level.',
            color: '#EB5757',
            bg: '#fef2f2',
          },
        ].map((b) => (
          <Box
            key={b.range}
            bg={b.bg}
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={1.5}>
              <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
                {b.range}
              </Text>
              <Box px={2.5} py={0.5} bg='white' borderRadius='full'>
                <Text fontSize='12px' fontWeight='700' color={b.color}>
                  {b.rate}
                </Text>
              </Box>
            </HStack>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
              {b.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='12px'
        px={5}
        py={4}
        mb={8}
      >
        <Text fontWeight='700' fontSize='13px' color='#1C2B3A' mb={2}>
          UK worked example
        </Text>
        <Text fontSize='13px' color='#5a6a7a' lineHeight='1.7' mb={3}>
          Freelancer earning £48,000 gross. Deductible expenses: £3,200
          (software, home office, professional fees). Taxable profit: £44,800.
        </Text>
        <VStack spacing={1.5} align='stretch'>
          {[
            ['Taxable profit', '£44,800', '#1C2B3A'],
            ['Personal Allowance', '− £12,570', '#8a9aaa'],
            ['Taxable income', '£32,230', '#1C2B3A'],
            ['Income Tax (20%)', '− £6,446', '#D4A800'],
            ['Class 4 NI (9% on £32,230)', '− £2,901', '#D4A800'],
            ['Total tax bill', '£9,347', '#EB5757'],
            ['Effective rate on gross', '19.5%', '#EB5757'],
            ['Recommended reserve (25% of £48k)', '£12,000', '#27AE60'],
            ['Surplus after bill', '+£2,653', '#27AE60'],
          ].map(([label, value, color]) => (
            <HStack key={label} justify='space-between'>
              <Text fontSize='13px' color='#5a6a7a'>
                {label}
              </Text>
              <Text fontSize='13px' fontWeight='600' color={color}>
                {value}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      <InlineCTA
        headline='Spendable calculates your tax reserve automatically'
        sub='Set your rate once. Every income entry updates your rolling reserve in real time — so you always know exactly what you owe.'
        cta='Set my tax rate in Spendable'
        utmRef='seo-how-much-tax-mid'
      />

      <SectionHeading>
        US: Self-Employment Tax + Federal Income Tax + State
      </SectionHeading>
      <P>
        US freelancers face self-employment tax (SE tax) on top of federal
        income tax. SE tax covers Social Security (12.4%) and Medicare (2.9%) —
        a combined 15.3% that employees split with their employer. As a
        freelancer, you pay all of it. You can deduct half of SE tax from your
        taxable income, which slightly reduces the bill.
      </P>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
        {[
          {
            range: 'Under $40,000',
            rate: '20–25%',
            detail:
              'SE tax (15.3%) + 10–12% federal income tax. Low-tax states (TX, FL, WA — no state income tax) land at the lower end.',
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            range: '$40,001–$80,000',
            rate: '25–30%',
            detail:
              'SE tax + 22% federal bracket. Most freelancers in this range use 28% as a safe estimate. Add 5–9% for mid-tax states (GA, OH, NC).',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            range: '$80,001–$150,000',
            rate: '30–35%',
            detail:
              'SE tax + 22–24% federal. High-tax states (CA up to 13.3%, NY up to 10.9%) push the total toward 38–40%.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            range: 'Over $150,000',
            rate: '35–42%+',
            detail:
              'SE tax + 32–37% federal + state. Note: Social Security SE tax caps at $168,600 (2024). Get an accountant to calculate a precise rate.',
            color: '#EB5757',
            bg: '#fef2f2',
          },
        ].map((b) => (
          <Box
            key={b.range}
            bg={b.bg}
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={1.5}>
              <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
                {b.range}
              </Text>
              <Box px={2.5} py={0.5} bg='white' borderRadius='full'>
                <Text fontSize='12px' fontWeight='700' color={b.color}>
                  {b.rate}
                </Text>
              </Box>
            </HStack>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
              {b.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        bg='white'
        border='1px solid #E8E8E3'
        borderRadius='12px'
        px={5}
        py={4}
        mb={8}
      >
        <Text fontWeight='700' fontSize='13px' color='#1C2B3A' mb={2}>
          US worked example (California, $72,000 gross)
        </Text>
        <VStack spacing={1.5} align='stretch'>
          {[
            ['Gross income', '$72,000', '#1C2B3A'],
            ['Business deductions', '− $4,500', '#8a9aaa'],
            ['Net profit', '$67,500', '#1C2B3A'],
            ['SE tax (15.3%)', '− $10,328', '#D4A800'],
            ['½ SE tax deduction', '− $5,164 (from taxable income)', '#8a9aaa'],
            ['Federal income tax (22% bracket)', '− ~$9,800', '#D4A800'],
            ['CA state income tax (~7%)', '− $4,725', '#D4A800'],
            ['Total tax', '~$24,853', '#EB5757'],
            ['Effective rate on gross', '~34.5%', '#EB5757'],
            ['Recommended reserve (35% of $72k)', '$25,200', '#27AE60'],
          ].map(([label, value, color]) => (
            <HStack key={label} justify='space-between' flexWrap='wrap' gap={1}>
              <Text fontSize='13px' color='#5a6a7a'>
                {label}
              </Text>
              <Text fontSize='13px' fontWeight='600' color={color}>
                {value}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      <SectionHeading>Canada: CPP + Federal + Provincial</SectionHeading>
      <P>
        Canadian self-employed individuals pay both the employee and employer
        portions of CPP contributions (11.9% combined in 2024, on income between
        $3,500 and $73,200). Federal and provincial income tax stack on top.
      </P>
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
                  Income range
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Province
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Recommended reserve
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                ['$30,000–$60,000', 'Alberta (low tax)', '28–32%'],
                ['$30,000–$60,000', 'Ontario / BC', '30–35%'],
                ['$60,000–$100,000', 'Any province', '33–38%'],
                ['$100,000+', 'Any province', '38–45%'],
              ].map(([range, province, rate], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' fontWeight='500' color='#1C2B3A'>
                    {range}
                  </Td>
                  <Td py={3} fontSize='13px' color='#5a6a7a'>
                    {province}
                  </Td>
                  <Td py={3} fontSize='13px' fontWeight='700' color='#4C5FD5'>
                    {rate}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <SectionHeading>Australia: PAYG + Income Tax</SectionHeading>
      <P>
        Australian sole traders pay income tax at standard rates and are
        required to pay PAYG (Pay As You Go) instalments quarterly to the ATO
        once their tax liability exceeds a threshold. The Medicare Levy (2%)
        also applies.
      </P>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
        {[
          {
            range: 'Under $45,000 (AUD)',
            rate: '19–22%',
            detail:
              'Low marginal rate + 2% Medicare Levy. The $18,200 tax-free threshold helps.',
            color: '#27AE60',
            bg: '#eafaf1',
          },
          {
            range: '$45,001–$120,000',
            rate: '25–32%',
            detail:
              '32.5% marginal rate + 2% Medicare. Most sole traders in this range use 28–30%.',
            color: '#D4A800',
            bg: '#fefae8',
          },
          {
            range: 'Over $120,000',
            rate: '35–40%',
            detail:
              '37–45% marginal rate + 2% Medicare. Get professional advice above this level.',
            color: '#EB5757',
            bg: '#fef2f2',
          },
        ].map((b) => (
          <Box
            key={b.range}
            bg={b.bg}
            border='1px solid #E8E8E3'
            borderRadius='12px'
            p={4}
          >
            <HStack justify='space-between' mb={1.5}>
              <Text fontWeight='700' fontSize='13px' color='#1C2B3A'>
                {b.range}
              </Text>
              <Box px={2.5} py={0.5} bg='white' borderRadius='full'>
                <Text fontSize='12px' fontWeight='700' color={b.color}>
                  {b.rate}
                </Text>
              </Box>
            </HStack>
            <Text fontSize='13px' color='#5a6a7a' lineHeight='1.6'>
              {b.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      <SectionHeading>
        The practical system: set aside on receipt
      </SectionHeading>
      <P>
        Knowing the right percentage is only half the solution. The other half
        is the mechanism — making sure the money actually gets set aside before
        you can spend it.
      </P>
      <FeatureList
        items={[
          'Open a dedicated savings account labelled "Tax Reserve" — separate from current account',
          'Transfer your chosen percentage on the same day each invoice is paid',
          'Treat it as untouchable — it belongs to the tax authority, not to you',
          'Review the percentage every 6 months as your income grows or deductions change',
          "Use the surplus (if actual bill < reserve) as next quarter's head start, not as spending money",
        ]}
      />

      <SectionHeading>How deductions change your real rate</SectionHeading>
      <P>
        The percentages above are based on gross income. The more legitimate
        business expenses you can deduct, the lower your effective rate. Here's
        what that means in practice:
      </P>
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
                  Annual deductions
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Effect on UK (£50k earner)
                </Th>
                <Th py={3} fontSize='11px' color='#8a9aaa'>
                  Saves approximately
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                [
                  '£2,000 (software + phone)',
                  'Taxable profit: £48,000',
                  '~£580',
                ],
                [
                  '£5,000 (office, equipment, training)',
                  'Taxable profit: £45,000',
                  '~£1,450',
                ],
                [
                  '£10,000 (pension contribution)',
                  'Taxable profit: £40,000 (below higher rate)',
                  '~£4,000+',
                ],
              ].map(([deductions, effect, saves], i) => (
                <Tr key={i} _hover={{ bg: '#f8fafc' }}>
                  <Td py={3} fontSize='13px' color='#1C2B3A' fontWeight='500'>
                    {deductions}
                  </Td>
                  <Td py={3} fontSize='13px' color='#5a6a7a'>
                    {effect}
                  </Td>
                  <Td py={3} fontSize='13px' fontWeight='700' color='#27AE60'>
                    {saves}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

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
            <strong>Set aside first, optimise later.</strong> Don't wait until
            you know your exact deductions before starting to save. Set aside
            25–30% immediately, keep good expense records throughout the year,
            and let your accountant optimise the final number at filing time.
          </Text>
        </HStack>
      </Box>

      <InlineCTA
        headline='Track your tax reserve in real time'
        sub='Set your rate once in Spendable and every income entry automatically builds your reserve. No spreadsheet required.'
        cta='Start for free'
        utmRef='seo-how-much-tax-bottom'
      />

      <RelatedPages
        links={[
          {
            href: '/guides/freelance-tax-planning',
            label: 'Freelance tax planning: the full system',
            desc: 'Step-by-step guide to managing your reserve, from setup to payment day.',
          },
          {
            href: '/guides/self-employed-tax-uk',
            label: 'UK self-assessment: a complete guide',
            desc: 'UK-specific deadlines, payments on account, and HMRC requirements.',
          },
          {
            href: '/for/uk-freelancers',
            label: 'Spendable for UK freelancers',
            desc: 'How Spendable tracks your UK self-assessment reserve automatically.',
          },
        ]}
      />
    </SEOPageLayout>
  );
}
