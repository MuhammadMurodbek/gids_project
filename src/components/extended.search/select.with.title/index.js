import React from 'react'
import Select from "../../select"
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select/>
        </Wrapper>
    )
}

export default Index
