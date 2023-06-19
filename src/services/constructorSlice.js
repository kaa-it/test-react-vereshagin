import { createSlice, nanoid } from "@reduxjs/toolkit";

const defaultBun = {
  "_id":"60666c42cc7b410027a1a9b1",
  "name":"Краторная булка N-200i",
  "type":"bun",
  "proteins":80,
  "fat":24,
  "carbohydrates":53,
  "calories":420,
  "price":1255,
  "image":"https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
  "__v":0
}

const initialState = {
  bun: defaultBun,
  ingredients: []
}

const constructorSlice = createSlice({
    name: 'BURGER_CONSTRUCTOR',
    initialState,
    reducers: {
        SET_BUN: {
            reducer: (state, action) => {state.bun = action.payload}
            ,
            prepare: (array) => {
              const id = nanoid()
              return { payload: array = {...array, unicId: id} }
            }
        },
        ADD_INGREDIENT: {
          reducer: (state, action) => {state.ingredients = [...state.ingredients, action.payload]}
          ,
          prepare: (array) => {
            const id = nanoid()
            return { payload: array = {...array, unicId: id} }
          }
        },
        DELETE_INGREDIENT: (state, action) => {state.ingredients = [...state.ingredients.filter(el => el.unicId !== action.payload )]}
    }
})
export const { SET_BUN, ADD_INGREDIENT, DELETE_INGREDIENT} = constructorSlice.actions

export default constructorSlice