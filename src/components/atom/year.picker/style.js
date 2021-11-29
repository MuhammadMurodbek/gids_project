import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    top:3px;
    padding:13px 10px;
    border-radius: 4px;
    background-color:#FAFCFA;

    input::placeholder{
        color: ${v=>v.pcolor ? "#2a2a2a" :"#a09e9e" }!important;
    }

    .SwitchablePicker_style{
        width:100%;
        outline: none !important;
        border:none !important;
        background-color: transparent;
    }
`