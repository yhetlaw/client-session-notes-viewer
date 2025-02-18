export const SCROLL_BAR_STYLES = {
  '&::-webkit-scrollbar': { width: '8px' },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
    '&:hover': { background: '#666' },
  },
};

export const FLOATING_BUTTON_STYLES = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  borderRadius: '50%',
  width: 56,
  height: 56,
  minWidth: 56,
} as const;
