import { Box, SimpleGrid, VStack, HStack, Text, Heading, Button, Skeleton } from '@chakra-ui/react';
import { pricingTiers } from '../../data/mockData';
import { usePrices } from '../../hooks/usePrices';

export function PricingSection() {
  const { usdAmount, format, loading: pricesLoading } = usePrices();

  return (
    <Box
      id="pricing"
      bg="#FFFFFF"
      py={{ base: 16, md: 24 }}
      borderTop="1px solid #E8E8E3"
    >
      <Box maxW="800px" mx="auto" px={{ base: 5, md: 8 }}>
        <Text
          fontSize="11px" fontWeight="700" color="#4C5FD5"
          textTransform="uppercase" letterSpacing="1.5px"
          textAlign="center" mb={4}
        >
          Simple pricing
        </Text>

        <Heading
          as="h2"
          fontFamily="'Fraunces', Georgia, serif"
          fontSize={{ base: '30px', md: '40px' }}
          fontWeight="800"
          textAlign="center"
          letterSpacing="-1.5px"
          color="#1C2B3A"
          mb={4}
        >
          Start free. Upgrade when you're ready.
        </Heading>

        <Text textAlign="center" fontSize="17px" color="#5a6a7a" mb={12} lineHeight="1.65">
          No credit card required to start. Cancel anytime — and keep export access for 30 days.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {pricingTiers.map((tier) => (
            <Box
              key={tier.name}
              p={7}
              bg={tier.highlighted ? '#1e1245' : '#fafafa'}
              borderRadius="16px"
              border="1px solid"
              borderColor={tier.highlighted ? 'rgba(124,92,246,0.4)' : '#E8E8E3'}
              position="relative" overflow="hidden"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: tier.highlighted
                  ? '0 24px 60px rgba(30,18,69,0.5)'
                  : '0 16px 40px rgba(28,43,58,0.08)',
              }}
              transition="all 0.25s"
            >
              {tier.highlighted && (
                <Box
                  position="absolute" inset={0} opacity={0.03}
                  backgroundImage="repeating-linear-gradient(0deg, transparent, transparent 24px, white 24px, white 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, white 24px, white 25px)"
                  pointerEvents="none"
                />
              )}
              {tier.highlighted && (
                <Box
                  position="absolute" top="-60px" right="-60px"
                  w="200px" h="200px" borderRadius="full"
                  bg="radial-gradient(circle, rgba(124,92,246,0.25) 0%, transparent 70%)"
                  pointerEvents="none"
                />
              )}

              {tier.badge && (
                <Box position="absolute" top={5} right={5} px={3} py={1} bg="#4C5FD5" borderRadius="full">
                  <Text fontSize="11px" fontWeight="700" color="white">{tier.badge}</Text>
                </Box>
              )}

              <Box position="relative">
                <Text
                  fontSize="12px" fontWeight="700"
                  color={tier.highlighted ? '#a78bf8' : '#8a9aaa'}
                  textTransform="uppercase" letterSpacing="1px" mb={3}
                >
                  {tier.name}
                </Text>

                <HStack align="baseline" spacing={1.5} mb={2}>
                  {tier.price === 0 ? (
                    <Text
                      fontFamily="'Fraunces', Georgia, serif"
                      fontSize="42px" fontWeight="800"
                      color={tier.highlighted ? 'white' : '#1C2B3A'}
                      letterSpacing="-2px" lineHeight="1"
                    >
                      Free
                    </Text>
                  ) : (
                    <>
                      <Text fontSize="22px" fontWeight="600"
                        color={tier.highlighted ? '#9d8fd4' : '#5a6a7a'}
                        alignSelf="flex-start" mt="8px">
                        $
                      </Text>
                      <Skeleton isLoaded={!pricesLoading} borderRadius="4px">
                        <Text
                          fontFamily="'Fraunces', Georgia, serif"
                          fontSize="48px" fontWeight="800"
                          color={tier.highlighted ? 'white' : '#1C2B3A'}
                          letterSpacing="-2px" lineHeight="1"
                          minW="60px"
                        >
                          {usdAmount ?? tier.price}
                        </Text>
                      </Skeleton>
                      <Text fontSize="14px" fontWeight="500"
                        color={tier.highlighted ? '#9d8fd4' : '#8a9aaa'}>
                        /{tier.period}
                      </Text>
                    </>
                  )}
                </HStack>

                {/* Per-currency breakdown for Pro */}
                {tier.highlighted && (
                  <Skeleton isLoaded={!pricesLoading} borderRadius="6px" mb={3}>
                    <Text fontSize="12px" color="#9d8fd4" lineHeight="1.6">
                      {format('usd')} · {format('gbp')} · {format('eur')} · {format('cad')} · {format('aud')} per month
                    </Text>
                  </Skeleton>
                )}

                <Text
                  fontSize="14px" lineHeight="1.5" mb={6}
                  color={tier.highlighted ? '#9d8fd4' : '#5a6a7a'}
                >
                  {tier.description}
                </Text>

                <Button
                  as="a"
                  href="https://app.spendable.finance"
                  w="full" h="46px"
                  bg={tier.highlighted ? '#4C5FD5' : '#7c5cf6'}
                  color="white"
                  fontWeight="700" fontSize="14px" borderRadius="10px"
                  _hover={{
                    bg: tier.highlighted ? '#3D4FBF' : '#6d4de0',
                    transform: 'translateY(-1px)',
                    boxShadow: tier.highlighted ? '0 8px 20px rgba(76,95,213,0.4)' : 'none',
                  }}
                  transition="all 0.2s"
                  mb={7}
                >
                  {tier.cta}
                </Button>

                <Box h="1px" bg={tier.highlighted ? 'rgba(124,92,246,0.25)' : '#E8E8E3'} mb={6} />

                <VStack spacing={3} align="stretch">
                  {tier.features.map((feat) => (
                    <HStack key={feat} spacing={3} align="flex-start">
                      <Box
                        w="18px" h="18px" borderRadius="full"
                        bg={tier.highlighted ? 'rgba(124,92,246,0.2)' : '#eafaf1'}
                        display="flex" alignItems="center" justifyContent="center"
                        flexShrink={0} mt="1px"
                      >
                        <Text fontSize="10px" fontWeight="900"
                          color={tier.highlighted ? '#a78bf8' : '#27AE60'}>✓</Text>
                      </Box>
                      <Text fontSize="13.5px" fontWeight="500"
                        color={tier.highlighted ? '#c4b5fd' : '#5a6a7a'}>
                        {feat}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Text textAlign="center" fontSize="13px" color="#8a9aaa" mt={7}>
          Available in USD, GBP, EUR, CAD and AUD. Questions?{' '}
          <Box as="a" href="mailto:hello@spendable.finance"
            color="#4C5FD5" fontWeight="600"
            _hover={{ opacity: 0.75 }} style={{ textDecoration: 'none' }}>
            hello@spendable.finance
          </Box>
          {' '}— we respond within 24 hours.
        </Text>
      </Box>
    </Box>
  );
}
