import React from 'react'
import {Calendar} from "./index.style"
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const Index = (props) => {
    return (
        <Calendar width={props.width}>
            <Space direction="vertical" size={12}>
                <DatePicker 
                    onChange={props.onChange}
                    defaultValue={moment('01/01/2015', dateFormatList[0])} 
                    format={dateFormatList} 
                    style={{border:'none', outline: 'none', width:'100%', backgroundColor:'transparent'}}
                />
            </Space>
        </Calendar>
    )
}

export default Index
