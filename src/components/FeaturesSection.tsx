import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faWallet, 
  faTruck, 
  faStore, 
  faGamepad, 
  faUsers, 
  faBrain, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faStore,
    title: 'Smart Shopping',
    desc: 'Complete product catalog with facility-branded shopping experience. Residents browse and select items through intuitive tablet interface.',
    color: '#4ade80',
    sectionId: 'shopping-showcase',
    benefits: ['Revenue Generation', 'Resident Independence', 'No Inventory Management']
  },
  {
    icon: faWallet,
    title: 'Family Wallet',
    desc: 'Families control spending with digital wallets. Set budgets, monitor purchases, and manage funds securely for their loved ones.',
    color: '#86efac',
    sectionId: 'shopping-showcase',
    benefits: ['Budget Control', 'Secure Transactions', 'Family Oversight']
  },
  {
    icon: faTruck,
    title: 'Flexible Delivery',
    desc: 'Instacart for local items, Amazon for everything else. Facility verifies and distributes orders. No inventory management needed.',
    color: '#bbf7d0',
    sectionId: 'shopping-showcase',
    benefits: ['Multiple Options', 'No Storage Needed', 'Reliable Delivery']
  },
  {
    icon: faGamepad,
    title: 'Senior Games Lounge',
    desc: 'Cognitive games designed specifically for seniors. Memory training, puzzle solving, and social gaming to keep minds active.',
    color: '#dcfce7',
    sectionId: 'games-section',
    benefits: ['Cognitive Health', 'Social Engagement', 'Entertainment']
  },
  {
    icon: faBrain,
    title: 'Memory Training',
    desc: 'Specialized games and activities to improve memory, attention, and cognitive function. Track progress over time.',
    color: '#fef3c7',
    sectionId: 'games-section',
    benefits: ['Memory Improvement', 'Progress Tracking', 'Brain Health']
  },
  {
    icon: faUsers,
    title: 'Family Connection',
    desc: 'Video chat, photo sharing, and family updates. Keep families connected and involved in their loved ones daily life.',
    color: '#fecaca',
    sectionId: 'family-engagement',
    benefits: ['Video Chat', 'Photo Sharing', 'Family Updates']
  },
  {
    icon: faHeart,
    title: 'Caregiver Tools',
    desc: 'Medical reminders, health monitoring, and communication tools for caregivers to provide better care.',
    color: '#fbbf24',
    sectionId: 'family-engagement',
    benefits: ['Medical Reminders', 'Health Monitoring', 'Care Coordination']
  },
  {
    icon: faShoppingCart,
    title: 'Independent Shopping',
    desc: 'Residents shop independently or with caregiver assistance. Easy-to-use interface with large buttons and clear product images.',
    color: '#a78bfa',
    sectionId: 'shopping-showcase',
    benefits: ['User-Friendly', 'Accessibility', 'Independence']
  },
];

const FeaturesSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box id="features" sx={{ bgcolor: 'background.default', py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ 
          color: '#fff', 
          fontWeight: 800, 
          mb: 2, 
          letterSpacing: 0.5,
          fontSize: { xs: '2rem', md: '3rem' }
        }}>
          Complete LifeCart Experience
        </Typography>
        <Typography variant="h6" align="center" sx={{ 
          color: '#bbb', 
          mb: 8, 
          maxWidth: 800, 
          mx: 'auto',
          fontSize: { xs: '1rem', md: '1.25rem' }
        }}>
          Everything your facility needs to enhance resident care, generate revenue, and keep families connected
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          }, 
          gap: 4 
        }}>
          {features.map((feature, i) => (
            <Box key={i}>
              <Card sx={{ 
                bgcolor: '#23263a', 
                color: '#fff', 
                borderRadius: 4, 
                boxShadow: 3, 
                minHeight: 320, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                p: 3, 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': { 
                  boxShadow: 8,
                  transform: 'translateY(-8px)',
                  '& .icon-container': {
                    transform: 'scale(1.1)',
                    boxShadow: `0 0 30px ${feature.color}60`
                  },
                  '& .feature-overlay': {
                    opacity: 1
                  }
                } 
              }}
              onClick={() => scrollToSection(feature.sectionId)}
              >
                {/* Hover overlay */}
                <Box className="feature-overlay" sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <Typography variant="h6" sx={{ 
                    color: '#fff', 
                    fontWeight: 700,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Learn More
                  </Typography>
                </Box>

                <Avatar sx={{ 
                  bgcolor: 'background.paper', 
                  width: 80, 
                  height: 80, 
                  mb: 3, 
                  boxShadow: 3,
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  border: `3px solid ${feature.color}60`,
                  transition: 'all 0.3s ease',
                  className: 'icon-container',
                  zIndex: 2
                }}>
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    size="2x" 
                    style={{ 
                      color: feature.color,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }} 
                  />
                </Avatar>
                
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', zIndex: 2 }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700, 
                    mb: 2, 
                    color: '#fff', 
                    fontSize: 20,
                    lineHeight: 1.2
                  }}>
                    {feature.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ 
                    color: '#bbb', 
                    fontSize: 14,
                    mb: 3,
                    lineHeight: 1.5
                  }}>
                    {feature.desc}
                  </Typography>

                  {/* Benefits list */}
                  <Box sx={{ textAlign: 'left' }}>
                    {feature.benefits.map((benefit, idx) => (
                      <Box key={idx} sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1,
                        fontSize: 12
                      }}>
                        <Box sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: feature.color,
                          mr: 1,
                          flexShrink: 0
                        }} />
                        <Typography variant="caption" sx={{ 
                          color: '#ddd',
                          fontSize: 12,
                          fontWeight: 500
                        }}>
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Call to action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ 
            color: '#fff', 
            fontWeight: 700, 
            mb: 3 
          }}>
            Ready to Transform Your Facility?
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => scrollToSection('pricing')}
            sx={{
              bgcolor: '#4ade80',
              color: '#000',
              fontWeight: 700,
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: 3,
              '&:hover': {
                bgcolor: '#22c55e',
                boxShadow: 6,
                transform: 'translateY(-2px)'
              }
            }}
          >
            View Pricing & Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 