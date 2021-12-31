import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CarritoItem from './CarritoItem'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { cartList, vaciarCarrito, totalCart, totalCartItems } = useContext(CartContext)

    if (cartList.length === 0) {
        return(
            <div>
                <h1>El carrito se encuentra vacio</h1>
                <Link to="/"><button>Volver al Inicio</button></Link>
            </div>
        )
    } else {
        return(
            <div className="carrito">
                {cartList.map((prod) => < CarritoItem prod={prod}/> ) }
                <div>Precio Total: <span>${totalCart()}</span></div>
                <div>Cantidad total: <span>{totalCartItems()} Articulos</span></div>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        )
    }

}

export default Carrito

