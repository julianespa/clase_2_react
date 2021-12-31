import React, { useContext } from 'react';
import carrito from "../carrito.png"
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CartWidget = () => {

    const {totalCartItems} = useContext(CartContext)

    const style={
        width:40,
    }
    return (
        <div className="iconoCarro">
            {totalCartItems()}
            <Link to="/carrito"> <img src={carrito} alt="carrito de compras" style={style}/> </Link>
        </div>
    )
}

export default CartWidget
