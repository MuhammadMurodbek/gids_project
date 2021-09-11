import React from 'react'
import {Input, InputWrapper, InputLabel} from "./index.style"

const Index = (props) => {
    return (
        <InputWrapper className="wrapper-input" width={props.width}>  
            <InputLabel className="label-input">{props.title}</InputLabel>
            <Input className="input-inner" label="asdfdsf" {...props} />
        </InputWrapper>
    )
}

export default Index
