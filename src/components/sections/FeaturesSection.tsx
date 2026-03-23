import { Box, SimpleGrid, Text, Heading, Icon } from '@chakra-ui/react';
import {
  RiLineChartLine, RiPercentLine, RiShieldCheckLine,
  RiRoadMapLine, RiBarChartBoxLine, RiMedalLine,
} from 'react-icons/ri';

const FEATURES = [
  {
    icon:        RiLineChartLine,
    title:       'Income Smoothing',
    description: 'A 6-month rolling average irons out feast-or-famine swings so your decisions are based on reality, not your best month.',
    iconColor:   '#4C5FD5',
    iconBg:      '#eef0fb',
    iconBorder:  'rgba(76,95,213,0.18)',
    accentColor: '#4C5FD5',
  },
  {
    icon:        RiPercentLine,
    title:       'Auto Tax Reserve',
    description: 'Spendable automatically sets aside the right percentage of every payment. No more surprise tax bills — ever.',
    iconColor:   '#d97706',
    iconBg:      '#fefae8',
    iconBorder:  'rgba(212,168,0,0.2)',
    accentColor: '#D4A800',
  },
  {
    icon:        RiShieldCheckLine,
    title:       'Emergency Buffer',
    description: 'Lock away 3–6 months of expenses in your calculations so you never accidentally spend your safety net.',
    iconColor:   '#16a34a',
    iconBg:      '#eafaf1',
    iconBorder:  'rgba(39,174,96,0.2)',
    accentColor: '#27AE60',
  },
  {
    icon:        RiRoadMapLine,
    title:       'Runway Prediction',
    description: 'See exactly how many months you can sustain your lifestyle — critical when deciding whether to take that low-paying project.',
    iconColor:   '#7c5cf6',
    iconBg:      '#f0ebff',
    iconBorder:  'rgba(124,92,246,0.2)',
    accentColor: '#8B5CF6',
  },
  {
    icon:        RiBarChartBoxLine,
    title:       '6-Month Forecast',
    description: 'Project your income, expenses, and safe-to-spend forward six months based on your real history.',
    iconColor:   '#dc2626',
    iconBg:      '#fef2f2',
    iconBorder:  'rgba(235,87,87,0.2)',
    accentColor: '#EB5757',
  },
  {
    icon:        RiMedalLine,
    title:       'Confidence Score',
    description: 'A 0–100 score based on runway, tax coverage, buffer health, and income consistency. Know your financial fitness at a glance.',
    iconColor:   '#0284c7',
    iconBg:      '#f0f9ff',
    iconBorder:  'rgba(14,165,233,0.2)',
    accentColor: '#0EA5E9',
  },
];

export function FeaturesSection() {
  return (
    <Box
      id="features"
      bg="#FFFFFF"
      py={{ base: 16, md: 24 }}
      borderTop="1px solid #E8E8E3"
      borderBottom="1px solid #E8E8E3"
    >
      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }}>
        <Text fontSize="11px" fontWeight="700" color="#4C5FD5"
          textTransform="uppercase" letterSpacing="1.5px" textAlign="center" mb={4}>
          What Spendable does
        </Text>

        <Heading as="h2" fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '30px', md: '40px' }} fontWeight="800"
          textAlign="center" letterSpacing="-1.5px" color="#1C2B3A" mb={4}>
          Everything you need to spend confidently
        </Heading>

        <Text textAlign="center" fontSize="17px" color="#5a6a7a"
          maxW="500px" mx="auto" mb={14} lineHeight="1.65">
          Six interlocking tools that work together to give you one honest answer.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              p={6}
              bg="#fafafa"
              borderRadius="16px"
              border="1px solid #E8E8E3"
              position="relative" overflow="hidden"
              _hover={{
                bg: '#FFFFFF',
                borderColor: feature.accentColor + '40',
                transform: 'translateY(-3px)',
                boxShadow: `0 16px 40px ${feature.accentColor}14`,
              }}
              transition="all 0.25s"
            >
              {/* Subtle corner glow */}
              <Box position="absolute" top={-4} right={-4}
                w="90px" h="90px" borderRadius="full"
                bg={feature.accentColor} opacity={0.05} pointerEvents="none" />

              {/* Icon */}
              <Box
                w="46px" h="46px" borderRadius="12px"
                bg={feature.iconBg}
                border={`1px solid ${feature.iconBorder}`}
                display="flex" alignItems="center" justifyContent="center"
                mb={4} flexShrink={0}
              >
                <Icon as={feature.icon} color={feature.iconColor} boxSize="20px" />
              </Box>

              <Text fontWeight="700" fontSize="16px" color="#1C2B3A"
                letterSpacing="-0.3px" lineHeight="1.3" mb={2}>
                {feature.title}
              </Text>
              <Text fontSize="13.5px" color="#5a6a7a" lineHeight="1.7">
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
