import React from 'react'
import {ContainerBottom} from "./style"
const Index = (props) => {
    const {title, text, display, check, margin} = props
    return (
        <ContainerBottom display={display} margin={margin}>
            <div className="inner-div">
                {check ? <i className="fas fa-check"></i>:null}
                <span className="title">{title}</span> 
                <span>{text}</span> 
            </div>
        </ContainerBottom>
    )
}

export default Index
