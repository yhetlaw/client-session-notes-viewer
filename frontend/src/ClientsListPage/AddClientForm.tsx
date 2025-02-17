import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AddClientFormProps, NewClientForm } from '../utils/types';

export function AddClientForm({ onSubmit, isSubmitting }: AddClientFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewClientForm>({
    mode: 'onChange',
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={3}>
      <TextField
        label="Name"
        fullWidth
        {...register('name', { required: 'Name is required' })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button type="submit" variant="contained" disabled={!isValid || isSubmitting}>
        Add Client
      </Button>
    </Box>
  );
}
