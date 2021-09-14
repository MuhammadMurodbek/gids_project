import styled from "styled-components"

export const WrapperRoundImage = styled.div`
    width:${value=>value.width};
    height:${value=>value.height};
    button{
        position:relative;
        width: auto;
        top:-24px; left:57px;

        outline:none;
        background-color:transparent;
        border:none;
        cursor:pointer;
        border-radius:50%;
    }
`