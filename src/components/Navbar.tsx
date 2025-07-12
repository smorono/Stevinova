import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove, faLightbulb, faBrain, faStar } from '@fortawesome/free-solid-svg-icons';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Navbar: React.FC = () => (
  <AppBar position="sticky" elevation={2} sx={{ bgcolor: '#181A20', color: '#fff', minHeight: 56 }}>
    <Toolbar sx={{ maxWidth: 1300, mx: 'auto', width: '100%', minHeight: 56, px: { xs: 1, md: 2 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Box sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ade8020, #4ade8040)',
          border: '2px solid #4ade8060',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 2,
          boxShadow: '0 4px 16px rgba(74, 222, 128, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 20px rgba(74, 222, 128, 0.4)'
          }
        }}>
          <FontAwesomeIcon 
            icon={faDove} 
            size="lg" 
            style={{ 
              color: '#4ade80',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
            }} 
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: 1, 
              fontSize: 20, 
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#4ade80',
                transform: 'scale(1.05)'
              }
            }}
            onClick={scrollToTop}
          >
            Stevinova<span style={{ fontWeight: 400, fontSize: 14, marginLeft: 2, color: '#bbb' }}>™</span>
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#4ade80', 
              fontSize: 11, 
              fontWeight: 500, 
              letterSpacing: 0.5,
              lineHeight: 1,
              mt: -0.5
            }}
          >
            Freedom • Choice • Quality of Life
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('features')}>Features</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('shopping')}>Shopping</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('games')}>Games</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('family')}>Family</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('entertainment-channel')}>Entertainment</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('kindpaws')}>KindPaws™</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('pricing')}>Pricing</Button>
        <Button color="inherit" sx={{ fontWeight: 500, fontSize: 15, textTransform: 'none', color: '#fff', px: 1 }} onClick={() => scrollToSection('how-it-works')}>How It Works</Button>
        <Button variant="contained" color="secondary" sx={{ fontWeight: 700, fontSize: 15, borderRadius: 2, ml: 2, px: 3, boxShadow: 2, bgcolor: '#4ade80', color: '#000', '&:hover': { bgcolor: '#86efac', transform: 'translateY(-2px)' } }}>
          Request Demo
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar; 