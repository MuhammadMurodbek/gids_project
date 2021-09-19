import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .appbar{
        width:"100%";
        background-color: rgba(249, 249, 249, 1) !important;
        box-shadow:none;
    }
    .active{
        flex:1;
        height:60px;
        text-transform: capitalize !important;
        font-family: Montserrat;
        font-size: 15px;
        color:#fff !important;
        background-color:${mainGreen};
        transition: all ease 0.4s;
    }
    .text-transform{
        flex:1;
        width:"100%";
        height:60px;
        font-family: Montserrat;
        font-size: 15px;
        text-transform: capitalize !important;  
        transition: all ease 0.4s;
    }
    .tabs-wrapper{
        text-align:center;
        background-color: rgba(249, 249, 249, 1);
    }
    .tabs-item{
        display:flex;
        width:70%;
        margin:0 auto;
    }
`