import React from 'react'

export const Item = ({item}) => {
    return (
        <div>
            <div className="card">
                <h2>{item.name}</h2>
                <img src={item.img} alt="imagen" />
                <h4>${item.precio}</h4>
                <button>Detalles</button>
            </div>
        </div>
    )
}

export default Item

