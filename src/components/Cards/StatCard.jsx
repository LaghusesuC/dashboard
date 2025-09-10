// src/components/Cards/StatCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, subtitle, icon, color = '#3b82f6', trend }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -5 }} 
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          borderRadius: 3, 
          boxShadow: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6,
          },
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6" color="textSecondary" gutterBottom sx={{ fontWeight: 500 }}>
                {title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: color }}>
                  {value}
                </Typography>
                {trend && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: trend > 0 ? '#10b981' : '#ef4444',
                      fontWeight: 'medium',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
                  </Typography>
                )}
              </Box>
              {subtitle && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
            <Box sx={{ 
              width: 56, 
              height: 56, 
              borderRadius: '16px', 
              backgroundColor: `${color}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
              boxShadow: `0 4px 12px ${color}20`
            }}>
              {icon}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;