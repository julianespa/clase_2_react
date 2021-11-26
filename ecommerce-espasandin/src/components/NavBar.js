import React from 'react';
import logo from '../logo.svg';

const NavBar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>ESPASANDIN</h1>
                <img src={logo} alt="logo" />
            </div>
            <div className="secciones">
                <ul>
                    <li><a href="#1">Inicio</a></li>
                    <li><a href="#2">Productos</a></li>
                    <li><a href="#3">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
