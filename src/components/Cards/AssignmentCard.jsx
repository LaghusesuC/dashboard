// src/components/Cards/AssignmentCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, LinearProgress, IconButton, Tooltip } from '@mui/material';
import { 
  CalendarToday, 
  Description, 
  AccessTime, 
  CheckCircle, 
  Warning, 
  Error,
  PriorityHigh,
  MoreVert
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Menu, MenuItem } from '@mui/material';

const AssignmentCard = ({ assignment }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Overdue': return 'error';
      case 'Due Soon': return 'warning';
      case 'In Progress': return 'primary';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle />;
      case 'Overdue': return <Error />;
      case 'Due Soon': return <Warning />;
      default: return <AccessTime />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return '#ef4444';
      case 'high': return '#f59e0b';
      case 'medium': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getProgressValue = () => {
    if (assignment.status === 'Completed') return 100;
    if (assignment.progress) return assignment.progress;
    return 0;
  };

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
          boxShadow: 3,
          borderLeft: assignment.status === 'Completed' ? '4px solid #10b981' : 
                    assignment.status === 'Overdue' ? '4px solid #ef4444' : 
                    assignment.status === 'Due Soon' ? '4px solid #f59e0b' : 
                    '4px solid #3b82f6',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6,
          },
          position: 'relative',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flex: 1, pr: 1 }}>
              {assignment.title}
            </Typography>
            <Box>
              <Chip 
                label={assignment.status} 
                size="small" 
                color={getStatusColor(assignment.status)}
                icon={getStatusIcon(assignment.status)}
                sx={{ mb: 1 }}
              />
              <IconButton 
                size="small" 
                onClick={handleMenuOpen}
                sx={{ color: 'text.secondary' }}
              >
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
              >
                <MenuItem>Edit</MenuItem>
                <MenuItem>Mark as Complete</MenuItem>
                <MenuItem>Set Reminder</MenuItem>
                <MenuItem>Delete</MenuItem>
              </Menu>
            </Box>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
            {assignment.description}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                Progress
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                {getProgressValue()}%
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={getProgressValue()} 
              sx={{ 
                height: 8, 
                borderRadius: 5,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  backgroundColor: assignment.status === 'Completed' ? '#10b981' :
                                  assignment.status === 'Overdue' ? '#ef4444' :
                                  assignment.status === 'Due Soon' ? '#f59e0b' : '#3b82f6'
                }
              }} 
            />
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarToday fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Due: {assignment.formattedDueDate}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Description fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                Course: {assignment.course}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                {assignment.timeRemaining}
              </Typography>
            </Box>
          </Box>
          
          {assignment.priority && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, p: 1, bgcolor: `${getPriorityColor(assignment.priority)}10`, borderRadius: 1 }}>
              <PriorityHigh sx={{ mr: 1, color: getPriorityColor(assignment.priority), fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: getPriorityColor(assignment.priority), fontWeight: 'medium' }}>
                {assignment.priority === 'critical' ? 'Critical Priority' : 
                 assignment.priority === 'high' ? 'High Priority' : 
                 assignment.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AssignmentCard;