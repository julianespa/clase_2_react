import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({saludo}) => {
    return (
        <div className="cuerpo">
            <h1> {saludo} </h1>
            <ItemCount stock="5" inicial="1" />
        </div>
    )
}

export default ItemListContainer
