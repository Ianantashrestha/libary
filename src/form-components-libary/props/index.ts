import { ReactNode } from 'react'
import { Callbacks,FormInstance,Store,ValidateMessages } from '../models'
type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>;
export interface FormProps<Values = any> extends BaseFormProps {
    initialValues?: Store,
    form?: FormInstance<Values>,
    children: ReactNode,
    wrapperClassName?: string,
    className?: string,
    name?: string,
    onValuesChange?: Callbacks<Values>['onValuesChange'],
    onFieldsChange?: Callbacks<Values>['onFieldsChange'],
    onFinish?: Callbacks<Values>['onFinish'],
    onFinishFailed?: Callbacks<Values>['onFinishFailed'],
    validateTrigger?: string | string[] | false,
    validateMessages?: ValidateMessages;
}

export interface TextFieldProps {
    name: string,
    className?: string,
    wrapperClassName?: string,
    label?: string,
    placeholder?: string,
    type?: string
}

export interface ButtonProps {
    children?: ReactNode,
    wrapperClassName?: string,
    className?: string,
    loading?: boolean,
    title?: string
}