import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantList, IMG_CDN_URL, IMG_CDN_URL } from './Constants';

/**
 * Food app plan
 * =============
 * Header
    - Logo
    - Nav Items
 * Body
    - Restaurant Container
    - Restaurant Card
    - Dish Name
    - Image
    - Restaurant Name
    - Rating
    - Cuisines
    - Time to Deliver
 * Footer
    - Copyright
    - Links
    - Address
    - Contact
 */

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
    const logoUrl = 'https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All';
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

// Inline styling example (again a JS object)
// Not preffered way
const cardStyle = {
    backgroundColor: '#F0F0F0'
}

const ResCard = (restaurant) => {
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime} = restaurant.res.data;
    return (
        <div className='res-card' style={cardStyle}>
            <img className='res-logo' 
                src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating}</p>
            <p>{'₹ ' + costForTwo/100 + 'FOR TWO'}</p>
            <p>{deliveryTime}</p>
        </div>
    )
}

const Body = () => {
    const resList = restaurantList;
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {resList.map(restaurant => {
                    return <ResCard res={restaurant} key={restaurant.data.id}/>
                })}
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div>Footer</div>
    )
};
    

const AppLayout = () => <div className='app'>
    <Header />
    <Body />
    <Footer />
</div>

root.render(<AppLayout />);