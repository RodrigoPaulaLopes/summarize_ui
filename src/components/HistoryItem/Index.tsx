import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

import { Box, Button, Typography } from '@mui/material';

interface HistoryItemProps {
  item: any;
  onSelect: (item: any) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item, onSelect }) => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const itemDate = new Date(date);
    
    const diffInMs = now.getTime() - itemDate.getTime();
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInMins < 60) {
      return `${diffInMins} minute${diffInMins === 1 ? '' : 's'} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }
  };

  const preview = item.content.length > 150 
    ? `${item.content.substring(0, 150)}...` 
    : item.content;

  return (
    <Box
      onClick={() => onSelect(item)}
      sx={{
      width: '100%',
      padding: 2,
      backgroundColor: 'white',
      border: '1px solid silver',
      borderRadius: 2,
      boxShadow: 1,
      '&:hover': {
        boxShadow: 4,
        borderColor: 'coral',
        cursor: 'pointer',
      },
      transition: 'all 0.3s',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'paynesGray' }}>
      <Clock size={16} style={{ color: 'coral' }} />
      <Typography variant="body2" fontWeight="medium">
        {formatDate(item.date)}
      </Typography>
      </Box>
      <Typography
      variant="body1"
      sx={{
        color: 'gunmetal',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      >
      {preview}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'coral', fontWeight: 'medium' }}>
      <Typography variant="body2">View details</Typography>
      <ArrowRight size={16} />
      </Box>
    </Box>

  );
};

export default HistoryItem;