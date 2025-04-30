import React from 'react';
import { Trash2 } from 'lucide-react';
import { Box, Button, Typography } from '@mui/material';
import HistoryItem from '../HistoryItem/Index';

interface HistoryProps {
  items: any;
  onSelectItem: (item: any) => void;
  onClearHistory: () => void;
}

const History: React.FC<HistoryProps> = ({ items, onSelectItem, onClearHistory }) => {
  if (items.length === 0) {
    return (
      <Box className="p-8 text-center text-paynes-gray border-2 border-dashed border-silver rounded-lg">
        <Typography className="text-lg">No history yet. Processed texts will appear here.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box className="flex justify-between items-center mb-6">
        <Typography className="text-xl font-semibold text-gunmetal">Recent Texts</Typography>
        <Button
          onClick={onClearHistory}
          className="flex items-center gap-2 px-4 py-2 text-sm text-coral hover:bg-coral/10 rounded-lg transition-colors"
        >
          <Trash2 size={16} />
          <Typography>Clear history</Typography>
        </Button>
      </Box>
      
      <Box className="grid gap-4">
        {items.map((item) => (
          <HistoryItem key={item.id} item={item} onSelect={onSelectItem} />
        ))}
      </Box>
    </Box>
  );
};

export default History;