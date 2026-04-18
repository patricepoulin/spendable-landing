/**
 * SEOPageLayout.tsx
 * Shared layout for all SEO content pages.
 *
 * Design tokens sourced directly from the live codebase:
 *   Navbar:     bg rgba(28,18,69,0.96) + backdropFilter blur(12px)  ← Navbar.tsx
 *   Dark bg:    #1e1245   ← ProblemSection, TrustSection, CTASection
 *   Footer bg:  #100b35   ← Footer.tsx
 *   Body bg:    #F5F4EF   ← App.tsx global styles
 *   Purple card:#271758 / border #3d2a8a  ← ProblemSection cards
 *   Brand:      #4C5FD5
 *   Muted text on dark: #9d8fd4
 *   Accent soft: rgba(167,139,248,0.85)
 *   Border:     #E8E8E3
 *
 * Zero new dependencies — only @chakra-ui/react + react-icons already in package.json.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Icon,
  Divider,
  Container,
} from '@chakra-ui/react';
import { RiArrowRightLine, RiCheckLine } from 'react-icons/ri';

const BASE_URL = 'https://spendable.finance';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

// ─── PageMeta — injects <title>, <meta description>, <canonical> per page ────
// Placed inside SEOPageLayout so every SEO page gets correct head tags
// without each page needing to import Helmet directly.
export function PageMeta({
  title,
  description,
  canonical,
  ogImage,
}: {
  title: string;
  description: string;
  canonical: string; // e.g. "/guides/freelance-tax-planning"
  ogImage?: string;
}) {
  const fullTitle = `${title} | Spendable`;
  const fullUrl = `${BASE_URL}${canonical}`;
  const image = ogImage ?? DEFAULT_IMAGE;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={fullUrl} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:image' content={image} />
      <meta property='og:type' content='article' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}

const APP_URL = 'https://app.spendable.finance';
const BRAND = '#4C5FD5';

// ─── Logo mark — verbatim from Navbar.tsx ────────────────────────────────────
function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <HStack
      spacing={2.5}
      as='a'
      href='/'
      cursor='pointer'
      _hover={{ opacity: 0.85 }}
      transition='opacity 0.15s'
      textDecoration='none'
    >
      <Box w={8} h={8} flexShrink={0}>
        <svg
          width='32'
          height='32'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='seo-lg' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0%' stopColor='#5D6FE9' />
              <stop offset='100%' stopColor='#3B4DC8' />
            </linearGradient>
          </defs>
          <rect width='64' height='64' rx='17' fill='url(#seo-lg)' />
          <path
            d='M 27 13 C 38 11 48 15 48 24 C 48 33 38 35 27 33 L 27 13 Z'
            fill='white'
          />
          <path
            d='M 37 31 C 26 29 16 31 16 40 C 16 49 26 53 37 51 L 37 31 Z'
            fill='white'
          />
          <rect x='27' y='29.5' width='10' height='5' fill='white' />
        </svg>
      </Box>
      <Text
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight='700'
        fontSize='18px'
        letterSpacing='-0.3px'
        color={dark ? 'white' : '#1C2B3A'}
      >
        Spendable
      </Text>
    </HStack>
  );
}

// ─── Navbar — matches live Navbar.tsx exactly ────────────────────────────────
function SEONavbar() {
  return (
    <Box
      as='nav'
      position='sticky'
      top={0}
      zIndex={100}
      bg='rgba(28,18,69,0.96)'
      backdropFilter='blur(12px)'
      borderBottom='1px solid rgba(124,92,246,0.2)'
    >
      <Flex
        maxW='1100px'
        mx='auto'
        px={{ base: 5, md: 8 }}
        py={4}
        align='center'
        justify='space-between'
      >
        <Logo dark />

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {[
            { label: 'How it works', href: '/#how-it-works' },
            { label: 'Features', href: '/#features' },
            { label: 'Pricing', href: '/#pricing' },
            { label: 'Guides', href: '/guides' },
          ].map((link) => (
            <Text
              key={link.label}
              as='a'
              href={link.href}
              fontSize='14px'
              fontWeight='500'
              color='rgba(167,139,248,0.85)'
              _hover={{ color: 'white' }}
              transition='color 0.15s'
              textDecoration='none'
            >
              {link.label}
            </Text>
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            as='a'
            href={APP_URL}
            variant='ghost'
            size='sm'
            fontWeight='600'
            color='rgba(167,139,248,0.85)'
            _hover={{ color: 'white', bg: 'rgba(124,92,246,0.15)' }}
            display={{ base: 'none', sm: 'flex' }}
          >
            Sign in
          </Button>
          <Button
            as='a'
            href={`${APP_URL}?ref=seo-nav`}
            size='sm'
            bg={BRAND}
            color='white'
            fontWeight='600'
            borderRadius='8px'
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

// ─── Footer — matches live Footer.tsx palette ─────────────────────────────────
function SEOFooter() {
  return (
    <Box bg='#100b35' borderTop='1px solid rgba(76,95,213,0.2)'>
      <Box maxW='1100px' mx='auto' px={{ base: 5, md: 8 }} py={10}>
        <HStack justify='space-between' align='center' flexWrap='wrap' gap={6}>
          <Logo dark />
          <HStack spacing={6} flexWrap='wrap'>
            {[
              { href: '/', label: 'Home' },
              { href: '/guides', label: 'Guides' },
              { href: '/for/uk-freelancers', label: 'UK Freelancers' },
              { href: '/for/us-freelancers', label: 'US Freelancers' },
              { href: '/for/contractors', label: 'Contractors' },
              { href: '/for/designers', label: 'Designers' },
              { href: APP_URL, label: 'Sign in' },
            ].map((l) => (
              <Text
                key={l.href}
                as='a'
                href={l.href}
                fontSize='13px'
                color='rgba(157,143,212,0.6)'
                fontWeight='500'
                _hover={{ color: 'white' }}
                transition='color 0.15s'
                textDecoration='none'
              >
                {l.label}
              </Text>
            ))}
          </HStack>
          <Text fontSize='12px' color='rgba(124,92,246,0.4)'>
            © {new Date().getFullYear()} Spendable
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

// ─── InlineCTA — matches CTASection.tsx dark palette ──────────────────────────
export function InlineCTA({
  headline,
  sub,
  cta = "Start free — it's free forever",
  utmRef = 'seo',
}: {
  headline: string;
  sub: string;
  cta?: string;
  utmRef?: string;
}) {
  return (
    <Box
      my={10}
      bg='#1e1245'
      borderRadius='20px'
      border='1px solid rgba(124,92,246,0.35)'
      px={{ base: 6, md: 10 }}
      py={{ base: 8, md: 10 }}
      textAlign='center'
      position='relative'
      overflow='hidden'
    >
      <Box
        position='absolute'
        top='-80px'
        right='-80px'
        w='300px'
        h='300px'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(124,92,246,0.22) 0%, transparent 70%)'
        pointerEvents='none'
      />
      <Box
        position='absolute'
        bottom='-60px'
        left='-60px'
        w='250px'
        h='250px'
        borderRadius='full'
        bg='radial-gradient(circle, rgba(76,95,213,0.15) 0%, transparent 70%)'
        pointerEvents='none'
      />
      <Text
        fontFamily="'Fraunces', Georgia, serif"
        fontSize={{ base: '22px', md: '28px' }}
        fontWeight='800'
        letterSpacing='-1px'
        color='white'
        mb={3}
        position='relative'
      >
        {headline}
      </Text>
      <Text
        fontSize='15px'
        color='#9d8fd4'
        lineHeight='1.65'
        mb={6}
        maxW='440px'
        mx='auto'
        position='relative'
      >
        {sub}
      </Text>
      <Button
        as='a'
        href={`${APP_URL}?ref=${utmRef}`}
        bg={BRAND}
        color='white'
        fontWeight='700'
        fontSize='15px'
        borderRadius='10px'
        h='48px'
        px={8}
        rightIcon={<Icon as={RiArrowRightLine} />}
        _hover={{
          bg: '#3D4FBF',
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 32px rgba(76,95,213,0.45)',
        }}
        transition='all 0.2s'
        position='relative'
      >
        {cta}
      </Button>
      <Text
        fontSize='12px'
        color='rgba(157,143,212,0.45)'
        mt={3}
        position='relative'
      >
        No credit card required
      </Text>
    </Box>
  );
}

// ─── FeatureList ──────────────────────────────────────────────────────────────
export function FeatureList({ items }: { items: string[] }) {
  return (
    <VStack spacing={3} align='stretch' my={5}>
      {items.map((item) => (
        <HStack key={item} spacing={3} align='flex-start'>
          <Box
            w={5}
            h={5}
            borderRadius='full'
            bg='rgba(76,95,213,0.12)'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexShrink={0}
            mt='2px'
          >
            <Icon as={RiCheckLine} color={BRAND} boxSize='11px' />
          </Box>
          <Text fontSize='14px' color='#475569' lineHeight='1.7'>
            {item}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}

// ─── RelatedPages — internal linking ─────────────────────────────────────────
export function RelatedPages({
  links,
}: {
  links: { href: string; label: string; desc: string }[];
}) {
  return (
    <Box mt={10}>
      <Divider mb={6} borderColor='#E8E8E3' />
      <Text
        fontSize='11px'
        fontWeight='700'
        color='#8a9aaa'
        textTransform='uppercase'
        letterSpacing='1.2px'
        mb={4}
      >
        Related guides
      </Text>
      <VStack spacing={3} align='stretch'>
        {links.map((l) => (
          <Box
            key={l.href}
            as='a'
            href={l.href}
            display='block'
            p={4}
            bg='white'
            border='1px solid #E8E8E3'
            borderRadius='12px'
            _hover={{
              borderColor: BRAND,
              bg: '#f8f9ff',
              transform: 'translateX(2px)',
            }}
            transition='all 0.15s'
            textDecoration='none'
          >
            <Text fontSize='14px' fontWeight='600' color={BRAND} mb={0.5}>
              {l.label}
            </Text>
            <Text fontSize='13px' color='#5a6a7a'>
              {l.desc}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

// ─── ArticleHeader ────────────────────────────────────────────────────────────
export function ArticleHeader({
  tag,
  readTime,
  h1,
  lead,
}: {
  tag: string;
  readTime: string;
  h1: string;
  lead: string;
}) {
  return (
    <Box mb={8}>
      <HStack spacing={2} mb={4}>
        <Box
          px={3}
          py={0.5}
          bg='rgba(76,95,213,0.1)'
          border='1px solid rgba(76,95,213,0.2)'
          borderRadius='full'
        >
          <Text
            fontSize='11px'
            fontWeight='700'
            color={BRAND}
            textTransform='uppercase'
            letterSpacing='0.8px'
          >
            {tag}
          </Text>
        </Box>
        <Text fontSize='13px' color='#8a9aaa'>
          {readTime}
        </Text>
      </HStack>
      <Text
        as='h1'
        fontFamily="'Fraunces', Georgia, serif"
        fontSize={{ base: '30px', md: '42px' }}
        fontWeight='800'
        letterSpacing='-1.5px'
        color='#1C2B3A'
        lineHeight='1.15'
        mb={4}
      >
        {h1}
      </Text>
      <Text fontSize='17px' color='#5a6a7a' lineHeight='1.7'>
        {lead}
      </Text>
    </Box>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as='h2'
      fontFamily="'Fraunces', Georgia, serif"
      fontSize={{ base: '22px', md: '26px' }}
      fontWeight='800'
      letterSpacing='-0.8px'
      color='#1C2B3A'
      mt={10}
      mb={3}
    >
      {children}
    </Text>
  );
}

// ─── Prose paragraph ──────────────────────────────────────────────────────────
export function P({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize='15px' color='#475569' lineHeight='1.8' mb={4}>
      {children}
    </Text>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────
export function SEOPageLayout({
  children,
  maxW = '780px',
  meta,
}: {
  children: React.ReactNode;
  maxW?: string;
  meta?: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
  };
}) {
  return (
    <Box
      bg='#F5F4EF'
      minH='100vh'
      fontFamily="'DM Sans', -apple-system, sans-serif"
    >
      {meta && (
        <PageMeta
          title={meta.title}
          description={meta.description}
          canonical={meta.canonical}
          ogImage={meta.ogImage}
        />
      )}
      <SEONavbar />
      <Container maxW={maxW} px={{ base: 4, md: 6 }} py={{ base: 10, md: 16 }}>
        {children}
      </Container>
      <SEOFooter />
    </Box>
  );
}
