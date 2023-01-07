import React from 'react'
import { FormProps } from '../props'
import { FormInstance } from '../models'
const Form:React.ForwardRefRenderFunction<FormInstance, FormProps> = ({
    wrapperClassName,
    name,
    children,
    initialValues,
    form,
    onFinish,
    ...restProps
},ref) =>{
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        event.stopPropagation()

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