import ItemList from "./ItemList";

const ResCategory = ({data, isOpen, setIsOpenIdx}) => {
    const {title} = data;
    return(
        <div className='w-9/12 m-1'>
            <div className="flex justify-between bg-gray-100 p-3 border-b-4 cursor-pointer" onClick={() => {
                setIsOpenIdx();
            }}>
                {/* Accordian header */}
                <span className='font-bold text-lg'>{title + ' ('+ data.itemCards.length +')'}</span>
                <span>{isOpen ? '⬆️' : '⬇️'}</span>
            </div>
            {isOpen && <div className='border border-gray-200 p-2'>
                {/* Accordian body */}
                <ItemList items={data.itemCards}/>
            </div>}
        </div>
    )
}
export default ResCategory;