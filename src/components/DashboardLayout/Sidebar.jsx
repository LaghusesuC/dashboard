// src/components/DashboardLayout/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon, 
  School, 
  Assignment, 
  Grade, 
  Person,
  Menu as MenuIcon,
  ChevronLeft,
  Home as HomeIcon
} from '@mui/icons-material';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  IconButton,
  Toolbar,
  Typography,
  Box,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Courses', icon: <School />, path: '/courses' },
  { text: 'Assignments', icon: <Assignment />, path: '/assignments' },
  { text: 'Grades', icon: <Grade />, path: '/grades' },
  { text: 'Profile', icon: <Person />, path: '/profile' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          backgroundColor: '#1a202c',
          color: '#fff',
          borderRight: '1px solid #333',
        },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, py: 2 }}>
        {open && (
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            StudentDash
          </Typography>
        )}
        <IconButton 
          onClick={toggleDrawer} 
          sx={{ 
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          {open ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mx: 1 }} />
      
      <List sx={{ mt: 2, px: 1 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path}
            key={item.text}
            sx={{
              backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              borderRadius: '8px',
              mb: 1,
              px: 2,
              py: 1.5,
            }}
          >
            <ListItemIcon sx={{ 
              color: location.pathname === item.path ? '#3b82f6' : '#fff', 
              minWidth: 40,
              justifyContent: 'center'
            }}>
              {item.icon}
            </ListItemIcon>
            {open && (
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  color: location.pathname === item.path ? '#3b82f6' : '#fff'
                }} 
              />
            )}
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      {open && (
        <Box sx={{ p: 2, pt: 1 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block', mb: 1 }}>
            Need Help?
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'medium' }}>
            support@edudash.edu
          </Typography>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;