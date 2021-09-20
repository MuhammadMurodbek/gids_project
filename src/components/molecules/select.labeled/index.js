import React from 'react'
import {Wrapper, Label} from './style'
import Select from "../../atom/select"

const Index = (props) => {
    const {width, label} = props
    return (
        <Wrapper width={width}>
            <Label>{label}</Label>
            <Select {...props} width="100%"/>
        </Wrapper>
    )
}

export default Index
