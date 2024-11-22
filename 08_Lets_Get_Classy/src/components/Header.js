import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const logoUrl =  LOGO_URL;
    const [btnName, setBtnName] = useState('Logout');

    useEffect(
        () => {}, 
        [btnName] 
    );

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logoUrl} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button style={{width: '80px'}} onClick={() => {
                        btnName === 'Logout' ? setBtnName('Login') : setBtnName('Logout')
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;