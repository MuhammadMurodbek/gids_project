import styled from "styled-components"

export const ImgWrapper = styled.div`
    width: 100%;
    height: auto;

    img{
        width: ${value=>value.width};
        height: auto;
        object-fit: cover;
    }
`