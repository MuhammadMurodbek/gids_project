import styled from "styled-components";
import {mainGreen} from "../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 0px; 
    
    
    p{
        margin: 0;
    }
    .gridTitle{
    }
    .gridTitle2{
        display: flex;
        justify-content: flex-end;
    }
    .arrole{
        font-size: 18px;
        margin-right: 15px;
    }
    .comback{
        display: flex;
        align-items: center;
        color:${mainGreen};
    }
    .div1title{
        background-color:${mainGreen};
        padding: 20px;
        color: #fff;
        margin:8px;
    }
    .tafsilot-text{
        display: flex;
        align-items: center ;

    }
   
    .tafsilot-text b{
        margin: 15px 5px;
    }
    b img{
        width: 25px;
    }
    .grid6text p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        color: #000;
        padding: 10px;
    }
    @media(min-width:1400px){
        width:1400px;
        margin:0 auto;
    }
    
`
