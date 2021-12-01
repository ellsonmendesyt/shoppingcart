import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    const items = useCart();
    return (
        <HeaderWrapper>
           
            <Link to='/'>Store</Link>
            <Link to='/cart'>Cart</Link>
            <p>{items.length}</p>
            
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
background-color: #660099;
color: #fff;
position: sticky;
top: 0px;
padding: 0 5%;
& a{
    color: #fff;
    text-decoration: none;
}
`

export default Header
