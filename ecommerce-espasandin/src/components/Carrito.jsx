import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Carrito = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            {cartList.map(prod => <li key={prod.id}>{prod.name}  {prod.cantidad} </li>)}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito

