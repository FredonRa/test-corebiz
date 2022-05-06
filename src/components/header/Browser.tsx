import * as React from 'react';
import { BiSearchAlt2 } from "react-icons/bi"


const InputHero: React.FC = () => {
    const [ textInput, setTextInput ] = React.useState<string>("");

    return (  
        <div id="browser">
            <input 
                type="text" 
                placeholder="¿Qu&eacute; est&aacute;s buscando?"
                onChange={e => setTextInput(e.target.value)}    
            />
            <BiSearchAlt2 />
        </div>  
    );
}
 
export default InputHero;