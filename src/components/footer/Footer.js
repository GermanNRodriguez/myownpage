import React from 'react';
import './styleFooter.scss'
import './wave.css'

const Footer = ({fecha}) => {
    // aca aplica destructuring
    return ( 
    <div>
        
        
        
        <div className="footer">
        <div className="item">
                <span className="material-icons">
                    phone_enabled
                </span>
                <span className="textItem">+54 01115 9 6474-2324 </span>
            </div>
            <div className="item">
                <span className="material-icons">
                    email
                </span>
                <span className="textItem">germanrodriguez@hotmail.com</span>
                </div>
            <div className="item">
                <span className="material-icons">
                    inventory
                </span >
                <a href="https://github.com/GermanNRodriguez" className="textItem link">Github</a>
            </div>
        </div>
    </div>
        
            

     );
}
export default Footer;