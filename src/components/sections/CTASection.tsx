import { Box, VStack, HStack, Text, Heading, Button, Icon } from '@chakra-ui/react';
import { RiShieldCheckLine, RiArrowRightLine } from 'react-icons/ri';

const APP_URL = 'https://app.spendable.finance';

export function CTASection() {
  return (
    <Box
      bg='#1e1245'
      py={{ base: 20, md: 28 }}
      position='relative'
      overflow='hidden'
    >
      {/* Grid texture */}
      <Box
        position='absolute' inset={0} opacity={0.03}
        backgroundImage='repeating-linear-gradient(0deg, transparent, transparent 28px, white 28px, white 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, white 28px, white 29px)'
        pointerEvents='none'
      />
      {/* Glows */}
      <Box position='absolute' top='-100px' right='-100px' w='450px' h='450px' borderRadius='full'
        bg='radial-gradient(circle, rgba(124,92,246,0.2) 0%, transparent 70%)' pointerEvents='none' />
      <Box position='absolute' bottom='-80px' left='-80px' w='380px' h='380px' borderRadius='full'
        bg='radial-gradient(circle, rgba(76,95,213,0.15) 0%, transparent 70%)' pointerEvents='none' />

      <Box maxW='680px' mx='auto' px={{ base: 5, md: 8 }} position='relative'>
        <VStack spacing={0} textAlign='center'>

          {/* Logo mark */}
          <Box
            w={12} h={12} borderRadius='12px'
            bg='rgba(124,92,246,0.2)'
            border='1px solid rgba(124,92,246,0.4)'
            display='flex' alignItems='center' justifyContent='center'
            mb={8}
          >
            <Icon as={RiShieldCheckLine} color='#a78bf8' boxSize={5} />
          </Box>

          <Heading
            as='h2'
            fontFamily="'Fraunces', Georgia, serif"
            fontSize={{ base: '34px', md: '50px' }}
            fontWeight='800'
            letterSpacing='-2px'
            color='white'
            lineHeight='1.05'
            mb={5}
          >
            Start spending with confidence.
          </Heading>

          <Text
            fontSize={{ base: '16px', md: '18px' }}
            color='#9d8fd4'
            lineHeight='1.65'
            maxW='460px'
            mb={10}
          >
            Join 2,400+ freelancers who stopped guessing and started knowing
            exactly how much they can safely spend.
          </Text>

          <Button
            as='a'
            href={APP_URL}
            size='lg'
            bg='#4C5FD5'
            color='white'
            fontWeight='700'
            fontSize='16px'
            borderRadius='12px'
            px={10}
            h='54px'
            rightIcon={<Icon as={RiArrowRightLine} />}
            _hover={{
              bg: '#3D4FBF',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 32px rgba(76,95,213,0.45)',
            }}
            transition='all 0.2s'
            mb={4}
          >
            Start free — it's free forever
          </Button>

          <Text fontSize='12px' color='#5e4d8a'>
            No credit card required. Cancel Pro anytime.
          </Text>

          <HStack spacing={6} mt={10} flexWrap='wrap' justify='center'>
            {['No bank connection needed', 'Setup in 5 minutes', 'USD, GBP & EUR'].map(item => (
              <HStack key={item} spacing={2}>
                <Box w={1.5} h={1.5} borderRadius='full' bg='#7c5cf6' />
                <Text fontSize='13px' color='#9d8fd4' fontWeight='500'>{item}</Text>
              </HStack>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
