import {createStore, combineReducers } from 'redux';
import cartReducer from '../Components/cart/reducer'
const rootReducer = combineReducers ({
    cart: cartReducer

})

const store = createStore(
    rootReducer
)

export default store