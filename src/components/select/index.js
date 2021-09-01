import React from 'react'
import Select from "react-select"
import {Wrapper} from "./index.style"
import "./style.css"
const Index = (props) => {
    return (
        <Wrapper width={props.width}>
            <Select {...props}/>            
        </Wrapper>
    )
}

export default Index
