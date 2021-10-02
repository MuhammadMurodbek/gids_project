import React from 'react'
import {WrapperRoundImage} from "./style"
import ImageContainer from "../img.container"
import playBtn from "../../../assets/img/choosegid/playbtn.svg"

const Index = (props) => {
    const {src, width, height, radius} = props
    return (
        <WrapperRoundImage width={width} height={height} radius={radius}>
            <ImageContainer src={src} width="100%" height="100%"/>  
            <button>
                <ImageContainer src={playBtn} width="30px" height="30px"/>
            </button>          
        </WrapperRoundImage>
    )
}

export default Index
