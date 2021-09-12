import styled from "styled-components"

export const InputWrapper = styled.div`
    width: ${value=>value.widht ? value.widht.width : '100%'};
    display: inline-block;
    position: relative;
    padding: 10px;
    background-color:#FAFCFA;
    border-radius: 4px;
`
export const Input = styled.input`
    position: relative;
    top:3px;
    width: 100%;
    height: auto;
    padding: 2px 10px;
    margin-top: 10px;
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
export const InputLabel = styled.span`
    position: absolute;
    top:5px;
    left:19px;
    font-size: 12px;
    color:#212121;
    z-index: 2;
`
export const Eye = styled.div`
    position: absolute;
    right:-10px; top:18px;
    width:50px;
    height:50px;
    z-index:10;
    .far{
        cursor:pointer;
    }
`