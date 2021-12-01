import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { useDispatchCart } from '../contexts/CartContext'

const CartList = ({items}) => {

    const dispatch = useDispatchCart();
    
    const handleRemove = (item)=>{
        dispatch({type:"REMOVE", item});
        
    }
    
    return (
        <CartListWrapper>
               {
                items.map(item=>(
                    <CartItem handleRemove={handleRemove} key={item.id} item={item}/>
                ))
            }
        </CartListWrapper>
    )
}



const CartListWrapper = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 900px;
width: 100%;
margin: 3rem auto;
justify-content: flex-start;

position: relative;



`

export default CartList
