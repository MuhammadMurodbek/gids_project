import React, { useState } from 'react';
import { DatePicker } from 'antd';
import {Wrapper } from './style'
function SwitchablePicker (props) {
    const {state, setState, field, defaultValue} = props;
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
            />
        </Wrapper>
    );
}

export default SwitchablePicker;