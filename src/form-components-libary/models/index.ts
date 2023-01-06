export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;

export type StoreValue = any;
export type Store = Record<string,StoreValue>;


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
  
  /**
   * Used by `setFields` config
   */
export interface FieldData extends Partial<Omit<InternalFieldData, 'name'>> {
    name: NamePath;
}

interface ValueUpdateInfo {
    type: 'valueUpdate';
    source: 'internal' | 'external';
}
  
interface ValidateFinishInfo {
    type: 'validateFinish';
}
  
interface ResetInfo {
    type: 'reset';
}
  
interface RemoveInfo {
    type: 'remove';
}
  
interface SetFieldInfo {
    type: 'setField';
    data: FieldData;
}
  

export type RuleType =
| 'string'
| 'number'
| 'boolean'
| 'method'
| 'regexp'
| 'integer'
| 'float'
| 'object'
| 'enum'
| 'date'
| 'url'
| 'hex'
| 'email';


export interface ValidateOptions {
    triggerName?: string;
    validateMessages?: ValidateMessages;
    /**
     * Recursive validate. It will validate all the name path that contains the provided one.
     * e.g. ['a'] will validate ['a'] , ['a', 'b'] and ['a', 1].
     */
    recursive?: boolean;
}

export type InternalValidateFields<Values = any> = (
    nameList?: NamePath[],
    options?: ValidateOptions,
) => Promise<Values>;

export type ValidateFields<Values = any> = (nameList?: NamePath[]) => Promise<Values>;

/** Only return partial when type is not any */
type RecursivePartial<T> = T extends object
  ? {
      [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
    }
  : any;


export interface ValidateErrorEntity<Values = any> {
    values: Values;
    errorFields: { name: InternalNamePath; errors: string[] }[];
    outOfDate: boolean;
}

  
export interface Callbacks<Values = any> {
    onValuesChange?: (changedValues: any, values: Values) => void;
    onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
    onFinish?: (values: Values) => void;
    onFinishFailed?: (errorInfo: ValidateErrorEntity<Values>) => void;
}

export interface FieldError {
    name: InternalNamePath;
    errors: string[];
    warnings: string[];
}

export interface FormInstance<Values = any> {
    getFieldValue: (name: NamePath) => StoreValue;
    getFieldsValue: (() => Values) &
      ((nameList: NamePath[] | true, filterFunc?: (meta: Meta) => boolean) => any);
    getFieldError: (name: NamePath) => string[];
    getFieldsError: (nameList?: NamePath[]) => FieldError[];
    getFieldWarning: (name: NamePath) => string[];
    isFieldsTouched: ((nameList?: NamePath[], allFieldsTouched?: boolean) => boolean) &
      ((allFieldsTouched?: boolean) => boolean);
    isFieldTouched: (name: NamePath) => boolean;
    isFieldValidating: (name: NamePath) => boolean;
    isFieldsValidating: (nameList: NamePath[]) => boolean;
    resetFields: (fields?: NamePath[]) => void;
    setFields: (fields: FieldData[]) => void;
    setFieldValue: (name: NamePath, value: any) => void;
    setFieldsValue: (values: RecursivePartial<Values>) => void;
    validateFields: ValidateFields<Values>;
    submit: () => void;
  }


type ValidateMessage = string | (() => string);
export interface ValidateMessages {
  default?: ValidateMessage;
  required?: ValidateMessage;
  enum?: ValidateMessage;
  whitespace?: ValidateMessage;
  date?: {
    format?: ValidateMessage;
    parse?: ValidateMessage;
    invalid?: ValidateMessage;
  };
  types?: {
    string?: ValidateMessage;
    method?: ValidateMessage;
    array?: ValidateMessage;
    object?: ValidateMessage;
    number?: ValidateMessage;
    date?: ValidateMessage;
    boolean?: ValidateMessage;
    integer?: ValidateMessage;
    float?: ValidateMessage;
    regexp?: ValidateMessage;
    email?: ValidateMessage;
    url?: ValidateMessage;
    hex?: ValidateMessage;
  };
  string?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  number?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  array?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  pattern?: {
    mismatch?: ValidateMessage;
  };
}
