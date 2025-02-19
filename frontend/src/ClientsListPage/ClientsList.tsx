import { Box } from '@mui/material';
import { ClientT } from '../utils/types';
import { ClientCard } from './ClientCard';
import { ClientCardSkeleton } from './ClientCardSkeleton';
import { SCROLL_BAR_STYLES } from '../utils/common';

export const ClientsList = ({ clients, isLoading }: { clients: ClientT[]; isLoading: boolean }) => (
  <Box
    sx={{
      maxHeight: { xs: 'calc(100vh - 250px)', sm: 'calc(100vh - 100px)' },
      overflowY: 'auto',
      ...SCROLL_BAR_STYLES,
    }}
  >
    {isLoading
      ? Array.from({ length: 5 }).map((_, index) => <ClientCardSkeleton key={index} />)
      : clients?.map((client) => <ClientCard key={client.id} client={client} />)}
  </Box>
);
