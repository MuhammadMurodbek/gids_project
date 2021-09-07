import React from 'react'
import {Wrapper} from "./index.style"
import Checkbox from "../../checkbox"

const Index = (props) => {
    return (
        <Wrapper>
            <Checkbox name={props.name1}/>             
            <Checkbox name={props.name2}/>            
        </Wrapper>
    )
}

export default Index
