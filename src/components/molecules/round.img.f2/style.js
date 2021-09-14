import styled from "styled-components"

export const WrapperRoundImage = styled.div`
    width:${value=>value.width};
    height:${value=>value.height};
    border-radius: ${value=>value.radius ? value.radius : '50%'};

    button{
        outline:none;
        background-color:transparent;
        border:none;
        cursor:pointer;
        border-radius:50%;
    }
`