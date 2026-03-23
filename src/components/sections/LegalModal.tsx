import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  ModalCloseButton, Box, Text, VStack, Divider, HStack, Icon, Link as ChakraLink,
} from '@chakra-ui/react';
import {
  RiShieldCheckLine, RiLockLine, RiDatabase2Line,
  RiEyeOffLine, RiAlertLine, RiGlobalLine,
} from 'react-icons/ri';

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box>
      <Text fontWeight="700" fontSize="15px" color="#1C2B3A" mb={2}>{title}</Text>
      <Box fontSize="13px" color="#5a6a7a" lineHeight="1.8">{children}</Box>
    </Box>
  );
}

function ModalShell({
  isOpen, onClose, title, subtitle, children,
}: {
  isOpen: boolean; onClose: () => void;
  title: string; subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent borderRadius="16px" mx={4}>
        <ModalHeader borderBottom="1px solid #f0efe9" pb={4}>
          <Text fontWeight="800" fontSize="20px" letterSpacing="-0.5px">{title}</Text>
          <Text fontSize="12px" color="#94a3b8" fontWeight="400" mt={0.5}>{subtitle}</Text>
        </ModalHeader>
        <ModalCloseButton mt={2} />
        <ModalBody py={6}>
          <VStack spacing={5} align="stretch">{children}</VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

// ─── Terms of Service ─────────────────────────────────────────────────────────

export function TermsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose}
      title="Terms of Service"
      subtitle="Effective 1 January 2025 · Spendable Finance, Inc.">
      <Section title="1. Acceptance of Terms">
        By creating an account or using Spendable, you agree to these Terms and our Privacy Policy. If you disagree, please do not use the service.
      </Section>
      <Divider />
      <Section title="2. Description of Service">
        Spendable is a personal finance planning tool for freelancers. It is a financial aid — not regulated financial advice. Always consult a qualified adviser for material decisions.
      </Section>
      <Divider />
      <Section title="3. Account Registration">
        <VStack spacing={2} align="stretch">
          <Text>You must provide a valid email address and keep your password secure.</Text>
          <Text>You must be at least 18 years old to use Spendable.</Text>
        </VStack>
      </Section>
      <Divider />
      <Section title="4. Subscription Plans and Billing">
        <VStack spacing={2} align="stretch">
          <Text><strong>Free plan:</strong> Available at no cost with limits on entries and expenses.</Text>
          <Text><strong>Pro plan:</strong> Billed monthly. Payments processed by Stripe. We never store card details.</Text>
          <Text><strong>Cancellation:</strong> Cancel anytime from Settings. You keep Pro access until the end of your billing period, plus 30-day CSV export access after cancellation.</Text>
          <Text><strong>Refunds:</strong> No partial-month refunds. Contact us within 14 days of any incorrect charge.</Text>
          <Text><strong>Price changes:</strong> 30 days' notice before any increase.</Text>
        </VStack>
      </Section>
      <Divider />
      <Section title="5. Your Data">
        You own all data you enter. We never sell or share your financial data. Delete your account and all data anytime from Settings.
      </Section>
      <Divider />
      <Section title="6. Acceptable Use">
        You agree not to use the service for unlawful purposes, attempt to access other users' data, reverse-engineer the service, or transmit malware.
      </Section>
      <Divider />
      <Section title="7. Disclaimer of Warranties">
        Spendable is provided "as is." Figures are estimates based on data you provide. Do not rely on them as your sole basis for financial decisions.
      </Section>
      <Divider />
      <Section title="8. Limitation of Liability">
        To the maximum extent permitted by law, our total liability shall not exceed amounts paid in the preceding 12 months.
      </Section>
      <Divider />
      <Section title="9. Governing Law">
        These terms are governed by the laws of England and Wales.
      </Section>
      <Divider />
      <Section title="10. Changes">
        We will notify you at least 14 days before material changes take effect.
      </Section>
      <Divider />
      <Section title="11. Contact">
        Questions? Email <ChakraLink href="mailto:hello@spendable.finance" color="#4C5FD5" fontWeight="600">hello@spendable.finance</ChakraLink>
      </Section>
    </ModalShell>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────

export function PrivacyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose}
      title="Privacy Policy"
      subtitle="Effective 1 January 2025 · Spendable Finance, Inc.">
      <Box bg="#f0f0ff" border="1px solid #d0d8f5" borderRadius="10px" p={4}>
        <Text fontSize="13px" fontWeight="700" color="#3d4faf" mb={1}>The short version</Text>
        <Text fontSize="13px" color="#3d4faf" lineHeight="1.6">
          We collect only what's needed to run the service. We don't sell your data. All financial calculations happen in your browser. You can delete everything at any time.
        </Text>
      </Box>
      <Section title="1. Who We Are">
        Spendable Finance, Inc. is the data controller for GDPR purposes. Contact: <ChakraLink href="mailto:hello@spendable.finance" color="#4C5FD5">hello@spendable.finance</ChakraLink>
      </Section>
      <Divider />
      <Section title="2. What We Collect">
        <VStack spacing={1} align="stretch">
          {[
            ['Account data',      'Your email and hashed password for authentication.'],
            ['Financial data',    'Income, expenses, and settings you enter manually. We never connect to your bank.'],
            ['Subscription data', 'Your Stripe customer ID and plan status. We never store card numbers.'],
            ['Usage analytics',   'Anonymised product analytics to improve the service.'],
            ['Technical data',    'IP address and browser type for security and debugging.'],
          ].map(([label, desc]) => (
            <HStack key={label} align="flex-start" spacing={3}>
              <Text fontWeight="600" color="#1C2B3A" w="140px" flexShrink={0} fontSize="12px">{label}</Text>
              <Text fontSize="12px">{desc}</Text>
            </HStack>
          ))}
        </VStack>
      </Section>
      <Divider />
      <Section title="3. Legal Basis (GDPR / UK GDPR)">
        We process your data under contract (to provide the service), legitimate interests (security and analytics), and legal obligation (billing records).
      </Section>
      <Divider />
      <Section title="4. Data Sharing">
        We never sell your data. We share only with essential sub-processors: <strong>Supabase</strong> (database, EU-hosted) and <strong>Stripe</strong> (payments, PCI-DSS compliant).
      </Section>
      <Divider />
      <Section title="5. Retention">
        Account and financial data deleted within 30 days of account deletion. Billing records kept 7 years as required by law.
      </Section>
      <Divider />
      <Section title="6. Your Rights">
        Under UK/EU GDPR you have the right to access, correct, delete, or export your data at any time. To exercise rights, email us or delete directly from Settings. You can also complain to the ICO at ico.org.uk.
      </Section>
      <Divider />
      <Section title="7. Cookies">
        We use only functional cookies to keep you signed in. No advertising or tracking cookies. See our Cookies policy for full details.
      </Section>
      <Divider />
      <Section title="8. Contact">
        Email: <ChakraLink href="mailto:hello@spendable.finance" color="#4C5FD5" fontWeight="600">hello@spendable.finance</ChakraLink>
        <br />ICO complaints: <Text as="span" color="#4C5FD5">ico.org.uk</Text>
      </Section>
    </ModalShell>
  );
}

