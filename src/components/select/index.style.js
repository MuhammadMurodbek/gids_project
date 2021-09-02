import styled from "styled-components"

export const Wrapper = styled.div`
    width: ${(value)=>value.width} !important;
    padding:${value=>value.paddingX ? value.paddingX:'8px'} 20px;
    background-color: ${value=>value.backgroundColor ? value.backgroundColor : '#fafcfa'} ;
    border-radius: 4px;
`