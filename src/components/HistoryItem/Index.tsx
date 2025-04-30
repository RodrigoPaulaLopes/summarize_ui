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

  const preview = item.originalText.length > 150 
    ? `${item.originalText.substring(0, 150)}...` 
    : item.originalText;

  return (
    <Button
      onClick={() => onSelect(item)}
      className="w-full text-left p-6 bg-white border border-silver rounded-lg hover:border-coral hover:shadow-lg transition-all duration-200"
    >
      <Box className="flex items-center gap-2 text-sm text-paynes-gray mb-3">
        <Clock size={16} />
        <Typography>{formatDate(item.createdAt)}</Typography>
      </Box>
      <Typography className="text-gunmetal mb-4 line-clamp-3">{preview}</Typography>
      <Box className="flex items-center gap-2 text-coral font-medium">
        <Typography>View details</Typography>
        <ArrowRight size={16} />
      </Box>
    </Button>
  );
};

export default HistoryItem;