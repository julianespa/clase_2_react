import React from 'react';
import carrito from "../carrito.png"

const CartWidget = () => {
    const style={
        width:40,
    }
    return (
        <div className="iconoCarro">
            <a href="#c"> <img src={carrito} alt="carrito de compras" style={style}/> </a>
        </div>
    )
}

export default CartWidget
