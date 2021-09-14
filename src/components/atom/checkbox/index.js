import React from 'react'
import {Wrapper} from "./index.style"
import { Checkbox } from 'antd';

const Index = (props) => {
    return (
        <Wrapper>
            <Checkbox onChange={props.onChange}>{props.name}</Checkbox>
        </Wrapper>
    )
}

export default Index
