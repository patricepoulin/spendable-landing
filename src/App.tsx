import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LandingPage from './LandingPage';

const theme = extendTheme({
  fonts: {
    heading: `'Fraunces', Georgia, serif`,
    body: `'DM Sans', -apple-system, sans-serif`,
  },
  colors: {
    brand: {
      50: '#eef0fb', 100: '#d5d9f5', 200: '#adb4ec',
      300: '#8590e2', 400: '#6270d9', 500: '#4C5FD5',
      600: '#3D4FBF', 700: '#2e3d99', 800: '#222e72', 900: '#16204c',
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: '#F5F4EF',
        color: '#1C2B3A',
        '-webkit-font-smoothing': 'antialiased',
        scrollBehavior: 'smooth',
      },
      '::selection': {
        bg: '#4C5FD5',
        color: 'white',
      },
    },
  },
  components: {
    Button: { baseStyle: { fontWeight: '600', borderRadius: '8px' } },
    Input: { defaultProps: { focusBorderColor: 'brand.500' } },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage />
    </ChakraProvider>
  );
}
