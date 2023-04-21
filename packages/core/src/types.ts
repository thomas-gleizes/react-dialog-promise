import { ReactNode, FunctionComponent } from 'react';

export type Component<Props = {}> = FunctionComponent<Props>;

export type Dialog<Props = any, Result = any> = {
  component: DialogComponent<Result>;
  props: Props;
  resolve: (r: Result) => void;
  reject: (r: any) => void;
};

export type DialogState = Record<string, Dialog>;

export type DialogProps<Result = any> = {
  close: (result: Result) => void;
  isOpen: boolean;
};

export type DialogOptions = { timeout?: number };

export type DialogComponent<Props = {}, Result = any> = Component<DialogProps<Result> & Props>;

export type DialogProviderProps = { children: ReactNode; options?: DialogOptions };
export type DialogContainerProps = {
  dialog: Dialog;
  close: () => void;
  options?: DialogOptions;
};

export type DialogContextValues = {
  addDialog: (id: string, dialog: Dialog) => void;
};

export type UseDialogHookResult<Props, Result> = {
  open: (props: Props) => Promise<Result>;
  uid: string;
};

export type UseDialogHook = <Props, Result>(
  modal: DialogComponent<Props, Result>
) => UseDialogHookResult<Props, Result>;
