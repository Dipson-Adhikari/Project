import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    itemPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            state.cartItems.push(item);
            state.itemPrice += item.price;
            state.totalPrice += item.price;
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;
            state.itemPrice = 0;
        },

        removeItem: (state, action) => {
            const itemId = action.payload;

            const item = state.cartItems.find(
                (item) => item.id === itemId
            );

            if (item) {
                state.totalPrice -= item.price;
                state.itemPrice -= item.price;

                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== itemId
                );
            }
        }
    }
});

export const {
    addToCart,
    clearCart,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;