import React from 'react'
import {Wrapper, Label} from './style'
import Select from "../../atom/select/select.country"

const Index = (props) => {
    const {width, label, sizeLabel, marginLabel, pcolor, errorText, placeholder} = props
    return (
        <Wrapper width={width} pcolor={pcolor} >
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <Select {...props} placeholder={placeholder} width="100%" />
        </Wrapper>
    )
}

export default Index
