// src/components/Charts/AttendanceChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Card, CardContent, Typography, Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = () => {
  const data = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [85, 5, 10],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(251, 191, 36, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(251, 191, 36, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    },
    cutout: '60%',
  };

  return (
    <Card sx={{ 
      height: '350px', // Fixed height instead of 100%
      borderRadius: 3, 
      boxShadow: 3, 
      p: 2, 
      border: '1px solid', 
      borderColor: 'divider' 
    }}>
      <CardContent sx={{ p: 0, height: '100%' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 3 }}>
          Attendance Record
        </Typography>
        <Box sx={{ 
          height: 'calc(100% - 80px)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <Pie data={data} options={options} />
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2, 
          gap: 3, 
          flexWrap: 'wrap' 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'rgba(34, 197, 94, 0.8)' }}></Box>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Present (85%)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.8)' }}></Box>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Absent (5%)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'rgba(251, 191, 36, 0.8)' }}></Box>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Late (10%)</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;