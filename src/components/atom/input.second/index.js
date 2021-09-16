import React from 'react'
import { InputWrapper, Input } from './style'
 
const Index = (props) => {
    return (
        <InputWrapper width={props.width}>
            <Input {...props}/>
        </InputWrapper>
    )
}

export default Index
