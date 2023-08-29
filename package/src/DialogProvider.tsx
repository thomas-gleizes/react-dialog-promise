import React, { createContext, useState } from 'react';

import DialogContainer from './DialogWrapper';
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

  const addDialog = (id: string, dialog: Dialog): void => {
    setDialogs((dialogs) => ({ ...dialogs, [id]: dialog }));
  };

  const closeDialog = (id: string) => {
    setDialogs((dialogs) => {
      delete dialogs[id];

      return { ...dialogs };
    });
  };

  return (
    <DialogContext.Provider value={{ addDialog, closeDialog, dialogs }}>
      {children}
      {Object.entries(dialogs).map(([uid, dialog]) => (
        <DialogContainer
          key={uid}
          dialog={dialog}
          close={() => closeDialog(uid)}
          options={options}
        />
      ))}
    </DialogContext.Provider>
  );
};
