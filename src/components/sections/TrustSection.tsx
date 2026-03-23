import { Box, Text, Heading, HStack, VStack, Flex, Icon } from '@chakra-ui/react';
import { RiLockLine, RiBankLine, RiCalculatorLine } from 'react-icons/ri';

const TRUST_ITEMS = [
  {
    icon: RiLockLine,
    iconBg:    'rgba(76,95,213,0.2)',
    iconColor: '#a78bf8',
    title: 'Your data stays yours',
    description: 'All financial calculations happen client-side. We never sell your data or share it with third parties.',
  },
  {
    icon: RiBankLine,
    iconBg:    'rgba(39,174,96,0.18)',
    iconColor: '#4eca80',
    title: 'No bank linking required',
    description: 'Spendable works without connecting your accounts. Manual entry keeps you in full control.',
  },
  {
    icon: RiCalculatorLine,
    iconBg:    'rgba(212,168,0,0.18)',
    iconColor: '#fbbf24',
    title: 'Transparent math',
    description: 'Every number is explained. See exactly how safe-to-spend, runway, and tax reserve are calculated.',
  },
];

const PURPLE = {
  bg:         '#1e1245',
  card:       '#271758',
  cardBorder: '#3d2a8a',
  accentSoft: '#a78bf8',
  headingFg:  '#ffffff',
  muted:      '#9d8fd4',
};

export function TrustSection() {
  return (
    <Box
      bg={PURPLE.bg}
      py={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="50%" left="-150px" transform="translateY(-50%)"
        w="500px" h="500px" borderRadius="full"
        bg="radial-gradient(circle, rgba(124,92,246,0.12) 0%, transparent 60%)" pointerEvents="none" />
      <Box position="absolute" top="-80px" right="-80px"
        w="400px" h="400px" borderRadius="full"
        bg="radial-gradient(circle, rgba(76,95,213,0.1) 0%, transparent 60%)" pointerEvents="none" />

      <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }} position="relative">
        <Flex
          gap={{ base: 10, lg: 16 }}
          align={{ base: 'center', lg: 'flex-start' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          {/* Left: copy */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            flex={1} spacing={4}
          >
            <Text fontSize="11px" fontWeight="700" color="#4eca80"
              textTransform="uppercase" letterSpacing="1.5px">
              Built with trust
            </Text>
            <Heading
              as="h2"
              fontFamily="'Fraunces', Georgia, serif"
              fontSize={{ base: '28px', md: '36px' }}
              fontWeight="800"
              letterSpacing="-1.2px"
              color={PURPLE.headingFg}
              lineHeight="1.15"
            >
              We don't need your bank login to help you.
            </Heading>
            <Text fontSize="16px" color={PURPLE.muted} lineHeight="1.65" maxW="380px">
              Spendable is intentionally low-access. Built to work without seeing
              your accounts — because your financial data is yours alone.
            </Text>

            <HStack spacing={3} flexWrap="wrap" mt={2}>
              {['No bank linking', 'Client-side math', 'No ads ever'].map(badge => (
                <Box
                  key={badge}
                  px={3} py={1}
                  bg="rgba(124,92,246,0.15)"
                  borderRadius="full"
                  border="1px solid rgba(124,92,246,0.35)"
                >
                  <Text fontSize="12px" fontWeight="600" color={PURPLE.accentSoft}>
                    ✓ {badge}
                  </Text>
                </Box>
              ))}
            </HStack>
          </VStack>

          {/* Right: trust cards */}
          <VStack flex={1} spacing={4} w="full">
            {TRUST_ITEMS.map((item) => (
              <Box
                key={item.title}
                w="full" p={5}
                bg={PURPLE.card}
                borderRadius="14px"
                border="1px solid" borderColor={PURPLE.cardBorder}
                _hover={{
                  borderColor: '#7c5cf680',
                  transform: 'translateX(4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                }}
                transition="all 0.2s"
              >
                <HStack spacing={4} align="flex-start">
                  <Box
                    w="42px" h="42px" borderRadius="10px"
                    bg={item.iconBg}
                    display="flex" alignItems="center" justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={item.icon} color={item.iconColor} boxSize="18px" />
                  </Box>
                  <Box>
                    <Text fontWeight="700" fontSize="15px" color={PURPLE.headingFg} mb={1}>
                      {item.title}
                    </Text>
                    <Text fontSize="13px" color={PURPLE.muted} lineHeight="1.6">
                      {item.description}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
