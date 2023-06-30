import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { UseDialogHook } from './types';
import useDialogContext from './useDialogContext';

export const useDialog: UseDialogHook = (dialog) => {
  const { addDialog, closeDialog, dialogs } = useDialogContext();

  const [uid] = useState(() => uuid());

  const resolveRef = useRef<PromiseLike<any> | any>();

  return {
    uid,
    isOpen: dialogs.hasOwnProperty(uid),
    open: function (props) {
      return new Promise((resolve, reject) => {
        resolveRef.current = resolve;
        addDialog(this.uid, { component: dialog, props, resolve, reject });
      });
    },
    close: function (result) {
      if (!this.isOpen) return;

      resolveRef.current(result);
      closeDialog(uid);
    },
  };
};
