import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap';

// const sort = (items) => {
//     return items.sort((a, b) => a.id < b.id)
//   }



function Cart(props){
    return <Table striped bordered condensed hover>
        <thead> 
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.cart.map(item => <tr key={item.id}>
                    <td>{item.name} </td>
                    <td>{item.quantity}</td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                        <Button bsStyle="success" onClick={ () => props.addToCart(item)}>+</Button>
                        <Button bsStyle="success" onClick={ () => props.removeFromCart(item)}>-</Button>
                    </td>
                    <td>
                        <Button  bsStyle="danger" onClick ={ ()=> props.removeAllFromCart(item)}>Remove all from Cart</Button>
                    </td>
                    </tr>)
            }
            <tr>
                <th>Total: {sumPriceInCart(props.cart)}</th>
            </tr>
        </tbody>
    </Table>
}

function sumPriceInCart(cart) {
    var total =0;
    if(Array.isArray(cart)) {
        if(cart.length > 0) {
            total = cart.map(price).reduce(sum)
            return total;
        }
    }
}

function price(item){
  return item.price * item.quantity;
}

function sum(prev, next){
  return prev + next;
}

function mapStateToProps(state){
    return{
        cart: state.get('cart'),
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) =>{
            dispatch({type : 'ADD', payload: item})
        },
        removeFromCart: (item) =>{
            dispatch({type : 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) =>{
            dispatch({type : 'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)