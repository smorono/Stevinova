import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container, Chip, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPhone, faBell, faCalendar, faHeart, faUsers, faCamera, faMessage, faCheckCircle, faUserMd } from '@fortawesome/free-solid-svg-icons';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const communicationFeatures = [
  { name: 'Video Chat', icon: faVideo, desc: 'HD video calls with family', status: 'Live', color: '#4ade80' },
  { name: 'Voice Calls', icon: faPhone, desc: 'Crystal clear audio calls', status: 'Active', color: '#86efac' },
  { name: 'Photo Sharing', icon: faCamera, desc: 'Instant family photo updates', status: 'Real-time', color: '#bbf7d0' },
  { name: 'Group Messaging', icon: faMessage, desc: 'Family group conversations', status: 'Secure', color: '#dcfce7' },
];

const caregiverTools = [
  { feature: 'Daily wellness check-ins', icon: faCheckCircle },
  { feature: 'Medication reminder system', icon: faBell },
  { feature: 'Appointment scheduling', icon: faCalendar },
  { feature: 'Health status monitoring', icon: faUserMd },
  { feature: 'Emergency contact alerts', icon: faHeart },
  { feature: 'Care coordination notes', icon: faUsers },
];

const familyConnectionFeatures = [
  { feature: 'Family photo wall & albums', icon: faCamera },
  { feature: 'Birthday & holiday reminders', icon: faBell },
  { feature: 'Grandchild-friendly interface', icon: faHeart },
  { feature: 'Memory sharing & stories', icon: faMessage },
  { feature: 'Family event coordination', icon: faCalendar },
  { feature: 'Private family groups', icon: faUsers },
];

const FamilyEngagementCenter: React.FC = () => (
  <Box id="family" sx={{ bgcolor: '#1c1e26', py: 10 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ color: '#fff', fontWeight: 800, mb: 6, letterSpacing: 0.5 }}>
        Family Engagement Center
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: '#bbb', mb: 8, maxWidth: 800, mx: 'auto' }}>
        Keep families connected and caregivers informed. Video chat, health monitoring, and seamless communication all in one place.
      </Typography>

      {/* Communication Features */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ color: '#4ade80', fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Seamless Communication
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
          gap: 3 
        }}>
          {communicationFeatures.map((feature, i) => (
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
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  border: `2px solid ${feature.color}60`
                }}>
                  <FontAwesomeIcon icon={feature.icon} style={{ color: feature.color }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{feature.name}</Typography>
                <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>{feature.desc}</Typography>
                <Chip 
                  label={feature.status} 
                  size="small"
                  sx={{ 
                    bgcolor: `${feature.color}20`, 
                    color: feature.color, 
                    border: `1px solid ${feature.color}60`,
                    fontSize: '0.7rem'
                  }} 
                />
                <Typography variant="caption" sx={{ color: feature.color, mt: 1, display: 'block' }}>
                  Click to learn more →
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Caregiver Tools & Family Connection */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ color: '#86efac', fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Caregiver Tools & Family Connection
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
                Caregiver Dashboard
              </Typography>
              <Box>
                {caregiverTools.map((item, i) => (
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
                Family Connection Features
              </Typography>
              <Box>
                {familyConnectionFeatures.map((item, i) => (
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
        </Box>
      </Box>

      {/* Health Monitoring Dashboard */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Health & Wellness Monitoring
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 4 
        }}>
          <Card sx={{ 
            bgcolor: '#23263a', 
            color: '#fff', 
            borderRadius: 3, 
            boxShadow: 2,
            transition: 'all 0.3s ease',
            '&:hover': { 
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}>
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
                <FontAwesomeIcon icon={faBell} size="lg" style={{ color: '#bbf7d0' }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Medication Reminders</Typography>
              <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>Automated alerts for medications</Typography>
              <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700 }}>99.8%</Typography>
              <Typography variant="caption" sx={{ color: '#bbb' }}>Compliance Rate</Typography>
            </CardContent>
          </Card>
          <Card sx={{ 
            bgcolor: '#23263a', 
            color: '#fff', 
            borderRadius: 3, 
            boxShadow: 2,
            transition: 'all 0.3s ease',
            '&:hover': { 
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}>
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
                <FontAwesomeIcon icon={faCalendar} size="lg" style={{ color: '#bbf7d0' }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Appointment Scheduling</Typography>
              <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>Easy scheduling & reminders</Typography>
              <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700 }}>24/7</Typography>
              <Typography variant="caption" sx={{ color: '#bbb' }}>Availability</Typography>
            </CardContent>
          </Card>
          <Card sx={{ 
            bgcolor: '#23263a', 
            color: '#fff', 
            borderRadius: 3, 
            boxShadow: 2,
            transition: 'all 0.3s ease',
            '&:hover': { 
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}>
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
                <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: '#bbf7d0' }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Family Satisfaction</Typography>
              <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>Improved family connection</Typography>
              <Typography variant="h5" sx={{ color: '#bbf7d0', fontWeight: 700 }}>94%</Typography>
              <Typography variant="caption" sx={{ color: '#bbb' }}>Satisfaction Rate</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
          Ready to strengthen family connections and improve care coordination?
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
          Start Connecting Families
        </Button>
      </Box>
    </Container>
  </Box>
);

export default FamilyEngagementCenter; 