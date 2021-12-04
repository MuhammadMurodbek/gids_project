import React from 'react'
import {Wrapper, Label} from './style'
import Select from "../../atom/select/select.country"

const Index = (props) => {
    const {width, label, sizeLabel, marginLabel, pcolor, errorText} = props
    return (
        <Wrapper width={width} pcolor={pcolor} >
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <Select {...props} width="100%" />
        </Wrapper>
    )
}

export default Index
