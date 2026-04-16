import {
  Box, HStack, VStack, Text, Divider,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
  useDisclosure, Icon,
} from '@chakra-ui/react';
import { RiHeart2Line } from 'react-icons/ri';

interface FooterProps {
  onTermsOpen:    () => void;
  onPrivacyOpen:  () => void;
  onSecurityOpen: () => void;
  onCookiesOpen:  () => void;
}

const LINK_COLOR = 'rgba(157,143,212,0.6)';
const LINK_HOVER = { color: 'white' };
const LABEL_COLOR = 'rgba(167,139,248,0.5)';

function FooterLink({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <Text
      fontSize="13px" color={LINK_COLOR} fontWeight="500"
      _hover={LINK_HOVER} transition="color 0.15s"
      cursor="pointer" onClick={onClick}
    >
      {label}
    </Text>
  );
}

function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent borderRadius="16px" mx={4} overflow="hidden">
        {/* Header band */}
        <Box
          bgGradient="linear(135deg, #1C2B3A 0%, #253344 100%)"
          px={6} pt={7} pb={6} position="relative" overflow="hidden"
        >
          <Box
            position="absolute" top="-30px" right="-30px"
            w="140px" h="140px" borderRadius="full"
            bg="radial-gradient(circle, rgba(76,95,213,0.3) 0%, transparent 70%)"
            pointerEvents="none"
          />
          <HStack spacing={3} mb={3}>
            <Box
              w={9} h={9} borderRadius="10px"
              bg="rgba(76,95,213,0.25)"
              display="flex" alignItems="center" justifyContent="center"
            >
              <Icon as={RiHeart2Line} color="#7b8fec" boxSize="18px" />
            </Box>
            <Box
              px={2.5} py={0.5} borderRadius="full"
              bg="rgba(76,95,213,0.2)" border="1px solid rgba(76,95,213,0.35)"
            >
              <Text fontSize="11px" fontWeight="700" color="#7b8fec" letterSpacing="0.5px">
                ABOUT
              </Text>
            </Box>
          </HStack>
          <Text fontSize="20px" fontWeight="800" color="white" letterSpacing="-0.5px" mb={1}>
            Why Spendable exists
          </Text>
          <Text fontSize="13px" color="#8FABBF" lineHeight="1.5">
            Built out of real frustration, not a startup idea.
          </Text>
          <ModalCloseButton color="rgba(157,143,212,0.6)" _hover={{ color: 'white' }} mt={1} />
        </Box>

        <ModalBody px={6} py={6} bg="white">
          <VStack spacing={4} align="stretch">
            <Text fontSize="15px" color="#1C2B3A" lineHeight="1.8" fontWeight="500">
              Spendable was built by a freelancer who struggled with irregular income.
            </Text>
            <Text fontSize="13px" color="#5a6a7a" lineHeight="1.85">
              Every month felt like a guessing game — a big invoice would land, then nothing for weeks.
              It was impossible to know how much was actually safe to spend versus what needed to be saved
              for tax, or held back for a slow patch.
            </Text>
            <Text fontSize="13px" color="#5a6a7a" lineHeight="1.85">
              Spendable solves that one question:{' '}
              <Text as="span" fontWeight="600" color="#1C2B3A">how much can I safely spend right now?</Text>
              {' '}By smoothing income over time, setting aside tax reserves automatically, and keeping an
              emergency buffer, it gives freelancers the financial clarity that salaried workers take for granted.
            </Text>
            <Box
              mt={1} p={4} bg="#f7f8fe" borderRadius="10px"
              border="1px solid" borderColor="#e4e8fa"
            >
              <HStack spacing={2.5}>
                <Icon as={RiHeart2Line} color="#4C5FD5" boxSize="15px" flexShrink={0} />
                <Text fontSize="12.5px" color="#4C5FD5" fontWeight="600" lineHeight="1.6">
                  No VC funding. No growth hacks. Just a tool that solves a real problem.
                </Text>
              </HStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export function Footer({ onTermsOpen, onPrivacyOpen, onSecurityOpen, onCookiesOpen }: FooterProps) {
  const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure();

  return (
    <>
      <Box bg="#100b35" borderTop="1px solid rgba(76,95,213,0.2)">
        <Box maxW="1100px" mx="auto" px={{ base: 5, md: 8 }} py={12}>

          {/* Top row: brand · Company · Legal */}
          <HStack
            align="flex-start"
            justify="flex-start"
            flexWrap="wrap"
            gap={14}
            mb={10}
          >
            {/* Brand */}
            <VStack align="flex-start" spacing={4} maxW="260px" minW="180px">
              <HStack spacing={2}>
                <Box w={7} h={7} flexShrink={0}>
                  <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                    <defs>
                      <linearGradient id="flg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#5D6FE9"/>
                        <stop offset="100%" stopColor="#3B4DC8"/>
                      </linearGradient>
                    </defs>
                    <rect width="64" height="64" rx="17" fill="url(#flg)"/>
                    <path d="M27 13C38 11 48 15 48 24C48 33 38 35 27 33L27 13Z" fill="white"/>
                    <path d="M37 31C26 29 16 31 16 40C16 49 26 53 37 51L37 31Z" fill="white"/>
                    <rect x="27" y="29.5" width="10" height="5" fill="white"/>
                  </svg>
                </Box>
                <Text fontFamily="'Fraunces', Georgia, serif"
                  fontWeight="700" fontSize="16px" color="white">
                  Spendable
                </Text>
              </HStack>
              <Text fontSize="13px" color="rgba(157,143,212,0.55)" lineHeight="1.7">
                Financial clarity for freelancers with irregular income. Know exactly what you can safely spend — right now.
              </Text>
            </VStack>

            {/* Company */}
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="11px" fontWeight="700" color={LABEL_COLOR}
                textTransform="uppercase" letterSpacing="1px">
                Company
              </Text>
              <FooterLink label="About" onClick={onAboutOpen} />
            </VStack>

            {/* Resources */}
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="11px" fontWeight="700" color={LABEL_COLOR}
                textTransform="uppercase" letterSpacing="1px">
                Resources
              </Text>
              <Text
                as="a" href="/guides"
                fontSize="13px" color={LINK_COLOR} fontWeight="500"
                _hover={LINK_HOVER} transition="color 0.15s" textDecoration="none"
              >
                Freelance Guides
              </Text>
              <Text
                as="a" href="/for/uk-freelancers"
                fontSize="13px" color={LINK_COLOR} fontWeight="500"
                _hover={LINK_HOVER} transition="color 0.15s" textDecoration="none"
              >
                UK Freelancers
              </Text>
              <Text
                as="a" href="/for/us-freelancers"
                fontSize="13px" color={LINK_COLOR} fontWeight="500"
                _hover={LINK_HOVER} transition="color 0.15s" textDecoration="none"
              >
                US Freelancers
              </Text>
              <Text
                as="a" href="/compare/freelance-finance-spreadsheet-vs-app"
                fontSize="13px" color={LINK_COLOR} fontWeight="500"
                _hover={LINK_HOVER} transition="color 0.15s" textDecoration="none"
              >
                Spreadsheet vs App
              </Text>
            </VStack>

            {/* Legal */}
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="11px" fontWeight="700" color={LABEL_COLOR}
                textTransform="uppercase" letterSpacing="1px">
                Legal
              </Text>
              <FooterLink label="Privacy Policy"   onClick={onPrivacyOpen}  />
              <FooterLink label="Terms of Service" onClick={onTermsOpen}    />
              <FooterLink label="Security"         onClick={onSecurityOpen} />
              <FooterLink label="Cookies"          onClick={onCookiesOpen}  />
            </VStack>

          </HStack>

          <Divider borderColor="rgba(76,95,213,0.15)" mb={6} />

          {/* Bottom bar */}
          <HStack justify="space-between" flexWrap="wrap" gap={3}>
            <Text fontSize="12px" color="rgba(124,92,246,0.4)">
              © 2026 Spendable · Built for freelancers, by a freelancer.
            </Text>
            <HStack spacing={5}>
              <Text as="a" href="https://x.com/spendable_" target="_blank" rel="noopener noreferrer"
                fontSize="12px" color="rgba(124,92,246,0.4)" fontWeight="500"
                _hover={{ color: '#a78bf8' }} transition="color 0.15s">
                X / Twitter
              </Text>
              <Text as="a" href="https://instagram.com/spendable.finance" target="_blank" rel="noopener noreferrer"
                fontSize="12px" color="rgba(124,92,246,0.4)" fontWeight="500"
                _hover={{ color: '#a78bf8' }} transition="color 0.15s">
                Instagram
              </Text>
            </HStack>
          </HStack>

        </Box>
      </Box>

      <AboutModal isOpen={isAboutOpen} onClose={onAboutClose} />
    </>
  );
}
