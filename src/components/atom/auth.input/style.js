import styled from "styled-components"

export const InputWrapper = styled.div`
    width: ${value=>value.widht ? value.widht.width : '100%'};
    display: inline-block;
    position: relative;
    /* padding: 10px; */
    margin:${value=>value.margin};
    background-color:#FAFCFA;
    border-radius: 4px;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:active,
    input:-webkit-autofill:focus {
        background-color: transparent !important;
        /* color: #555 !important;
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
        -webkit-text-fill-color: #555555 !important; */
}
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
    right:20px; top:20px;
    width:20px;
    height:20px;
    z-index:10;
    cursor:pointer;
    /* .far{
    } */
`