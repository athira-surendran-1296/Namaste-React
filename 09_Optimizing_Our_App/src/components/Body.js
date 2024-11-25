
import { useEffect, useState } from "react";
import ResCard from "../components/ResCard";
import { RES_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    const isOnline = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST_API);
        const jsonData = await data.json();
        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(isOnline === false) {
        return(<div>Looks like youy are offline, please check your internet connection</div>)
    }

    return (
        resList.length === 0 ?
            <Shimmer /> :
            <div className='body'>
                <div className="search">
                    <input value={searchTxt} onChange={(e) => { setSearchTxt(e.target.value) }} />
                    <button onClick={() => {
                        setFilteredResList(resList.filter(r => r.info.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())));
                    }}>Search</button>
                    <button onClick={() => { setFilteredResList(resList); setSearchTxt('') }}>Reset</button>
                </div>
                <div className='res-container'>
                    {filteredResList.map((restaurant) => {
                        return <Link to={'/restaurent/' + restaurant?.info?.id} key={restaurant?.info?.id}>
                            <ResCard res={restaurant?.info} />
                        </Link>
                    })}
                </div>
            </div>
    )
}
export default Body;