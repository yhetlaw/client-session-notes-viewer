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

export type NewClientForm = {
  name: string;
  email: string;
};

export type AddClientFormProps = {
  onSubmit: (data: NewClientForm) => void;
  isSubmitting: boolean;
};

export type AddClientModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewClientForm) => void;
  isSubmitting: boolean;
};
