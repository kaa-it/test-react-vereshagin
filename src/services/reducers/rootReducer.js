import { combineReducers } from "redux";
import constructorSlice from "../constructorSlice";

const rootReducer = combineReducers({
    constructor: constructorSlice.reducer/*,
    ingredients: ,
    ingredientDetails: ,
    orderDetails: */
})

export default rootReducer