import { v4 as uuid } from 'uuid';

import { useDialogResult } from './index';
import useDialogContext from './useDialogContext';

export default function useDialog(): useDialogResult {
  const { addDialog } = useDialogContext();

  return (component, props) =>
    new Promise((resolve, reject) => addDialog(uuid(), { props, component, resolve, reject }));
}
