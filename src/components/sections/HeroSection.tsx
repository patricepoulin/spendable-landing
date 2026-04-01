import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { DashboardMockup } from '../ui/DashboardMockup';
import { MobileDashboardMockup } from '../ui/MobileDashboardMockup';

export function HeroSection() {
  const direction = useBreakpointValue({ base: 'column', lg: 'row' }) as
    | 'column'
    | 'row';

  return (
    <Box
      bg='#1e1245'
      pt={{ base: 16, md: 24 }}
      pb={{ base: 16, md: 20 }}
      overflow='hidden'
      position='relative'
    >
      {/* Radial glows */}
      <Box
        position='absolute'
        top='-100px'
        left='20%'
        w='600px'
        h='600px'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(76,95,213,0.22) 0%, transparent 65%)'
        pointerEvents='none'
      />
      <Box
        position='absolute'
        bottom='20px'
        right='-20px'
        w='450px'
        h='450px'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(124,92,246,0.15) 0%, transparent 65%)'
        pointerEvents='none'
      />
      <Box
        position='absolute'
        top='30%'
        left='-120px'
        w='350px'
        h='350px'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(39,174,96,0.07) 0%, transparent 65%)'
        pointerEvents='none'
      />

      <Flex
        maxW='1100px'
        mx='auto'
        px={{ base: 5, md: 8 }}
        direction={direction}
        align='center'
        gap={{ base: 12, lg: 16 }}
      >
        {/* Left: copy */}
        <VStack
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          flex={1}
          spacing={0}
        >
          {/* Eyebrow */}
          <Box
            display='inline-flex'
            alignItems='center'
            px={3}
            py={1}
            mb={6}
            bg='rgba(124,92,246,0.15)'
            border='1px solid rgba(124,92,246,0.35)'
            borderRadius='full'
          >
            <Box w={1.5} h={1.5} borderRadius='full' bg='#4eca80' mr={2} />
            <Text
              fontSize='12px'
              fontWeight='600'
              color='rgba(167,139,248,0.9)'
            >
              Built for freelancers with irregular income
            </Text>
          </Box>

          {/* Headline */}
          <Text
            as='h1'
            fontFamily="'Fraunces', Georgia, serif"
            fontSize={{ base: '38px', md: '52px', lg: '58px' }}
            fontWeight='800'
            lineHeight='1.05'
            letterSpacing='-2px'
            color='white'
            mb={6}
          >
            Know exactly how
            <Box as='span' display='block'>
              much you can{' '}
              <Box
                as='span'
                position='relative'
                color='#a78bf8'
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '2px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  bg: '#7c5cf6',
                  opacity: 0.45,
                  borderRadius: 'full',
                }}
              >
                safely spend
              </Box>
            </Box>
          </Text>

          {/* Subtitle */}
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            color='rgba(157,143,212,0.9)'
            lineHeight='1.65'
            fontWeight='400'
            mb={8}
            maxW='440px'
          >
            Spendable smooths your irregular income, auto-calculates your tax
            reserve, and gives you one honest number every day — so you spend
            with confidence.
          </Text>

          {/* CTAs */}
          <HStack
            spacing={3}
            flexWrap='wrap'
            justify={{ base: 'center', lg: 'flex-start' }}
          >
            <Button
              as='a'
              href='https://app.spendable.finance'
              size='lg'
              bg='#4C5FD5'
              color='white'
              fontWeight='700'
              borderRadius='10px'
              px={7}
              h='50px'
              fontSize='15px'
              _hover={{
                bg: '#3D4FBF',
                transform: 'translateY(-1px)',
                boxShadow: '0 8px 28px rgba(76,95,213,0.45)',
              }}
              transition='all 0.2s'
            >
              Start free
            </Button>
            <Button
              size='lg'
              variant='outline'
              borderColor='rgba(124,92,246,0.4)'
              bg='rgba(124,92,246,0.1)'
              color='rgba(167,139,248,0.95)'
              fontWeight='600'
              borderRadius='10px'
              px={7}
              h='50px'
              fontSize='15px'
              _hover={{
                bg: 'rgba(124,92,246,0.2)',
                borderColor: 'rgba(124,92,246,0.7)',
                color: 'white',
              }}
              transition='all 0.2s'
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See how it works →
            </Button>
          </HStack>

          {/* Social proof */}
          <HStack
            spacing={4}
            mt={8}
            flexWrap='wrap'
            justify={{ base: 'center', lg: 'flex-start' }}
          >
            <HStack spacing={1.5}>
              <HStack spacing={-1}>
                {[
                  { name: 'Sara K',   bg: '4C5FD5', color: 'fff' },
                  { name: 'Mike R',   bg: '27AE60', color: 'fff' },
                  { name: 'Priya M',  bg: '7c5cf6', color: 'fff' },
                ].map((av, i) => (
                  <Box
                    key={i}
                    as='img'
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(av.name)}&background=${av.bg}&color=${av.color}&size=56&bold=true&font-size=0.4&rounded=true`}
                    w='28px'
                    h='28px'
                    borderRadius='full'
                    border='2px solid rgba(30,18,69,0.9)'
                    ml={i > 0 ? '-6px' : 0}
                    zIndex={3 - i}
                    display='block'
                  />
                ))}
              </HStack>
              <Text
                fontSize='13px'
                color='rgba(157,143,212,0.7)'
                fontWeight='500'
              >
                Trusted by{' '}
                <Box as='span' fontWeight='700' color='rgba(167,139,248,0.9)'>
                  2,400+
                </Box>{' '}
                freelancers
              </Text>
            </HStack>
            <HStack spacing={1}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Box key={s} fontSize='12px'>
                  ⭐
                </Box>
              ))}
              <Text
                fontSize='13px'
                color='rgba(157,143,212,0.7)'
                fontWeight='500'
              >
                4.9/5
              </Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Right: dashboard mockup — phone on mobile, desktop on large screens */}
        <Box
          flex={{ base: 'none', lg: '0 0 auto' }}
          w={{ base: 'full', lg: 'auto' }}
          display='flex'
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          transform={{ lg: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)' }}
          transition='transform 0.3s'
          _hover={{
            transform: 'perspective(1200px) rotateY(-2deg) rotateX(1deg)',
          }}
        >
          <Box display={{ base: 'block', lg: 'none' }}>
            <MobileDashboardMockup />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <DashboardMockup />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
