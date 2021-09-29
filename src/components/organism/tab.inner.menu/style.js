import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"
export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .MuiTabs-flexContainer.css-heg063-MuiTabs-flexContainer{
        width:"100%";
        box-shadow:none;
        
        button{
            flex: 1 !important;
        }
    }

    .active{
        flex:1;
        height:40px;
        text-transform: capitalize !important;
        font-family: Montserrat;
        font-size: 15px;
        color:${mainGreen} !important;
        background-color:transparent !important;
        transition: all ease 0.4s;
    }
    .text-transform{
        flex:1;
        width:"100%";
        height:40px;
        font-family: Montserrat;
        font-size: 15px;
        text-transform: capitalize !important;  
        transition: all ease 0.4s;
    }
    .border-div{
        position:relative;
        top:10px;
    }

    .MuiBox-root.css-19kzrtu{
        padding:0 !important;
    }
`