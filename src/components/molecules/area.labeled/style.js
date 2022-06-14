import styled from "styled-components"

export const Wrapper = styled.div`
    width:${v=>v.width ? v.width:"auto"};
`
export const Label = styled.div`
    font-weight: 600;
    margin: 10px;
    margin-top: 20px;
    text-align: left;
`