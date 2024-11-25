import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
    const {resId} = useParams();
    const {resInfo, menuInfo} = useResMenu(resId); // CUSTOM HOOK
    const {name, avgRating, costForTwoMessage, cuisines, sla} = resInfo;

    return(
        resInfo.length === 0 ? <Shimmer /> : 
        <div>
            <h1>{name}</h1>
            <div>{cuisines.join(', ')}</div>
            <div>{avgRating} - {costForTwoMessage}</div>
            <div>{sla?.deliveryTime + 'minutes'}</div>
            <div>
                <h5>Menu</h5>
                <ul>
                    {menuInfo.map(item => {
                        return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ResMenu;