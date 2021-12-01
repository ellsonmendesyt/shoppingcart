import React from 'react'
import Card from './Card'
import Layout from './Layout'
import List from './List'

const Store = ({items}) => {
    return (
        <>
            {items &&
             <>
               <h2>Escolha </h2>
                <List items={items.internet} />
                <List items={items.tv} />
                <List items={items.fixo} />
             </>
            }
            
            
        
        </>
    )
}

export default Store
