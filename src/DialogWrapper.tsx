import React, { useState } from 'react';

import useDialogContext from './useDialogContext';
import { Component, Dialog, DialogOptions } from '../types';

const DEFAULT_TIMEOUT = 300;

declare type DialogContainer = Component<{
  id: string;
  dialog: Dialog;
  options?: DialogOptions;
}>;

declare type DialogWrapper = Component<{ options?: DialogOptions }>;

const DialogContainer: DialogContainer = ({ id, dialog, options }) => {
  const { closeDialog } = useDialogContext();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = (result: any) => {
    dialog.resolve(result);
    setIsOpen(false);

    window.setTimeout(() => closeDialog(id), options?.timeout || DEFAULT_TIMEOUT);
  };

  return <dialog.component isOpen={isOpen} close={handleClose} {...dialog.props} />;
};

const DialogWrapper: DialogWrapper = ({ options }) => {
  const { dialogs } = useDialogContext();

  return (
    <>
      {Object.entries<Dialog>(dialogs).map(([id, dialog], index) => (
        <DialogContainer key={index} id={id} dialog={dialog} options={options} />
      ))}
    </>
  );
};

export default DialogWrapper;
