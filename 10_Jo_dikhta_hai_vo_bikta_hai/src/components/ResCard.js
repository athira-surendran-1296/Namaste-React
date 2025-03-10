import { IMG_CDN_URL } from "../utils/constants";

const ResCard = (restaurant) => {
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla} = restaurant?.res;
    return (
        <div className='res-card m-4 p-4 w-[250px] shadow-lg rounded-md hover:bg-gray-100'>
            <img className='res-logo h-[257px]' 
                src={IMG_CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold">{name.length > 24 ? name.slice(20) + '...' : name}</h3>
            <p className="text-xs">
                {cuisines.length > 3 ? [cuisines[0], cuisines[1], cuisines[3]].join(', ') + '...' : cuisines.join(', ')}
            </p>
            <p>{avgRating}</p>
            <p>{costForTwo}</p>
            <p>{sla.deliveryTime + ' Minutes'}</p>
        </div>
    )
} 
export default ResCard;