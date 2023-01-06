import {FC} from 'react'
import { TextFieldProps } from '../props'

const TextField:FC<TextFieldProps> = (props) =>{
    const {wrapperClassName,label} = props
    return(
        <div className={`form-group-wrapper ${wrapperClassName || null}`}>
            {
                label && <div className="form-label-wrapper">
                    <label className='form-label'>{label}</label>
                </div>
            }
             <div className="form-input-wrapper">
                    <input {...props}  />
             </div>
        </div>
    )
}

export default TextField;