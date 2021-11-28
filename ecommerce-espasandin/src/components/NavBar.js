import React from 'react';
import logo from '../logo.svg';
import CartWidget from './CartWidget';

const NavBar = ({marca, s1, s2, s3}) => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>{marca}</h1>
                <img src={logo} alt="logo" />
            </div>
            <div className="secciones">
                <ul>
                    <li><a href="#1">{s1}</a></li>
                    <li><a href="#2">{s2}</a></li>
                    <li><a href="#3">{s3}</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar
