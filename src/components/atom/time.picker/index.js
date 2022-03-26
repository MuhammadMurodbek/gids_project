import React, { useState } from 'react';
import { TimePicker } from 'antd';
import {Wrapper } from './style'
import moment from 'moment'
function SwitchablePicker (props) {
    const {state, setState, field, defaultValue} = props;
    const handleChange = (data) => {
        setState({...state, [field]:data})
    }
    // console.log(defaultValue)
    return (
        <Wrapper pcolor={defaultValue ? true:false}>
            <TimePicker 
                className="SwitchablePicker_style" 
                picker='year' 
                placeholder={defaultValue}
                format='HH:mm'
                // defaultValue={moment(`${defaultValue}`, 'hh:mm:ss')}
                onChange={(event, data) => handleChange(data)}
                // {...props}
            />
        </Wrapper>
    );
}

export default SwitchablePicker;