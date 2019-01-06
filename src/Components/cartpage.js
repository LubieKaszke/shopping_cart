import React from 'react';
import Cart from './cart';
import {Grid, Row} from 'react-bootstrap';

export default function CartPage(props){

    return <Grid>
    <Row >
        <h1 className="homepage">My Cart</h1>
    </Row>
    <Row>
        <Cart />
    </Row>
        </Grid>
}
