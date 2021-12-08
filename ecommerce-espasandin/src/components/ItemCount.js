import React, { useState} from 'react'

const ItemCount = ({stock, inicial}) => {
    let [count, setCount] = useState(parseInt(inicial));
    

    const add = () => {
        if (count < stock) {
            setCount(count+1)
        }else{
            alert(`Maximo de stock alcanzado`)
        }
    }

    const substract = () => {
        if (count > inicial) {
            setCount(count-1)
        }
        else{
            alert(`La cantidad no puede ser menor a ${inicial}`)
        }
    }

    const agregar = () => {
        console.log (`agregaste ${count} items`)
    }

    return (
        <div className="contador">
            <p>{count}</p>
            <button className="suma" onClick={add}>+</button>
            <button className="suma" onClick={substract}>-</button>
            <button className="agregar" onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount
