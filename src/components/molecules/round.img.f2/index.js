import React from 'react'
import {WrapperRoundImage} from "./style"
import ImageContainer from "../img.container"
import playBtn from "../../../assets/img/choosegid/playbtn.svg"

const Index = (props) => {
    const media = {
        m_width:"600px",
        m_m_width:"80%",
        m_m_text_align:"right",
    }
    const mediaWrapper = {
        m_width:"600px",
        m_m_width:"100%",
    }
    const imageButton = {
        m_width:"600px",
        m_m_width:"50px",
    }
    const mediaBtn = {
        m_btn_width:"600px",
        m_btn_top:"-50px",
        m_btn_right:"20%",
    }
    const {src, width, height, radius} = props
    return (
        <WrapperRoundImage {...mediaBtn} {...mediaWrapper} width={width} height={height} radius={radius}>
            <ImageContainer {...media} src={src} width="100%" height="100%"/>  
            <button>
                <ImageContainer {...imageButton} src={playBtn} width="30px" height="30px"/>
            </button>          
        </WrapperRoundImage>
    )
}

export default Index
