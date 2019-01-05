import React from 'react'

export default function ProductListItem(props){
    
    return <div>
        <h3>{props.product.name}</h3>
        <div>{props.product.description}</div>
        <div>${props.product.price}</div>
        <div>
            <button onClick={() => props.addToCart(props.product)} >
                Add to cart({
                    (props.cartItem && props.cartItem.quantity) || 0
                })</button> 
                {
                    props.cartItem ?
                <button onClick={() => props.removeFromCart (props.cartItem)} >
                Remove</button>
                : null
                }
        </div>
    </div>
}