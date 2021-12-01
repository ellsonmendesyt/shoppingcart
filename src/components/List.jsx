import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Limiter } from './Globalstyle'
const List = ({items,ative,title}) => {
    return (
        <ListWrapper>
            <Title>{title}</Title>
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
margin: 3rem auto;
justify-content: center;
/* align-items: center; */
/* outline: 1px solid orange; */
position: relative;

@media (min-width:791px){
    justify-content: flex-start;
    
}

`

const Title = styled.h3`
position: absolute;
top: -3.4rem;
color: #666;
font-weight: 400;
font-size: 1.3rem;
margin-left:1rem;
`

export default List
