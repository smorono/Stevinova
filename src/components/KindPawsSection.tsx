import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button, 
  Avatar,
  Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faPaw, 
  faSmile, 
  faPlay,
  faTimes,
  faStar,
  faUsers,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import KindPawsPetWidget from './KindPawsPetWidget';

const KindPawsSection: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  const benefits = [
    {
      icon: faHeart,
      title: 'Emotional Support',
      description: 'Provides companionship and emotional comfort without the responsibilities of a real pet'
    },
    {
      icon: faSmile,
      title: 'Daily Engagement',
      description: 'Encourages daily interaction and routine through feeding, petting, and care activities'
    },
    {
      icon: faUsers,
      title: 'Social Connection',
      description: 'Creates conversation starters and shared experiences among residents'
    },
    {
      icon: faHome,
      title: 'Safe & Clean',
      description: 'No mess, no allergies, no noise - just pure companionship and joy'
    }
  ];

  const petTypes = [
    { type: 'dog', emoji: '🐕', name: 'Dogs', description: 'Loyal and playful companions' },
    { type: 'cat', emoji: '🐱', name: 'Cats', description: 'Gentle and independent friends' },
    { type: 'bird', emoji: '🦜', name: 'Birds', description: 'Cheerful and musical pets' },
    { type: 'fantasy', emoji: '🐉', name: 'Fantasy', description: 'Magical and unique creatures' }
  ];

  return (
    <Box id="kindpaws" sx={{ bgcolor: 'background.default', py: 12 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ 
            color: '#fff', 
            fontWeight: 800, 
            mb: 3,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            KindPaws™ by Stevinova
          </Typography>
          <Typography variant="h5" sx={{ 
            color: '#4ade80', 
            mb: 3,
            fontStyle: 'italic',
            fontWeight: 600
          }}>
            Technology with a heartbeat
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#bbb', 
            maxWidth: 800, 
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            lineHeight: 1.6
          }}>
            Designed to brighten each day with warmth, routine, and playful interaction.
          </Typography>
        </Box>

        {/* Main Content */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, 
          gap: 6, 
          alignItems: 'center',
          mb: 8
        }}>
          {/* Left Side - Description */}
          <Box>
            <Typography variant="h4" sx={{ 
              color: '#fff', 
              fontWeight: 700, 
              mb: 3 
            }}>
              Digital Companionship That Feels Real
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#bbb', 
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}>
              Bring the emotional benefits of pet ownership into the digital world. KindPaws™ gives every resident a chance to bond with a loving virtual friend—without the noise, mess, or stress. From soft barks to encouraging nudges, KindPaws™ fosters joy, comfort, and connection in daily life.
            </Typography>

            {/* Benefits Grid */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, 
              gap: 3,
              mb: 4
            }}>
              {benefits.map((benefit, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 2 
                }}>
                  <Avatar sx={{ 
                    bgcolor: '#4ade80', 
                    width: 40, 
                    height: 40,
                    mt: 0.5
                  }}>
                    <FontAwesomeIcon icon={benefit.icon} style={{ color: '#000' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ 
                      color: '#fff', 
                      fontWeight: 600, 
                      mb: 1 
                    }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => setShowDemo(true)}
                sx={{
                  bgcolor: '#4ade80',
                  color: '#000',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': { bgcolor: '#22c55e' }
                }}
              >
                <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />
                See It in Action
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#4ade80',
                  color: '#4ade80',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': { 
                    borderColor: '#22c55e',
                    color: '#22c55e',
                    bgcolor: 'rgba(74, 222, 128, 0.1)'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>

          {/* Right Side - Pet Showcase */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 4
          }}>
            {/* Main Pet Display */}
            <Card sx={{ 
              bgcolor: '#23263a', 
              color: '#fff', 
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 8,
              maxWidth: 350,
              width: '100%'
            }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar sx={{ 
                  width: 100, 
                  height: 100, 
                  fontSize: 50,
                  bgcolor: '#4ade80',
                  mb: 3,
                  mx: 'auto'
                }}>
                  🐕
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Meet Buddy
                </Typography>
                <Typography variant="body1" sx={{ color: '#bbb', mb: 3 }}>
                  A loyal companion ready to bring joy to your day
                </Typography>
                <Chip 
                  label="Happy & Content" 
                  sx={{ 
                    bgcolor: '#4ade80', 
                    color: '#000',
                    fontWeight: 600
                  }} 
                />
              </CardContent>
            </Card>

            {/* Pet Types */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: 2,
              width: '100%',
              maxWidth: 350
            }}>
              {petTypes.map((pet, index) => (
                <Card key={index} sx={{ 
                  bgcolor: '#1a1b2e', 
                  color: '#fff', 
                  borderRadius: 2,
                  textAlign: 'center',
                  p: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    bgcolor: '#23263a'
                  }
                }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {pet.emoji}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 600, 
                    fontSize: '0.8rem' 
                  }}>
                    {pet.name}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Features Highlight */}
        <Box sx={{ 
          bgcolor: '#23263a', 
          borderRadius: 4, 
          p: 4, 
          textAlign: 'center' 
        }}>
          <Typography variant="h4" sx={{ 
            color: '#fff', 
            fontWeight: 700, 
            mb: 3 
          }}>
            Simple Interactions, Big Impact
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 4 
          }}>
            <Box>
              <Avatar sx={{ 
                bgcolor: '#fbbf24', 
                width: 60, 
                height: 60, 
                mx: 'auto',
                mb: 2
              }}>
                <FontAwesomeIcon icon={faPaw} size="lg" style={{ color: '#000' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Feed & Care
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Simple touch interactions to feed and care for your virtual pet
              </Typography>
            </Box>
            <Box>
              <Avatar sx={{ 
                bgcolor: '#ec4899', 
                width: 60, 
                height: 60, 
                mx: 'auto',
                mb: 2
              }}>
                <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: '#fff' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Emotional Bond
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Build a meaningful relationship with your digital companion
              </Typography>
            </Box>
            <Box>
              <Avatar sx={{ 
                bgcolor: '#8b5cf6', 
                width: 60, 
                height: 60, 
                mx: 'auto',
                mb: 2
              }}>
                <FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#fff' }} />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                Daily Routine
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Encourages healthy daily habits and engagement patterns
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Demo Dialog */}
      <Dialog 
        open={showDemo} 
        onClose={() => setShowDemo(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ 
          bgcolor: '#23263a', 
          color: '#fff',
          borderBottom: '1px solid #444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            KindPaws™ Demo
          </Typography>
          <IconButton
            onClick={() => setShowDemo(false)}
            sx={{ color: '#bbb' }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ 
          bgcolor: '#23263a', 
          color: '#fff',
          p: 4,
          textAlign: 'center'
        }}>
          <Typography variant="body1" sx={{ color: '#bbb', mb: 4 }}>
            Experience the joy of virtual pet companionship. Try interacting with your KindPaws™ pet!
          </Typography>
          <KindPawsPetWidget />
        </DialogContent>
        <DialogActions sx={{ 
          bgcolor: '#23263a', 
          borderTop: '1px solid #444',
          p: 3
        }}>
          <Button 
            onClick={() => setShowDemo(false)}
            sx={{ 
              color: '#4ade80',
              fontWeight: 600
            }}
          >
            Close Demo
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default KindPawsSection; 