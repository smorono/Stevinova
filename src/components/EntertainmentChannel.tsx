import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button, 
  Avatar,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Tooltip
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faVolumeUp, 
  faExpand, 
  faClock, 
  faCalendar,
  faVideo,
  faBroadcastTower,
  faFilm,
  faMusic,
  faHeart,
  faStar,
  faCog,
  faUpload,
  faSearch,
  faTv
} from '@fortawesome/free-solid-svg-icons';

// Mock data for demonstration
const mockChannelData = {
  name: "Sunrise TV",
  logo: "🌅",
  themeColor: "#ff6b6b",
  isLive: true,
  currentShow: {
    title: "Morning Exercise Class",
    type: "Live Stream",
    duration: "45 min",
    description: "Join us for gentle morning exercises led by our fitness instructor.",
    thumbnail: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Exercise+Class"
  }
};

const mockSchedule = [
  {
    time: "09:00 AM",
    title: "Morning Exercise Class",
    type: "Live Stream",
    duration: "45 min"
  },
  {
    time: "10:00 AM",
    title: "Classic Movie Hour",
    type: "Movie",
    duration: "2 hours"
  },
  {
    time: "12:00 PM",
    title: "Lunch & Music",
    type: "Music",
    duration: "1 hour"
  },
  {
    time: "02:00 PM",
    title: "Bingo Afternoon",
    type: "Live Stream",
    duration: "1 hour"
  },
  {
    time: "04:00 PM",
    title: "Nature Documentary",
    type: "Documentary",
    duration: "1 hour"
  }
];

