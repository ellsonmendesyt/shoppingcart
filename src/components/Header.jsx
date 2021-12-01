import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Limiter } from './Globalstyle';
const Header = () => {

    const items = useCart();
    return (
        <HeaderWrapper>
            <Limiter>
            <Link to='/'>Store</Link>
            <Link to='/cart'>Cart</Link>
            <p>{items.length}</p>
            </Limiter>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
background-color: #660099;
color: #fff;

& a{
    color: #fff;
    text-decoration: none;
}
`

export default Header
