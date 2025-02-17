import { Paper, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { ClientT } from '../utils/types';

export const ClientCard = ({ client }: { client: ClientT }) => (
  <Paper
    sx={{
      p: 2,
      mb: 2,
      '&:hover': {
        backgroundColor: 'action.hover',
      },
    }}
  >
    <MuiLink component={Link} to={`/clients/${client.id}`} underline="none">
      <Typography variant="subtitle1">{client.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {client.email}
      </Typography>
    </MuiLink>
  </Paper>
);
