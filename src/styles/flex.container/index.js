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
    padding: ${value=>value.padding};
    gap: ${value=>value.gap};
    flex-wrap: ${value=>value.flexWrap};
    
   

    @media (max-width:${value=>value.m_width}){
        width: ${value=>value.m_m_width};
        display: ${value=>value.m_display};
        flex-direction: ${value=>value.m_direction};
        padding: ${value=>value.m_padding} !important;
        text-align: ${value=>value.m_textAlign};
        margin:${a=>a.m_margin};
        align-items: ${value=>value.m_align_items} !important;
        /* background-color:red; */
    }
`