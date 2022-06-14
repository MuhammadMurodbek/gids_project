import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const Button = styled.button`
    width:${(value)=>value.width};
    padding: ${a => a.paddingIcon  ? a.paddingIcon : " 14px 32px"};
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${(value)=>value.type === "outlined" || value.format === "outlined" ? `${mainGreen}`:"#fff"};
    cursor: pointer;
    /* pointer-events: none; */
    border:${(value)=>value.type === "outlined" || value.format === "outlined" ? `0.122rem solid ${mainGreen}`: "0.122rem solid transparent"} !important;
    border-radius: 4px;
    background-color:${mainGreen};
    background-color: ${(value)=>value.type === "outlined" || value.format === "outlined" ? "transparent":`${mainGreen}`};

    @media (max-width: ${a=>a.m_width_btn}){
        width: ${a=>a.m_m_width_btn} !important;
        font-size: ${a=>a.m_m_font_btn} !important;
        padding: ${a=>a.m_m_padding} !important;
        /* margin:0 auto !important; */
        
    }
`
export const ButtonWrapper = styled.div`
    display: inline-block;
    height:auto;
    padding:0;
    overflow: hidden;
    border-radius: 4px;
    margin:${value=>value.margin};
    position:relative;
    .progress{
        top:56%; left:16%;
        position:absolute;
        transform: translate(-50%,-50%);
       
    }
    .MuiCircularProgress-root.MuiCircularProgress-indeterminate.MuiCircularProgress-colorPrimary.css-18lrjg1-MuiCircularProgress-root{
        width:20px !important; 
        height: 20px !important;
    }
    @media (max-width: ${a=>a.m_width_btn}){
        text-align:center;
        margin:0 auto !important;
        /* background: red !important; */
    }
    
    /* box-shadow: 0 0 2px 1px #999; */
`