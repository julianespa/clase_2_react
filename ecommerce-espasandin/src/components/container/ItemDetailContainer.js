import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getFetch } from '../helpers/Datos'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getFetch
        .then((resp) => setItem(resp.find((item) => item.id === parseInt( id ))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            {loading ? <h2>Cargando detalle...</h2> : <ItemDetail item={item} />}
        </div>
    )
}
