import React from 'react'
import {Wrapper, Label} from './style'
import DoubleTime from "../../atom/double.time.picker"
const Index = (props) => {
    const {width, label, sizeLabel} = props
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <DoubleTime {...props} width="100%"/>
        </Wrapper>
    )
}

export default Index
