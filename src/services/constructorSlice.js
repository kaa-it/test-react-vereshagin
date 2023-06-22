import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  ingredients: []
}

const constructorSlice = createSlice({
    name: 'BURGER_CONSTRUCTOR',
    initialState,
    reducers: {
        SET_BUN: (state, action) => {state.bun = action.payload},
        ADD_INGREDIENT: {
          reducer: (state, action) => {state.ingredients = [...state.ingredients, action.payload]}
          
          ,
          prepare: (array) => {
            const id = nanoid()
            return { payload: array = {...array, unicId: id} }
          }
        },
        DELETE_INGREDIENT: (state, action) => {state.ingredients = [...state.ingredients.filter(el => el.unicId !== action.payload )]},
        SWAP_INGREDIENT: (state, action) => {
          const ingredients = [...state.ingredients];
      
          ingredients.splice(action.payload.toIndex, 0, ingredients.splice(action.payload.fromIndex, 1)[0]);
          //не понимаю почему не перемещается, вроде индексы передает правильные, но не работает
        }
    }
})
export const { SET_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, SWAP_INGREDIENT} = constructorSlice.actions

export default constructorSlice