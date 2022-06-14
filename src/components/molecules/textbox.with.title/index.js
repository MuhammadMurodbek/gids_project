import React from 'react'
import {Wrapper} from "./index.style"
import TextBox from "../../input"

const Index = (props) => {
    return (
        <Wrapper>
            <TextBox {...props}/>
        </Wrapper>
    )
}

export default Index