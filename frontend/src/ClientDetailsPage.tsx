import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAddSessionNote, useClient, useClientSessionNotes } from './api/queries';

export function ClientDetailsPage() {
  const { id } = useParams();
  const { data: client } = useClient(id!);
  const [newNote, setNewNote] = useState('');
  const { mutate: addSessionNote, isPending, isSuccess } = useAddSessionNote();
  const { data: sessionNotes, refetch } = useClientSessionNotes(client?.id as number);

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    const newSessionNote = { clientId: client?.id ?? 0, note: newNote, date: new Date().toISOString() };
    if (newNote.trim()) addSessionNote(newSessionNote, { onSuccess: () => setNewNote('') });
  };

  useEffect(() => {
    refetch();
  }, [isSuccess, refetch]);

  if (!client) return <Typography>Client not found</Typography>;

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Client Details
      </Typography>
      <Paper sx={{ p: 3, maxWidth: 800 }}>
        <Typography variant="h5" mb={2}>
          {client.name}
        </Typography>
        <Typography mb={2}>
          <strong>Email:</strong> {client.email}
        </Typography>
        <Box mt={4}>
          <Typography variant="h6" mb={2}>
            Session Notes
          </Typography>
          {sessionNotes ? (
            sessionNotes.map((note) => (
              <Paper key={note.id} sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                <Typography variant="caption" color="text.secondary" display="block" mb={1}>
                  {new Date(note.date).toLocaleDateString()}
                </Typography>
                <Typography>{note.note}</Typography>
              </Paper>
            ))
          ) : (
            <Typography color="text.secondary">No session notes available yet.</Typography>
          )}
          <Box component="form" onSubmit={handleSubmitNote} mt={3}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="New Session Note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" disabled={!newNote.trim() || isPending}>
              Add Note
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
