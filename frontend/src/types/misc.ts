export type ClientT = {
  id: number;
  name: string;
  email: string;
};

export type SessionNoteT = {
  id: number;
  clientId: number;
  date: string;
  note: string;
};
