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
        height:60px;
        text-transform: capitalize !important;
        font-family: Montserrat;
        color:#fff;
        background-color:${mainGreen};
    }
    .text-transform{
        width:"100%";
        height:60px;
        /* padding:10px 0 !important; */
        font-family: Montserrat;
        text-transform: capitalize !important;  
    }
    
`