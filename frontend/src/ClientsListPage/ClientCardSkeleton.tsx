import { Card, CardContent, Skeleton } from '@mui/material';

export const ClientCardSkeleton = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Skeleton variant="text" width="40%" height={32} />
      <Skeleton variant="text" width="60%" sx={{ mt: 1 }} />
    </CardContent>
  </Card>
);
