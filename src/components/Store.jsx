import React from 'react'
import Card from './Card'
import Layout from './Layout'
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

const Title = styled.h3`
text-align: left;
margin-left:30px;
`

export default Store
