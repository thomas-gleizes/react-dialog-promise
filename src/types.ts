import React from 'react';

export declare type Component<Props = {}> = React.FunctionComponent<Props>;

export declare type ReactNode = React.ReactNode;

export declare type Dialog = {
  component: Component;
  props: any;
  resolve: (r: any) => void;
  reject: (r: any) => void;
};

export declare type DialogState = { [id: string]: Dialog };

export declare type DialogProps<Result = any> = {
  close: (result: Result) => void;
  isOpen: boolean;
};

export declare type DialogOptions = { timeout?: number };

export declare type DialogComponent<Props = {}, Result = any> = Component<
  DialogProps<Result> & Props
>;

export declare type DialogProviderProps = { children: ReactNode; options?: DialogOptions };

export declare type DialogContextValues = {
  dialogs: DialogState;
  addDialog: (id: string, dialog: Dialog) => void;
  removeDialog: (id: string) => void;
};

export declare type useDialogResult = <Props, Result>(
  component: DialogComponent<Props, Result>,
  props: Props
) => Promise<Result>;
