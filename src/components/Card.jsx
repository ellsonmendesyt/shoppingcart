import React from 'react'
import styled from 'styled-components';

import { useDispatchCart } from '../contexts/CartContext';

const Card = ({item}) => {

    const dispatch = useDispatchCart();


    const addToCart = item =>{
        dispatch({type:"ADD", item:item})
        // console.log(item);
    }
    return (
        <Container >
        <h2>{item.plano} </h2>
          <p>{item.detalhes}</p>
          <p>R$ {item.preco}</p>

           <Button onClick={()=>addToCart(item)}>ADD</Button>
        </Container>
    )
}


const Container = styled.div`

max-width: 250px;
width: 100%;
border: 1px solid #212525;
border-radius: 9px;
/* background-color: orange; */
padding: .7rem;

@media (min-width:550px){
    justify-content: flex-start;
    margin: .3rem;
}

`

const Button = styled.button`
 background-color: #DA6394;
 border: none;
 padding: .5rem 1rem;
 border-radius: 8px;
 transition: all.4s ease-in;

 &:hover{
    background-color: #d14bcd;
 }
`




export default Card
