import React from 'react'
import { TimePicker } from 'antd';
import {Wrapper} from "./index.style"
// import "./style.css"
const Index = (props) => {
    return (
        <Wrapper width={props.width} paddingX={props.paddingX} backgroundColor={props.backgroundColor}>
            <TimePicker.RangePicker className="time_picker" />
        </Wrapper>
    )
}

export default Index
