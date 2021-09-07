import React from 'react'
import Select from "../../select"
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <span className="title">{props.title}</span>
            <Select/>
        </Wrapper>
    )
}

export default Index
