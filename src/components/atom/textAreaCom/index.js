import React from 'react'
import {Input } from './style'

const Index = (props) => {
    const {rows} = props;
    return (
        // <InputWrapper>
            <Input {...props} rows={rows} maxLength="220"/>
        // </InputWrapper>
    )
}

export default Index
