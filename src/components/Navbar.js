import React from 'react';
import { Link, NavLink } from "react-router-dom"
import {connect} from "react-redux";

const Navbar = ({cart}) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Shop</Link>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                            Cart
                            <span class="text-light badge bg-primary rounded-circle ml-1">
                                {cart.itemCart.length}
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const msp = ({cart})=>{
    return {cart}
}

export default connect(msp)(Navbar);