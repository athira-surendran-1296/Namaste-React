import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
    const logoUrl =  LOGO_URL;
    const [btnName, setBtnName] = useState('Logout');
    const isOnline = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    useEffect(
        () => {}, 
        [btnName] 
    );

    return (
        <div className='flex justify-between shadow-md'>
            <div className='logo-container'>
                <img className='w-32' src={logoUrl} />
            </div>
            <div className='nav-items flex items-center'>
                <ul className="flex p-4 m-4 gap-4">
                    <li>{isOnline ? "🟢" : "🔴"}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
                    <li>Cart</li>
                    <li><button onClick={() => {
                        btnName === 'Logout' ? setBtnName('Login') : setBtnName('Logout')
                    }}>{btnName}</button></li>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;