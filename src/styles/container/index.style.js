import styled from "styled-components"

export const Container = styled.div`
    width: ${value=>value.width ? value.width:'100%'};
    max-width: ${value=>value.maxWidth};
    padding: ${value=>value.padding ? value.padding : '10px'};
    margin:${value=>value.margin};
    margin-bottom: ${a=>a.marginBottom};
    box-shadow: ${value=>value.boxShadow};
    text-align: ${value=>value.textAlign};
    background: ${value=>value.backgroundColor};
    position:${value=>value.position};
    bottom:${a=>a.bottom};
    top:${a=>a.top};
    z-index:${value=>value.zIndex};
    /* background-color:red; */

    @media (max-width:${a=>a.m_width}){
        padding:${a=>a.m_padding};
        display: ${a=>a.m_display};
        width:${a=>a.m_m_width};
        text-align:${a=>a.m_text_align};
    }
    

`