// src/pages/Grades.jsx
import React from 'react';
import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Grid } from '@mui/material';
import GradeChart from '../components/Charts/GradeChart';
import { useDashboardData } from '../hooks/useDashboardData';

const Grades = () => {
  const { loading, grades } = useDashboardData();

  const getGradeColor = (grade) => {
    if (grade >= 90) return 'success';
    if (grade >= 80) return 'primary';
    if (grade >= 70) return 'warning';
    return 'error';
  };

  const getLetterGrade = (grade) => {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
  };

  if (loading) {
    return (
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          <div className="loading">Loading Grades...</div>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: 350, p: 2, borderRadius: 3 }} className="loading" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: 400, p: 2, borderRadius: 3 }} className="loading" />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        My Grades
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Academic Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f0f9ff' }}>
                  <Typography variant="body2" color="text.secondary">Current GPA</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3b82f6' }}>{grades.overallGPA}</Typography>
                  <Typography variant="body2" sx={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <span>↑</span> {(grades.overallGPA - grades.previousGPA).toFixed(2)} from last semester
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f0fdf4' }}>
                  <Typography variant="body2" color="text.secondary">Class Rank</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#10b981' }}>Top 15%</Typography>
                  <Typography variant="body2" color="text.secondary">Among 245 students</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#fffbeb' }}>
                  <Typography variant="body2" color="text.secondary">Credits Completed</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>48/120</Typography>
                  <Typography variant="body2" color="text.secondary">40% of degree</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f5f3ff' }}>
                  <Typography variant="body2" color="text.secondary">Semester Progress</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>85%</Typography>
                  <Typography variant="body2" color="text.secondary">Almost there!</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <GradeChart />
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Grades by Subject
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Subject</strong></TableCell>
                <TableCell align="right"><strong>Your Grade</strong></TableCell>
                <TableCell align="right"><strong>Class Average</strong></TableCell>
                <TableCell align="right"><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.bySubject.map((subject, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {subject.subject}
                  </TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={`${subject.grade}% (${getLetterGrade(subject.grade)})`} 
                      color={getGradeColor(subject.grade)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {subject.classAvg}%
                  </TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={subject.grade > subject.classAvg ? 'Above Average' : 'Below Average'} 
                      color={subject.grade > subject.classAvg ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Grades;