
import {createStore, applyMiddleware,compose } from 'redux';
import {combineReducers} from 'redux-immutable';
import cartReducer from '../Components/cart/reducer'
import productsReducer from '../Components/product/productsReducer';
import thunk from 'redux-thunk';
import reduxFormSampleReducer from '../Components/form/reducer'
import reduxProductFormSampleReducer from '../Components/form/productReducer'
import { reducer as reduxFormReducer} from 'redux-form/immutable';

const rootReducer = combineReducers ({
    cart: cartReducer,
    form: reduxFormReducer,
    products: productsReducer,
    reduxForm: reduxFormSampleReducer,
    reduxProductForm: reduxProductFormSampleReducer

})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store