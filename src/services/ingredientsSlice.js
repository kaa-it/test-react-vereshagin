import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredientsList: null
}

const ingredientsSlice = createSlice({
    name: 'INGREDIENT',
    initialState,
    reducers: {
        SET_APIDATA: (state, action) => {
                state.ingredientsList = action.payload
            }
        }
})
export const { SET_APIDATA } = ingredientsSlice.actions

export default ingredientsSlice