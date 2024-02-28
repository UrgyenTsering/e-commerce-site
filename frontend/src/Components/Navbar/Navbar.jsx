import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="nav-logo" />
          <p>Shopper</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop");}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li> {/* A React Router Link component that creates a link to the root path ("/"). This Link links the link and routes of pages. */}
          <li onClick={()=>{setMenu("mens");}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link> {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens");}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids");}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'> <img src={cart_icon} alt="cart-icon"/></Link>
          <div className="nav-cart-count"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// This item component will be used in different other components