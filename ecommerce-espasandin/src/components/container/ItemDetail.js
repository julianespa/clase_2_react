import React from 'react'

export const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>${item.precio}</p>
            <img src={item.img} alt="imagen producto"/>
        </div>
    )
}
