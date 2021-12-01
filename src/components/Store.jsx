import React from 'react'
import Card from './Card'

const Store = ({items}) => {
    return (
        <div>
            {
                items && items.fixo.map(item => (
                   <Card key={item.id} item={item} />
                ))
            }
            {
                items && items.tv.map(item => (
                   <Card key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Store
