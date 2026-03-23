import { Box, Text, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { dashboardMetrics, allocationItems, incomeSparkData } from '../../data/mockData';

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 160, h = 40, pad = 2;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  const first = points.split(' ')[0];
  const last  = points.split(' ').slice(-1)[0];
  const [lx] = last.split(',').map(Number);
  const areaPoints = `${pad},${h - pad} ${points} ${lx},${h - pad}`;

  return (
    <svg width={w} height={h} style={{ overflow: 'visible', display: 'block' }}>
      <defs>
        <linearGradient id={`sg-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0"   />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#sg-${color.replace('#','')})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const NAV_ITEMS = ['Dashboard', 'Income', 'Expenses', 'Upcoming', 'Tax Tracker', 'Forecast', 'Settings'];

export function DashboardMockup() {
  return (
    <Box
      bg="#eef1fe"
      borderRadius="16px"
      border="1px solid #d0d5f0"
      boxShadow="0 24px 72px rgba(28,43,58,0.18), 0 4px 16px rgba(28,43,58,0.08)"
      overflow="hidden"
      w="600px"
      maxW="full"
      fontFamily="'DM Sans', sans-serif"
      display="flex"
      flexDirection="column"
    >
      {/* Window chrome */}
      <Box bg="#1C2B3A" px={4} py={2.5} borderBottom="1px solid #253344">
        <HStack spacing={1.5}>
          <Box w="9px" h="9px" borderRadius="full" bg="#EB5757" opacity={0.8} />
          <Box w="9px" h="9px" borderRadius="full" bg="#F2C94C" opacity={0.8} />
          <Box w="9px" h="9px" borderRadius="full" bg="#27AE60" opacity={0.8} />
          <Box flex={1} />
          <Box
            h="18px" w="150px" bg="rgba(255,255,255,0.07)" borderRadius="4px"
            border="1px solid rgba(255,255,255,0.1)"
            display="flex" alignItems="center" justifyContent="center"
          >
            <Text fontSize="9px" color="#5a7085" fontWeight="500">app.spendable.finance</Text>
          </Box>
          <Box flex={1} />
        </HStack>
      </Box>

      {/* App layout: sidebar + main */}
      <Box display="flex" flex={1} minH="0">

        {/* ── Navy sidebar ── */}
        <Box
          w="130px"
          bg="#1C2B3A"
          flexShrink={0}
          borderRight="1px solid #253344"
          display="flex"
          flexDirection="column"
          py={3}
          px={2}
        >
          {/* Logo */}
          <HStack spacing={1.5} px={2} mb={4}>
            <Box w={5} h={5} flexShrink={0}>
              <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
                <defs><linearGradient id="mlg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#5D6FE9"/><stop offset="100%" stopColor="#3B4DC8"/></linearGradient></defs>
                <rect width="64" height="64" rx="17" fill="url(#mlg)"/>
                <path d="M 27 13 C 38 11 48 15 48 24 C 48 33 38 35 27 33 L 27 13 Z" fill="white"/>
                <path d="M 37 31 C 26 29 16 31 16 40 C 16 49 26 53 37 51 L 37 31 Z" fill="white"/>
                <rect x="27" y="29.5" width="10" height="5" fill="white"/>
              </svg>
            </Box>
            <Text fontSize="11px" fontWeight="700" color="white" letterSpacing="-0.2px">
              Spendable
            </Text>
          </HStack>

          {/* Callout */}
          <Box mx={0} mb={3} px={2} py={1.5} bg="#16222f" borderRadius="6px" border="1px solid #2d3e50">
            <Text fontSize="7.5px" fontWeight="700" color="#6b84f5" textTransform="uppercase" letterSpacing="0.5px" mb={0.5}>
              Your question
            </Text>
            <Text fontSize="8.5px" color="#8FABBF" fontWeight="500" lineHeight="1.4">
              "How much can I safely spend?"
            </Text>
          </Box>

          {/* Nav */}
          <VStack spacing={0.5} align="stretch">
            {NAV_ITEMS.map((item, i) => (
              <Box
                key={item}
                px={2} py={1.5} borderRadius="6px"
                bg={i === 0 ? '#253344' : 'transparent'}
                borderLeft={i === 0 ? '2px solid #4C5FD5' : '2px solid transparent'}
              >
                <Text
                  fontSize="10px"
                  fontWeight={i === 0 ? '600' : '500'}
                  color={i === 0 ? 'white' : '#8FABBF'}
                >
                  {item}
                </Text>
              </Box>
            ))}
          </VStack>

          {/* User avatar */}
          <Box mt="auto" pt={3} borderTop="1px solid #253344" px={2}>
            <HStack spacing={1.5}>
              <Box w={5} h={5} borderRadius="full" bg="#4C5FD5"
                display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="8px" color="white" fontWeight="700">A</Text>
              </Box>
              <Text fontSize="9px" color="#5a7085" fontWeight="500" isTruncated>alex@me.com</Text>
            </HStack>
          </Box>
        </Box>

        {/* ── Main content ── */}
        <Box flex={1} p={4} overflow="hidden" bg="#eef1fe">

          {/* Page header */}
          <HStack justify="space-between" mb={4}>
            <Box>
              <Text fontSize="14px" fontWeight="700" color="#1C2B3A" letterSpacing="-0.3px">Good morning</Text>
              <Text fontSize="9px" color="#5a6a7a">Wednesday, March 2026</Text>
            </Box>
            <Box px={2.5} py={1} bg="#4C5FD5" borderRadius="6px">
              <Text fontSize="9px" fontWeight="700" color="white">Pro</Text>
            </Box>
          </HStack>

          {/* Hero metric card */}
          <Box
            bg="linear-gradient(135deg, #1C2B3A 0%, #253344 100%)"
            borderRadius="12px" p={4} mb={3}
            position="relative" overflow="hidden"
          >
            <Box
              position="absolute" inset={0} opacity={0.04}
              backgroundImage="repeating-linear-gradient(0deg, transparent, transparent 18px, white 18px, white 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, white 18px, white 19px)"
            />
            <Box position="absolute" top="-20px" right="-20px" w="100px" h="100px" borderRadius="full"
              bg="radial-gradient(circle, rgba(76,95,213,0.3) 0%, transparent 70%)" />
            <Box position="relative">
              <Text fontSize="8px" fontWeight="700" color="#6b84f5" textTransform="uppercase" letterSpacing="1px" mb={1}>
                Safe to Spend Right Now
              </Text>
              <Text fontSize="32px" fontWeight="800" color="white" letterSpacing="-1.5px" lineHeight="1" mb={1.5}
                fontFamily="'Fraunces', Georgia, serif">
                $3,840
              </Text>
              <HStack spacing={2}>
                <Box px={1.5} py={0.5} bg="rgba(39,174,96,0.2)" borderRadius="full" border="1px solid rgba(39,174,96,0.35)">
                  <Text fontSize="8.5px" fontWeight="700" color="#4eca80">● Healthy</Text>
                </Box>
                <Text fontSize="9px" color="#8FABBF">After tax reserve + buffer</Text>
              </HStack>
            </Box>
          </Box>

          {/* KPI row */}
          <SimpleGrid columns={4} spacing={2} mb={3}>
            {dashboardMetrics.map(m => (
              <Box key={m.label} bg="white" borderRadius="8px" p={2.5} border="1px solid #e2e8f0">
                <Text fontSize="7.5px" fontWeight="700" color="#8a9aaa" textTransform="uppercase" letterSpacing="0.5px" mb={1}>
                  {m.label}
                </Text>
                <Text fontSize="13px" fontWeight="700" color="#1C2B3A" letterSpacing="-0.5px" lineHeight="1" mb={0.5}>
                  {m.value}
                </Text>
                <Text fontSize="7.5px" color={m.color} fontWeight="600">{m.trend || m.subtext}</Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Bottom row: sparkline + allocation */}
          <SimpleGrid columns={2} spacing={2}>
            <Box bg="white" borderRadius="8px" p={3} border="1px solid #e2e8f0">
              <HStack justify="space-between" mb={2}>
                <Text fontSize="9px" fontWeight="600" color="#1C2B3A">Income Trend</Text>
                <Text fontSize="8px" color="#27AE60" fontWeight="700">↑ $7,200 avg</Text>
              </HStack>
              <Sparkline data={incomeSparkData} color="#4C5FD5" />
            </Box>

            <Box bg="white" borderRadius="8px" p={3} border="1px solid #e2e8f0">
              <Text fontSize="9px" fontWeight="600" color="#1C2B3A" mb={2}>Balance Allocation</Text>
              <HStack spacing={0} h="6px" borderRadius="full" overflow="hidden" mb={2}>
                {allocationItems.map(item => (
                  <Box key={item.label} h="100%" bg={item.color} w={`${item.pct}%`} />
                ))}
              </HStack>
              <VStack spacing={1} align="stretch">
                {allocationItems.map(item => (
                  <HStack key={item.label} spacing={1}>
                    <Box w="6px" h="6px" borderRadius="1px" bg={item.color} flexShrink={0} />
                    <Text fontSize="8px" color="#5a6a7a" fontWeight="500" flex={1}>{item.label}</Text>
                    <Text fontSize="8px" color="#1C2B3A" fontWeight="700">{item.amount}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
