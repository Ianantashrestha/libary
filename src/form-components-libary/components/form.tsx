import React, {FC} from 'react'
import { FormProps } from '../props'
import { FormInstance } from '../models'

const Form:React.ForwardRefRenderFunction<FormInstance, FormProps> = (FormProps,ref) =>{
    const {children,wrapperClassName,...restProps} = FormProps

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{

    }

    return(
       <div className={`form-wrapper ${wrapperClassName}`}>
            <form {...restProps} onSubmit = {onSubmit}>
                {children}
            </form>
       </div>
    )
}

export default Form