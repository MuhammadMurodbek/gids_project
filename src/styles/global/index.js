import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 *,*:before, *:after{
    box-sizing: border-box;
    /* font-family: Nunito-sans; */
 }
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;
 
export default GlobalStyle;