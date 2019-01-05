import {createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from '../Components/cart/reducer';
import productsReducer from '../Components/product/productsReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers ({
    cart: cartReducer,
    products: productsReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store