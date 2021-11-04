import React, {useCallback} from 'react'
import {Wrapper} from "./index.style"
import { Checkbox } from 'antd';

const Index = (props) => {
    const {setState, state, name, field} = props;
    const handleChange = useCallback((e) => {
        if(setState && field)
        setState({...state, [field]:e.target.checked })
    },[state])
    return (
        <Wrapper>
            <Checkbox name={name} onChange={handleChange}>{props.name}</Checkbox>
        </Wrapper>
    )
}

export default Index
