import React from 'react';
import Cart from './cart';
import OrderForm from './form'

export default function CheckoutPage(props){

    return <div>
        <h1>Your Order</h1>
        <Cart />
        <h2>To complete the order fill out the form </h2>
        <OrderForm />
    </div>
}