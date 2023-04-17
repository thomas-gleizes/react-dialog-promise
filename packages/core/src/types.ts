import * as React from 'react';

export type Component<Props = {}> = React.FunctionComponent<Props>;

export type ReactNode = React.ReactNode;

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

export type DialogContextValues = {
  dialogs: DialogState;
  addDialog: (id: string, dialog: Dialog) => void;
  closeDialog: (id: string) => void;
};

export type UseDialogHookResult<Props, Result> = {
  open: (props: Props) => Promise<Result>;
  close: () => void;
  uid: string;
};

export type UseDialogHook = <Props, Result>(
  modal: DialogComponent<Props, Result>
) => UseDialogHookResult<Props, Result>;
