import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        name: "myat su",
    }, 
    reducers: {
        testing2: (state) => {
            console.log("from cart " , state);
        },
    },
});

export const { testing2 } = cartSlice.actions;

export default cartSlice.reducer;