import styled from "styled-components"

export const Button = styled.button`
    width:${(value)=>value.width};
    padding:16px 32px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${(value)=>value.type === "outlined" ? "#326A32":"#fff"};
    cursor: pointer;
    border:${(value)=>value.type === "outlined" ? "0.122rem solid #326A32": "none"};
    border-radius: 4px;
    background-color:#326A32;
    background-color: ${(value)=>value.type === "outlined" ? "transparent":"#326A32"};
`
export const ButtonWrapper = styled.div`
    display: inline-block;
    height:auto;
    padding:0;
    overflow: hidden;
    border-radius: 4px;
    /* box-shadow: 0 0 2px 1px #999; */
`