import React from 'react';
import OrderForm from './form/index';
import {Grid, Row} from 'react-bootstrap';

export default function CheckoutPage(props){

    return <Grid>
        <Row >
    <h1 className="homepage">Your Order</h1>
    <h2>To complete the order fill out the form </h2>
        </Row>
        <Row>
        <OrderForm/>
    </Row>
         </Grid>
}

