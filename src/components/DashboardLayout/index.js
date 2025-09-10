// src/components/DashboardLayout/index.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { Box } from '@mui/material';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          bgcolor: '#f5f5f5', 
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <Header />
        <Box sx={{ p: { xs: 2, sm: 3 }, mt: { xs: 8, sm: 8 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;