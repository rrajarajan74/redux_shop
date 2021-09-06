import { ActionTypes } from "../constants/action-type";

const intialState ={
    products:[],
};

export const ProductReducer = (state = intialState, {type,payload}) =>{
    switch (type)
{
    case ActionTypes.SET_PRODUCTS:
        return {...state, products:payload};
    default:
        return state;
}
};
export const selectedProductReducer = (state = {}, {type,payload}) =>{
    console.log(payload);
    switch (type)
{
    case ActionTypes.SELECTED_PRODUCT:
        return {...state, ...payload};
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
    default:
        return state;
}
};