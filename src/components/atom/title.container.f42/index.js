import React from 'react'
import {TextTitle} from "../../../styles/textTitle/index.style"
const Index = (props) => {
    const {text} = props;
    return (
        <>
            <TextTitle font="15px" fontWeight="600" align="left" color="#326A32">{text}</TextTitle>
        </>
    )
}

export default Index
