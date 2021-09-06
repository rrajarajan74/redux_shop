import { combineReducers } from "redux";
import { ProductReducer,selectedProductReducer } from "./ProductReducer";

const reduers = combineReducers({
    allProducts:ProductReducer,
    product: selectedProductReducer,
});

export default  reduers;
