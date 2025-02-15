import { Box, Link as MuiLink, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useClients } from './api/queries';

export function ClientsListPage() {
  const { data: clients } = useClients();

  return (
    <>
      <Typography variant='h4' mb={3}>
        Clients
      </Typography>
      <Box display={'flex'} gap={2}>
        {clients?.map((client) => (
          <Paper key={client.id} sx={{ p: 2 }}>
            <MuiLink component={Link} to={`/clients/${client.id}`} sx={{ textDecoration: 'none' }}>
              <Typography variant='h6'>{client.name}</Typography>
            </MuiLink>
          </Paper>
        ))}
      </Box>
    </>
  );
}
