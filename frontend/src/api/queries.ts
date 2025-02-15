import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetClients = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: () => axios.get('http://localhost:3001/clients').then(({ data }) => data),
  });
};
