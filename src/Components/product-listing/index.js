import React, {Component}from 'react';
import ProductListItem from './product-list-item'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteProduct } from '../product/productsReducer';

function searchingFor(search){
    return function(x){
        return x.name.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

class ProductListing extends Component{

    constructor(props){
        super(props);
        this.state={
            search:''
        }
        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler = e=>{
        this.setState({search: e.target.value});
    }

    render(){
            const {search} =this.state;
           return <div>
           <form>
               <input type="text" placeholder="Search by Name" onChange={this.searchHandler}></input>
           </form>
           <div className ="product-listing">
       
        {
            
            this.props.products.filter(searchingFor(search)).map( product =>
            <ProductListItem 
            key={product.id}
            product={product}
            removeFromCart ={this.props.removeFromCart}
            addToCart={this.props.addToCart}
            removeProduct={this.props.removeProduct}
            cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
            />)
        }
    </div></div>
    }
 
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