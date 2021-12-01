import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
const Header = () => {

    const items = useCart();
    return (
        <div>
            <Link to='/'>Store</Link>
            <Link to='/cart'>Cart</Link>
            <p>{items.length}</p>
        </div>
    )
}

export default Header
