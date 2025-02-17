import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAddSessionNote, useClient, useClientSessionNotes } from './api/queries';
import { useForm } from 'react-hook-form';

export function ClientDetailsPage() {
  const { id } = useParams();
  const { data: client } = useClient(id!);
  const { mutate: addSessionNote, isPending, isSuccess: isNoteAdded } = useAddSessionNote();
  const { data: sessionNotes, refetch: refetchSessionNotes } = useClientSessionNotes(client?.id as number);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<{ note: string }>({
    defaultValues: { note: '' },
  });

  const onSubmit = (data: { note: string }) => {
    const newSessionNote = {
      clientId: client?.id ?? 0,
      note: data.note,
      date: new Date().toISOString(),
    };
    addSessionNote(newSessionNote, { onSuccess: () => reset() });
  };

  useEffect(() => {
    refetchSessionNotes();
  }, [isNoteAdded, refetchSessionNotes]);

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
          <Box
            sx={{
              maxHeight: '400px',
              overflowY: 'auto',
              mb: 3,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
                '&:hover': {
                  background: '#666',
                },
              },
            }}
          >
            {!client ? (
              <Typography color="text.secondary">Loading client...</Typography>
            ) : !sessionNotes ? (
              <Typography color="text.secondary">Loading session notes...</Typography>
            ) : sessionNotes.length === 0 ? (
              <Typography color="text.secondary">No session notes available yet.</Typography>
            ) : (
              sessionNotes.map((note) => (
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
              ))
            )}
          </Box>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={3}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="New Session Note"
              {...register('note', { required: true })}
              margin="normal"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && isValid) {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
                }
              }}
            />
            <Button type="submit" variant="contained" disabled={!isValid || isPending}>
              Add Note
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
