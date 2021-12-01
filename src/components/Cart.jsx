import React from 'react';
import { useCart,useDispatchCart } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const dispatch = useDispatchCart();

    const handleRemove = (index)=>{
    
        dispatch({type:"REMOVE", index});
        
    }

    const items = useCart();
    const total = items.reduce((a,b)=>a+b.preco,0);
    if(items.length ===0){
        return (
            <main>
                <p>Cart is  empty</p>
            </main>
        )
    }

    return (
        <main>
            <p> Total: {total.toLocaleString("pt-BR",{
                style:"currency",
                currency:"BRL"
            })} </p>

            {/* <p>
            
            {
                total.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                })
            }
            </p> */}

            {
                items.map(item =>(
                  <CartItem handleRemove={handleRemove} key={item.id} item={item}/>
                ))
            }
        </main>
    )
}

export default Cart
