import React from 'react';
import { useCart,useDispatchCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import CartList from './CartList';
import styled from 'styled-components';

const Cart = () => {

    const dispatch = useDispatchCart();
    
    const clearCart= ()=>{
        dispatch({type:"CLEAR"});
        
    }

    const items = useCart();
    const total = items.reduce((a,b)=>a+b.preco,0);
    if(items.length ===0){
        return (
            <Container>
                 <Title>CARRINHO VAZIO</Title>
            </Container>
        )
    }

    return (
        <Container>
            <Title>CARRINHO DE COMPRAS </Title>
               <CartList items={items} />
            
            <Payment>
            <Title> Total: {total.toLocaleString("pt-BR",{
                style:"currency",
                currency:"BRL"
            })} </Title>

             <ClearBtn onClick={()=> clearCart()}>Limpar Carrinho</ClearBtn>
            <PayBtn>Confimar Pagamento</PayBtn>
           </Payment>
        </Container>
    )
}

const Container = styled.main`
display: flex;
flex-direction: column;
/* outline: 1px solid orange; */
justify-content: center;
align-items: center;
height: 80vh;
max-width:80%;
margin: 0 auto;

@media (min-width:800px){
    max-width: 60%;
}

`

const Payment = styled.div`
 align-self: flex-end;
 justify-self: center;
 /* outline: 1px solid blue; */

 margin: 0 auto;

 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 90%;

 /* max-height:30px; */
`

const PayBtn = styled.button`
background-color: #660099;
border: none;
border-radius: 8px;
color: #fff;
padding: .4rem .8rem;
transition: all .4s ease-in;
font-size: 1rem;
margin:.3rem;

&:hover{
    background-color: #aa037b;
}

@media (min-width:800px){
    padding: .8rem 1rem;
    margin:.3rem;
}
`
const Title = styled.h3`
 font-weight: 600;
 color: #666;
`
const ClearBtn = styled(PayBtn)`
 background-color: #666;
 &:hover{
     background-color:darkslategray;
     
 }
`


export default Cart
