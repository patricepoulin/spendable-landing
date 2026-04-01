import { Box, Text, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { dashboardMetrics, allocationItems, incomeSparkData } from '../../data/mockData';

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 120, h = 28, pad = 2;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  const [lx] = points.split(' ').slice(-1)[0].split(',').map(Number);
  const areaPoints = `${pad},${h - pad} ${points} ${lx},${h - pad}`;
  const gradId = `ms-${color.replace('#', '')}`;
  return (
    <svg width={w} height={h} style={{ overflow: 'visible', display: 'block', width: '100%' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradId})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5"
        strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const MOBILE_METRICS = [
  { label: 'Runway',      value: '6.2 mo', color: '#4C5FD5' },
  { label: 'Tax Reserve', value: '$2,100', color: '#D4A800' },
  { label: 'Weekly',      value: '$220',   color: '#27AE60' },
  { label: 'Avg Income',  value: '$7,200', color: '#8B5CF6' },
];

export function MobileDashboardMockup() {
  return (
    // Phone shell
    <Box
      w="260px"
      bg="#eef1fe"
      borderRadius="28px"
      border="6px solid #1C2B3A"
      boxShadow="0 32px 80px rgba(28,43,58,0.35), 0 8px 24px rgba(28,43,58,0.15), inset 0 1px 0 rgba(255,255,255,0.08)"
      overflow="hidden"
      position="relative"
      fontFamily="'DM Sans', sans-serif"
    >
      {/* Phone notch */}
      <Box
        position="absolute" top={0} left="50%" transform="translateX(-50%)"
        w="80px" h="20px" bg="#1C2B3A" borderBottomRadius="12px" zIndex={10}
      />

      {/* Status bar */}
      <Box bg="#1C2B3A" px={4} pt="24px" pb="8px">
        <HStack justify="space-between">
          <Text fontSize="8px" color="rgba(255,255,255,0.5)" fontWeight="600">9:41</Text>
          <HStack spacing={1}>
            <Box w="12px" h="6px" borderRadius="1px" border="1px solid rgba(255,255,255,0.4)"
              position="relative" overflow="hidden">
              <Box position="absolute" left={0} top={0} bottom={0} w="80%" bg="rgba(255,255,255,0.5)" />
            </Box>
            <Text fontSize="7px" color="rgba(255,255,255,0.4)">●●●</Text>
          </HStack>
        </HStack>
      </Box>

      {/* Mobile top nav */}
      <Box bg="#1C2B3A" px={3} py={2} borderBottom="1px solid #253344">
        <HStack justify="space-between" align="center">
          <HStack spacing={1.5}>
            <Box w={4} h={4} flexShrink={0}>
              <svg width="16" height="16" viewBox="0 0 64 64" fill="none">
                <defs>
                  <linearGradient id="mob-lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5D6FE9"/>
                    <stop offset="100%" stopColor="#3B4DC8"/>
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="17" fill="url(#mob-lg)"/>
                <path d="M27 13C38 11 48 15 48 24C48 33 38 35 27 33L27 13Z" fill="white"/>
                <path d="M37 31C26 29 16 31 16 40C16 49 26 53 37 51L37 31Z" fill="white"/>
                <rect x="27" y="29.5" width="10" height="5" fill="white"/>
              </svg>
            </Box>
            <Text fontSize="10px" fontWeight="700" color="white" letterSpacing="-0.2px">
              Spendable
            </Text>
          </HStack>
          {/* Hamburger icon */}
          <VStack spacing="2px">
            {[0,1,2].map(i => (
              <Box key={i} w="12px" h="1.5px" bg="rgba(255,255,255,0.6)" borderRadius="full" />
            ))}
          </VStack>
        </HStack>
      </Box>

      {/* Main content */}
      <Box px={3} py={3} bg="#eef1fe">

        {/* Page header */}
        <HStack justify="space-between" mb={2.5}>
          <Box>
            <Text fontSize="12px" fontWeight="700" color="#1C2B3A" letterSpacing="-0.3px">
              Good morning
            </Text>
            <Text fontSize="7.5px" color="#5a6a7a">Wednesday, March 2026</Text>
          </Box>
          <Box px={2} py={0.5} bg="#4C5FD5" borderRadius="5px">
            <Text fontSize="7.5px" fontWeight="700" color="white">Pro</Text>
          </Box>
        </HStack>

        {/* Hero safe-to-spend card */}
        <Box
          bg="linear-gradient(135deg, #1C2B3A 0%, #253344 100%)"
          borderRadius="10px" p={3} mb={2.5}
          position="relative" overflow="hidden"
        >
          <Box
            position="absolute" inset={0} opacity={0.04}
            backgroundImage="repeating-linear-gradient(0deg, transparent, transparent 14px, white 14px, white 15px), repeating-linear-gradient(90deg, transparent, transparent 14px, white 14px, white 15px)"
          />
          <Box position="absolute" top="-16px" right="-16px" w="72px" h="72px" borderRadius="full"
            bg="radial-gradient(circle, rgba(76,95,213,0.35) 0%, transparent 70%)" />
          <Box position="relative">
            <Text fontSize="7px" fontWeight="700" color="#6b84f5"
              textTransform="uppercase" letterSpacing="0.8px" mb={0.5}>
              Safe to Spend
            </Text>
            <Text fontSize="26px" fontWeight="800" color="white"
              letterSpacing="-1.2px" lineHeight="1" mb={1}
              fontFamily="'Fraunces', Georgia, serif">
              $3,840
            </Text>
            <HStack spacing={1.5}>
              <Box px={1.5} py={0.5} bg="rgba(39,174,96,0.2)" borderRadius="full"
                border="1px solid rgba(39,174,96,0.35)">
                <Text fontSize="7.5px" fontWeight="700" color="#4eca80">● Healthy</Text>
              </Box>
              <Text fontSize="7.5px" color="#8FABBF">After tax + buffer</Text>
            </HStack>
          </Box>
        </Box>

        {/* KPI cards — 2×2 grid */}
        <SimpleGrid columns={2} spacing={1.5} mb={2.5}>
          {MOBILE_METRICS.map(m => (
            <Box key={m.label} bg="white" borderRadius="7px" p={2} border="1px solid #e2e8f0">
              <Text fontSize="6.5px" fontWeight="700" color="#8a9aaa"
                textTransform="uppercase" letterSpacing="0.4px" mb={0.5}>
                {m.label}
              </Text>
              <Text fontSize="12px" fontWeight="700" color="#1C2B3A"
                letterSpacing="-0.5px" lineHeight="1">
                {m.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Income trend card */}
        <Box bg="white" borderRadius="7px" p={2.5} border="1px solid #e2e8f0" mb={2.5}>
          <HStack justify="space-between" mb={1.5}>
            <Text fontSize="8px" fontWeight="600" color="#1C2B3A">Income Trend</Text>
            <Text fontSize="7px" color="#27AE60" fontWeight="700">↑ $7,200 avg</Text>
          </HStack>
          <MiniSparkline data={incomeSparkData} color="#4C5FD5" />
        </Box>

        {/* Balance allocation bar */}
        <Box bg="white" borderRadius="7px" p={2.5} border="1px solid #e2e8f0">
          <Text fontSize="8px" fontWeight="600" color="#1C2B3A" mb={1.5}>Balance Allocation</Text>
          <HStack spacing={0} h="5px" borderRadius="full" overflow="hidden" mb={1.5}>
            {allocationItems.map(item => (
              <Box key={item.label} h="100%" bg={item.color} w={`${item.pct}%`} />
            ))}
          </HStack>
          <VStack spacing={0.5} align="stretch">
            {allocationItems.map(item => (
              <HStack key={item.label} spacing={1}>
                <Box w="5px" h="5px" borderRadius="1px" bg={item.color} flexShrink={0} />
                <Text fontSize="7px" color="#5a6a7a" fontWeight="500" flex={1}>{item.label}</Text>
                <Text fontSize="7px" color="#1C2B3A" fontWeight="700">{item.amount}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

      </Box>

      {/* Phone home bar */}
      <Box bg="#eef1fe" pb={3} pt={1} display="flex" justifyContent="center">
        <Box w="60px" h="3px" bg="#1C2B3A" borderRadius="full" opacity={0.2} />
      </Box>
    </Box>
  );
}
