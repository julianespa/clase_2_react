import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
// import { getFetch } from '../helpers/Datos'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        // getFetch
        // .then((resp) => setItem(resp.find((item) => item.id === parseInt( id ))))
        // .catch(err => console.log(err))
        // .finally(() => setLoading(false))

        const db = getFirestore()

        const queryDb = doc(db, 'items', id )   //se usa en itemDetail
        getDoc(queryDb)
        .then(resp => setItem({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [id])

    return (
        <div>
            {loading ? <h2>Cargando detalle...</h2> : <ItemDetail item={item} />}
        </div>
    )
}
