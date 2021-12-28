import React from 'react'
import ItemCount from '../ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'



export const ItemDetail = ({item}) => {

    const [goCart, setgoCart] = useState(false)
    
    const {cartList, agregarAlCarrito} = useContext(CartContext)
    
    const onAdd = (cantidad) => {
        console.log(cantidad);
        setgoCart(true)
        agregarAlCarrito({...item, cantidad:cantidad})
    }

console.log(cartList)

    return (
        <div className="detalleItem">
            <h1>{item.name}</h1>
            <div className="detalleflex">
                <div>
                    <p>${item.precio}</p>
                    {goCart ? (<Link to="/carrito"><button className="agregar">Ir al carrito</button></Link>) : (<ItemCount stock={item.stock} onAdd={onAdd} />)}
                    
                </div>
                <img src={item.img} alt="imagen producto"/>
            </div>
        </div>
        
    )
}
