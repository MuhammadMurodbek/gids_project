import React from 'react'
import {Wrapper, Label} from "./style"
import Input from "../../atom/input.second"

const Index = (props) => {
    return (
        <Wrapper width={props.width}>
            <Label >isim</Label>
            <Input {...props}/>
        </Wrapper>
    )
}

export default Index
     