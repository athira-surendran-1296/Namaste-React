import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    // main reducer which consists of other smaller reducers
    reducer: { 
        cart: cartReducer,
    }
});

export default appStore;