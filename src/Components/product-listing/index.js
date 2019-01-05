import React from 'react';
import ProductListItem from './product-list-item'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { cartItemsWithQuantities } from '../cart';
function ProductListing(props){
    return <div>
        {
            props.products.map( product =>
            <ProductListItem 
            key={product.id}
            product={product}
            removeFromCart ={props.removeFromCart}
            addToCart={props.addToCart}
            cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
            />)
        }
    </div>
}

function mapStateToProps(state){
    return{
        cart: state.cart,
        products: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) =>{
            dispatch({type: 'REMOVE', payload: item})
        }
    }
}

ProductListing.propTypes= {
    products: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)