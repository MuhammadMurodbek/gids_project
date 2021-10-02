import styled from "styled-components"
export const CheckboxWrapper = styled.div`
    width: 100%;

    .wrapper-container{
        width:100%; 
        padding:6px; 
        border-radius:4px;
    }
`
export const Label = styled.div`
    font-weight: 600;
    font-size: ${v=>v.size};
    margin: ${v=>v.margin ? v.margin : "10px"};
    margin-top: 20px;
    text-align: left;
    font-family: Montserrat;
`