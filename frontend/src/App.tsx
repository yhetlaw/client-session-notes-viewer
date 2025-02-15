import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import './App.css';
import { useGetClients } from './api/queries';

function App() {
  const { data: clients } = useGetClients();
  console.log(clients);

  return (
    <>
      <h1>Hello</h1>
      <Button variant='contained'>Hello</Button>
    </>
  );
}

export default App;
