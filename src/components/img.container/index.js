import React from 'react'
import {ImgWrapper} from "./index.styled"
const Index = (props) => {
    return (
        <ImgWrapper width={props.width} height={props.height}>
           <img src={props.src} alt="alt"/> 
        </ImgWrapper>
    )
}

export default Index
