import styled from "styled-components"

export const TextTitle = styled.div`
    width: ${value=>value.width ? value.width:'100%'};
    font-weight: ${value=>value.fontWeight ? value.fontWeight:'700'};
    text-align: ${value=>value.align ? value.align : 'center'};
    line-height: ${a=>a.lineHeight ? a.lineHeight:'2rem'};
    font-size:${value=>value.font ? value.font : "28px"};
    margin-top: ${value=>value.top};
    margin-bottom: ${value=>value.bottom};
    margin-left: ${value=>value.left};
    margin-right: ${value=>value.right};
    position:${a=>a.position};
    top: ${a=>a.p_top};
    bottom: ${a=>a.p_bottom};
    right: ${a=>a.p_right};
    left: ${a=>a.p_left};
    color:${value=>value.color ? value.color : '#000'};

    @media (max-width: ${a=>a.m_width}){
        font-size: ${a=>a.m_font_size};
        width:100%;
        top:${a=>a.m_top} !important;
        bottom:${a=>a.m_bottom} !important;
    }
    @media (max-width: ${a=>a.m_width_sec}){
        font-size: ${a=>a.m_font_size_sec};
        width:100%;
        top:${a=>a.m_top} !important;
        bottom:${a=>a.m_bottom} !important;
    }
    @media (max-width:${a=>a.m_width_ext}){
        text-align: ${a=>a.m_text_align_ext};
        margin:0;
    }
`