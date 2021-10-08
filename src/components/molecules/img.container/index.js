import React from 'react'
import {ImgWrapper} from "./index.styled"
const Index = (props) => {
    const {media_height, media_height_value, media_width_value} = props
    return (
        <ImgWrapper 
            width={props.width} 
            height={props.height} 
            radius={props.radius} 
            align={props.align} 
            margin={props.margin} 
            media={props.m_width}
            media_height={media_height}
            media_height_value={media_height_value}
            media_width_value={media_width_value}
        >
           <img 
            src={props.src} 
            alt="alt" 
            style={{verticalAlign: 'middle'}}
            media_height={media_height}
            media_height_value={media_height_value}
            media_width_value={media_width_value}
            /> 
        </ImgWrapper>
    )
}

export default Index;
