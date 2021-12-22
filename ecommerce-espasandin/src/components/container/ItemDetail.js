import React from 'react'
import ItemCount from "../ItemCount";


export const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>${item.precio}</p>
            <img src={item.img} alt="imagen producto"/>
            <ItemCount />
        </div>
    )
}
