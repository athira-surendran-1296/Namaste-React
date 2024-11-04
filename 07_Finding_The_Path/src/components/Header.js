import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const logoUrl =  LOGO_URL;
    const [btnName, setBtnName] = useState('Logout');

    // If use effect is called without a dependency array then it is
    // called on every render

    // If use effect is called with empty dependency array [], it is
    // called only on the initial load

    // We have a dependency, then its called only on change of the dependency
    useEffect(
        () => { console.log("use effect called") }, // 1st argument - callback function
        [btnName] // 2nd argument - dependency array
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