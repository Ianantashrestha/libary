import { ReactNode } from 'react'
import { FormInstance,Store,Callbacks} from '../models'
type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>;

export interface FormProps<Values = any> extends BaseFormProps {
    wrapperClassName?: string,
    name?:string,
    children: ReactNode,
    initialValues?: Store,
    form?: FormInstance<Values>,
    onFinish?: Callbacks<Values>['onFinish'];
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