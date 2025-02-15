import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ClientT } from '../types/misc';

export const useClients = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: () => axios.get('http://localhost:3001/clients').then(({ data }) => data as ClientT[]),
  });
};

export const useClient = (id: string) => {
  return useQuery({
    queryKey: ['clients', id],
    queryFn: () => axios.get(`http://localhost:3001/clients/${id}`).then(({ data }) => data as ClientT),
  });
};

export const useSessionNotes = () => {
  return useQuery({
    queryKey: ['sessionNotes'],
    queryFn: () => axios.get('http://localhost:3001/sessionNotes').then(({ data }) => data as ClientT[]),
  });
};

export const useSessionNote = (id: string) => {
  return useQuery({
    queryKey: ['sessionNotes', id],
    queryFn: () => axios.get(`http://localhost:3001/sessionNotes/${id}`).then(({ data }) => data as ClientT),
  });
};
