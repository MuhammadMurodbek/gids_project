import React from 'react'
import {Wrapper, Label, Input} from "./style"
const Index = (props) => {
    
    const {width, label, sizeLabel, value} = props
    
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Input>{value}</Input>
        </Wrapper>
    )
}

export default Index