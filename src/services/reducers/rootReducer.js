import { combineReducers } from "redux";
import constructorSlice from "../constructorSlice";
import ingredientsSlice from "../ingredientsSlice";

const rootReducer = combineReducers({
    constructor: constructorSlice.reducer,
    ingredients: ingredientsSlice.reducer/*,
    ingredientDetails: ,
    orderDetails: */
})

export default rootReducer