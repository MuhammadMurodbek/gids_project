import React from 'react'
import {ContainerBottom} from "./style"
const Index = (props) => {
    const {title, text, display} = props
    return (
        <ContainerBottom display={display}>
            <div className="inner-div"> <span className="title">{title}</span> <span>{text}</span> </div>
        </ContainerBottom>
    )
}

export default Index
