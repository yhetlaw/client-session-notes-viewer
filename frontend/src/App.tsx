import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ClientDetailsPage } from './ClientDetailsPage/ClientDetailsPage';
import { Toaster } from 'sonner';
import { ClientsListPage } from './ClientsListPage/ClientsListPage';

function App() {
  return (
    <BrowserRouter>
      <Box p={3}>
        <nav>
          <Box display="flex" gap={2} mb={3}>
            <Button variant="outlined" component={Link} to="/">
              Home
            </Button>
          </Box>
        </nav>
        <Routes>
          <Route path="/" element={<ClientsListPage />} />
          <Route path="/clients/:id" element={<ClientDetailsPage />} />
        </Routes>
      </Box>
      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
