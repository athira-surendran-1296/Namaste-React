import { IMG_CDN_URL } from "../utils/constants";

const ResCard = (restaurant) => {
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime} = restaurant.res.data;
    return (
        <div className='res-card'>
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
export default ResCard;