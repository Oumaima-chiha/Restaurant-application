import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    fullname: "",
    email: "",
};


const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        setFullname: (state, action) => {
            state.fullname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },

    },
});

export const {
    setId,
    setFullname,
    setEmail
} = customerSlice.actions;

export default customerSlice.reducer;