import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CarritoItem from './CarritoItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, Timestamp, updateDoc, waitForPendingWrites, where, writeBatch } from '@firebase/firestore'
import { useState } from 'react'

const Carrito = () => {

    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:'', email:'',phone:''
    })

    const { cartList, vaciarCarrito, totalCart, totalCartItems } = useContext(CartContext)

    const cambiosForm = (e) => {

        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    //console.log(dataForm)

    const generarOrden = (e) => {
        e.preventDefault()

        let orden = {}

        orden.date = Timestamp.fromDate(new Date)

        orden.buyer = dataForm 
        orden.total = totalCart()

        orden.items = cartList.map( item => {
            const id = item.id;
            const nombre = item.name;
            const precio = item.precio * item.cantidad;

            return {id, nombre, precio}
        } )
        // console.log(orden)

        // generar orden

        const db = getFirestore()
        const coleccion = collection(db, 'orders')
        addDoc(coleccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(() => {
            vaciarCarrito()
            setDataForm({
                name:'', email:'',phone:''
            })
        })

        //  const docModificar = doc(db, 'items', '1d45wDbu1qfInNpl0EMk')
        // updateDoc( docModificar, {
        //     stock: 50
        // } )
        // .then(resp => console.log('modificado'))

        // modificar por lote
        // const batch = writeBatch(db)
        // batch.update(docModificar, {
        //     stock: 55
        // })
        // agrego cambios con batch.update
        // batch.commit()

        const coleccionStock = collection(db, 'items')
        const actualizarStock = query(
            coleccionStock, where( documentId(), 'in', cartList.map(item => item.id) )
        )
        
        console.log(actualizarStock)
        const batch = writeBatch(db)
        getDocs(actualizarStock)
        .then(resp => resp.docs.forEach(resp => batch.update(resp.ref, {
            stock: (resp.data().stock - cartList.find(item => item.id === resp.id).cantidad)
        })  ))
        .finally(() => batch.commit())
        
    }
    

    if (cartList.length === 0) {
        return(
            <div>
                {idOrder.length !== 0 && <p> ID orden: {idOrder}</p>}    
                <h1>El carrito se encuentra vacio</h1>
                <Link to="/"><button>Volver al Inicio</button></Link>
            </div>
        )
    } else {
        return(
            <div className="carrito">
                {idOrder.length !== 0 && idOrder}
                {cartList.map((prod) => < CarritoItem prod={prod}/> ) }
                <div>Precio Total: <span>${totalCart()}</span></div>
                <div>Cantidad total: <span>{totalCartItems()} Articulos</span></div>

                <form 
                     onSubmit={generarOrden}
                     onChange={cambiosForm}
                >
                    <input
                        type= 'text'
                        name= 'name'
                        placeholder= 'name'
                        defaultValue= {dataForm.name}
                        required
                    />
                    <input
                        type= 'text'
                        name= 'phone'
                        placeholder= 'tel'
                        defaultValue= {dataForm.phone}
                        required
                    />
                    <input
                        type= 'email'
                        name= 'email'
                        placeholder= 'email'
                        defaultValue= {dataForm.email}
                        required
                    />
                    <button>Generar Orden</button>
                </form>

                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        )
    }

}

export default Carrito

