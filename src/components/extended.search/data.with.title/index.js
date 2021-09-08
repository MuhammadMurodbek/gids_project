import React from 'react'
import Calendar from '../../calendar'
import {Wrapper} from "./index.style"

const Index = (props) => {
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Calendar width={props.width}/>
        </Wrapper>
    )
}

export default Index