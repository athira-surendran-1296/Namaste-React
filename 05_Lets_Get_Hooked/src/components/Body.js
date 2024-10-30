
import { useState } from "react";
import ResCard from "../components/ResCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
    // State variable - resList
    const [resList, setResList] = useState(restaurantList); // This is nothing but array destructuring
    // i.e resList = useState(restaurantList)[0];
    // i.e setResList = useState(restaurantList)[1];
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='search'>
                <button onClick={() => { 
                    setResList(restaurantList.filter(res => res.data.avgRating > 4))
                }}> Top Rated Restaurents</button>
            </div>
            <div className='res-container'>
                {resList.map(restaurant => {
                    return <ResCard res={restaurant} key={restaurant.data.id}/>
                })}
            </div>
        </div>
    )
}
export default Body;