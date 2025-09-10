// src/components/Widgets/ScheduleWidget.jsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Chip, Divider } from '@mui/material';
import { CalendarToday, School, AccessTime } from '@mui/icons-material';

const ScheduleWidget = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const schedule = [
    { time: '09:00 AM', course: 'Advanced Mathematics', room: 'Room 201', type: 'Lecture' },
    { time: '11:00 AM', course: 'Physics Fundamentals', room: 'Lab 305', type: 'Lab' },
    { time: '01:00 PM', course: 'English Literature', room: 'Room 105', type: 'Seminar' },
    { time: '03:00 PM', course: 'Computer Science', room: 'Room 410', type: 'Lecture' },
  ];

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'lecture': return 'primary';
      case 'lab': return 'success';
      case 'seminar': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CalendarToday sx={{ mr: 1.5, color: 'primary.main', fontSize: 24 }} />
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Today's Schedule
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {today}
            </Typography>
          </Box>
        </Box>
        
        <List sx={{ p: 0 }}>
          {schedule.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                sx={{ 
                  borderRadius: '8px',
                  mb: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    boxShadow: 1,
                  },
                  p: 2
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'primary.main' }}>
                  <AccessTime sx={{ fontSize: 20 }} />
                  <Typography variant="caption" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                    {item.time}
                  </Typography>
                </Box>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                      {item.course}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {item.room} • {item.type}
                      </Typography>
                      <Chip 
                        label={item.type} 
                        size="small" 
                        color={getTypeColor(item.type)}
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </>
                  }
                />
              </ListItem>
              {index < schedule.length - 1 && (
                <Box sx={{ mb: 2 }}>
                  <Divider />
                </Box>
              )}
            </React.Fragment>
          ))}
        </List>
        
        <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(59, 130, 246, 0.1)', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'medium' }}>
            No more classes today! 🎉
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScheduleWidget;