// src/pages/Assignments.jsx
import React from 'react';
import { Grid, Typography, Box, Paper, Tabs, Tab, Button, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import AssignmentCard from '../components/Cards/AssignmentCard';
import { useDashboardData } from '../hooks/useDashboardData';
import { Add, FilterList } from '@mui/icons-material';

const Assignments = () => {
  const { loading, assignments } = useDashboardData();
  const [tabValue, setTabValue] = React.useState(0);
  const [filter, setFilter] = React.useState('all');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredAssignments = () => {
    let filtered = [...assignments];
    
    // Apply tab filter
    if (tabValue === 1) {
      filtered = filtered.filter(a => a.status === 'Completed');
    } else if (tabValue === 2) {
      filtered = filtered.filter(a => a.status === 'Overdue' || a.status === 'Due Soon');
    }
    
    // Apply priority filter
    if (filter !== 'all') {
      filtered = filtered.filter(a => a.priority === filter);
    }
    
    return filtered;
  };

  const filteredAssignments = getFilteredAssignments();

  if (loading) {
    return (
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          <div className="loading">Loading Assignments...</div>
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} key={i}>
              <Paper sx={{ height: 180, p: 2, borderRadius: 3 }} className="loading" />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          My Assignments
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={filter}
              label="Priority"
              onChange={handleFilterChange}
              startAdornment={<FilterList fontSize="small" sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">All Priorities</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
            </Select>
          </FormControl>
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
            Add Assignment
          </Button>
        </Box>
      </Box>
      
      <Tabs 
        value={tabValue} 
        onChange={handleChange} 
        sx={{ mb: 3 }}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All Assignments" />
        <Tab label="Completed" />
        <Tab label="Due Soon/Overdue" />
      </Tabs>
      
      <Grid container spacing={3}>
        {filteredAssignments.map((assignment) => (
          <Grid item xs={12} key={assignment.id}>
            <AssignmentCard assignment={assignment} />
          </Grid>
        ))}
      </Grid>
      
      {filteredAssignments.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No assignments found with the current filters
          </Typography>
          <Button 
            variant="outlined" 
            sx={{ mt: 2 }}
            onClick={() => {
              setTabValue(0);
              setFilter('all');
            }}
          >
            Clear Filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Assignments;