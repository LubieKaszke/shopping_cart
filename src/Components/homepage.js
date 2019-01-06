import React from 'react';
import ProductListing from './product-listing';
import {Grid, Row} from 'react-bootstrap';

export default function HomePage(props){

    return <Grid>
    <Row >
        <h1 className="homepage">Homepage</h1>
    </Row>
    <Row>
        <ProductListing />
    </Row>
</Grid>
}

