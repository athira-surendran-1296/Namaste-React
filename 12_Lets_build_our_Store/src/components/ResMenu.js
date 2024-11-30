import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
    const {resId} = useParams();
    const {resInfo, menuInfo} = useResMenu(resId); // CUSTOM HOOK
    const {name, avgRating, costForTwoMessage, cuisines, sla} = resInfo;

    const [isOpenIdx, setIsOpenIdx] = useState(0);
    const categories = menuInfo && menuInfo.length ? menuInfo.filter(item => item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') : [];

    return(
        resInfo.length === 0 ? <Shimmer /> : 
        <div className="text-center mt-2">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="text-sm mb-5">{cuisines.join(', ')}</div>
            <div className="flex gap-2 justify-center align-middle mb-5">
                <span className="bg-green-600 rounded-md p-2 text-white">
                    {avgRating}
                </span> 
                <span className="bg-yellow-300 rounded-md p-2 text-black">
                    {costForTwoMessage}
                </span>
                <span className="bg-blue-300 rounded-md p-2 text-black">
                    {sla?.deliveryTime + ' minutes'}
                </span>
            </div>
            <div>
                <h5 className="font-bold">Menu</h5>
                <ul className="flex flex-col justify-center items-center">
                    {
                        /** Controlled coponent */
                        categories.map((category,idx) => 
                                            <ResCategory 
                                                key={idx} 
                                                data={category?.card?.card}
                                                isOpen={isOpenIdx === idx ? true : false}
                                                setIsOpenIdx={() => {
                                                    isOpenIdx === idx ?
                                                    setIsOpenIdx(null) :
                                                    setIsOpenIdx(idx)
                                                }}
                                            />
                                            
                                      )
                    }
                </ul>
            </div>
        </div>
    );
};

export default ResMenu;