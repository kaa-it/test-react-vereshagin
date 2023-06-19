import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredientsList: []
}

const ingredientsSlice = createSlice({
    name: 'INGREDIENT',
    initialState,
    reducers: {
        SET_APIDATA: (state, action) => {
                state.ingredientsList = action.payload
            },
        INCREASE: (state, action) => {state.ingredientsList = [...state.ingredientsList.map(el => el._id === action.payload._id ? {...el, __v: el.__v + 1} : el )]},
        DECREASE: (state, action) => {state.ingredientsList = [...state.ingredientsList.map(el => el._id === action.payload._id ? {...el, __v: el.__v - 1} : el )]}
        },
        
})
export const { SET_APIDATA, INCREASE, DECREASE } = ingredientsSlice.actions

export default ingredientsSlice