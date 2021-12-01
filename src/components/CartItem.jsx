import React from 'react'
import styled from 'styled-components'


const CartItem = ({item,handleRemove}) => {
    return (
        <CartItemWrapper>
            <p>{item.plano}</p>
            <p>{item.preco}</p>

            <Button onClick={()=> handleRemove(item)}> Remove</Button>
        </CartItemWrapper>
    )
}


const CartItemWrapper = styled.div`

display: flex;

justify-content: space-around;
align-items: center;
max-width: 80%;

border: 1px solid lightgray;
border-radius: 9px;

padding: .4rem 1rem;
margin: .5rem;
transition: .3s ease-in-out;
max-height:10vh;

&:hover{
    
box-shadow: 1px 1px 1px 0px rgba(0,0,0.2);
}
`


const Button = styled.button`
 height: 30px;
 background-color: lightgray;
 border: none;
 border-radius: 6px;
 transition: .3s ease-in-out;
 cursor: pointer;


 &:hover{
     background-color: gray;
 }
`

export default CartItem
