import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    width: ${(value)=>value.width} !important;
    padding:${value=>value.paddingX ? value.paddingX:'9px 20px'} ;
    margin:${value=>value.margin};
    background-color: ${value=>value.backgroundColor ? value.backgroundColor : '#fafcfa'} ;
    border-radius: 4px;
    z-index: 5;
    .css-1wa3eu0-placeholder{
        color: ${v=>v.pcolor ? "#2a2a2a" :"#7c7a7a" }!important;
    }
`