import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // action : reducer function

        /** In Vannilla Redux (older version of redux), WE DONT'T MUTATE the state directly
         * returning new state value was mandatory
           addItem: (state, action) => {
                const newState = [...state];
                newState.items.push(action.payload);
                return newState;
           }
         */

        /** In REDUX TOOLKIT (the newer way), WE HAVE TO MUTATE THE STATE directly
         *  We also dont need to return the state, redux will take care of it automatically
         * 
         *  WE can return new state if we want
         * 
         * Redux toolkit uses IMMER JS Library to acheive the above logic (maintaining immutable state) 
         * 
           addItem: (state, action) => {
                state.items.push(action.payload); // We are mutating the state over here
           }
        */

        addItem: (state, action) => {
            // console.log('state', state); // Will not show proper value as its proxy obj
            console.log('state before add', current(state));
            state.items.push(action.payload); // We are mutating the state over here

        },
        removeItem: (state, action) => {
            state.items.pop(action.payload); // We are mutating the state over here
        },
        clearCart: (state, action) => {
            state.items.length = 0; // We are mutating the state over here 
            // return {items: []} // This will also work // returning new state

            // state = []; // Won't work as we are not mutating the value but only changing reference
            console.log('state before add', current(state));
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;