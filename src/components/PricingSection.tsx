import React from 'react';
import { Box, Typography, Card, CardContent, Button, Chip, Avatar, Container, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar, faCrown, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    name: 'Starter Suite',
    price: '$299/mo',
    features: [
      'Smart Shopping System',
      'Family Wallet & Connect',
      'Basic Games (3 titles)',
      'Email Support',
      'Up to 50 residents'
    ],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCheckCircle} size="lg" style={{ color: '#4ade80' }} />,
    color: '#4ade80'
  },
  {
    name: 'Premium Suite',
    price: '$599/mo',
    features: [
      'Everything in Starter',
      'Senior Games Lounge (10+ games)',
      'KindPaws® Virtual Pet',
      'Advanced Family Tools',
      'Priority Support',
      'Up to 150 residents'
    ],
    highlight: true,
    icon: <FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#86efac' }} />,
    color: '#86efac'
  },
  {
    name: 'Enterprise Suite',
    price: '$999/mo',
    features: [
      'Everything in Premium',
      'Entertainment Channel',
      'Custom Branding',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'Unlimited residents'
    ],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCrown} size="lg" style={{ color: '#bbf7d0' }} />,
    color: '#bbf7d0'
  },
];

const hardwareAddOn = {
  name: 'Entertainment Channel Hardware',
  price: '$1,299',
  oneTime: true,
  features: [
    'Raspberry Pi 4 Computer',
    'Samsung 1TB SSD',
    'Pre-configured software',
    'Installation support',
    '1-year hardware warranty'
  ],
  color: '#f97316'
};

const PricingSection: React.FC = () => (
  <Box id="pricing" sx={{ bgcolor: 'background.default', py: 10 }}>
    <Container maxWidth="lg">
      {/* Pricing Icon */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Tooltip title="Back to Features section" arrow>
          <div 
            onClick={() => {
              const element = document.getElementById('features');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            style={{ 
              display: 'inline-flex', 
              background: 'linear-gradient(135deg, #4ade8020, #4ade8040)', 
              border: '3px solid #4ade8060', 
              borderRadius: '50%', 
              width: 80, 
              height: 80, 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: 16,
              boxShadow: '0 4px 12px rgba(74, 222, 128, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 222, 128, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 222, 128, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faDollarSign} 
              size="2x" 
              style={{ 
                color: '#4ade80',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
      
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 6, letterSpacing: 0.5 }}>
        Simple, Transparent Pricing
      </Typography>
      
      {/* Main Plans */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, justifyContent: 'center', mb: 8 }}>
        {plans.map((plan, i) => (
          <Box key={i}>
            <Card sx={{
              bgcolor: plan.highlight ? '#23263a' : '#1c1e26',
              color: '#fff',
              borderRadius: 4,
              boxShadow: plan.highlight ? 8 : 3,
              minHeight: 380,
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

      {/* Hardware Add-On */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
          Hardware Add-On
        </Typography>
        <Typography variant="body1" sx={{ color: '#bbb', mb: 4, maxWidth: 600, mx: 'auto' }}>
          Enhance your facility with our Entertainment Channel hardware bundle. 
          Perfect for facilities wanting to provide a custom media experience.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{
          bgcolor: '#1c1e26',
          color: '#fff',
          borderRadius: 4,
          boxShadow: 8,
          minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          border: `2px solid ${hardwareAddOn.color}`,
          position: 'relative',
          transition: 'all 0.3s ease',
          maxWidth: 400,
          width: '100%',
          '&:hover': { 
            boxShadow: 12,
            transform: 'translateY(-4px)',
            '& .icon-container': {
              transform: 'scale(1.1)',
              boxShadow: `0 0 20px ${hardwareAddOn.color}40`
            }
          },
        }}>
          <Chip
            label="Hardware Bundle"
            sx={{ 
              position: 'absolute', 
              top: 18, 
              right: 18, 
              fontWeight: 700,
              bgcolor: hardwareAddOn.color,
              color: '#000'
            }}
          />
          <Avatar sx={{ 
            bgcolor: 'background.paper', 
            width: 64, 
            height: 64, 
            mb: 2, 
            boxShadow: 2,
            background: `linear-gradient(135deg, ${hardwareAddOn.color}20, ${hardwareAddOn.color}40)`,
            border: `2px solid ${hardwareAddOn.color}60`,
            transition: 'all 0.3s ease',
            className: 'icon-container'
          }}>
            <FontAwesomeIcon icon={faStar} size="lg" style={{ color: hardwareAddOn.color }} />
          </Avatar>
          <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#fff', fontSize: 20 }}>
              {hardwareAddOn.name}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: hardwareAddOn.color, fontSize: 28 }}>
              {hardwareAddOn.price}
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 3, fontStyle: 'italic' }}>
              One-time purchase
            </Typography>
            <Box sx={{ mb: 3 }}>
              {hardwareAddOn.features.map((feature, j) => (
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
                bgcolor: hardwareAddOn.color, 
                color: '#000', 
                '&:hover': { 
                  bgcolor: hardwareAddOn.color,
                  filter: 'brightness(1.1)',
                  transform: 'translateY(-2px)'
                } 
              }}
            >
              Order Hardware
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  </Box>
);

export default PricingSection; 