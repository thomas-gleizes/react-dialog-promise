import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { UseDialogHook } from './types';
import useDialogContext from './useDialogContext';

export const useDialog: UseDialogHook = (dialog) => {
  const { addDialog } = useDialogContext();

  const [uid] = useState(() => uuid());

  return {
    uid,
    open: function (props) {
      return new Promise((resolve, reject) =>
        addDialog(this.uid, { component: dialog, props, resolve, reject })
      );
    },
  };
};
