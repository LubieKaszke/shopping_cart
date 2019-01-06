import React from 'react';
import ProductListItem from './product-list-item'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteProduct } from '../product/productsReducer';
function ProductListing(props){
    
    return <div>
        {
            props.products.map( product =>
            <ProductListItem 
            key={product.id}
            product={product}
            removeFromCart ={props.removeFromCart}
            addToCart={props.addToCart}
            removeProduct={props.removeProduct}
            cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
            />)
        }
    </div>
}

function mapStateToProps(state){
    return{
        cart: state.get('cart'),
        products: state.get('products')
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) =>{
            dispatch({type: 'REMOVE', payload: item})
        },
        removeProduct: (id) =>{
            dispatch(deleteProduct(id))
        }
    }
}

ProductListing.propTypes= {
    products: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)