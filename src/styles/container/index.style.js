import styled from "styled-components"

export const Container = styled.div`
    width: ${value=>value.width ? value.width:'100%'};
    padding: ${value=>value.padding ? value.padding : '10px'};
    margin:${value=>value.margin};
    box-shadow: ${value=>value.boxShadow};
    
`