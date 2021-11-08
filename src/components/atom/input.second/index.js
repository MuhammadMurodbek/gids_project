import React from 'react'
import { Input,InputWrapper } from './style'

const Index = (props) => {
    const {errorText} = props;
    return (
        <InputWrapper>
            <Input {...props}/>
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> 
        </InputWrapper>
    )
}

export default Index
