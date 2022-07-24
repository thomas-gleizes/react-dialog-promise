import { useContext } from 'react';

import { DialogContext } from './DialogProvider';

export default function useDialogContext() {
  const values = useContext(DialogContext);

  if (!values) throw new Error('useDialogContext must be used within a DialogProvider');

  return values;
}
