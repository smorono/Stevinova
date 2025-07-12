import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ShoppingShowcase from './components/ShoppingShowcase';
import GamesSection from './components/GamesSection';
import FamilyEngagementCenter from './components/FamilyEngagementCenter';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7e29ff',
    },
    secondary: {
      main: '#29ff7e',
    },
    background: {
      default: '#181A20',
      paper: '#23263a',
    },
    text: {
      primary: '#fff',
      secondary: '#bbb',
    },
  },
  typography: {
    fontFamily: 'Inter, Open Sans, Roboto, Arial, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 700, fontSize: '1.1rem' },
  },
  shape: {
    borderRadius: 18,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ShoppingShowcase />
      <GamesSection />
      <FamilyEngagementCenter />
      <PricingSection />
      <HowItWorksSection />
      {/* Add more sections here as you refactor them to the new style */}
      <Box sx={{ minHeight: '20vh', bgcolor: 'background.default' }} />
    </ThemeProvider>
  );
}

export default App;
