import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,*:before, *:after{
      box-sizing: border-box;
      font-family: Montserrat !important;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #326a32;
    border-radius: 50px;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Montserrat !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* pointer-events: none !important;
    cursor:none !important; */
  }
  ul{
    padding:0;
    list-style-type: none;
  }
  a{
    display: inline-block;
    color: #fafcfa;
    text-decoration: none;
  }
  .text-right{
    text-align: right;
  }
  .boxShadow{
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.08);
  }
  .cursor-pointer{
    cursor: pointer;
  }
  .border-div{
    margin:0 !important;
  }
  
`;
 
export default GlobalStyle;