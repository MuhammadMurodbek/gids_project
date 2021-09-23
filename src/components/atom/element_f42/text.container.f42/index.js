import React from 'react'
import {ContainerBottom} from "./style"
const Index = (props) => {
    const {title, text} = props
    return (
        <ContainerBottom>
            <div className="inner-div"> <span className="title">{title}:</span> <span>{text}</span> </div>
        </ContainerBottom>
    )
}

export default Index
