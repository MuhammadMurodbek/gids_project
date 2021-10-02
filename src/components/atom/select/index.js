import React from 'react'
import Select from "react-select"
import {Wrapper} from "./index.style"
import "./style.css"
const Index = (props) => {
    return (
        <Wrapper width={props.width} paddingX={props.paddingX} margin={props.margin} backgroundColor={props.backgroundColor}>
            <Select {...props }   
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} 
            />            
        </Wrapper>
    )
}

export default Index
