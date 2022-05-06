import * as React from 'react';
import Button from './Button';
import { MdEmail } from 'react-icons/md';
import { BsHeadset } from 'react-icons/bs';
import LogoCorebiz from '../img/logo-footer.png';
import LogoVtex from '../img/logo-vtex.png';

interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (  
        <footer>
            <div className="ubication">
                <h2>Ubicación</h2>
                <p>Avenida Andrómeda, 2000, Blocco 6 e 8</p>
                <p>Aphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            <div className="contact">
                <Button 
                    title='Contáctanos'
                    icon={
                        <div className='container-icon'>
                            <MdEmail size={26} />
                        </div>
                    }
                />
                <Button 
                    title='Habla con un consultor' 
                    icon={
                        <div className='container-icon'>
                            <BsHeadset size={26} />
                        </div>
                    }
                />
            </div>
            <div className="end">
                <div className="developedBy">
                    <span>Desarrollado por</span>
                    <img src={LogoCorebiz} alt="logo de Corebiz" />
                </div>
                <div className="poweredBy">
                    <span>Powered by</span>
                    <img src={LogoVtex} alt="logo de VTEX" />
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;