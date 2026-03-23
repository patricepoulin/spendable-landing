import { Box, Flex, Text, HStack, Button } from '@chakra-ui/react';

export function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky" top={0} zIndex={100}
      bg="rgba(28,18,69,0.96)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(124,92,246,0.2)"
    >
      <Flex
        maxW="1100px" mx="auto"
        px={{ base: 5, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <HStack spacing={2.5}>
          <Box w={8} h={8} flexShrink={0}>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nlg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5D6FE9"/>
                  <stop offset="100%" stopColor="#3B4DC8"/>
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="17" fill="url(#nlg)"/>
              <path d="M 27 13 C 38 11 48 15 48 24 C 48 33 38 35 27 33 L 27 13 Z" fill="white"/>
              <path d="M 37 31 C 26 29 16 31 16 40 C 16 49 26 53 37 51 L 37 31 Z" fill="white"/>
              <rect x="27" y="29.5" width="10" height="5" fill="white"/>
            </svg>
          </Box>
          <Text
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight="700" fontSize="18px"
            letterSpacing="-0.3px" color="white"
          >
            Spendable
          </Text>
        </HStack>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {['How it works', 'Features', 'Pricing'].map(link => (
            <Text
              key={link}
              as="a" href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              fontSize="14px" fontWeight="500" color="rgba(167,139,248,0.85)"
              _hover={{ color: 'white' }} transition="color 0.15s"
              cursor="pointer"
            >
              {link}
            </Text>
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            as="a" href="https://app.spendable.finance"
            variant="ghost" size="sm"
            fontWeight="600" color="rgba(167,139,248,0.85)"
            _hover={{ color: 'white', bg: 'rgba(124,92,246,0.15)' }}
            display={{ base: 'none', sm: 'flex' }}
          >
            Sign in
          </Button>
          <Button
            as="a" href="https://app.spendable.finance"
            size="sm"
            bg="#4C5FD5" color="white"
            fontWeight="600" borderRadius="8px"
            _hover={{ bg: '#3D4FBF' }}
            px={5}
          >
            Start free
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
