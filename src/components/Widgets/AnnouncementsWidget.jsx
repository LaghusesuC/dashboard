// src/components/Widgets/AnnouncementsWidget.jsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Chip, Divider, Badge } from '@mui/material';
import { Announcement, School, Event, Info } from '@mui/icons-material';

const AnnouncementsWidget = () => {
  const announcements = [
    {
      title: "Final Exam Schedule Published",
      content: "Final exams will be held from December 18-22. Please check your individual course pages for specific times and locations.",
      date: "Today, 9:30 AM",
      type: "Important",
      read: false,
      icon: <School fontSize="small" />
    },
    {
      title: "Library Extended Hours",
      content: "The campus library will be open until midnight during finals week to support student study needs.",
      date: "Yesterday, 2:15 PM",
      type: "Information",
      read: true,
      icon: <Info fontSize="small" />
    },
    {
      title: "Career Services Workshop",
      content: "Join us this Friday for a resume building workshop with industry professionals from top tech companies.",
      date: "Dec 5, 2023",
      type: "Event",
      read: false,
      icon: <Event fontSize="small" />
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Important': return 'error';
      case 'Event': return 'primary';
      case 'Information': return 'warning';
      default: return 'default';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Important': return <School fontSize="small" />;
      case 'Event': return <Event fontSize="small" />;
      case 'Information': return <Info fontSize="small" />;
      default: return <Announcement fontSize="small" />;
    }
  };

  // Count unread announcements
  const unreadCount = announcements.filter(a => !a.read).length;

  return (
    <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Badge badgeContent={unreadCount} color="error" sx={{ mr: 1.5 }}>
            <Announcement sx={{ color: 'primary.main', fontSize: 24 }} />
          </Badge>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Recent Announcements
          </Typography>
        </Box>
        
        <List sx={{ p: 0 }}>
          {announcements.map((announcement, index) => (
            <React.Fragment key={index}>
              <ListItem 
                sx={{ 
                  borderRadius: '8px',
                  mb: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: announcement.read ? 'transparent' : 'rgba(255, 244, 229, 0.7)',
                  '&:hover': {
                    backgroundColor: announcement.read ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 244, 229, 0.9)',
                    boxShadow: 1,
                  },
                  p: 2
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', color: getTypeColor(announcement.type) }}>
                  {getTypeIcon(announcement.type)}
                </Box>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 'medium',
                          textDecoration: announcement.read ? 'none' : 'none',
                          color: announcement.read ? 'text.primary' : 'text.primary'
                        }}
                      >
                        {announcement.title}
                      </Typography>
                      {!announcement.read && (
                        <Chip 
                          label="New" 
                          size="small" 
                          color="error"
                          sx={{ ml: 1, height: 20 }}
                        />
                      )}
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 1, 
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {announcement.content}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {announcement.date}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < announcements.length - 1 && (
                <Box sx={{ mb: 2 }}>
                  <Divider />
                </Box>
              )}
            </React.Fragment>
          ))}
        </List>
        
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 'medium',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            View All Announcements
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnnouncementsWidget;