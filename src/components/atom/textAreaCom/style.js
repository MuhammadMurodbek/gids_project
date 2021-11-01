import styled from "styled-components";
export const InputWrapper = styled.div`
    /* width:'100%'; */
    display: inline-block;
    position: relative;
    padding: 10px;
    background-color:#FAFCFA;
    border-radius: 4px;
`

export const Input = styled.textarea`
    position: relative;
    top:3px;
    width: ${value=>value.width};
    height: ${"height" ? value=>value.height: "auto"};
    padding: 18px 20px;
    border:none;
    background-color:#FAFCFA;
    border-radius: 4px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    color:#212121;
    z-index: 4;
`