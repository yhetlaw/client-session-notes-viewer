import { Box, Paper, Typography } from '@mui/material';
import { SessionNoteT } from '../utils/types';
import { SCROLL_BAR_STYLES } from '../utils/common';

export const SessionNotesList = ({ notes, isLoading }: { notes?: SessionNoteT[]; isLoading: boolean }) => {
  if (isLoading) return <Typography color="text.secondary">Loading session notes...</Typography>;
  if (!notes?.length) return <Typography color="text.secondary">No session notes available yet.</Typography>;

  return (
    <Box sx={{ ...SCROLL_BAR_STYLES, maxHeight: '400px', overflowY: 'auto', mb: 3 }}>
      {notes.map((note) => (
        <Paper
          key={note.id}
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: 'grey.50',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateX(4px)',
              bgcolor: 'grey.100',
            },
          }}
        >
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            {new Date(note.date).toLocaleDateString()}
          </Typography>
          <Typography>{note.note}</Typography>
        </Paper>
      ))}
    </Box>
  );
};
