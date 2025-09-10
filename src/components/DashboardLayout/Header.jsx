// src/components/DashboardLayout/Header.jsx
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Avatar, 
  Menu, 
  MenuItem, 
  IconButton,
  Badge,
  Divider,
  Box
} from '@mui/material';
import { 
  Notifications, 
  Settings, 
  AccountCircle,
  DarkMode,
  LightMode,
  HelpOutline
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        ml: { sm: '240px' }, 
        backgroundColor: '#fff', 
        color: '#333',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #eee'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#333' }}>
          Student Dashboard
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton 
            color="inherit" 
            onClick={toggleDarkMode}
            sx={{ color: '#666' }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          
          <IconButton 
            color="inherit" 
            onClick={handleNotificationOpen}
            sx={{ color: '#666' }}
          >
            <Badge badgeContent={3} color="error" variant="dot">
              <Notifications />
            </Badge>
          </IconButton>
          
          <IconButton 
            color="inherit" 
            onClick={handleMenuOpen}
            sx={{ p: 0 }}
          >
            <Avatar 
              sx={{ 
                width: 36, 
                height: 36, 
                bgcolor: '#3b82f6',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              {user?.avatar || 'U'}
            </Avatar>
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                ml: -1,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ pointerEvents: 'none' }}>
              <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: '#3b82f6' }}>
                {user?.avatar || 'U'}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                  {user?.name || 'User'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email || 'user@example.com'}
                </Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <AccountCircle sx={{ mr: 2, color: 'text.secondary' }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Settings sx={{ mr: 2, color: 'text.secondary' }} />
              Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <HelpOutline sx={{ mr: 2, color: 'text.secondary' }} />
              Help & Support
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
              Logout
            </MenuItem>
          </Menu>

          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            PaperProps={{
              style: {
                maxHeight: 400,
                width: '350px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              },
            }}
          >
            <MenuItem sx={{ pointerEvents: 'none', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
              Notifications
            </MenuItem>
            <MenuItem>
              <Box sx={{ width: '100%' }}>
                <Typography variant="subtitle2">Assignment due tomorrow</Typography>
                <Typography variant="body2" color="text.secondary">Mathematics Problem Set 5</Typography>
                <Typography variant="caption" color="text.secondary">2 hours ago</Typography>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box sx={{ width: '100%' }}>
                <Typography variant="subtitle2">Grade posted</Typography>
                <Typography variant="body2" color="text.secondary">Computer Science Quiz - 92%</Typography>
                <Typography variant="caption" color="text.secondary">5 hours ago</Typography>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box sx={{ width: '100%' }}>
                <Typography variant="subtitle2">Announcement from Dean's Office</Typography>
                <Typography variant="body2" color="text.secondary">Final exam schedule published</Typography>
                <Typography variant="caption" color="text.secondary">1 day ago</Typography>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;