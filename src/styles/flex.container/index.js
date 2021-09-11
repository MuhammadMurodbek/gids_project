import styled from "styled-components"

export const FlexContainer = styled.div`
    width: ${value=>value.width};
    display: flex;
    align-items: ${value=>value.alignItems};
    justify-content: ${value=>value.justifyContent};
    margin: ${value=>value.margin}
`