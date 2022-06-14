import React,{useState, useEffect} from 'react';
import { DatePicker } from 'antd';
import {Wrapper } from './style'
import moment from "moment"

function SwitchablePicker (props) {
    const {state, setState, field, defaultValue, placeholder, clear, setClear} = props;
    const [date, setDate] = useState(null)
    const handleChange = (data) => {
        setState({...state, [field]:data})
        setDate(data)
        // console.log(data)
    }
    useEffect(()=>{
        if(clear) {
            setDate(null)
            setClear(false)
        }
    },[clear])
    // let data = moment(new Date()).format("YYYY")
    // console.log(data)
    return (
        <Wrapper pcolor={defaultValue ? true:false}>
            <DatePicker 
                className="SwitchablePicker_style" 
                picker='year' 
                // defaultValue={data}/
                value={date !== null ? moment(date) : null}
                placeholder={defaultValue ? defaultValue:'Select year'}
                onChange={(event, data) => handleChange(data)}
                placeholder={placeholder}
            />
        </Wrapper>
    );
}

export default SwitchablePicker;