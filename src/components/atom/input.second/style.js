import styled from "styled-components";

export const InputWrapper = styled.div`
    /* width:'100%'; */
    position:relative;
    .PhoneInputInput{
        border: none;
        background:transparent;
    }
    .error_icon{
        color:red !important;
    }
    .success_icon{
        color:green !important;
    }
    .input_phone{
        position: relative;
        top:3px;
        width: ${value=>value.width};
        height: auto;
        padding:${value=>value.padding ? value.padding : '18px 20px'};
        padding-right: ${value=>value.paddingRight};
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
    }
`

export const Input = styled.input`
    position: relative;
    top:3px;
    width: ${value=>value.width};
    height: auto;
    padding:${value=>value.padding ? value.padding : '18px 20px'};
    padding-right: ${value=>value.paddingRight};
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