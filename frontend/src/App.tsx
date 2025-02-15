import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Link as MuiLink, Paper, Typography } from '@mui/material';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { useClient, useClients } from './api/queries';

function ClientsList() {
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

function ClientDetails() {
  const { id } = useParams();
  const { data: client } = useClient(id!);

  if (!client) {
    return <Typography>Client not found</Typography>;
  }

  return (
    <Box>
      <Typography variant='h4' mb={3}>
        Client Details
      </Typography>
      <Paper sx={{ p: 3, maxWidth: 800 }}>
        <Typography variant='h5' mb={2}>
          {client.name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {client.email}
        </Typography>

        <Box mt={4}>
          <Typography variant='h6' mb={2}>
            Session Notes
          </Typography>
          <Typography color='text.secondary'>No session notes available yet.</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Box p={3}>
        <nav>
          <Box display='flex' gap={2} mb={3}>
            <MuiLink component={Link} to='/'>
              Home
            </MuiLink>
          </Box>
        </nav>
        <Routes>
          <Route path='/' element={<ClientsList />} />
          <Route path='/clients/:id' element={<ClientDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
