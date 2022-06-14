import React, {useCallback, useEffect} from 'react'
import {Wrapper} from "./index.style"
import { Checkbox } from 'antd';

const Index = (props) => {
    const {setState, state, name, field, errorText, setDefaultValue} = props;
    useEffect(()=>{
        if(setDefaultValue === 'writer'){
            if(setState && field)
        setState({...state, [field]:true })
        }
    },[setDefaultValue])
    const handleChange = useCallback((e) => {
        if(setState && field)
        setState({...state, [field]:e.target.checked })
    },[state, field])
    // console.log(state)
    return (
        <Wrapper>
            <Checkbox checked={state ? state[field] : false} name={name} 
                onChange={handleChange}>{props.name}</Checkbox>
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> 
        </Wrapper>
    )
}

export default Index
