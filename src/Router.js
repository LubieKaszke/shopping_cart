import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Components/homepage';
import CartPage from './Components/cartpage';
import CheckoutPage from './Components/checkout';

const Router=() =>(
    <Switch>
        <Route exact path ='/' component ={HomePage} />
        <Route exact path ='/cart' component ={CartPage} />
        <Route exact path ='/checkout' component ={CheckoutPage} />


    </Switch>
)

export default Router ;