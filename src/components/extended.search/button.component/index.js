import React from 'react'
import Button from "../../button"
import {Wrapper} from "./index.style"
const Index = (props) => {
    return (
        <Wrapper>
            <Button width={props.width}>{props.name}</Button>  
            <i className="fas fa-search"></i>          
        </Wrapper>
    )
}

export default Index
