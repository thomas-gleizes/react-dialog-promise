import React, { useState } from 'react';

import { Component, DialogContainerProps } from './types';

const DEFAULT_TIMEOUT = 300;

const DialogContainer: Component<DialogContainerProps> = ({ dialog, options, close }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = async (result: any) => {
    setIsOpen(false);

    setTimeout(() => {
      dialog.resolve(result);
      close();
    }, options?.timeout || DEFAULT_TIMEOUT);
  };

  return <dialog.component isOpen={isOpen} close={handleClose} {...dialog.props} />;
};

export default DialogContainer;
