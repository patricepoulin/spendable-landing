import { Box, SimpleGrid, HStack, Text, Heading, Icon } from '@chakra-ui/react';
import { RiAddCircleLine, RiSettings3Line, RiCheckboxCircleLine } from 'react-icons/ri';

const PURPLE = {
  bg:            '#f0ebff',
  card:          '#f5f0ff',
  cardBorder:    '#e4d9fb',
  accent:        '#7c5cf6',
  accentSoft:    '#6d4de0',
  headingFg:     '#1e1245',
  muted:         '#5e4d8a',
  formulaBg:     '#f5f0ff',
  formulaBorder: 'rgba(76,95,213,0.18)',
};

const STEPS = [
  {
    step: 1,
    icon: RiAddCircleLine,
    iconColor: '#4C5FD5',
    iconBg:    '#eef0fb',
    iconBorder:'rgba(76,95,213,0.2)',
    title: 'Log your income',
    description: 'Record each payment as it comes in — client projects, contracts, royalties. Takes 10 seconds per entry.',
  },
  {
    step: 2,
    icon: RiSettings3Line,
    iconColor: '#27AE60',
    iconBg:    '#eafaf1',
    iconBorder:'rgba(39,174,96,0.2)',
    title: 'Set your rules once',
    description: 'Tell Spendable your tax rate, how many months of buffer you want, and your recurring expenses.',
  },
  {
    step: 3,
    icon: RiCheckboxCircleLine,
    iconColor: '#7c5cf6',
    iconBg:    '#f0ebff',
    iconBorder:'rgba(124,92,246,0.2)',
    title: 'Get your number',
    description: 'Every day, Spendable shows you exactly one number: how much you can safely spend right now.',
  },
];

const STEP_COLORS = STEPS.map(s => s.iconColor);

export function HowItWorksSection() {
  return (
    <Box
      id="how-it-works"
      bg={PURPLE.bg}
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="-80px" right="-60px" w="500px" h="500px" borderRadius="full"
        bg="radial-gradient(circle, rgba(76,95,213,0.08) 0%, transparent 65%)" pointerEvents="none" />
      <Box position="absolute" bottom="-60px" left="-80px" w="400px" h="400px" borderRadius="full"
        bg="radial-gradient(circle, rgba(124,92,246,0.07) 0%, transparent 65%)" pointerEvents="none" />

      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }} position="relative">
        <Text fontSize="11px" fontWeight="700" color={PURPLE.accentSoft}
          textTransform="uppercase" letterSpacing="1.5px" textAlign="center" mb={4}>
          How Spendable works
        </Text>

        <Heading as="h2" fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '30px', md: '40px' }} fontWeight="800"
          textAlign="center" letterSpacing="-1.5px" color={PURPLE.headingFg} mb={4}>
          Three steps to financial calm
        </Heading>

        <Text textAlign="center" fontSize="17px" color={PURPLE.muted}
          maxW="480px" mx="auto" mb={14} lineHeight="1.65">
          Setup takes under 5 minutes. No bank connections.<br />No complexity.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} position="relative">
          {/* Connecting line */}
          <Box display={{ base: 'none', md: 'block' }}
            position="absolute" top="36px"
            left="calc(16.66% + 24px)" right="calc(16.66% + 24px)"
            h="1px"
            bg={`linear-gradient(90deg, ${STEP_COLORS[0]}, ${STEP_COLORS[1]}, ${STEP_COLORS[2]})`}
            opacity={0.3} zIndex={0} />

          {STEPS.map((step) => (
            <Box key={step.step}
              bg={PURPLE.card} borderRadius="16px"
              border="1px solid" borderColor={PURPLE.cardBorder}
              p={7} position="relative" zIndex={1}
              boxShadow="0 2px 12px rgba(76,95,213,0.06)"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: `0 20px 48px rgba(76,95,213,0.12)`,
                borderColor: step.iconColor + '60',
              }}
              transition="all 0.25s"
            >
              {/* Step number badge — top-right */}
              <Box position="absolute" top={4} right={5}>
                <Text fontSize="16px" fontWeight="800" color={step.iconColor} opacity={0.5}
                  fontFamily="'Fraunces', Georgia, serif">
                  0{step.step}
                </Text>
              </Box>

              {/* Icon */}
              <Box
                w="48px" h="48px" borderRadius="12px"
                bg={step.iconBg} border={`1px solid ${step.iconBorder}`}
                display="flex" alignItems="center" justifyContent="center"
                mb={5}
              >
                <Icon as={step.icon} color={step.iconColor} boxSize="22px" />
              </Box>

              <Text fontWeight="700" fontSize="17px" color={PURPLE.headingFg}
                letterSpacing="-0.3px" lineHeight="1.3" mb={3}>
                {step.title}
              </Text>
              <Text fontSize="14px" color={PURPLE.muted} lineHeight="1.65">
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Formula */}
        <Box mt={12} p={{ base: 5, md: 7 }}
          bg={PURPLE.formulaBg} borderRadius="16px"
          border={`1px solid ${PURPLE.formulaBorder}`}>
          <Text textAlign="center" fontSize="12px" fontWeight="700"
            color={PURPLE.muted} textTransform="uppercase" letterSpacing="1px" mb={5}>
            The Spendable formula
          </Text>
          <HStack justify="center" spacing={{ base: 2, md: 4 }}
            flexWrap="wrap" fontSize={{ base: '13px', md: '15px' }} fontWeight="600">
            {[
              { label: 'Balance',         color: '#4C5FD5', bg: 'rgba(76,95,213,0.12)'  },
              { label: '−',               color: PURPLE.muted, bg: 'transparent'         },
              { label: 'Tax Reserve',     color: '#92660a', bg: 'rgba(212,168,0,0.14)'  },
              { label: '−',               color: PURPLE.muted, bg: 'transparent'         },
              { label: 'Buffer',          color: '#166534', bg: '#eafaf1'               },
              { label: '−',               color: PURPLE.muted, bg: 'transparent'         },
              { label: 'Bills Due',       color: '#991b1b', bg: 'rgba(235,87,87,0.12)'  },
              { label: '=',               color: PURPLE.muted, bg: 'transparent'         },
              { label: 'Safe to Spend ✓', color: '#fff',    bg: '#4C5FD5'               },
            ].map((item, i) => (
              <Box key={i}
                px={item.bg === 'transparent' ? 0 : 3}
                py={item.bg === 'transparent' ? 0 : 1.5}
                borderRadius={item.bg === 'transparent' ? 0 : '8px'}
                bg={item.bg} color={item.color}
                fontWeight={item.label.includes('Safe') ? '800' : '600'}
                letterSpacing={item.label.includes('Safe') ? '-0.3px' : 'normal'}>
                {item.label}
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
