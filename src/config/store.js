import {createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import cartReducer from '../Components/cart/reducer'
// import reduxFormReducer from '../Components/form/reducer'
import { reducer as reduxFormReducer} from 'redux-form/immutable';

const rootReducer = combineReducers ({
    cart: cartReducer,
    form: reduxFormReducer

})

const store = createStore( rootReducer,/* preloadedState, */+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store