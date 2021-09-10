import React from 'react'
import {ImgWrapper} from "./index.styled"
const Index = (props) => {
    return (
        <ImgWrapper width={props.width} height={props.height} radius={props.radius}>
           <img src={props.src} alt="alt" style={{verticalAlign: 'middle'}}/> 
        </ImgWrapper>
    )
}

export default Index
