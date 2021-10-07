import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const Button = styled.button`
    width:${(value)=>value.width};
    padding:14px 32px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${(value)=>value.type === "outlined" ? `${mainGreen}`:"#fff"};
    cursor: pointer;
    border:${(value)=>value.type === "outlined" ? `0.122rem solid ${mainGreen}`: "0.122rem solid transparent"};
    border-radius: 4px;
    background-color:${mainGreen};
    background-color: ${(value)=>value.type === "outlined" ? "transparent":`${mainGreen}`};

    @media (max-width: ${a=>a.m_width_btn}){
        width: ${a=>a.m_m_width_btn} !important;
        font-size: ${a=>a.m_m_font_btn} !important;
        padding: ${a=>a.m_m_padding} !important;
    }
`
export const ButtonWrapper = styled.div`
    display: inline-block;
    height:auto;
    padding:0;
    overflow: hidden;
    border-radius: 4px;
    margin:${value=>value.margin}
    /* box-shadow: 0 0 2px 1px #999; */
`