import { useEffect, useState } from "react";
import { RES_LIST_API } from "./constants";

const useResList = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST_API);
        const jsonData = await data.json();
        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return resList;
}
export default useResList;