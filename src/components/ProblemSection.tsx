import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserClock, faUserSlash, faBrain, faChartLine } from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: <FontAwesomeIcon icon={faUserClock} size="lg" color="#7e29ff" />,
    text: 'Seniors lack autonomy in daily purchases, increasing staff workload.'
  },
  {
    icon: <FontAwesomeIcon icon={faUserSlash} size="lg" color="#29ff7e" />,
    text: 'Families are disconnected from care homes, impacting satisfaction.'
  },
  {
    icon: <FontAwesomeIcon icon={faBrain} size="lg" color="#297eff" />,
    text: 'Limited mental stimulation options reduce resident engagement.'
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} size="lg" color="#ff7e29" />,
    text: 'Facilities miss revenue opportunities from traditional models.'
  },
];

const ProblemSection: React.FC = () => (
  <Box sx={{ my: 8 }}>
    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
      Why Stevinova Matters for Your Facility
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, justifyContent: 'center' }}>
      {problems.map((p, i) => (
        <Box key={i}>
          <Card elevation={2} sx={{ borderRadius: 4, minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Avatar sx={{ bgcolor: 'background.paper', width: 56, height: 56, mb: 2, boxShadow: 1 }}>
              {p.icon}
            </Avatar>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 16, fontWeight: 500 }}>{p.text}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  </Box>
);

export default ProblemSection; 