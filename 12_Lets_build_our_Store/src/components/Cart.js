import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Cart</h1>
            {cartItems.length === 0 ? 
                <div className="text-sm">Your Cart is empty</div> :
                <div className="flex flex-col justify-center w-10/12">
                    <button 
                        onClick={handleClearCart}
                        className="bg-black text-white rounded-lg p-2 m-2 w-1/12">
                            {'Clear Cart'}
                    </button>
                    <div>
                        <ItemList items={cartItems}/>
                    </div>
                </div>
            }
        </div>
    )
}
export default Cart;