// ─── Security ─────────────────────────────────────────────────────────────────

const SECURITY_ITEMS = [
  {
    icon: RiLockLine,
    color: '#4C5FD5',
    title: 'Encryption in transit and at rest',
    body: 'All data is transmitted over HTTPS/TLS 1.3. Sensitive fields in the database are encrypted at rest using AES-256. Backups are encrypted with the same standard.',
  },
  {
    icon: RiDatabase2Line,
    color: '#27AE60',
    title: 'Infrastructure',
    body: 'We host on Supabase (PostgreSQL), running on AWS in the EU (eu-west-1). The platform is SOC 2 Type II certified. We do not run our own servers.',
  },
  {
    icon: RiEyeOffLine,
    color: '#8b5cf6',
    title: 'Password handling',
    body: 'Passwords are hashed using bcrypt with a per-user salt before storage. Plain-text passwords are never written to disk or logs. We use Supabase Auth for all authentication flows.',
  },
  {
    icon: RiShieldCheckLine,
    color: '#0ea5e9',
    title: 'Access controls',
    body: 'Row-level security (RLS) is enforced in the database — your data is only accessible by your authenticated session. Spendable staff have no routine access to user financial data.',
  },
  {
    icon: RiAlertLine,
    color: '#f59e0b',
    title: 'Incident response',
    body: 'In the event of a data breach we will notify affected users within 72 hours as required by GDPR. We maintain an incident response plan and conduct regular reviews.',
  },
  {
    icon: RiGlobalLine,
    color: '#ec4899',
    title: 'Payment security',
    body: 'Payments are handled entirely by Stripe, a PCI DSS Level 1 certified provider. Spendable never sees, stores, or processes card numbers. All payment data stays within Stripe\'s systems.',
  },
];

