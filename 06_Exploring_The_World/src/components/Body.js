
import { useEffect, useState } from "react";
import ResCard from "../components/ResCard";
import { RES_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST_API);
        const jsonData = await data.json();
        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (
        resList.length === 0 ? 
        <Shimmer /> :
        <div className='body'>
            <div className="search">
                <input value={searchTxt} onChange={(e) => { setSearchTxt(e.target.value) }}/>
                <button onClick={() => {
                    setFilteredResList(resList.filter(r =>   r.info.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())));
                }}>Search</button>
                <button onClick={() => { setFilteredResList(resList); setSearchTxt('') }}>Reset</button>
            </div>
            <div className='res-container'>
                {filteredResList.map((restaurant) => {
                    return <ResCard res={restaurant?.info} key={restaurant?.info?.id}/>
                })}
            </div>
        </div>
    )
}
export default Body;