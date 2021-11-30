import React, { useState } from 'react';
import { TimePicker } from 'antd';
import {Wrapper } from './style'
import moment from 'moment'
function SwitchablePicker (props) {
    const {state, setState, field, defaultValue} = props;
    const handleChange = (data) => {
        setState({...state, [field]:data})
    }
    return (
        <Wrapper pcolor={defaultValue ? true:false}>
            <TimePicker 
                className="SwitchablePicker_style" 
                picker='year' 
                defaultValue={moment(defaultValue || '00:00:00', 'HH:mm:ss')}
                onChange={(event, data) => handleChange(data)}
            />
        </Wrapper>
    );
}

export default SwitchablePicker;