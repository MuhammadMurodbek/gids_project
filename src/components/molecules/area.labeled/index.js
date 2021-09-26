import React from 'react'
import {Wrapper, Label} from './style'
// import Select from "../../atom/select"
import TextArea from "../../atom/textAreaCom"
const Index = (props) => {
    const {width, label} = props
    return (
        <Wrapper width={width}>
            <Label>{label}</Label>
            <TextArea {...props} rows="10" />
        </Wrapper>
    )
}

export default Index
