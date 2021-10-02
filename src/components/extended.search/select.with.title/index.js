import React from 'react'
import Select from "../../atom/select"
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select placeholder={props.placeholder}/>
        </Wrapper>
    )
}

export default Index
