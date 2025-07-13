import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container, Chip, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faTruck, faStore, faCreditCard, faBox, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const productCategories = [
  { name: 'Personal Care', items: 45, icon: faStore, section: 'features' },
  { name: 'Snacks & Drinks', items: 32, icon: faStore, section: 'features' },
  { name: 'Clothing', items: 28, icon: faStore, section: 'features' },
  { name: 'Electronics', items: 15, icon: faStore, section: 'features' },
];

const walletFeatures = [
  { feature: 'Set monthly budgets', icon: faCreditCard },
  { feature: 'Real-time spending alerts', icon: faWallet },
  { feature: 'Purchase approval workflow', icon: faCheckCircle },
  { feature: 'Secure payment processing', icon: faCreditCard },
];

const deliveryOptions = [
  { service: 'Instacart', desc: 'Local groceries & essentials', time: 'Same day', icon: faTruck, section: 'how-it-works' },
  { service: 'Amazon', desc: 'Everything else', time: '1-2 days', icon: faBox, section: 'how-it-works' },
];

const ShoppingShowcase: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box id="shopping" sx={{ bgcolor: '#1c1e26', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 8, letterSpacing: 0.5 }}>
          Complete Shopping Solution
        </Typography>

        {/* Product Catalog Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Facility Product Catalog
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 3 
          }}>
            {productCategories.map((category, i) => (
              <Card key={i} sx={{ 
                bgcolor: '#23263a', 
                color: '#fff', 
                borderRadius: 3, 
                boxShadow: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                  bgcolor: '#2a2d3a'
                }
              }} onClick={() => {
                if (category.name === 'Personal Care') {
                  navigate('/shop');
                } else {
                  scrollToSection(category.section);
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar sx={{ 
                    bgcolor: 'background.paper', 
                    width: 48, 
                    height: 48, 
                    mb: 2, 
                    mx: 'auto',
                    background: 'linear-gradient(135deg, #4ade8020, #4ade8040)',
                    border: '2px solid #4ade8060'
                  }}>
                    <FontAwesomeIcon icon={category.icon} style={{ color: '#4ade80' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{category.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#bbb' }}>{category.items} items</Typography>
                  <Typography variant="caption" sx={{ color: '#4ade80', mt: 1, display: 'block' }}>
                    Click to learn more →
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Wallet System Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" sx={{ color: '#86efac', fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Family Wallet System
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 3 
          }}>
            <Card sx={{ 
              bgcolor: '#23263a', 
              color: '#fff', 
              borderRadius: 3, 
              boxShadow: 2,
              height: '100%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { 
                transform: 'translateY(-4px)',
                boxShadow: 4,
                bgcolor: '#2a2d3a'
              }
            }} onClick={() => scrollToSection('features')}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#86efac' }}>
                  Budget Control & Monitoring
                </Typography>
                <Box>
                  {walletFeatures.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        style={{ color: '#86efac', marginRight: 12, width: 16 }} 
                      />
                      <Typography variant="body2" sx={{ color: '#bbb' }}>{item.feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Typography variant="caption" sx={{ color: '#86efac', mt: 2, display: 'block' }}>
                  Click to see features →
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ 
              bgcolor: '#23263a', 
              color: '#fff', 
              borderRadius: 3, 
              boxShadow: 2,
              height: '100%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { 
                transform: 'translateY(-4px)',
                boxShadow: 4,
                bgcolor: '#2a2d3a'
              }
            }} onClick={() => scrollToSection('pricing')}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#86efac' }}>
                  Sample Wallet Dashboard
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Monthly Budget</Typography>
                  <Typography variant="h4" sx={{ color: '#86efac', fontWeight: 700 }}>$500</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Spent This Month</Typography>
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>$127.50</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Remaining</Typography>
                  <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700 }}>$372.50</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#86efac', mt: 2, display: 'block' }}>
                  Click to see pricing →
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Delivery Options Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Flexible Delivery Options
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 4 
          }}>
            {deliveryOptions.map((option, i) => (
              <Card key={i} sx={{ 
                bgcolor: '#23263a', 
                color: '#fff', 
                borderRadius: 3, 
                boxShadow: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                  bgcolor: '#2a2d3a'
                }
              }} onClick={() => scrollToSection(option.section)}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar sx={{ 
                    bgcolor: 'background.paper', 
                    width: 64, 
                    height: 64, 
                    mb: 3, 
                    mx: 'auto',
                    background: 'linear-gradient(135deg, #bbf7d020, #bbf7d040)',
                    border: '2px solid #bbf7d060'
                  }}>
                    <FontAwesomeIcon icon={option.icon} size="lg" style={{ color: '#bbf7d0' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{option.service}</Typography>
                  <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>{option.desc}</Typography>
                  <Chip 
                    label={option.time} 
                    sx={{ 
                      bgcolor: '#bbf7d020', 
                      color: '#bbf7d0', 
                      border: '1px solid #bbf7d060',
                      fontWeight: 600
                    }} 
                  />
                  <Typography variant="caption" sx={{ color: '#bbf7d0', mt: 2, display: 'block' }}>
                    Click to see how it works →
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
            Ready to transform your facility's shopping experience?
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              fontWeight: 700, 
              borderRadius: 2, 
              px: 4, 
              py: 1.5,
              boxShadow: 2, 
              bgcolor: '#4ade80', 
              color: '#000', 
              '&:hover': { 
                bgcolor: '#86efac', 
                transform: 'translateY(-2px)',
                boxShadow: 4
              } 
            }}
            onClick={() => scrollToSection('pricing')}
          >
            Start Your Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ShoppingShowcase; 