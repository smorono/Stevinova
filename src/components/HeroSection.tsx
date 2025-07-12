import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faChartLine } from '@fortawesome/free-solid-svg-icons';

const HeroSection: React.FC = () => (
  <Box sx={{
    bgcolor: 'linear-gradient(135deg, #181A20 60%, #23263a 100%)',
    background: 'linear-gradient(135deg, #181A20 60%, #23263a 100%)',
    pt: 10,
    pb: 12,
    borderBottom: '1px solid #23263a',
    color: '#fff',
  }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Stack spacing={3} alignItems="center">
        <Box sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ade8020, #4ade8040)',
          border: '2px solid #4ade8060',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(74, 222, 128, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 12px 40px rgba(74, 222, 128, 0.4)'
          }
        }}>
          <FontAwesomeIcon 
            icon={faStore} 
            size="lg" 
            style={{ 
              color: '#4ade80',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }} 
          />
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: 28, md: 36 }, color: '#fff', mb: 1, lineHeight: 1.15, letterSpacing: 0.5 }}>
          Your Facility's Digital Store
        </Typography>
        <Typography variant="h6" sx={{ color: '#bbb', fontWeight: 400, fontSize: { xs: 16, md: 18 }, mb: 2 }}>
          Stevinova™ transforms your care facility into a digital marketplace. Residents shop independently, families control budgets, and you earn revenue—all without inventory management.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 700, borderRadius: 2, px: 4, boxShadow: 2, bgcolor: '#4ade80', color: '#000', '&:hover': { bgcolor: '#86efac', transform: 'translateY(-2px)' } }}>
            See How It Works
          </Button>
          <Button variant="outlined" color="secondary" size="large" sx={{ fontWeight: 700, borderRadius: 2, px: 4, borderColor: '#4ade80', color: '#4ade80', '&:hover': { borderColor: '#86efac', bgcolor: '#23263a', color: '#86efac' } }}>
            View Pricing
          </Button>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#bbb', fontSize: 15 }}>
            <FontAwesomeIcon 
              icon={faChartLine} 
              style={{ 
                color: '#86efac', 
                marginRight: 8,
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
              }} 
            />
            Increase facility revenue by 15-25% with digital shopping
          </Typography>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default HeroSection; 