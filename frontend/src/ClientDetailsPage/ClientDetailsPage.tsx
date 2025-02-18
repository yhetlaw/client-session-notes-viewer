import { Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useClient } from '../api/queries';
import { ClientInfo } from './ClientInfo';
import { SessionNotesList } from './SessionNotesList';
import { SessionNoteForm } from './SessionNoteForm';
import { useSessionNotes } from '../hooks/useSessionNotes';

export function ClientDetailsPage() {
  const { id } = useParams();
  const { data: client } = useClient(id!);
  const { sessionNotes, isLoading, isSubmitting, addNote } = useSessionNotes(client?.id ?? 0);

  if (!client) return <Typography>Client not found</Typography>;

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Client Details
      </Typography>
      <Paper sx={{ p: 3, maxWidth: 800 }}>
        <ClientInfo client={client} />
        <Box mt={4}>
          <Typography variant="h6" mb={2}>
            Session Notes
          </Typography>
          <SessionNotesList notes={sessionNotes} isLoading={isLoading} />
          <SessionNoteForm onSubmit={addNote} isSubmitting={isSubmitting} />
        </Box>
      </Paper>
    </Box>
  );
}
