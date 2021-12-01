import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    const items = useCart();
    return (
        <HeaderWrapper>
           
            <Link to='/'><i class="fa fa-home fa-2x" aria-hidden="true"></i></Link>
            <CartIcon title='Ir par o carrinho' to='/cart'><i class="fa fa-shopping-basket" aria-hidden="true"> <Count>{items.length}</Count> </i></CartIcon>
            
            
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;

height: 3rem;

background-color: #660099;
color: #fff;
position: sticky;
top: 0px;
padding: 0 5%;
z-index:99;
& a{
    color: #fff;
    text-decoration: none;
}
`
const CartIcon= styled(Link)`
position: relative;
/* background-color: orange; */
cursor: pointer;
& .fa{
    font-size: 1.3rem;
}
`


const Count = styled.div`
position: absolute;
right: -5px;
top: -12px;
font-size: .9rem;
`

export default Header
