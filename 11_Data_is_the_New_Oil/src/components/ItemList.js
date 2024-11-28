import { IMG_CDN_URL, NON_VEG_IMG_URL, VEG_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {
                items.map(item => {
                    const { id, isVeg, name, defaultPrice, price, ratings, description, imageId } = item?.card?.info;
                    return (
                        <div className="border-b flex justify-between p-3 gap-2" key={id}>
                            <div className="text-left w-10/12">
                                <div className="w-5 pb-1">
                                    {isVeg ? <img src={VEG_IMG_URL} /> : <img src={NON_VEG_IMG_URL} />}
                                </div>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm font-semibold">₹ {defaultPrice ? defaultPrice / 100 : price / 100}</div>
                                {ratings?.aggregatedRating?.rating && <div className="py-2 flex">
                                    <span>{ratings?.aggregatedRating?.rating}</span>
                                    <span>{'⭐'}</span>
                                    <span className="text-gray-500">&nbsp;{'(' + ratings?.aggregatedRating?.ratingCountV2 + ')'}</span>
                                </div>}
                                <div className="text-gray-500 text-sm font-semibold">{description}</div>
                            </div>
                            <div className="relative w-2/12">
                                <img className="w-[156px] h-[144px] object-cover" src={IMG_CDN_URL + imageId }/>
                                <div className="absolute bottom-[-5px] left-12">
                                    <button className="text-lg font-bold bg-white text-green-600 px-3 py-1 rounded-md border border-green-600">
                                        {'Add'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ItemList;