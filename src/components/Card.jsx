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
        <CardWrapper >
        <CardTop>
            <CardTitle>{item.plano}</CardTitle>
        </CardTop>

        <CardMiddle>
          <CardText>{item.detalhes}</CardText>
          <CardTitle>R$ {item.preco}</CardTitle>
        </CardMiddle>
        

          <CardBottom>
           <Button onClick={()=>addToCart(item)}>Comprar</Button>
          </CardBottom>
        </CardWrapper>
    )
}


const CardWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
max-width: 200px;
width: 100%;
border: 1px solid lightgray;
border-radius: 9px;

padding: .4rem 1rem;
margin: .5rem;
transition: .3s ease-in-out;

&:hover{
    
box-shadow: 1px 1px 8px 0px #000000;
}
`

const Button = styled.button`
 background-color: #DA6394;
 border: none;
 padding: .5rem 1rem;
 border-radius: 8px;
 transition: all.3s ease-in;
 width: 100%;
 color: #fff;
 font-weight: 600;
 margin: .5rem auto;
 &:hover{
    background-color: #d14bcd;
 }
`
const CardMiddle = styled.div`
font-size: .9rem;

`
const CardTop = styled.div`

`
const CardBottom = styled.div`
 
 
`
const CardText = styled.p`
 font-size: .9rem;
 font-weight: 400;
 
`



const CardTitle = styled.h3`
 font-weight: 600;
 color: #666;
 font-family: 'Roboto', sans-serif;
 margin-bottom: 0;
`



export default Card
