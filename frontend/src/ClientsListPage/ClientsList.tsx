import { Box } from '@mui/material';
import { ClientT } from '../utils/types';
import { ClientCard } from './ClientCard';
import { SCROLL_BAR_STYLES } from '../utils/misc';

export const ClientsList = ({ clients }: { clients: ClientT[] }) => (
  <Box
    sx={{
      maxHeight: { xs: 'calc(100vh - 250px)', sm: 'calc(100vh - 100px)' },
      overflowY: 'auto',
      ...SCROLL_BAR_STYLES,
    }}
  >
    {clients?.map((client) => (
      <ClientCard key={client.id} client={client} />
    ))}
  </Box>
);
