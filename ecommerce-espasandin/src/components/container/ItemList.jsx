import React from 'react'
import {Item} from './Item'

export const ItemList = ({items}) => {
    return (
        <div className="prodContainer">    
            {items.map((item) => <Item item={item} key={item.id} />)}    
        </div>
    )
}

