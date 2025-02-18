import { Typography } from '@mui/material';
import { ClientT } from '../utils/types';

export const ClientInfo = ({ client }: { client: ClientT }) => (
  <>
    <Typography variant="h5" mb={2}>
      {client.name}
    </Typography>
    <Typography mb={2}>
      <strong>Email:</strong> {client.email}
    </Typography>
  </>
);
