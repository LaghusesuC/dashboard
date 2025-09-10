// src/components/Widgets/QuickActionsWidget.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { Add, Assignment, School, Grade, Event, Groups } from '@mui/icons-material';
import { motion } from 'framer-motion';

const QuickActionsWidget = () => {
  const actions = [
    { label: 'Add Assignment', icon: <Assignment />, color: '#3b82f6', action: 'assignment' },
    { label: 'Enroll Course', icon: <School />, color: '#10b981', action: 'course' },
    { label: 'Check Grades', icon: <Grade />, color: '#f59e0b', action: 'grades' },
    { label: 'Schedule Event', icon: <Event />, color: '#8b5cf6', action: 'event' },
    { label: 'Join Study Group', icon: <Groups />, color: '#ef4444', action: 'group' },
    { label: 'Book Advisor', icon: <Add />, color: '#06b6d4', action: 'advisor' },
  ];

  const handleAction = (actionType) => {
    console.log(`Action clicked: ${actionType}`);
    // In a real app, this would navigate to the appropriate page or open a modal
  };

  return (
    <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Add sx={{ mr: 1.5, color: 'primary.main', fontSize: 24 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Quick Actions
          </Typography>
        </Box>
        
        <Grid container spacing={2}>
          {actions.map((action, index) => (
            <Grid item xs={6} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleAction(action.action)}
                  sx={{
                    height: '100%',
                    minHeight: 100,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    borderColor: action.color,
                    color: action.color,
                    textTransform: 'none',
                    gap: 1,
                    '&:hover': {
                      backgroundColor: `${action.color}08`,
                      borderColor: action.color,
                      boxShadow: `0 4px 12px ${action.color}20`,
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Box sx={{ fontSize: 28, color: action.color }}>
                    {action.icon}
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', lineHeight: 1.2 }}>
                    {action.label}
                  </Typography>
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QuickActionsWidget;