import styled from "styled-components";
export const InputWrapper = styled.div`
    width:${value=>value.width};
    height: ${value=>value.height};
    display: inline-block;
    position: relative;
    padding: 10px;
    background-color:#FAFCFA;
    border-radius: 4px;
    margin:20px 0 ;
`

export const Input = styled.textarea`
    position: relative;
    top:3px;
    background-color: red;
    width: 100%;
    height: auto;
    padding: 4px 10px;
    border:none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    color:#212121;
    background-color: transparent;
    z-index: 4;
`