import React from 'react'
import styled from 'styled-components';

import { useDispatchCart } from '../contexts/CartContext';

const Card = ({item}) => {

    const dispatch = useDispatchCart();


    const addToCart = item =>{
        dispatch({type:"ADD", item:item})
        console.log(item);
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
border: 1px solid blue;
border-radius: 7px;
background-color: orange;
padding: .4rem;

`

const Button = styled.button`

`




export default Card
