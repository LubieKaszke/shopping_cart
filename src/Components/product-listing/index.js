import React, {Component}from 'react';
import ProductListItem from './product-list-item'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteProduct } from '../product/productsReducer';
import Datasort from "react-data-sort";



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
           {/* <div className ="product-listing">
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
                        </div> */}
           { this.props.products.length > 0  && 
           <Datasort
                data={this.props.products}
                defaultSortBy="id"
                render={({
                    data, setSortBy,sortBy,direction,toggleDirection
                }) => {
                    return ( <div>
                    
                        <Head
                            setSortBy={setSortBy}
                            sortBy={sortBy}
                            direction={direction}
                            toggleDirection={toggleDirection}
                            />
                        <div className ="product-listing">
                            {
                               data.filter(searchingFor(search)).map( product =>
                                <ProductListItem 
                                    key={product.id}
                                    product={product}
                                    removeFromCart ={this.props.removeFromCart}
                                    addToCart={this.props.addToCart}
                                    removeProduct={this.props.removeProduct}
                                    cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                                />) 
                            }
                        </div>
                    </div>
                    );
                }
                }
                />
           } {this.props.products.length<1 && <div>No products</div>}
           
    </div>
    }
 
}

function Head({setSortBy,sortBy,direction,toggleDirection}){
    const columns = [
        { key: "id", title: "ID" },
        { key: "name", title: "Name" }
    ];
    const items = columns.map(({ key, title }) => {
        const active = key === sortBy;
        return (
          <HeadToggle
            key={key}
            active={active}
            onClick={() => {
              if (active) {
                toggleDirection();
              }
              setSortBy(key);
            }}
          >
            {title} {active ? direction === "asc" ? "▲" : "▼" : null}
          </HeadToggle>
        );
      });

      return(
        <table>
            <tbody>
                <tr>{items}</tr>
            </tbody>
        </table>
      );
}

function HeadToggle({ children, active, onClick }) {
    return (
      <td
        onClick={onClick}
        style={{ fontWeight: active ? "bold" : "normal", cursor: "pointer" }}
      >
        {children}
      </td>
    );
  }

// function Listing({data}){
//     return (
//         <div>
//             data.filter(searchingFor(search)).map( product =>
//             <ProductListItem 
//             key={product.id}
//             product={product}
//             removeFromCart ={this.props.removeFromCart}
//             addToCart={this.props.addToCart}
//             removeProduct={this.props.removeProduct}
//             cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
//             />)
//         </div>
//     )
// }

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