import React from 'react'
import { useState, useEffect } from 'react'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getFetch
        .then(resp => setItem(resp.find(item => {item.id === 1})))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            
        </div>
    )
}
