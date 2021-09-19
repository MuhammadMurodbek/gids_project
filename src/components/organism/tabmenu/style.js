import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .appbar{
        width:"100%";
        /* padding:15px 0; */
        background-color: rgba(249, 249, 249, 1) !important;
        box-shadow:none;
    }

    .active{
        text-transform: capitalize !important;
        font-family: Montserrat;
        color:#fff;
        background-color:${mainGreen};
    }
    .text-transform{
        font-family: Montserrat;
        text-transform: capitalize !important;
    }
`