import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    width: ${(value)=>value.width} !important;
    padding:${value=>value.paddingX ? value.paddingX:'8px'} 20px;
    margin:${value=>value.margin};
    background-color: ${value=>value.backgroundColor ? value.backgroundColor : '#fafcfa'} ;
    border-radius: 4px;
    z-index: 5;
`