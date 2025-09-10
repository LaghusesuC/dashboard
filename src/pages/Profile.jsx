// src/pages/Profile.jsx
import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Avatar, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Button, 
  Chip,
  Grid  // Added Grid import
} from '@mui/material';
import { 
  Person, 
  Email, 
  School, 
  CalendarToday, 
  LocationOn, 
  Phone, 
  Edit, 
  Security, 
  Settings, 
  Help, 
  Logout 
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6">Please log in to view your profile</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        My Profile
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
                bgcolor: '#3b82f6',
                fontSize: 40,
                fontWeight: 'bold'
              }}
            >
              {user.avatar}
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {user.email}
            </Typography>
            <Chip label="Active Student" color="success" sx={{ mb: 3 }} />
            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="outlined" 
                startIcon={<Edit />}
                sx={{ textTransform: 'none' }}
              >
                Edit Profile
              </Button>
              <Button 
                variant="contained" 
                startIcon={<Settings />}
                sx={{ 
                  bgcolor: '#3b82f6',
                  '&:hover': { bgcolor: '#2563eb' },
                  textTransform: 'none'
                }}
              >
                Settings
              </Button>
            </Box>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, mt: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Account Security
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Security fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Password" 
                  secondary="Last changed 3 months ago"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Email Verification" 
                  secondary={user.email}
                />
                <Chip label="Verified" color="success" size="small" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Two-Factor Authentication" 
                  secondary="Not enabled"
                />
                <Chip label="Enable" color="primary" size="small" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Personal Information
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Full Name" 
                  secondary={user.name}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <Email fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Email Address" 
                  secondary={user.email}
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <School fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Student ID" 
                  secondary="STU2023001"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <CalendarToday fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Date of Birth" 
                  secondary="October 18, 2005"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Address" 
                  secondary="123 University Ave, Campus City, ST 12345"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <Phone fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Phone Number" 
                  secondary="+91 9344060788"
                />
              </ListItem>
            </List>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, mt: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Academic Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f0f9ff' }}>
                  <Typography variant="body2" color="text.secondary">Major</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3b82f6' }}>Computer Science</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f0fdf4' }}>
                  <Typography variant="body2" color="text.secondary">Minor</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981' }}>Mathematics</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#fffbeb' }}>
                  <Typography variant="body2" color="text.secondary">Expected Graduation</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>May 2027</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f5f3ff' }}>
                  <Typography variant="body2" color="text.secondary">Academic Advisor</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>Dr. Michael Chen</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, mt: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Support & Help
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Help fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Help Center" 
                  secondary="Visit our help center for answers to common questions"
                />
                <Button variant="outlined" size="small">Visit</Button>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <Email fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Contact Support" 
                  secondary="Send us an email for technical assistance"
                />
                <Button variant="outlined" size="small">Email Us</Button>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Logout" 
                  secondary="Sign out of your account"
                />
                <Button 
                  variant="contained" 
                  color="error" 
                  size="small"
                  onClick={logout}
                >
                  Logout
                </Button>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;