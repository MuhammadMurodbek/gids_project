import React from 'react'
import {Wrapper, Label} from "./style"
import Calendar from "../../atom/calendar"

const Index = (props) => {
    const {width, label, sizeLabel, onChange, value, name} = props
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Calendar onChange={onChange} value={value} name={name} />
        </Wrapper>
    )
}

export default Index
     