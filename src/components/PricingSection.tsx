import React from 'react';
import { Box, Typography, Card, CardContent, Button, Chip, Avatar, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar, faCrown } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    name: 'Starter Facility',
    price: '$99/mo',
    features: ['LifeCart™', 'Family Connect'],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCheckCircle} size="lg" style={{ color: '#4ade80' }} />,
    color: '#4ade80'
  },
  {
    name: 'Premium Facility',
    price: '$179/mo',
    features: ['All features', '5 Multiplayer Games', 'Virtual Pet Companion'],
    highlight: true,
    icon: <FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#86efac' }} />,
    color: '#86efac'
  },
  {
    name: 'Full Access Partner',
    price: '$249/mo',
    features: ['Unlimited access', 'Early access to updates', 'All games & features'],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCrown} size="lg" style={{ color: '#bbf7d0' }} />,
    color: '#bbf7d0'
  },
];

const PricingSection: React.FC = () => (
  <Box id="pricing" sx={{ bgcolor: 'background.default', py: 10 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 6, letterSpacing: 0.5 }}>
        Simple, Transparent Pricing
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, justifyContent: 'center' }}>
        {plans.map((plan, i) => (
          <Box key={i}>
            <Card sx={{
              bgcolor: plan.highlight ? '#23263a' : '#1c1e26',
              color: '#fff',
              borderRadius: 4,
              boxShadow: plan.highlight ? 8 : 3,
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              border: plan.highlight ? `2px solid ${plan.color}` : undefined,
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:hover': { 
                boxShadow: 12,
                transform: 'translateY(-4px)',
                '& .icon-container': {
                  transform: 'scale(1.1)',
                  boxShadow: `0 0 20px ${plan.color}40`
                }
              },
            }}>
              {plan.highlight && (
                <Chip
                  label="Best Value"
                  color="success"
                  icon={<FontAwesomeIcon icon={faStar} style={{ color: '#fff' }} />}
                  sx={{ position: 'absolute', top: 18, right: 18, fontWeight: 700 }}
                />
              )}
              <Avatar sx={{ 
                bgcolor: 'background.paper', 
                width: 64, 
                height: 64, 
                mb: 2, 
                boxShadow: 2,
                background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}40)`,
                border: `2px solid ${plan.color}60`,
                transition: 'all 0.3s ease',
                className: 'icon-container'
              }}>
                {plan.icon}
              </Avatar>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#fff', fontSize: 20 }}>{plan.name}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: plan.color, fontSize: 28 }}>{plan.price}</Typography>
                <Box sx={{ mb: 3 }}>
                  {plan.features.map((feature, j) => (
                    <Typography key={j} variant="body2" sx={{ color: '#bbb', fontSize: 15, mb: 1 }}>
                      ✓ {feature}
                    </Typography>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    fontWeight: 700, 
                    borderRadius: 2, 
                    px: 4, 
                    boxShadow: 2, 
                    bgcolor: plan.color, 
                    color: '#000', 
                    '&:hover': { 
                      bgcolor: plan.color,
                      filter: 'brightness(1.1)',
                      transform: 'translateY(-2px)'
                    } 
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default PricingSection; 