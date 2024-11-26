
import { useEffect, useState } from "react";
import ResCard from "../components/ResCard";
import { RES_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";

const Body = () => {
    const fetchedResList = useResList();

    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    const isOnline = useOnlineStatus();

    useEffect(() => {
        setResList(fetchedResList);
        setFilteredResList(fetchedResList);
    }, [fetchedResList]);

    if(isOnline === false) {
        return(<div>Looks like youy are offline, please check your internet connection</div>)
    }

    return (
        resList.length === 0 ?
            <Shimmer /> :
            <div className='body'>
                <div className="search flex gap-3 m-2 p-2">
                    <input className="p-2 border border-solid border-black rounded-md" value={searchTxt} onChange={(e) => { setSearchTxt(e.target.value) }} />
                    <button className="px-4 py-2 bg-green-400 rounded-md" onClick={() => {
                        setFilteredResList(resList.filter(r => r.info.name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())));
                    }}>Search</button>
                    <button className="px-4 py-2 bg-yellow-300 rounded-md" onClick={() => { setFilteredResList(resList); setSearchTxt('') }}>Reset</button>
                </div>
                <div className='res-container flex flex-wrap'>
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