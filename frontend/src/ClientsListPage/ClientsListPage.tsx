import { Box, Paper, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useClients, useAddClient } from '../api/queries';
import { toast } from 'sonner';
import React from 'react';
import { AddClientForm } from './AddClientForm';
import { NewClientForm } from '../utils/types';
import { FLOATING_BUTTON_STYLES } from '../utils/common';
import { AddClientModal } from './AddClientModal';
import { ClientsList } from './ClientsList';

export function ClientsListPage() {
  const navigate = useNavigate();
  const { data: clients, isLoading } = useClients();
  const { mutate: addClient, isPending } = useAddClient();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (data: NewClientForm) => {
    addClient(data, {
      onSuccess: (response: { data: { id: string } }) => {
        setIsModalOpen(false);
        toast.success('Client added successfully!');
        navigate(`/clients/${response.data.id}`);
      },
    });
  };

  return (
    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={10}>
      <Box flex={1} width={{ xs: '100%', sm: '40%' }} mb={{ xs: 2, sm: 0 }}>
        <Typography variant="h5" mb={3}>
          Clients
        </Typography>
        <ClientsList clients={clients ?? []} isLoading={isLoading} />
      </Box>
      {isMobile ? (
        <>
          <Button variant="contained" onClick={() => setIsModalOpen(true)} sx={FLOATING_BUTTON_STYLES}>
            +
          </Button>
          <AddClientModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
            isSubmitting={isPending}
          />
        </>
      ) : (
        <Box flex={1}>
          <Typography variant="h5" mb={3}>
            Add New Client
          </Typography>
          <Paper sx={{ p: 3 }}>
            <AddClientForm onSubmit={handleSubmit} isSubmitting={isPending} />
          </Paper>
        </Box>
      )}
    </Box>
  );
}
