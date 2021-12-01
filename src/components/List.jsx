import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Limiter } from './Globalstyle'
const List = ({items}) => {
    return (
        <ListWrapper>
           
            {
                items.map(item=>(
                    <Card key={item.id} item={item}/>
                ))
            }
           
        </ListWrapper>
    )
}


const ListWrapper = styled.section`
display: flex;
flex-wrap: wrap;
max-width: 1200px;
width: 100%;
margin: 2rem auto;
justify-content: center;
/* align-items: center; */

@media (min-width:550px){
    justify-content: flex-start;
}

`

export default List
