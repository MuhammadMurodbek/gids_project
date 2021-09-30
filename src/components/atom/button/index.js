import React from 'react'
import {Button, ButtonWrapper} from "./index.style"
import Ripples from "react-ripples"
import  Link  from 'react-router-dom'

const Index = (props) => {
    return (
        <ButtonWrapper width={props.width} margin={props.margin}
        to={props.url}
        >
            <Ripples 
                color={props.type === "outlined" ? "rgba(0,0,0,0.1)":"rgba(255,255,255,0.5)"} 
                during={1000}
            >
               <Button {...props}/> 
            </Ripples>
        </ButtonWrapper>
    )
}

export default Index
