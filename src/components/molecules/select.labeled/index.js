import React from 'react'
import {Wrapper, Label} from './style'
import Select from "../../atom/select"

const Index = (props) => {
    const {width, label, sizeLabel, marginLabel, pcolor, errorText} = props
    return (
        <Wrapper width={width} pcolor={pcolor} >
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <Select {...props} width="100%" />
            {/* <span style={{position: 'absolute', fontSize:'11px', bottom:-14, left:0, fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> */}
        </Wrapper>
    )
}

export default Index
