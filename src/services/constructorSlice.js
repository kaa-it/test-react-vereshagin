import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const constructorSlice = createSlice({
    name: 'CONSTRUCTOR',
    initialState,
    reducers: {
        ADD_NEW_INGREDIENT: {
            reducer: (state, action) => {
              return [...state.list ,action.payload]
            },
            prepare: (text) => {
              const id = nanoid()
              return { payload: { id, text } }
            }
        }
    }
})
export const { ADD_NEW_INGREDIENT } = constructorSlice.actions

export default constructorSlice