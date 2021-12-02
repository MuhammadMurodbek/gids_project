import React from 'react'
import {Wrapper, Label} from './style'
import YearPicker from "../../atom/year.picker"

const Index = (props) => {
    const {width, label, sizeLabel, marginLabel, pcolor, errorText} = props
    return (
        <Wrapper width={width} pcolor={pcolor} >
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <YearPicker {...props} width="100%" />
        </Wrapper>
    )
}

export default Index
