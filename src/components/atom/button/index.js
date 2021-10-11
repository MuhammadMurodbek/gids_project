import React from 'react'
import {Button, ButtonWrapper} from "./index.style"
import Ripples from "react-ripples"
// import  Link  from 'react-router-dom'

const Index = (props) => {
    const {width,margin, url, m_width_btn , m_m_width_btn, type} = props
    return (
        <ButtonWrapper 
            width={width} 
            margin={margin} 
            to={url} 
            m_width_btn={m_width_btn} 
            m_m_width_btn={m_m_width_btn}
        >
            <Ripples 
                color={type === "outlined" ? "rgba(0,0,0,0.1)":"rgba(255,255,255,0.5)"} 
                during={1000}
            >
               <Button {...props}/> 
            </Ripples>
        </ButtonWrapper>
    )
}

export default Index
