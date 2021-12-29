import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const CarritoItem = ({prod}) => {

    const {borrarItem} = useContext(CartContext)

    console.log(prod)
    return (
        <div>
            <li key={prod.id}>{prod.name}  {prod.cantidad} </li>
            <button onClick={()=>{borrarItem(prod)}}>X</button>
        </div>
    )
}

export default CarritoItem
