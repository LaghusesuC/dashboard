// src/pages/Dashboard.jsx
import React from 'react';
import { Grid, Typography, Box, Skeleton } from '@mui/material';
import StatCard from '../components/Cards/StatCard';
import GradeChart from '../components/Charts/GradeChart';
import AttendanceChart from '../components/Charts/AttendanceChart';
import ScheduleWidget from '../components/Widgets/ScheduleWidget';
import AnnouncementsWidget from '../components/Widgets/AnnouncementsWidget';
import QuickActionsWidget from '../components/Widgets/QuickActionsWidget';
import { 
  School as SchoolIcon, 
  Assignment as AssignmentIcon, 
  Grade as GradeIcon, 
  Event as EventIcon,
  TrendingUp,
  TrendingDown
} from '@mui/icons-material';
import { useDashboardData } from '../hooks/useDashboardData';

const Dashboard = () => {
  const { loading, courses, assignments, grades } = useDashboardData();

  if (loading) {
    return (
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          <Skeleton width={300} height={40} />
        </Typography>
        
        {/* Stats Row Skeleton */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 3 }} />
            </Grid>
          ))}
        </Grid>
        
        {/* Charts Row Skeleton */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" height={350} sx={{ borderRadius: 3 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" height={350} sx={{ borderRadius: 3 }} />
          </Grid>
        </Grid>
        
        {/* Widgets Row Skeleton */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rectangular" height={450} sx={{ borderRadius: 3 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rectangular" height={450} sx={{ borderRadius: 3 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rectangular" height={450} sx={{ borderRadius: 3 }} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  // Calculate assignments due soon and overdue
  const dueSoon = assignments.filter(a => a.status === 'Due Soon').length;
  const overdue = assignments.filter(a => a.status === 'Overdue').length;
  const totalAssignments = assignments.length;

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        Welcome back, Laghusesu!
      </Typography>
      
      {/* Stats Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Current GPA" 
            value={grades.overallGPA}
            subtitle={`Last Semester: ${grades.previousGPA}`}
            icon={<GradeIcon />}
            color="#3b82f6"
            trend={parseFloat(((grades.overallGPA - grades.previousGPA) * 100 / grades.previousGPA).toFixed(1))}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Active Courses" 
            value={courses.length}
            subtitle={`Total Credits: ${courses.reduce((sum, course) => sum + course.credits, 0)}`}
            icon={<SchoolIcon />}
            color="#10b981"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Assignments Due" 
            value={totalAssignments}
            subtitle={`${dueSoon} due soon • ${overdue} overdue`}
            icon={<AssignmentIcon />}
            color="#f59e0b"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Upcoming Events" 
            value="2" 
            subtitle="Career Fair, Club Meeting"
            icon={<EventIcon />}
            color="#8b5cf6"
          />
        </Grid>
      </Grid>
      
      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <GradeChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <AttendanceChart />
        </Grid>
      </Grid>
      
      {/* Widgets Row */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ScheduleWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnnouncementsWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <QuickActionsWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;