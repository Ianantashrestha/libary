import { FC } from "react";
import { ButtonProps } from "../props";

const Button:FC<ButtonProps> = (props) =>{
    const {children,wrapperClassName,title,loading} = props
    return(
        <div className={`action-button-wrapper ${wrapperClassName}`}>
            <button  {...props}>
                {
                    loading && <span>Loading</span>
                }
                <span className="button-title">{title ? title : children}</span>
            </button>
        </div>
    )
}

export default Button;