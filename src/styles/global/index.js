import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,*:before, *:after{
      box-sizing: border-box;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  ul{
    padding:0;
    list-style-type: none
  }
  a{
    display: inline-block;
    color: #fafcfa;
    text-decoration: none;
  }
`;
 
export default GlobalStyle;