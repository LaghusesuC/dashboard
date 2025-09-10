// src/components/Charts/GradeChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Card, CardContent, Typography, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GradeChart = () => {
  const data = {
    labels: ['Data Structure', 'Networking', 'Operating System', 'DBMS', 'Mathematics', 'System Design'],
    datasets: [
      {
        label: 'Your Grade',
        data: [92, 87, 94, 85, 88, 96],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: 'Class Average',
        data: [85, 82, 88, 83, 84, 91],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
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
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Grade (%)',
          font: {
            size: 14,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
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
          Grade Comparison
        </Typography>
        <Box sx={{ height: 'calc(100% - 40px)' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default GradeChart;