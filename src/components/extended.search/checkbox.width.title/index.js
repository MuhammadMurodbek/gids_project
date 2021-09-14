import React from 'react'
import {Wrapper} from "./index.style"
import Checkbox from "../../atom/checkbox"

const Index = (props) => {
    return (
        <Wrapper>
            <div className="title-header-checkbox">Tarjimonning jinsi</div>
            <Checkbox className="check" name={props.name1}/>             
            <Checkbox className="check" name={props.name2}/>            
        </Wrapper>
    )
}

export default Index
