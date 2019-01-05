import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Components/homepage';
import CartPage from './Components/cartpage';
import CheckoutPage from './Components/checkout';
import NewProductPage from './Components/newProduct';

const Router=() =>(
    <Switch>
        <Route exact path ='/' component ={HomePage} />
        <Route exact path ='/cart' component ={CartPage} />
        <Route exact path ='/checkout' component ={CheckoutPage} />
        <Route exact path ='/newProduct' component={NewProductPage} />

    </Switch>
)

export default Router ;