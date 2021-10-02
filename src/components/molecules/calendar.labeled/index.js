import React from 'react'
import {Wrapper, Label} from "./style"
import Calendar from "../../atom/calendar"

const Index = (props) => {
    const {width, label, sizeLabel} = props
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Calendar/>
        </Wrapper>
    )
}

export default Index
     