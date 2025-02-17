import { Modal, Paper, Typography } from '@mui/material';
import { AddClientModalProps } from '../utils/types';
import { AddClientForm } from './AddClientForm';

export const AddClientModal = ({ isOpen, onClose, onSubmit, isSubmitting }: AddClientModalProps) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="add-client-modal"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Paper sx={{ p: 4, maxWidth: '500px', width: '90%' }}>
      <Typography variant="h6" mb={3}>
        Add New Client
      </Typography>
      <AddClientForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </Paper>
  </Modal>
);
