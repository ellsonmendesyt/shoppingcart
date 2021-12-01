import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family:'Roboto',sans-serif;
  }
`

export const Limiter = styled.div`
max-width: 1000px;
margin: 0 auto;
`

export default GlobalStyle;