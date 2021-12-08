import React from 'react';
import { DatePicker } from 'antd';
import {Wrapper } from './style'
function SwitchablePicker (props) {
    const {state, setState, field, defaultValue, placeholder} = props;
    const handleChange = (data) => {
        setState({...state, [field]:data})
    }
    return (
        <Wrapper pcolor={defaultValue ? true:false}>
            <DatePicker 
                className="SwitchablePicker_style" 
                picker='year' 
                placeholder={defaultValue ? defaultValue:'Select year'}
                onChange={(event, data) => handleChange(data)}
                placeholder={placeholder}
            />
        </Wrapper>
    );
}

export default SwitchablePicker;