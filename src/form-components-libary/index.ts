import React from "react"
import { FormInstance } from "./models";
import { FormProps } from "./props";
import {
    Form,
    TextField,
    Button
} from "./components"

const InternalForm = React.forwardRef<FormInstance, FormProps>(Form) as <Values = any>(
    props: FormProps<Values> & { ref?: React.Ref<FormInstance<Values>> },
  ) => React.ReactElement;

type InternalFormType = typeof InternalForm;

interface RefFormType extends InternalFormType {
    TextField: typeof TextField;
}

const RefForm: RefFormType = InternalForm as RefFormType;

RefForm.TextField = TextField

export{
    TextField,
    Button
}

export default RefForm