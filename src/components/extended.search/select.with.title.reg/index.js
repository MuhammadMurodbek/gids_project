import React from 'react'
import Select from "../../atom/select"
import {Wrapper} from "./index.style"
const Index = (props) => {
    const options=[
        {value:0, label:'english'},
        {value:1, label:'russian'},
        {value:2, label:'spain'},
        {value:3, label:'uzbek'},
        {value:4, label:'arabic'},
        {value:5, label:'turkish'},
    ]
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select isMulti {...props} options={options} placeholder={props.placeholder}/>
        </Wrapper>
    )
}

export default Index
