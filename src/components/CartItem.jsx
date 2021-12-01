import React from 'react'



const CartItem = ({item,handleRemove}) => {





    return (
        <div>
            <p>{item.plano}</p>
            <p>{item.preco}</p>

            <button onClick={()=> handleRemove(item)}> Remove</button>
        </div>
    )
}

export default CartItem
