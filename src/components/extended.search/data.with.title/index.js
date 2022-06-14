import React from 'react'
import Calendar from '../../atom/calendar'
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Calendar width={props.width} {...props}/>
        </Wrapper>
    )
}

export default Index