const mockLibrary = [
  {
    id: 1,
    title: "Classic Movie Collection",
    type: "Movie",
    duration: "2 hours",
    thumbnail: "https://via.placeholder.com/200x150/4ecdc4/ffffff?text=Classic+Movies",
    description: "A collection of beloved classic films from the golden age of cinema.",
    rating: 4.5,
    isFavorite: true
  },
  {
    id: 2,
    title: "Relaxing Nature Sounds",
    type: "Music",
    duration: "3 hours",
    thumbnail: "https://via.placeholder.com/200x150/45b7d1/ffffff?text=Nature+Sounds",
    description: "Soothing nature sounds and ambient music for relaxation.",
    rating: 4.8,
    isFavorite: false
  },
  {
    id: 3,
    title: "Exercise Videos",
    type: "Fitness",
    duration: "1 hour",
    thumbnail: "https://via.placeholder.com/200x150/96ceb4/ffffff?text=Exercise",
    description: "Gentle exercise routines designed specifically for seniors.",
    rating: 4.2,
    isFavorite: true
  },
  {
    id: 4,
    title: "Travel Documentaries",
    type: "Documentary",
    duration: "1.5 hours",
    thumbnail: "https://via.placeholder.com/200x150/ffeaa7/ffffff?text=Travel",
    description: "Explore the world from the comfort of your room.",
    rating: 4.6,
    isFavorite: false
  }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`entertainment-tabpanel-${index}`}
      aria-labelledby={`entertainment-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const EntertainmentChannel: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Live Stream':
        return faBroadcastTower;
      case 'Movie':
        return faFilm;
      case 'Music':
        return faMusic;
      case 'Documentary':
        return faVideo;
      case 'Fitness':
        return faHeart;
      default:
        return faVideo;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Live Stream':
        return '#ff6b6b';
      case 'Movie':
        return '#4ecdc4';
      case 'Music':
        return '#45b7d1';
      case 'Documentary':
        return '#96ceb4';
      case 'Fitness':
        return '#ffeaa7';
      default:
        return '#ddd';
    }
  };

  return (
    <Box id="entertainment-channel" sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg">
        {/* Entertainment Channel Icon */}
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
                background: 'linear-gradient(135deg, #f9731620, #f9731640)', 
                border: '3px solid #f9731660', 
                borderRadius: '50%', 
                width: 80, 
                height: 80, 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: 16,
                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
            }}
          >
            <FontAwesomeIcon 
              icon={faTv} 
              size="2x" 
              style={{ 
                color: '#f97316',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }} 
            />
          </div>
        </Tooltip>
      </div>
        
        {/* Channel Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4, 
          p: 3, 
          bgcolor: '#23263a', 
          borderRadius: 3,
          border: `2px solid ${mockChannelData.themeColor}40`
        }}>
          <Avatar sx={{ 
            width: 60, 
            height: 60, 
            mr: 3, 
            fontSize: 24,
            bgcolor: mockChannelData.themeColor,
            boxShadow: `0 0 20px ${mockChannelData.themeColor}40`
          }}>
            {mockChannelData.logo}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ 
              color: '#fff', 
              fontWeight: 700, 
              mb: 1 
            }}>
              {mockChannelData.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip 
                label="LIVE" 
                size="small" 
                sx={{ 
                  bgcolor: '#ff6b6b', 
                  color: '#fff', 
                  fontWeight: 700 
                }} 
              />
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Entertainment Channel • Hardware Bundle Required
              </Typography>
            </Box>
          </Box>
          <IconButton sx={{ color: '#fff' }}>
            <FontAwesomeIcon icon={faCog} />
          </IconButton>
        </Box>

        {/* Now Playing Section */}
        <Card sx={{ 
          bgcolor: '#23263a', 
          color: '#fff', 
          mb: 4, 
          borderRadius: 3,
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            position: 'relative', 
            height: 300, 
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mockChannelData.currentShow.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Video Player Controls */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              bgcolor: 'rgba(0,0,0,0.7)',
              p: 2,
              borderRadius: 2
            }}>
              <IconButton 
                onClick={togglePlay}
                sx={{ 
                  color: '#fff', 
                  bgcolor: mockChannelData.themeColor,
                  '&:hover': { bgcolor: mockChannelData.themeColor }
                }}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </IconButton>
              <IconButton sx={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faVolumeUp} />
              </IconButton>
              <IconButton sx={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faExpand} />
              </IconButton>
            </Box>
          </Box>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              {mockChannelData.currentShow.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                label={mockChannelData.currentShow.type} 
                size="small" 
                sx={{ 
                  bgcolor: getTypeColor(mockChannelData.currentShow.type), 
                  color: '#fff' 
                }} 
              />
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                {mockChannelData.currentShow.duration}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              {mockChannelData.currentShow.description}
            </Typography>
          </CardContent>
        </Card>

        {/* Tabs Navigation */}
        <Paper sx={{ bgcolor: '#23263a', mb: 3 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                color: '#bbb',
                fontWeight: 600,
                '&.Mui-selected': {
                  color: mockChannelData.themeColor
                }
              },
              '& .MuiTabs-indicator': {
                bgcolor: mockChannelData.themeColor
              }
            }}
          >
            <Tab label="Schedule" />
            <Tab label="Library" />
            <Tab label="Live Streams" />
            <Tab label="Admin" />
          </Tabs>
        </Paper>

        {/* Schedule Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(2, 1fr)', 
              lg: 'repeat(3, 1fr)' 
            }, 
            gap: 3 
          }}>
            {mockSchedule.map((show, index) => (
              <Box key={index}>
                <Card sx={{ 
                  bgcolor: '#23263a', 
                  color: '#fff', 
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <FontAwesomeIcon 
                        icon={faClock} 
                        style={{ color: mockChannelData.themeColor, marginRight: 8 }} 
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {show.time}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {show.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Chip 
                        label={show.type} 
                        size="small" 
                        sx={{ 
                          bgcolor: getTypeColor(show.type), 
                          color: '#fff' 
                        }} 
                      />
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        {show.duration}
                      </Typography>
                    </Box>
                    <Button 
                      variant="contained" 
                      size="small"
                      sx={{ 
                        bgcolor: mockChannelData.themeColor,
                        '&:hover': { bgcolor: mockChannelData.themeColor }
                      }}
                    >
                      <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </TabPanel>

        {/* Library Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            }, 
            gap: 3 
          }}>
            {mockLibrary.map((item) => (
              <Box key={item.id}>
                <Card sx={{ 
                  bgcolor: '#23263a', 
                  color: '#fff', 
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}>
                  <Box sx={{ 
                    height: 150, 
                    backgroundImage: `url(${item.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px 12px 0 0',
                    position: 'relative'
                  }}>
                    <IconButton 
                      sx={{ 
                        position: 'absolute', 
                        top: 8, 
                        right: 8, 
                        color: item.isFavorite ? '#ff6b6b' : '#fff',
                        bgcolor: 'rgba(0,0,0,0.5)'
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Chip 
                        label={item.type} 
                        size="small" 
                        sx={{ 
                          bgcolor: getTypeColor(item.type), 
                          color: '#fff' 
                        }} 
                      />
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        {item.duration}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
                        <Typography variant="body2" sx={{ color: '#bbb' }}>
                          {item.rating}
                        </Typography>
                      </Box>
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{ 
                          bgcolor: mockChannelData.themeColor,
                          '&:hover': { bgcolor: mockChannelData.themeColor }
                        }}
                      >
                        <FontAwesomeIcon icon={faPlay} style={{ marginRight: 8 }} />
                        Watch
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </TabPanel>

        {/* Live Streams Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <FontAwesomeIcon 
              icon={faBroadcastTower} 
              size="3x" 
              style={{ color: mockChannelData.themeColor, marginBottom: 16 }} 
            />
            <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
              Live Streams
            </Typography>
            <Typography variant="body1" sx={{ color: '#bbb', mb: 3 }}>
              Connect to live events, chapel services, and special activities happening in your facility.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: mockChannelData.themeColor,
                '&:hover': { bgcolor: mockChannelData.themeColor }
              }}
            >
              <FontAwesomeIcon icon={faBroadcastTower} style={{ marginRight: 8 }} />
              View Live Streams
            </Button>
          </Box>
        </TabPanel>

        {/* Admin Tab */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <FontAwesomeIcon 
              icon={faCog} 
              size="3x" 
              style={{ color: mockChannelData.themeColor, marginBottom: 16 }} 
            />
            <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
              Admin Panel
            </Typography>
            <Typography variant="body1" sx={{ color: '#bbb', mb: 3 }}>
              Manage content, upload videos, and configure channel settings.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: mockChannelData.themeColor,
                  '&:hover': { bgcolor: mockChannelData.themeColor }
                }}
              >
                <FontAwesomeIcon icon={faUpload} style={{ marginRight: 8 }} />
                Upload Content
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: mockChannelData.themeColor,
                  color: mockChannelData.themeColor,
                  '&:hover': { borderColor: mockChannelData.themeColor }
                }}
              >
                <FontAwesomeIcon icon={faSearch} style={{ marginRight: 8 }} />
                Find Content
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default EntertainmentChannel; 