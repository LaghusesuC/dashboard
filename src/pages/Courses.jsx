// src/pages/Courses.jsx
import React from 'react';
import { Grid, Typography, Box, Paper, Tabs, Tab, Button } from '@mui/material';
import CourseCard from '../components/Cards/CourseCard';
import { useDashboardData } from '../hooks/useDashboardData';
import { Add } from '@mui/icons-material';

const Courses = () => {
  const { loading, courses } = useDashboardData();
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredCourses = tabValue === 0 ? 
    courses : 
    tabValue === 1 ? 
    courses.filter(c => c.status === 'Active') : 
    courses.filter(c => c.grade);

  if (loading) {
    return (
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          <div className="loading">Loading Courses...</div>
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Paper sx={{ height: 350, p: 2, borderRadius: 3 }} className="loading" />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          My Courses
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          sx={{ 
            bgcolor: '#3b82f6',
            '&:hover': { bgcolor: '#2563eb' },
            textTransform: 'none',
            borderRadius: 2
          }}
        >
          Add Course
        </Button>
      </Box>
      
      <Tabs 
        value={tabValue} 
        onChange={handleChange} 
        sx={{ mb: 3 }}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All Courses" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
      
      {filteredCourses.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No courses found in this category
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Courses;