import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
        <div>
            <div className="card">
                <h2>{item.name}</h2>
                <img src={item.img} alt="imagen" />
                <h4>${item.precio}</h4>
                <button>
                    <Link to={`/detalle/${item.id}`}>Detalles</Link>
                </button>
            </div>
        </div>
    )
}


