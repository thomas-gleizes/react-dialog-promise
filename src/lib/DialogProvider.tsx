import React, { createContext, useState } from 'react';

import type {
  Component,
  Dialog,
  DialogContextValues,
  DialogProviderProps,
  DialogState,
} from '../index';
import DialogWrapper from './DialogWrapper';

export const DialogContext = createContext<DialogContextValues>({} as any);

const DialogProvider: Component<DialogProviderProps> = ({ children, options }) => {
  const [dialogs, setDialogs] = useState<DialogState>({});

  const addDialog = (id: string, dialog: Dialog) => setDialogs({ ...dialogs, [id]: { ...dialog } });

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

export default DialogProvider;
