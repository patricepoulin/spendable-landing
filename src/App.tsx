import { lazy, Suspense } from 'react';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

// ─── Lazy-load SEO pages — zero impact on landing page bundle ─────────────────
const GuidesIndex           = lazy(() => import('./pages/guides/index'));
const FreelanceTaxPlanning  = lazy(() => import('./pages/guides/freelance-tax-planning'));
const SelfEmployedBudgeting = lazy(() => import('./pages/guides/self-employed-budgeting'));
const IncomeSmoothing       = lazy(() => import('./pages/guides/freelance-income-smoothing'));
const EmergencyFund         = lazy(() => import('./pages/guides/freelance-emergency-fund'));
const SelfEmployedTaxUk     = lazy(() => import('./pages/guides/self-employed-tax-uk'));
const HowMuchToSave         = lazy(() => import('./pages/guides/how-much-to-save-for-taxes'));
const FreelanceCashFlow     = lazy(() => import('./pages/guides/freelance-cash-flow'));
const IrregularIncome       = lazy(() => import('./pages/guides/irregular-income-budgeting'));
const ForUkFreelancers      = lazy(() => import('./pages/for/uk-freelancers'));
const ForUsFreelancers      = lazy(() => import('./pages/for/us-freelancers'));
const ForContractors        = lazy(() => import('./pages/for/contractors'));
const ForDesigners          = lazy(() => import('./pages/for/designers'));
const SpreadsheetVsApp      = lazy(() => import('./pages/compare/spendable-vs-spreadsheet'));
const SpendableVsYnab       = lazy(() => import('./pages/compare/spendable-vs-ynab'));
const SpendableVsQuickbooks = lazy(() => import('./pages/compare/spendable-vs-quickbooks'));

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
        WebkitFontSmoothing: 'antialiased',
        scrollBehavior: 'smooth',
      },
      '::selection': { bg: '#4C5FD5', color: 'white' },
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
      <BrowserRouter>
        <Suspense fallback={<Box minH="100vh" bg="#F5F4EF" />}>
          <Routes>
            <Route path="/"                                             element={<LandingPage />} />
            <Route path="/guides"                                       element={<GuidesIndex />} />
            <Route path="/guides/freelance-tax-planning"                element={<FreelanceTaxPlanning />} />
            <Route path="/guides/self-employed-budgeting"               element={<SelfEmployedBudgeting />} />
            <Route path="/guides/freelance-income-smoothing"            element={<IncomeSmoothing />} />
            <Route path="/guides/freelance-emergency-fund"              element={<EmergencyFund />} />
            <Route path="/guides/self-employed-tax-uk"                  element={<SelfEmployedTaxUk />} />
            <Route path="/guides/how-much-to-save-for-taxes"            element={<HowMuchToSave />} />
            <Route path="/guides/freelance-cash-flow"                   element={<FreelanceCashFlow />} />
            <Route path="/guides/irregular-income-budgeting"            element={<IrregularIncome />} />
            <Route path="/for/uk-freelancers"                           element={<ForUkFreelancers />} />
            <Route path="/for/us-freelancers"                           element={<ForUsFreelancers />} />
            <Route path="/for/contractors"                              element={<ForContractors />} />
            <Route path="/for/designers"                                element={<ForDesigners />} />
            <Route path="/compare/freelance-finance-spreadsheet-vs-app" element={<SpreadsheetVsApp />} />
            <Route path="/compare/spendable-vs-ynab"                    element={<SpendableVsYnab />} />
            <Route path="/compare/spendable-vs-quickbooks"              element={<SpendableVsQuickbooks />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  );
}
