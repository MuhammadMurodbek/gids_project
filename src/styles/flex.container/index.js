import styled from "styled-components"

export const FlexContainer = styled.div`
    width: ${value=>value.width};
    max-width: ${value=>value.maxWidth};
    height: ${value=>value.height};
    display: flex;
    align-items: ${value=>value.alignItems};
    justify-content: ${value=>value.justifyContent};
    flex-direction: ${value=>value.flexDirection ? value.flexDirection:'row'};
    margin: ${value=>value.margin};
    gap: ${value=>value.gap};
    flex-wrap: ${value=>value.flexWrap};
`