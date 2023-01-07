export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;
export type StoreValue = any;
export type Store = Record<string, StoreValue>;

export interface Meta {
    touched: boolean;
    validating: boolean;
    errors: string[];
    warnings: string[];
    name: InternalNamePath;
}

export interface InternalFieldData extends Meta {
    value: StoreValue;
}

export interface FieldData extends Partial<Omit<InternalFieldData, 'name'>> {
    name: NamePath;
  }

export interface Callbacks<Values = any> {
    onFinish?: (values: Values) => void;
}

export type WatchCallBack = (values: Store, namePathList: InternalNamePath[]) => void;

export interface FormInstance<Values = any> {
    submit: () => void;
}