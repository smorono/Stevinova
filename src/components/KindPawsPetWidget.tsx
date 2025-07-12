import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Avatar,
  IconButton,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faBone, 
  faHandPaper, 
  faVolumeUp, 
  faVolumeMute,
  faCog,
  faDog,
  faCat,
  faDove,
  faDragon,
  faStar,
  faSmile,
  faHome
} from '@fortawesome/free-solid-svg-icons';

interface PetData {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'fantasy';
  avatar: string;
  mood: 'happy' | 'hungry' | 'sleepy' | 'playful';
  lastFed: Date;
  lastPet: Date;
  soundEnabled: boolean;
  customGreeting?: string;
}

const petAvatars = {
  dog: '🐕',
  cat: '🐱', 
  bird: '🦜',
  fantasy: '🐉'
};

const petSounds = {
  dog: 'Woof!',
  cat: 'Meow!',
  bird: 'Tweet!',
  fantasy: 'Rawr!'
};

const petNames = {
  dog: ['Buddy', 'Max', 'Luna', 'Charlie', 'Bella'],
  cat: ['Whiskers', 'Shadow', 'Mittens', 'Tiger', 'Lily'],
  bird: ['Sunny', 'Sky', 'Rainbow', 'Blue', 'Sparkle'],
  fantasy: ['Dragon', 'Phoenix', 'Unicorn', 'Griffin', 'Pegasus']
};

