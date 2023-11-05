import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    fullname: "",
    email: "",
    getUpcoming: null,
    getExpired: null
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
        setGetUpcoming: (state, action) => {
            state.getUpcoming = action.payload;
        },
        setGetExpired: (state, action) => {
            state.getExpired = action.payload;
        },

    },
});

export const {
    setId,
    setFullname,
    setEmail,
    getUpcoming,
    getExpired,
    setGetUpcoming,
    setGetExpired
} = customerSlice.actions;

export default customerSlice.reducer;