import React from 'react'

import styled from 'styled-components'

const Layout = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}


const Wrapper = styled.main`
 max-width: 900px;
 /* background-color: olive; */
 margin: 0 auto;
`


export default Layout
