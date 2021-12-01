import React from 'react'

import List from './List'
import styled from 'styled-components'

const Store = ({items}) => {
    return (
        <>
            {items &&
             <>
                <List title='Internet' items={items.internet} />
               
                <List title='TV' items={items.tv} />
             
                <List title='Telefone' items={items.fixo} />
             </>
            }
        </>
    )
}



export default Store
