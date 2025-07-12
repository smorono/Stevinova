import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  IconButton, 
  Slider, 
  Typography, 
  Paper,
  Button,
  Tooltip
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faVolumeUp, 
  faVolumeMute,
  faExpand, 
  faCompress,
  faBackward,
  faForward,
  faClosedCaptioning
} from '@fortawesome/free-solid-svg-icons';

interface MediaPlayerProps {
  src: string;
  title: string;
  poster?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  themeColor?: string;
  autoPlay?: boolean;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({
  src,
  title,
  poster,
  onPlay,
  onPause,
  onEnded,
  themeColor = '#4ade80',
  autoPlay = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [buffering, setBuffering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPause?.();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    const handleWaiting = () => {
      setBuffering(true);
    };

    const handleCanPlay = () => {
      setBuffering(false);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onPlay, onPause, onEnded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume / 100;
    video.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleSeek = (event: Event, newValue: number | number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const seekTime = (newValue as number) * (duration / 100);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    const newVolume = newValue as number;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const skipBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, video.currentTime - 10);
  };

  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(duration, video.currentTime + 10);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    // Hide controls after 3 seconds of inactivity
    setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        bgcolor: '#000',
        borderRadius: 3,
        overflow: 'hidden',
        '&:hover .controls': {
          opacity: 1
        }
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
        autoPlay={autoPlay}
        preload="metadata"
      />

      {/* Buffering Indicator */}
      {buffering && (
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: 24
        }}>
          Loading...
        </Box>
      )}

      {/* Overlay Controls */}
      <Box 
        className="controls"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          padding: 2,
          opacity: showControls ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Title */}
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#fff', 
            mb: 2, 
            fontWeight: 600,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {title}
        </Typography>

        {/* Progress Bar */}
        <Slider
          value={duration > 0 ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          sx={{
            color: themeColor,
            height: 6,
            '& .MuiSlider-thumb': {
              width: 16,
              height: 16,
              bgcolor: themeColor,
              '&:hover': {
                boxShadow: `0 0 0 8px ${themeColor}20`
              }
            },
            '& .MuiSlider-track': {
              bgcolor: themeColor
            },
            '& .MuiSlider-rail': {
              bgcolor: 'rgba(255,255,255,0.3)'
            }
          }}
        />

        {/* Control Buttons */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mt: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Play/Pause */}
            <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
              <IconButton 
                onClick={togglePlay}
                sx={{ 
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </IconButton>
            </Tooltip>

            {/* Skip Backward */}
            <Tooltip title="Skip Backward 10s">
              <IconButton 
                onClick={skipBackward}
                sx={{ 
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <FontAwesomeIcon icon={faBackward} />
              </IconButton>
            </Tooltip>

            {/* Skip Forward */}
            <Tooltip title="Skip Forward 10s">
              <IconButton 
                onClick={skipForward}
                sx={{ 
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <FontAwesomeIcon icon={faForward} />
              </IconButton>
            </Tooltip>

            {/* Volume Control */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
              <Tooltip title={isMuted ? 'Unmute' : 'Mute'}>
                <IconButton 
                  onClick={toggleMute}
                  sx={{ 
                    color: '#fff',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                  }}
                >
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </IconButton>
              </Tooltip>
              <Slider
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                sx={{
                  color: themeColor,
                  width: 80,
                  '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                    bgcolor: themeColor
                  }
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Time Display */}
            <Typography variant="body2" sx={{ color: '#fff', mr: 2 }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>

            {/* Captions */}
            <Tooltip title="Toggle Captions">
              <IconButton 
                sx={{ 
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <FontAwesomeIcon icon={faClosedCaptioning} />
              </IconButton>
            </Tooltip>

            {/* Fullscreen */}
            <Tooltip title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              <IconButton 
                onClick={toggleFullscreen}
                sx={{ 
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaPlayer; 