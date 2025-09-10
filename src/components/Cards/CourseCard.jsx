// src/components/Cards/CourseCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, LinearProgress, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { School, Person, Star, StarBorder } from '@mui/icons-material';

const CourseCard = ({ course }) => {
  const [favorited, setFavorited] = React.useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorited(!favorited);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -3 }} 
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6,
          },
          position: 'relative',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
          <IconButton 
            size="small" 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
            }}
            onClick={toggleFavorite}
          >
            {favorited ? <Star sx={{ color: '#f59e0b' }} /> : <StarBorder sx={{ color: '#666' }} />}
          </IconButton>
        </Box>
        
        <CardMedia
          component="img"
          height="140"
          image={course.image}
          alt={course.name}
          sx={{
            filter: 'brightness(0.9)',
            '&:hover': {
              filter: 'brightness(1.0)',
            },
            transition: 'filter 0.3s ease'
          }}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {course.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <School fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {course.code}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Person fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {course.instructor}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            <Chip 
              label={`${course.credits} Credits`} 
              size="small" 
              variant="outlined"
              sx={{ borderColor: '#3b82f6', color: '#3b82f6' }}
            />
            <Chip 
              label={course.status} 
              size="small" 
              color={course.status === 'Active' ? 'success' : 'default'} 
            />
            {course.grade && (
              <Chip 
                label={`Grade: ${course.grade}`} 
                size="small" 
                color="primary"
                sx={{ fontWeight: 'bold' }}
              />
            )}
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                Progress
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                {course.progress}%
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={course.progress} 
              sx={{ 
                height: 8, 
                borderRadius: 5,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  backgroundColor: course.progress > 80 ? '#10b981' :
                                  course.progress > 60 ? '#3b82f6' : '#f59e0b'
                }
              }} 
            />
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>
              {course.progress >= 90 ? 'Almost complete!' : 
               course.progress >= 70 ? 'Good progress' : 
               course.progress >= 50 ? 'Halfway there' : 'Just started'}
            </Typography>
            <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;