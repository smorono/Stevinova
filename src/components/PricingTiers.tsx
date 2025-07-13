import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Chip, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faCrown } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    name: 'Starter Facility',
    price: '$99/mo',
          features: ['LifeCart®', 'Family Connect'],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCheckCircle} size="lg" color="#7e29ff" />,
  },
  {
    name: 'Premium Facility',
    price: '$179/mo',
    features: ['All features', '5 Multiplayer Games', 'Virtual Pet Companion'],
    highlight: true,
    icon: <FontAwesomeIcon icon={faStar} size="lg" color="#29ff7e" />,
  },
  {
    name: 'Full Access Partner',
    price: '$249/mo',
    features: ['Unlimited access', 'Early access to updates', 'All games & features'],
    highlight: false,
    icon: <FontAwesomeIcon icon={faCrown} size="lg" color="#ff7e29" />,
  },
];

const featuresList = [
      { label: 'LifeCart®', values: ['✔️', '✔️', '✔️'] },
  { label: 'Family Connect', values: ['✔️', '✔️', '✔️'] },
  { label: 'Senior Games Lounge', values: ['', '✔️ (5 games)', '✔️ (all games)'] },
  { label: 'Virtual Pet Companion', values: ['', '✔️', '✔️'] },
  { label: 'Early Access to Updates', values: ['', '', '✔️'] },
];

const PricingTiers: React.FC = () => {
  const [compare, setCompare] = useState(false);
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
        Stevinova® Membership Plans
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button
          variant={compare ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setCompare((c) => !c)}
          sx={{ fontWeight: 700, borderRadius: 3 }}
        >
          {compare ? 'Hide Comparison' : 'Compare Plans'}
        </Button>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4, justifyContent: 'center' }}>
        {plans.map((plan, i) => (
          <Box key={i}>
            <Card
              elevation={plan.highlight ? 8 : 2}
              sx={{
                borderRadius: 4,
                minHeight: 340,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                border: plan.highlight ? '2px solid #29ff7e' : undefined,
                boxShadow: plan.highlight ? 8 : 2,
                position: 'relative',
                bgcolor: plan.highlight ? 'background.paper' : 'background.default',
              }}
            >
              {plan.highlight && (
                <Chip
                  label="Best Value"
                  color="success"
                  icon={<FontAwesomeIcon icon={faStar} style={{ color: '#fff' }} />}
                  sx={{ position: 'absolute', top: 18, right: 18, fontWeight: 700 }}
                />
              )}
              <Avatar sx={{ bgcolor: 'background.paper', width: 56, height: 56, mb: 2, boxShadow: 1 }}>
                {plan.icon}
              </Avatar>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>{plan.name}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, color: plan.highlight ? 'success.main' : 'primary.main', mb: 2 }}>{plan.price}</Typography>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ marginBottom: 8 }}>
                      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#29ff7e', marginRight: 8 }} />
                      <Typography component="span" variant="body2" color="text.secondary">{f}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button variant="contained" color="primary" sx={{ fontWeight: 700, borderRadius: 3, mb: 1, width: '90%' }}>
                Reserve Now
              </Button>
              <Button variant="outlined" color="primary" sx={{ fontWeight: 700, borderRadius: 3, width: '90%' }}>
                Join Waitlist
              </Button>
            </Card>
          </Box>
        ))}
      </Box>
      {compare && (
        <Box sx={{ mt: 6, bgcolor: 'background.paper', borderRadius: 4, boxShadow: 2, p: 4, maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>Plan Comparison</Typography>
          <Box sx={{ display: 'flex', fontWeight: 700, mb: 1 }}>
            <Box sx={{ flex: 2 }}>Feature</Box>
            {plans.map((plan, i) => (
              <Box sx={{ flex: 1, textAlign: 'center' }} key={i}>{plan.name}</Box>
            ))}
          </Box>
          {featuresList.map((row, i) => (
            <Box sx={{ display: 'flex', borderTop: '1px solid #eee', py: 1 }} key={i}>
              <Box sx={{ flex: 2 }}>{row.label}</Box>
              {row.values.map((val, j) => (
                <Box sx={{ flex: 1, textAlign: 'center' }} key={j}>{val}</Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PricingTiers; 