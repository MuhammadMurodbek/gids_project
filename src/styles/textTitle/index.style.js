import styled from "styled-components"

export const TextTitle = styled.div`
    width: 100%;
    font-weight: 700;
    text-align: center;
    font-size:${value=>value.font ? value.font : "28px"};
    margin-top: ${value=>value.top};
    margin-bottom: ${value=>value.bottom};
    color:#000;
`