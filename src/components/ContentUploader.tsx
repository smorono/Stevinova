import React, { useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip, 
  LinearProgress, 
  Alert,
  IconButton,
  Paper,
  Divider
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload, 
  faFileVideo, 
  faTrash, 
  faCheck, 
  faTimes,
  faSearch,
  faDownload,
  faEye,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  url?: string;
  thumbnail?: string;
  duration?: number;
}

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'movie' | 'documentary' | 'music' | 'fitness' | 'live' | 'announcement';
  duration: number;
  fileSize: number;
  uploadDate: string;
  tags: string[];
  thumbnail?: string;
  isPublic: boolean;
}

const ContentUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [contentLibrary, setContentLibrary] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'Morning Exercise Class',
      description: 'Gentle morning exercises for seniors',
      type: 'fitness',
      duration: 2700, // 45 minutes in seconds
      fileSize: 150000000, // 150MB
      uploadDate: '2024-01-15',
      tags: ['exercise', 'morning', 'fitness'],
      isPublic: true
    },
    {
      id: '2',
      title: 'Classic Movie Collection',
      description: 'Beloved classic films from the golden age',
      type: 'movie',
      duration: 7200, // 2 hours
      fileSize: 800000000, // 800MB
      uploadDate: '2024-01-10',
      tags: ['classic', 'movies', 'entertainment'],
      isPublic: true
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map((file, index) => ({
      id: `file-${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'uploading'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((file, index) => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === file.id 
              ? { ...f, progress: Math.min(f.progress + 10, 100) }
              : f
          )
        );

        if (newFiles[index].progress >= 100) {
          clearInterval(interval);
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === file.id 
                ? { ...f, status: 'completed', url: URL.createObjectURL(files[index]) }
                : f
            )
          );
        }
      }, 200);
    });
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'movie':
        return '#4ecdc4';
      case 'documentary':
        return '#96ceb4';
      case 'music':
        return '#45b7d1';
      case 'fitness':
        return '#ffeaa7';
      case 'live':
        return '#ff6b6b';
      case 'announcement':
        return '#a29bfe';
      default:
        return '#ddd';
    }
  };

  const filteredContent = contentLibrary.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 4, fontWeight: 700 }}>
        Content Management
      </Typography>

      {/* Upload Section */}
      <Card sx={{ bgcolor: '#23263a', color: '#fff', mb: 4, borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Upload New Content
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowUploadForm(!showUploadForm)}
              sx={{
                bgcolor: '#4ade80',
                '&:hover': { bgcolor: '#4ade80' }
              }}
            >
              <FontAwesomeIcon icon={faUpload} style={{ marginRight: 8 }} />
              {showUploadForm ? 'Hide Form' : 'Add Content'}
            </Button>
          </Box>

          {showUploadForm && (
            <Box sx={{ mb: 3 }}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 3 
              }}>
                <TextField
                  fullWidth
                  label="Content Title"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#444' },
                      '&:hover fieldset': { borderColor: '#666' },
                      '&.Mui-focused fieldset': { borderColor: '#4ade80' }
                    },
                    '& .MuiInputLabel-root': { color: '#bbb' }
                  }}
                />
                <FormControl fullWidth>
                  <InputLabel sx={{ color: '#bbb' }}>Content Type</InputLabel>
                  <Select
                    label="Content Type"
                    sx={{
                      color: '#fff',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4ade80' }
                    }}
                  >
                    <MenuItem value="movie">Movie</MenuItem>
                    <MenuItem value="documentary">Documentary</MenuItem>
                    <MenuItem value="music">Music</MenuItem>
                    <MenuItem value="fitness">Fitness</MenuItem>
                    <MenuItem value="live">Live Stream</MenuItem>
                    <MenuItem value="announcement">Announcement</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  sx={{
                    gridColumn: { xs: '1', md: '1 / -1' },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#444' },
                      '&:hover fieldset': { borderColor: '#666' },
                      '&.Mui-focused fieldset': { borderColor: '#4ade80' }
                    },
                    '& .MuiInputLabel-root': { color: '#bbb' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Tags (comma separated)"
                  variant="outlined"
                  placeholder="exercise, morning, fitness"
                  sx={{
                    gridColumn: { xs: '1', md: '1 / -1' },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#444' },
                      '&:hover fieldset': { borderColor: '#666' },
                      '&.Mui-focused fieldset': { borderColor: '#4ade80' }
                    },
                    '& .MuiInputLabel-root': { color: '#bbb' }
                  }}
                />
              </Box>
            </Box>
          )}

          {/* File Upload Area */}
          <Box
            sx={{
              border: '2px dashed #444',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#4ade80',
                bgcolor: 'rgba(74, 222, 128, 0.1)'
              }
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <FontAwesomeIcon 
              icon={faUpload} 
              size="2x" 
              style={{ color: '#4ade80', marginBottom: 16 }} 
            />
            <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
              Drop video files here or click to browse
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Supports MP4, AVI, MOV, MKV (Max 2GB per file)
            </Typography>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="video/*"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </Box>

          {/* Upload Progress */}
          {uploadedFiles.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                Upload Progress
              </Typography>
              {uploadedFiles.map((file) => (
                <Box key={file.id} sx={{ mb: 2, p: 2, bgcolor: '#1a1b2e', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <FontAwesomeIcon icon={faFileVideo} style={{ color: '#4ade80' }} />
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {file.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        {formatFileSize(file.size)}
                      </Typography>
                      <IconButton 
                        size="small" 
                        onClick={() => removeFile(file.id)}
                        sx={{ color: '#ff6b6b' }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={file.progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      bgcolor: '#444',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: file.status === 'error' ? '#ff6b6b' : '#4ade80'
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                      {file.progress}% Complete
                    </Typography>
                    {file.status === 'completed' && (
                      <FontAwesomeIcon icon={faCheck} style={{ color: '#4ade80' }} />
                    )}
                    {file.status === 'error' && (
                      <FontAwesomeIcon icon={faTimes} style={{ color: '#ff6b6b' }} />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Content Library */}
      <Card sx={{ bgcolor: '#23263a', color: '#fff', borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Content Library
          </Typography>

          {/* Search and Filter */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                flexGrow: 1,
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#666' },
                  '&.Mui-focused fieldset': { borderColor: '#4ade80' }
                }
              }}
              InputProps={{
                startAdornment: <FontAwesomeIcon icon={faSearch} style={{ color: '#bbb', marginRight: 8 }} />
              }}
            />
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel sx={{ color: '#bbb' }}>Type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                label="Type"
                sx={{
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4ade80' }
                }}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="movie">Movies</MenuItem>
                <MenuItem value="documentary">Documentaries</MenuItem>
                <MenuItem value="music">Music</MenuItem>
                <MenuItem value="fitness">Fitness</MenuItem>
                <MenuItem value="live">Live Streams</MenuItem>
                <MenuItem value="announcement">Announcements</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Content Grid */}
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
            {filteredContent.map((item) => (
              <Box key={item.id}>
                <Paper sx={{ 
                  bgcolor: '#1a1b2e', 
                  color: '#fff', 
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}>
                  <Box sx={{ 
                    height: 150, 
                    bgcolor: '#2a2b3e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <FontAwesomeIcon 
                      icon={faFileVideo} 
                      size="2x" 
                      style={{ color: getTypeColor(item.type) }} 
                    />
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8 
                    }}>
                      <Chip 
                        label={item.type} 
                        size="small" 
                        sx={{ 
                          bgcolor: getTypeColor(item.type), 
                          color: '#fff',
                          fontSize: '0.7rem'
                        }} 
                      />
                    </Box>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        {formatDuration(item.duration)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        •
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        {formatFileSize(item.fileSize)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <Chip 
                          key={index}
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: '#444', 
                            color: '#fff',
                            fontSize: '0.7rem'
                          }} 
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small" sx={{ color: '#4ade80' }}>
                        <FontAwesomeIcon icon={faEye} />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#45b7d1' }}>
                        <FontAwesomeIcon icon={faEdit} />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#ff6b6b' }}>
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>

          {filteredContent.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" sx={{ color: '#bbb' }}>
                No content found
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Try adjusting your search or filter criteria
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContentUploader; 