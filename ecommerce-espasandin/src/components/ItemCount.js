import React, { useState} from 'react'

const ItemCount = ({stock, inicial}) => {
    let [count, setCount] = useState(inicial);
    

    const add = () => {
        if (count < stock) {
            setCount(count+1)
            console.log(count)
        }
    }

    const substract = () => {
        if (count > inicial) {
            setCount(count-1)
            console.log(count)
        }
    }

    const agregar = () => {
        console.log (`agregaste ${count} items`)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount
