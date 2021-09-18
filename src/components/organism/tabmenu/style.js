import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .appbar{
        width:"100%";
        /* padding:10px 0; */
        background-color: rgba(249, 249, 249, 1) !important;
        box-shadow:none;
    }
    /* .MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.MuiTab-fullWidth.text-transform.css-1vw5i9y-MuiButtonBase-root-MuiTab-root{
        padding:10px;
    } */
    .active{
        height:70px;
        text-transform: capitalize !important;
        font-family: Montserrat;
        color:#fff;
        padding:10px 0 !important;
        background-color:${mainGreen};
    }
    .text-transform{
        width:"100%";
        height:70px;
        padding:10px 0 !important;
        font-family: Montserrat;
        text-transform: capitalize !important;
        /* border-right: 1px solid black; */
        /* .border-div{
            border-right: 1px solid #444;
            position:absolute;
            width:100%;
            height:25px;
            line-height:25px;
        }
        .border-div.first{
            border-left: 1px solid #444;
        }    */
    }
    
`