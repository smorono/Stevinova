import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUserPlus, faTabletScreenButton, faChartLine } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faBuilding,
    title: 'Facility Signs Up',
    desc: 'Get started in minutes. No IT required. Onboarding support included.',
    color: '#4ade80'
  },
  {
    icon: faUserPlus,
    title: 'Residents & Families Join',
    desc: 'Easily add residents and invite families. Private, secure access for all.',
    color: '#86efac'
  },
  {
    icon: faTabletScreenButton,
    title: 'Engagement Tools Go Live',
    desc: 'Shopping, games, and family connect features are enabled instantly.',
    color: '#bbf7d0'
  },
  {
    icon: faChartLine,
    title: 'Track Results & Grow',
    desc: 'Monitor engagement, revenue, and satisfaction with real-time analytics.',
    color: '#dcfce7'
  },
];

const HowItWorksSection: React.FC = () => (
  <Box id="how-it-works" sx={{ bgcolor: 'background.default', py: 10 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 6, letterSpacing: 0.5 }}>
        How It Works
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
        {steps.map((step, i) => (
          <Box key={i}>
            <Card sx={{ 
              bgcolor: '#23263a', 
              color: '#fff', 
              borderRadius: 4, 
              boxShadow: 3, 
              minHeight: 220, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              p: 2, 
              transition: 'all 0.3s ease',
              '&:hover': { 
                boxShadow: 8,
                transform: 'translateY(-4px)',
                '& .icon-container': {
                  transform: 'scale(1.1)',
                  boxShadow: `0 0 20px ${step.color}40`
                }
              } 
            }}>
              <Avatar sx={{ 
                bgcolor: 'background.paper', 
                width: 64, 
                height: 64, 
                mb: 2, 
                boxShadow: 2,
                background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                border: `2px solid ${step.color}60`,
                transition: 'all 0.3s ease',
                className: 'icon-container'
              }}>
                <FontAwesomeIcon 
                  icon={step.icon} 
                  size="lg" 
                  style={{ 
                    color: step.color,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }} 
                />
              </Avatar>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#fff', fontSize: 18 }}>{step.title}</Typography>
                <Typography variant="body2" sx={{ color: '#bbb', fontSize: 15 }}>{step.desc}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default HowItWorksSection; 