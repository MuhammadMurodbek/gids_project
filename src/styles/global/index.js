import { createGlobalStyle } from 'styled-components';
import {mainGreen} from "./colors"



const GlobalStyle = createGlobalStyle`
  *,*:before, *:after{
      box-sizing: border-box;
      font-family: Montserrat !important;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar:horizontal {
    height: 5px;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #326a32;
    border-radius: 50px;
  }
  .MuiLinearProgress-root.MuiLinearProgress-colorPrimary.MuiLinearProgress-indeterminate.css-eglki6-MuiLinearProgress-root{
    span{
      background-color: #baeeb89d !important;
    }

  }
  .no_data_card{
    width:100%;
    padding:18px;
    text-align:center;
    background:#EEF7EE;
  }
  .sc-nFqVA.ia-dRsN{
    position:relative;
  }
  .sc-fWSDcn.iIvpBk{
    position: absolute;
    top:-9px;
    &::after{
      color: ${mainGreen} !important;
    }
      /* display:none !important; */
  }
  .gAPKPk{
    background-color:#f5faff !important;
    svg{
      color: #326a32c5 !important;
    }
  }
  .sc-dwfUuu.cgfRtH{
    input{
      color:${mainGreen} !important;
    }
    input:focus{
      border-color: ${mainGreen} !important;
    }
    @media (max-width:395px){
      &{
        input{
          width:45px;
          height: 45px;
          margin: 4px !important;
          padding:0;
        }
      }
    }
  }
  .iIvpBk:after{
    border-color: ${mainGreen} transparent ${mainGreen} transparent !important;
  }
  .sc-fbkiRW.kwzLdY{
    background-color:#f5faff !important;
  }
  .kwzLdY{
    svg{
      color: #326a32c5 !important;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus {
      background-color: #fafcfa !important;
      /* color: #555 !important;
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
      -webkit-text-fill-color: #555555 !important; */
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
  input{
    outline:none !important;
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