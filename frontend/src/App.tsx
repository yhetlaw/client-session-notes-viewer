import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Link as MuiLink } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ClientDetailsPage } from './ClientDetailsPage';
import { ClientsListPage } from './ClientsListPage';

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
          <Route path='/' element={<ClientsListPage />} />
          <Route path='/clients/:id' element={<ClientDetailsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
