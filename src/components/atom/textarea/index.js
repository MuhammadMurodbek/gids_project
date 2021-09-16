import React from 'react'
import { InputWrapper, Input } from './index.style'

const Index = (props) => {
    return (
        <InputWrapper width={props.width} height={props.height}>
            <Input {...props}/>
        </InputWrapper>
    )
}

export default Index