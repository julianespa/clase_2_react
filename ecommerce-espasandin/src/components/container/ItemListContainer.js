import React from 'react'
import { getFetch } from '../helpers/Datos'
//import ItemCount from '../ItemCount'
import { useState, useEffect} from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'




const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idcate } = useParams()

    useEffect(() => {

        if (idcate) {
            getFetch
            .then(resp => setProductos(resp.filter(cat => cat.categoria === idcate)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        } else {
            getFetch
            .then(resp => setProductos(resp))
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
