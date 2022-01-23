import React from 'react'
// import { getFetch } from '../helpers/Datos'
//import ItemCount from '../ItemCount'
import { useState, useEffect} from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'




const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idcate } = useParams()

    useEffect(() => {

        // if (idcate) {
        //     getFetch
        //     .then(resp => setProductos(resp.filter(cat => cat.categoria === idcate)))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false)) 
        // } else {
        //     getFetch
        //     .then(resp => setProductos(resp))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false)) 
        // }

        // const db = getFirestore()

        // const queryDb = doc(db, 'items', 'elUm47agyfo6n1Tr04Rw' )   se usa en itemDetail
        // getDoc(queryDb)
        // .then(resp => setProducto({ id: resp.id, ...resp.data() }))

        if (idcate){
            const db = getFirestore()

            const qc = query(collection(db, 'items'), where('categoria','==',idcate))
            getDocs(qc)
            .then(resp => setProductos(resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else {

            const db = getFirestore()
    
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }
        

    }, [idcate])
    
     console.log(productos)

    return (
        <div className="cuerpo">
            <h1> {saludo} </h1>
            {/* <ItemCount stock="5" inicial="1" /> */}
            { loading ? <h2>Cargando...</h2> : <ItemList items={productos}/>}
            
        </div>
    )
}

export default ItemListContainer
