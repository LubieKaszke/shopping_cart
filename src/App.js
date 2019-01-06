import React, { Component } from 'react';
import './App.css';
import { NavLink} from 'react-router-dom';
import Router from './Router';
import {Navbar, NavItem,Nav } from 'react-bootstrap';


const Navigation =(props) => 
<Navbar>
  <Nav>
  <NavItem componentClass='span'><NavLink to ='/' >Home</NavLink></NavItem>
  <NavItem componentClass='span'><NavLink to ='/cart' >Cart</NavLink></NavItem>
  <NavItem componentClass='span'><NavLink to ='/checkout' >Checkout</NavLink></NavItem>
  <NavItem componentClass='span'><NavLink to ='/newProduct' >New Product</NavLink></NavItem>
</Nav>
</Navbar>


class App extends Component {
  render() {
    return (
      <div>
       <Navigation/>
        <Router />
      </div>
      
    );
  }
}

export default App;
