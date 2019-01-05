
import {createStore, combineReducers,applyMiddleware,compose } from 'redux';
import cartReducer from '../Components/cart/reducer'
import productsReducer from '../Components/product/productsReducer';
import thunk from 'redux-thunk';
import reduxFormSampleReducer from '../Components/form/reducer'
import { reducer as reduxFormReducer} from 'redux-form/immutable';

const rootReducer = combineReducers ({
    cart: cartReducer,
    form: reduxFormReducer,
    products: productsReducer,
    reduxForm: reduxFormSampleReducer

})

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk),
//      /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

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