const KindPawsPetWidget: React.FC = () => {
  const [pet, setPet] = useState<PetData>({
    id: '1',
    name: 'Buddy',
    type: 'dog',
    avatar: petAvatars.dog,
    mood: 'happy',
    lastFed: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    lastPet: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    soundEnabled: true
  });

  const [showSettings, setShowSettings] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  // Load pet data from localStorage on component mount
  useEffect(() => {
    const savedPet = localStorage.getItem('kindpaws-pet');
    if (savedPet) {
      setPet(JSON.parse(savedPet));
    }
  }, []);

  // Save pet data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kindpaws-pet', JSON.stringify(pet));
  }, [pet]);

  // Update pet mood based on time since last interaction
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hoursSinceFed = (now.getTime() - pet.lastFed.getTime()) / (1000 * 60 * 60);
      const hoursSincePet = (now.getTime() - pet.lastPet.getTime()) / (1000 * 60 * 60);

      let newMood: PetData['mood'] = 'happy';
      
      if (hoursSinceFed > 4) {
        newMood = 'hungry';
      } else if (hoursSincePet > 2) {
        newMood = 'playful';
      } else if (hoursSinceFed < 1 && hoursSincePet < 1) {
        newMood = 'sleepy';
      }

      if (newMood !== pet.mood) {
        setPet(prev => ({ ...prev, mood: newMood }));
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [pet.lastFed, pet.lastPet, pet.mood]);

  const getMoodColor = (mood: PetData['mood']) => {
    switch (mood) {
      case 'happy': return '#4ade80';
      case 'hungry': return '#fbbf24';
      case 'sleepy': return '#a78bfa';
      case 'playful': return '#f97316';
      default: return '#4ade80';
    }
  };

  const getMoodMessage = (mood: PetData['mood']) => {
    switch (mood) {
      case 'happy': return `${pet.name} is happy and content!`;
      case 'hungry': return `${pet.name} is getting hungry...`;
      case 'sleepy': return `${pet.name} is feeling sleepy and cozy.`;
      case 'playful': return `${pet.name} wants to play!`;
      default: return `${pet.name} is doing great!`;
    }
  };

  const handleFeed = () => {
    setIsAnimating(true);
    setPet(prev => ({ ...prev, lastFed: new Date(), mood: 'happy' }));
    
    setMessage(`${pet.name} loves the food! 🍖`);
    setShowMessage(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      setShowMessage(false);
    }, 2000);
  };

  const handlePet = () => {
    setIsAnimating(true);
    setPet(prev => ({ ...prev, lastPet: new Date(), mood: 'happy' }));
    
    setMessage(`${pet.name} purrs with joy! 💕`);
    setShowMessage(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      setShowMessage(false);
    }, 2000);
  };

  const handleListen = () => {
    if (!pet.soundEnabled) return;
    
    setIsAnimating(true);
    setMessage(pet.customGreeting || petSounds[pet.type]);
    setShowMessage(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      setShowMessage(false);
    }, 2000);
  };

  const handleToggleSound = () => {
    setPet(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  };

  const handleChangePet = (newType: PetData['type']) => {
    const newName = petNames[newType][Math.floor(Math.random() * petNames[newType].length)];
    setPet(prev => ({
      ...prev,
      type: newType,
      name: newName,
      avatar: petAvatars[newType],
      lastFed: new Date(),
      lastPet: new Date(),
      mood: 'happy'
    }));
  };

  const handleChangeName = (newName: string) => {
    setPet(prev => ({ ...prev, name: newName }));
  };

  const handleCustomGreeting = (greeting: string) => {
    setPet(prev => ({ ...prev, customGreeting: greeting }));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      {/* Main Pet Display */}
      <Card sx={{ 
        bgcolor: '#23263a', 
        color: '#fff', 
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 4
      }}>
        <CardContent sx={{ p: 3 }}>
          {/* Pet Avatar */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            mb: 3 
          }}>
            <Avatar sx={{ 
              width: 120, 
              height: 120, 
              fontSize: 60,
              bgcolor: getMoodColor(pet.mood),
              mb: 2,
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
              animation: isAnimating ? 'bounce 0.5s ease-in-out' : 'none',
              '@keyframes bounce': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' }
              }
            }}>
              {pet.avatar}
            </Avatar>
            
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {pet.name}
            </Typography>
            
            <Chip 
              label={pet.mood.charAt(0).toUpperCase() + pet.mood.slice(1)} 
              sx={{ 
                bgcolor: getMoodColor(pet.mood), 
                color: '#fff',
                fontWeight: 600
              }} 
            />
          </Box>

          {/* Mood Message */}
          <Typography variant="body1" sx={{ 
            textAlign: 'center', 
            color: '#bbb', 
            mb: 3,
            fontStyle: 'italic'
          }}>
            {getMoodMessage(pet.mood)}
          </Typography>

          {/* Interaction Buttons */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 2, 
            mb: 3 
          }}>
            <Button
              variant="contained"
              onClick={handleFeed}
              sx={{
                bgcolor: '#fbbf24',
                color: '#000',
                fontWeight: 600,
                py: 2,
                '&:hover': { bgcolor: '#f59e0b' }
              }}
            >
              <FontAwesomeIcon icon={faBone} style={{ marginRight: 8 }} />
              Feed
            </Button>
            
            <Button
              variant="contained"
              onClick={handlePet}
              sx={{
                bgcolor: '#ec4899',
                color: '#fff',
                fontWeight: 600,
                py: 2,
                '&:hover': { bgcolor: '#db2777' }
              }}
            >
              <FontAwesomeIcon icon={faHandPaper} style={{ marginRight: 8 }} />
              Pet
            </Button>
            
            <Button
              variant="contained"
              onClick={handleListen}
              disabled={!pet.soundEnabled}
              sx={{
                bgcolor: pet.soundEnabled ? '#8b5cf6' : '#666',
                color: '#fff',
                fontWeight: 600,
                py: 2,
                '&:hover': { bgcolor: pet.soundEnabled ? '#7c3aed' : '#666' }
              }}
            >
              <FontAwesomeIcon 
                icon={pet.soundEnabled ? faVolumeUp : faVolumeMute} 
                style={{ marginRight: 8 }} 
              />
              Listen
            </Button>
          </Box>

          {/* Settings Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              onClick={() => setShowSettings(true)}
              sx={{ 
                color: '#bbb',
                '&:hover': { color: '#fff' }
              }}
            >
              <FontAwesomeIcon icon={faCog} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      {/* Message Display */}
      {showMessage && (
        <Paper sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#23263a',
          color: '#fff',
          p: 3,
          borderRadius: 3,
          zIndex: 1000,
          boxShadow: 8,
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {message}
          </Typography>
        </Paper>
      )}

      {/* Settings Dialog */}
      <Dialog 
        open={showSettings} 
        onClose={() => setShowSettings(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          bgcolor: '#23263a', 
          color: '#fff',
          borderBottom: '1px solid #444'
        }}>
          KindPaws™ Settings
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#23263a', color: '#fff', pt: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Pet Type Selection */}
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#bbb' }}>Pet Type</InputLabel>
              <Select
                value={pet.type}
                onChange={(e) => handleChangePet(e.target.value as PetData['type'])}
                sx={{
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' }
                }}
              >
                <MenuItem value="dog">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FontAwesomeIcon icon={faDog} />
                    Dog
                  </Box>
                </MenuItem>
                <MenuItem value="cat">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FontAwesomeIcon icon={faCat} />
                    Cat
                  </Box>
                </MenuItem>
                <MenuItem value="bird">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FontAwesomeIcon icon={faDove} />
                    Bird
                  </Box>
                </MenuItem>
                <MenuItem value="fantasy">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FontAwesomeIcon icon={faDragon} />
                    Fantasy Creature
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Pet Name */}
            <TextField
              label="Pet Name"
              value={pet.name}
              onChange={(e) => handleChangeName(e.target.value)}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#666' }
                },
                '& .MuiInputLabel-root': { color: '#bbb' }
              }}
            />

            {/* Custom Greeting */}
            <TextField
              label="Custom Greeting (optional)"
              value={pet.customGreeting || ''}
              onChange={(e) => handleCustomGreeting(e.target.value)}
              fullWidth
              placeholder="Enter a custom message your pet will say"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#666' }
                },
                '& .MuiInputLabel-root': { color: '#bbb' }
              }}
            />

            {/* Sound Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FontAwesomeIcon 
                icon={pet.soundEnabled ? faVolumeUp : faVolumeMute} 
                style={{ color: pet.soundEnabled ? '#4ade80' : '#666' }} 
              />
              <Typography variant="body1">
                Enable Sound Effects
              </Typography>
              <Button
                variant={pet.soundEnabled ? 'contained' : 'outlined'}
                onClick={handleToggleSound}
                size="small"
                sx={{
                  ml: 'auto',
                  bgcolor: pet.soundEnabled ? '#4ade80' : 'transparent',
                  color: pet.soundEnabled ? '#000' : '#4ade80',
                  borderColor: '#4ade80',
                  '&:hover': {
                    bgcolor: pet.soundEnabled ? '#22c55e' : 'rgba(74, 222, 128, 0.1)'
                  }
                }}
              >
                {pet.soundEnabled ? 'On' : 'Off'}
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#23263a', borderTop: '1px solid #444' }}>
          <Button 
            onClick={() => setShowSettings(false)}
            sx={{ color: '#4ade80' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default KindPawsPetWidget; 