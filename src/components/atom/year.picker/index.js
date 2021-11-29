import React, { useState } from 'react';
import { DatePicker } from 'antd';
import {Wrapper } from './style'
function SwitchablePicker () {

    return (
        <Wrapper>
            <DatePicker className="SwitchablePicker_style" picker='year' />
        </Wrapper>
    );
}

export default SwitchablePicker;