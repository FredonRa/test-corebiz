import * as React from 'react';

interface InputHeroProps {
    onChangeText?: (value: string) => void,
    placeholder?: string,
    typeInput?: string, 
    style?: React.CSSProperties,
    value: string
}

const InputHero: React.FC<InputHeroProps> = ({
    onChangeText = () => {},
    placeholder = "Ingrese el texto aquí",
    typeInput = "text",
    style = {},
    value
}) => {
    const [ textInput, setTextInput ] = React.useState<string>("");

    React.useEffect(() => {
        onChangeText(textInput)
    }, [textInput])

    return (  
        <div 
            className="container-input" 
            style={style}
        >
            <input 
                type={typeInput} 
                className="input"
                onChange={e => setTextInput(e.target.value)}   
                placeholder={placeholder} 
                value={value}
            />
        </div>  
    );
}
 
export default InputHero;