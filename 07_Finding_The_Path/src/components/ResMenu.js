import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const [resInfo, setRestInfo] = useState([]);
    const [menuInfo, setMenuInfo] = useState([]);
    const {resId} = useParams();

    const fetchResMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        setRestInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        setMenuInfo(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
        // console.log("res info", jsonData?.data?.cards[2]?.card?.card?.info);
        // console.log("menu info", jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
    }

    useEffect(() => {
        fetchResMenu();
    }, []);

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