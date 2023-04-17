import React, { createContext, useEffect, useState } from 'react';

import DialogWrapper from './DialogWrapper';
import type {
  Component,
  Dialog,
  DialogContextValues,
  DialogProviderProps,
  DialogState,
} from './types';

export const DialogContext = createContext<DialogContextValues>({} as any);

export const DialogProvider: Component<DialogProviderProps> = ({ children, options }) => {
  const [dialogs, setDialogs] = useState<DialogState>({});

  useEffect(() => console.log('Dialogs', dialogs), [dialogs]);

  const addDialog = (id: string, dialog: Dialog) => {
    setDialogs({ ...dialogs, [id]: dialog });
  };

  const closeDialog = (id: string) => {
    delete dialogs[id];
    setDialogs({ ...dialogs });
  };

  return (
    <DialogContext.Provider value={{ dialogs, closeDialog: closeDialog, addDialog }}>
      {children}
      <DialogWrapper options={options} />
    </DialogContext.Provider>
  );
};
