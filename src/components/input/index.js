import React from 'react'
import {Input, InputWrapper, InputLabel} from "./index.style"

const Index = (props) => {
    return (
        <InputWrapper className="wrapper-input">  
            <InputLabel className="label-input">E-mail kiriting</InputLabel>
            <Input className="input-inner" label="asdfdsf" {...props} />
        </InputWrapper>
    )
}

export default Index
