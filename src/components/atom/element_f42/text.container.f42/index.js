import React from 'react'
import {ContainerBottom} from "./style"
const Index = (props) => {
    const {title, text, display, check} = props
    return (
        <ContainerBottom display={display}>
            <div className="inner-div">
                {check ? <i className="fas fa-check"></i>:null}
                <span className="title">{title}</span> 
                <span style={{textTransform:'capitalize'}}>{text}</span> 
            </div>
        </ContainerBottom>
    )
}

export default Index
