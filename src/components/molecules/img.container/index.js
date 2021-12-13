import React from 'react'
import {ImgWrapper} from "./index.styled"
const Index = (props) => {
    const {media_height, media_height_value, media_width_value, m_m_width, m_m_text_align} = props
    return (
        <ImgWrapper 
            width={props.width} 
            height={props.height} 
            round={props.round} 
            align={props.align} 
            margin={props.margin} 
            media={props.m_width}
            media_height={media_height}
            media_height_value={media_height_value}
            media_width_value={media_width_value}
            m_m_width={m_m_width}
            m_m_text_align={m_m_text_align}
        >
           <img 
                src={props.src} 
                alt="alt" 
                style={{
                    verticalAlign: 'middle',
                }}
                round={props.round}
                media_height={media_height}
                media_height_value={media_height_value}
                media_width_value={media_width_value}
                m_m_width={m_m_width}
            /> 
        </ImgWrapper>
    )
}

export default Index;
