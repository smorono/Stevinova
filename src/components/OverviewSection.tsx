import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUsers, faPuzzlePiece, faDog } from '@fortawesome/free-solid-svg-icons';
import { BusinessCenter } from '@mui/icons-material';

const features = [
  {
    icon: <FontAwesomeIcon icon={faCartShopping} size="2x" color="#7e29ff" />,
    title: 'LifeCart™',
    desc: 'Virtual store for residents. Tablet-based shopping. Family wallet and Instacart delivery. Facility earns margin, no inventory.'
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} size="2x" color="#29ff7e" />,
    title: 'Family Connect',
    desc: 'Private video chat, photo & memory wall, group messaging, and multi-device support for families.'
  },
  {
    icon: <FontAwesomeIcon icon={faPuzzlePiece} size="2x" color="#297eff" />,
    title: 'Senior Games Lounge',
    desc: 'Bright, accessible games: multiplayer & solo, brain boosters, trivia, word games, and live scoreboards.'
  },
  {
    icon: <FontAwesomeIcon icon={faDog} size="2x" color="#ff7e29" />,
    title: 'Virtual Pet Companion',
    desc: 'AI-powered pet for daily joy, reminders, and friendly chats. Customizable and engaging.'
  },
];

const OverviewSection: React.FC = () => (
  <Box sx={{ my: 8 }}>
    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
      The Stevinova Advantage
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, justifyContent: 'center' }}>
      {features.map((f, i) => (
        <Box key={i}>
          <Card elevation={3} sx={{ borderRadius: 4, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'background.paper', width: 64, height: 64, mb: 2, boxShadow: 2 }}>
              {f.icon}
            </Avatar>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>{f.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16 }}>{f.desc}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 6 }}>
      <BusinessCenter sx={{ color: 'primary.main', mr: 1 }} />
      <Typography variant="subtitle1" color="text.secondary">
        Built for care facility management: boost revenue, engagement, and family satisfaction.
      </Typography>
    </Box>
  </Box>
);

export default OverviewSection; 