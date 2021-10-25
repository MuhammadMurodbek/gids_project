import React from 'react'
import {Button, ButtonWrapper} from "./index.style"
import Ripples from "react-ripples"
import Progress from "../loading.spinner.line"
// import  Link  from 'react-router-dom'

const Index = (props) => {
    const {width,margin, url, m_width_btn , m_m_width_btn, type, loader} = props
    return (
        <ButtonWrapper 
            width={width} 
            margin={margin} 
            to={url} 
            m_width_btn={m_width_btn} 
            m_m_width_btn={m_m_width_btn}
            style={{position:'relative'}}
        >
            <Ripples 
                color={type === "outlined" ? "rgba(0,0,0,0.1)":"rgba(255,255,255,0.5)"} 
                during={1000}
                style={{position: "relative"}}
            >
              <Button {...props}/> 
            </Ripples>
            <div className="progress" style={loader ? {display:'inline-block'}:{display:'none'}}><Progress color="#fff" width={17} height={17}/></div>
        </ButtonWrapper>
    )
}

export default Index
