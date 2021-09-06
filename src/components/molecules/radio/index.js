import React from 'react'
import { Radio } from 'antd';
import {WrapperRadio} from "./index.style"

const Index = (props) => {
    return (
        <WrapperRadio width={props.width}>
            <Radio value={props.value}/>   
        </WrapperRadio>
    )
}

export default Index
