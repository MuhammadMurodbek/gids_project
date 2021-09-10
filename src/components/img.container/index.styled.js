import styled from "styled-components"

export const ImgWrapper = styled.div`
    width: 100%;
    height: auto;

    img{
        width: ${value=>value.width};
        height: ${value=>value.height ? value.height : "auto"};
        object-fit: cover;
        border-radius: ${value=>value.radius ? value.radius : "none"}
    }
`