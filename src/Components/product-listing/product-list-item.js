import React from 'react'
import {Link} from 'react-router-dom'
import { Button, ButtonGroup,Label } from 'react-bootstrap';

export default function ProductListItem(props){
    
    return <div className="purchase-card">
        <h3>{props.product.name} <Label bsStyle="info">${props.product.price}</Label> </h3>
        <div>{props.product.description}</div>
        
        <ButtonGroup>
            <Button  bsStyle ="primary" onClick={() => props.addToCart(props.product)}>Add to cart({(props.cartItem && props.cartItem.quantity) || 0})</Button> 
            { props.cartItem
            ?<Button bsStyle="info" onClick={() => props.removeFromCart (props.cartItem)}>Remove from cart</Button> 
            : null}
            <Button bsStyle="danger" onClick={() => props.removeProduct(props.product.id)}>Remove</Button>
            <Button bsStyle="success">Edit</Button>
        </ButtonGroup>
    </div>
}