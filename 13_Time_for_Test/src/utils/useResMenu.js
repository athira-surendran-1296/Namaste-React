import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

// This is a custom hook that takes care of fetching the data of Restaurent menu
const useResMenu = (resId) => {
    const [resInfo, setRestInfo] = useState([]);
    const [menuInfo, setMenuInfo] = useState([]);

    useEffect(() => {

        const fetchResMenu = async () => {
            const data = await fetch(MENU_URL + resId);
            const jsonData = await data.json();
            setRestInfo(jsonData?.data?.cards[2]?.card?.card?.info);
            setMenuInfo(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        }

        fetchResMenu();

    }, []) 

    return ({
        resInfo: resInfo,
        menuInfo: menuInfo
    })
}

export default useResMenu;