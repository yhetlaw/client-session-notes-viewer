import { Box, Skeleton } from '@mui/material';

export const SessionNotesSkeleton = () => (
  <Box>
    {Array.from({ length: 3 }).map((_, index) => (
      <Box key={index} sx={{ mb: 3 }}>
        <Skeleton variant="text" width="20%" height={24} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={60} />
      </Box>
    ))}
  </Box>
);
