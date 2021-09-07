import React from 'react'
import Calendar from '../../calendar'
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <span>{props.title}</span>
            <Calendar width={props.width}/>
        </Wrapper>
    )
}

export default Index
