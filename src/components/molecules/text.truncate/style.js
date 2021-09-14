import styled from "styled-components"

export const Wrapper = styled.div`
    width: ${value=>value.width ? value.width:'100%'};
    height: ${value=>value.height ? value.height:"auto"};
`