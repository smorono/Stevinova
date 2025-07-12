import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container, Chip, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faUsers, faTrophy, faHeart, faLightbulb, faGamepad, faBrain } from '@fortawesome/free-solid-svg-icons';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const games = [
  { name: 'Multiplayer Bingo', icon: faUsers, players: '2-20', difficulty: 'Easy', color: '#4ade80' },
  { name: 'Daily Crossword', icon: faPuzzlePiece, players: '1-4', difficulty: 'Medium', color: '#86efac' },
  { name: 'Memory Match', icon: faBrain, players: '1-2', difficulty: 'Easy', color: '#bbf7d0' },
  { name: 'Virtual Bowling', icon: faTrophy, players: '1-8', difficulty: 'Easy', color: '#dcfce7' },
  { name: 'Trivia Battles', icon: faLightbulb, players: '2-12', difficulty: 'Medium', color: '#4ade80' },
  { name: 'Word Hunt', icon: faGamepad, players: '1-6', difficulty: 'Easy', color: '#86efac' },
];

const accessibilityFeatures = [
  { feature: 'Large buttons & high contrast UI', icon: faHeart },
  { feature: 'Calming pastel color palette', icon: faHeart },
  { feature: 'No fast motions or flashing', icon: faHeart },
  { feature: 'Customizable difficulty levels', icon: faHeart },
  { feature: 'Optional caregiver assistance mode', icon: faHeart },
  { feature: 'Social leaderboards & rewards', icon: faHeart },
];

const GamesSection: React.FC = () => (
  <Box id="games" sx={{ bgcolor: 'background.default', py: 10 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 6, letterSpacing: 0.5 }}>
        Senior Games Lounge
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: '#bbb', mb: 8, maxWidth: 800, mx: 'auto' }}>
        Bright, accessible games designed specifically for seniors. Boost cognitive health, social engagement, and daily joy.
      </Typography>

      {/* Games Grid */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Featured Games
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
          gap: 3 
        }}>
          {games.map((game, i) => (
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
            }} onClick={() => scrollToSection('features')}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar sx={{ 
                  bgcolor: 'background.paper', 
                  width: 56, 
                  height: 56, 
                  mb: 2, 
                  mx: 'auto',
                  background: `linear-gradient(135deg, ${game.color}20, ${game.color}40)`,
                  border: `2px solid ${game.color}60`
                }}>
                  <FontAwesomeIcon icon={game.icon} style={{ color: game.color }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{game.name}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                  <Chip 
                    label={game.players} 
                    size="small"
                    sx={{ 
                      bgcolor: `${game.color}20`, 
                      color: game.color, 
                      border: `1px solid ${game.color}60`,
                      fontSize: '0.7rem'
                    }} 
                  />
                  <Chip 
                    label={game.difficulty} 
                    size="small"
                    sx={{ 
                      bgcolor: `${game.color}20`, 
                      color: game.color, 
                      border: `1px solid ${game.color}60`,
                      fontSize: '0.7rem'
                    }} 
                  />
                </Box>
                <Typography variant="caption" sx={{ color: game.color, display: 'block' }}>
                  Click to learn more →
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Accessibility Features */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ color: '#86efac', fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Accessibility & Fun for All
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
            height: '100%'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#86efac' }}>
                Designed for Seniors
              </Typography>
              <Box>
                {accessibilityFeatures.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      style={{ color: '#86efac', marginRight: 12, width: 16 }} 
                    />
                    <Typography variant="body2" sx={{ color: '#bbb' }}>{item.feature}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ 
            bgcolor: '#23263a', 
            color: '#fff', 
            borderRadius: 3, 
            boxShadow: 2,
            height: '100%'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#86efac' }}>
                Cognitive Benefits
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Memory Enhancement</Typography>
                <Typography variant="h5" sx={{ color: '#86efac', fontWeight: 700 }}>+40%</Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Social Engagement</Typography>
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700 }}>+65%</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>Daily Activity</Typography>
                <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700 }}>+85%</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
          Ready to boost engagement and cognitive health?
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
          Get Started Today
        </Button>
      </Box>
    </Container>
  </Box>
);

export default GamesSection; 