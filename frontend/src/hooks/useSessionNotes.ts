import { useEffect } from 'react';
import { useAddSessionNote, useClientSessionNotes } from '../api/queries';
import { toast } from 'sonner';

export const useSessionNotes = (clientId: number) => {
  const { mutate: addSessionNote, isPending, isSuccess: isNoteAdded } = useAddSessionNote();
  const { data: sessionNotes, refetch: refetchSessionNotes } = useClientSessionNotes(clientId);

  useEffect(() => {
    refetchSessionNotes();
  }, [isNoteAdded, refetchSessionNotes]);

  const handleAddNote = (data: { note: string }) => {
    const newSessionNote = {
      clientId,
      note: data.note,
      date: new Date().toISOString(),
    };

    addSessionNote(newSessionNote, { onSuccess: () => toast.success('Note added successfully!') });
  };

  return {
    sessionNotes,
    isLoading: !sessionNotes,
    isSubmitting: isPending,
    addNote: handleAddNote,
  };
};
