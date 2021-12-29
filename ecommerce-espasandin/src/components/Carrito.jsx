import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CarritoItem from './CarritoItem'

const Carrito = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            {cartList.map((prod) => < CarritoItem prod={prod}/> ) }
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito

