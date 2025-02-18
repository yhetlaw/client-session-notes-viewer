import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SessionNoteFormProps } from '../utils/types';

export const SessionNoteForm = ({ onSubmit, isSubmitting }: SessionNoteFormProps) => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { isValid },
  } = useForm<{ note: string }>({
    defaultValues: { note: '' },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        resetForm();
      })}
      mt={3}
    >
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
            handleSubmit((data) => {
              onSubmit(data);
              resetForm();
            })();
          }
        }}
      />
      <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
        Add Note
      </Button>
    </Box>
  );
};
