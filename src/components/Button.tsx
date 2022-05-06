import * as React from 'react';

interface ButtonProps {
    title?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    icon?: React.ReactNode
}
 
const Button: React.FC<ButtonProps> = ({
    title = "Enviar",
    style = {},
    onClick = () => null,
    type = "button",
    icon = <></>
}) => {
    return (  
        <button 
            className='button'
            style={style}
            onClick={onClick}
            type={type}
        >
            {icon}
            <span>{title}</span>
        </button>
    );
}
 
export default Button;