export function SecurityModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose}
      title="Security"
      subtitle="How we protect your data · Last reviewed January 2025">
      <Box bg="#f0f0ff" border="1px solid #d0d8f5" borderRadius="10px" p={4}>
        <Text fontSize="13px" color="#3d4faf" lineHeight="1.6">
          Security is foundational to Spendable. Your financial data deserves the same protection as your bank account. Here's exactly what we do.
        </Text>
      </Box>
      {SECURITY_ITEMS.map((item, i) => (
        <Box key={item.title}>
          {i > 0 && <Divider mb={5} />}
          <HStack spacing={4} align="flex-start">
            <Box
              w={9} h={9} borderRadius="10px" flexShrink={0}
              bg={item.color + '15'}
              display="flex" alignItems="center" justifyContent="center"
            >
              <Icon as={item.icon} color={item.color} boxSize="16px" />
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="14px" color="#1C2B3A" mb={1}>{item.title}</Text>
              <Text fontSize="13px" color="#5a6a7a" lineHeight="1.7">{item.body}</Text>
            </Box>
          </HStack>
        </Box>
      ))}
      <Divider />
      <Section title="Report a vulnerability">
        If you discover a security issue, please email us at{' '}
        <Text as="span" color="#4C5FD5" fontWeight="600">security@spendable.finance</Text>
        {' '}before public disclosure. We aim to respond within 48 hours and resolve confirmed issues within 30 days.
      </Section>
    </ModalShell>
  );
}

// ─── Cookies ─────────────────────────────────────────────────────────────────

const COOKIE_TABLE = [
  {
    name: 'sb-access-token',
    type: 'Essential',
    purpose: 'Keeps you signed in to your Spendable account.',
    duration: 'Session / 1 hour',
    provider: 'Supabase',
  },
  {
    name: 'sb-refresh-token',
    type: 'Essential',
    purpose: 'Silently refreshes your session so you stay logged in.',
    duration: '60 days',
    provider: 'Supabase',
  },
  {
    name: 'chakra-ui-color-mode',
    type: 'Preference',
    purpose: 'Remembers whether you prefer light or dark mode.',
    duration: 'Persistent',
    provider: 'Spendable',
  },
];

const TYPE_COLOR: Record<string, string> = {
  Essential:  '#27AE60',
  Preference: '#4C5FD5',
  Analytics:  '#f59e0b',
};

export function CookiesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <ModalShell isOpen={isOpen} onClose={onClose}
      title="Cookie Policy"
      subtitle="Effective 1 January 2025 · Spendable Finance, Inc.">
      <Box bg="#f0f0ff" border="1px solid #d0d8f5" borderRadius="10px" p={4}>
        <Text fontSize="13px" color="#3d4faf" lineHeight="1.6">
          We use only the cookies strictly necessary to provide the service. We do not use advertising cookies, third-party tracking cookies, or any cookies for behavioural profiling.
        </Text>
      </Box>
      <Section title="What is a cookie?">
        A cookie is a small text file stored in your browser. It lets a website remember information about your visit — like whether you're signed in.
      </Section>
      <Divider />
      <Section title="Cookies we use">
        <VStack spacing={4} align="stretch" mt={2}>
          {COOKIE_TABLE.map(c => {
            const col = TYPE_COLOR[c.type] ?? '#94a3b8';
            return (
              <Box key={c.name} bg="#f8fafc" borderRadius="10px" p={4} border="1px solid #e2e8f0">
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="700" fontSize="13px" color="#1C2B3A" fontFamily="mono">{c.name}</Text>
                  <Box px={2} py={0.5} borderRadius="6px" bg={col + '18'}>
                    <Text fontSize="10px" fontWeight="700" color={col}>{c.type}</Text>
                  </Box>
                </HStack>
                <Text fontSize="12px" color="#5a6a7a" mb={2}>{c.purpose}</Text>
                <HStack spacing={4}>
                  <Text fontSize="11px" color="#94a3b8"><strong>Duration:</strong> {c.duration}</Text>
                  <Text fontSize="11px" color="#94a3b8"><strong>Provider:</strong> {c.provider}</Text>
                </HStack>
              </Box>
            );
          })}
        </VStack>
      </Section>
      <Divider />
      <Section title="No third-party advertising cookies">
        We do not use Google Analytics, Facebook Pixel, or any advertising network cookies. Your browsing behaviour on Spendable is never shared with advertisers.
      </Section>
      <Divider />
      <Section title="Controlling cookies">
        You can delete cookies at any time in your browser settings. Deleting the session cookies will sign you out of Spendable. The colour-mode preference cookie can be safely deleted without affecting your account.
      </Section>
      <Divider />
      <Section title="Contact">
        Questions about our cookie use? Email{' '}
        <ChakraLink href="mailto:hello@spendable.finance" color="#4C5FD5" fontWeight="600">hello@spendable.finance</ChakraLink>
      </Section>
    </ModalShell>
  );
}
