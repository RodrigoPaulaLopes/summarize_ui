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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" color="textPrimary">Recent Texts</Typography>
        <Button
          onClick={onClearHistory}
          variant="outlined"
          color="primary"
          startIcon={<Trash2 size={16} />}
        >
          Clear history
        </Button>
      </Box>

      <Box display="grid" gap={2}>
        {items.map((item) => (
          <HistoryItem key={item.id} item={item} onSelect={onSelectItem} />
        ))}
      </Box>
    </Box>
  );
};

export default History;