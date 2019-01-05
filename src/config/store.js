
import {createStore, combineReducers,applyMiddleware } from 'redux';
import cartReducer from '../Components/cart/reducer'
import productsReducer from '../Components/product/productsReducer';
import thunk from 'redux-thunk';
// import reduxFormReducer from '../Components/form/reducer'
import { reducer as reduxFormReducer} from 'redux-form/immutable';

const rootReducer = combineReducers ({
    cart: cartReducer,
    form: reduxFormReducer,
    products: productsReducer

})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


export default store