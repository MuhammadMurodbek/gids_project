import React from 'react'
import {Button, ButtonWrapper} from "./index.style"
import Ripples from "react-ripples"

const Index = (props) => {
    return (
        <ButtonWrapper width={props.width}>
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
