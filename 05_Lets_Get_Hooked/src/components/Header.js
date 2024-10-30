import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const logoUrl =  LOGO_URL;
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logoUrl} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;