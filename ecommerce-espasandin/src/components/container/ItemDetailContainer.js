import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getFetch } from '../helpers/Datos'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then((resp) => setItem(resp.find((item) => item.id === 5)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ? <h2>Cargando detalle...</h2> : <ItemDetail item={item} />}
        </div>
    )
}
