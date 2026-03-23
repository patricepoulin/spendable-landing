import { Box, useDisclosure } from '@chakra-ui/react';
import { Navbar }           from './components/sections/Navbar';
import { HeroSection }      from './components/sections/HeroSection';
import { ProblemSection }   from './components/sections/ProblemSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { FeaturesSection }  from './components/sections/FeaturesSection';
import { TrustSection }     from './components/sections/TrustSection';
import { PricingSection }   from './components/sections/PricingSection';
import { CTASection }       from './components/sections/CTASection';
import { Footer }           from './components/sections/Footer';
import {
  TermsModal, PrivacyModal, SecurityModal, CookiesModal,
} from './components/sections/LegalModal';

export default function LandingPage() {
  const { isOpen: isTermsOpen,    onOpen: onTermsOpen,    onClose: onTermsClose    } = useDisclosure();
  const { isOpen: isPrivacyOpen,  onOpen: onPrivacyOpen,  onClose: onPrivacyClose  } = useDisclosure();
  const { isOpen: isSecurityOpen, onOpen: onSecurityOpen, onClose: onSecurityClose } = useDisclosure();
  const { isOpen: isCookiesOpen,  onOpen: onCookiesOpen,  onClose: onCookiesClose  } = useDisclosure();

  return (
    <Box fontFamily="'DM Sans', sans-serif">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TrustSection />
      <PricingSection />
      <CTASection />
      <Footer
        onTermsOpen={onTermsOpen}
        onPrivacyOpen={onPrivacyOpen}
        onSecurityOpen={onSecurityOpen}
        onCookiesOpen={onCookiesOpen}
      />
      <TermsModal    isOpen={isTermsOpen}    onClose={onTermsClose}    />
      <PrivacyModal  isOpen={isPrivacyOpen}  onClose={onPrivacyClose}  />
      <SecurityModal isOpen={isSecurityOpen} onClose={onSecurityClose} />
      <CookiesModal  isOpen={isCookiesOpen}  onClose={onCookiesClose}  />
    </Box>
  );
}
