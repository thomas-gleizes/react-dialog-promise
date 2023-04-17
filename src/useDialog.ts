import { v4 as uuid } from 'uuid';

import { UseDialogHook } from '../types';
import useDialogContext from './useDialogContext';
import { useState } from 'react';

export const useDialog: UseDialogHook = (dialog) => {
  const { addDialog, closeDialog } = useDialogContext();

  const [uid] = useState<string>(uuid());

  return {
    open: (props) =>
      new Promise((resolve, reject) =>
        addDialog(uuid(), { component: dialog, props, resolve, reject })
      ),
    close: () => closeDialog(uid),
    uid,
  };
};
