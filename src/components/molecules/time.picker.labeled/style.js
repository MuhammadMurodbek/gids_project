import styled from "styled-components"

export const Wrapper = styled.div`
    position:relative;
    width:${v=>v.width ? v.width:"auto"};
    font-family:Montserrat !important;
    .css-1wa3eu0-placeholder{
        color: ${v=>v.pcolor ? "#2a2a2a" :"#7c7a7a" }!important;
    }
`
export const Label = styled.div`
    font-weight: 600;
    font-size: ${v=>v.size ? v.size:'15px'};
    margin: ${a=>a.margin ? a.margin:"10px"};
    margin-top: 20px;
    text-align: left;
`