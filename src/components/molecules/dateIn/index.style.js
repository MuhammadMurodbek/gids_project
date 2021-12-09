import styled from "styled-components";
import {mainGreen} from "../../../styles/global/colors";

 export const Wrapper = styled.div`
    width: 90%;
    margin:50px auto;
    padding-top: 10px;
    margin-bottom: 50px;
    .button_sub{
        display: flex;
        align-items: center;
        justify-content: center;
        border:none !important;
        background-color:transparent !important;
        cursor:pointer !important;
    }
    .select_div{
        position: relative;
        bottom:10px; 
    }
    .searchI{
        background-color:${mainGreen};
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(value)=>value.type === "outlined" ? `${mainGreen}`:"#fff"};
        border-radius: 0 5px 5px 0; 
        span{
            display: none;
        }
    }
    @media (max-width: 768px){
        .searchI{
            span{
                display: inline-block;
            }
            width: 100%;
            margin:0 15px;
            border-radius: 5px !important;
            margin-top:10px;
        }
    }
    @media (max-width: 706px){
        .select_date,
        .select_div{
            width:100%;
            margin:5px 0;
        }
    }
    @media (max-width:400px){
        .searchI{
            margin:0 !important;
            margin-top:10px !important;
            /* background-color:red; */
        }
    }
`

