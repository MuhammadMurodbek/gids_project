import React, { useState, useCallback } from "react";
import { Calendar } from "./index.style";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

const dateFormatList = ["DD-MM-YYYY", "DD/MM/YY"];
const Index = (props) => {
    const {state, setState, field, errorText, placeholder, placeholderValue} = props
    const [time, setTime] = useState(null)
    const onChange = useCallback ((date, dateString) => {
        setTime(date)
        console.log(date)
        const dateTime = moment(new Date(dateString)).format('YYYY-DD-MM')
        if(setState){setState(prev=>{return {...prev, [field]:dateTime}})}
    },[state, time])
  return (
    <Calendar width={props.width} placeholderValue={placeholderValue}>
      <Space direction="vertical" size={12}>
        <DatePicker
          onChange={onChange}
          defaultValue={moment("DD-MM-YYYY", dateFormatList[0])}
          value={time}
        //   name={props.name}
          placeholder={placeholder}
          format={dateFormatList}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            backgroundColor: "transparent",
            padding: "5px 0",
          }}
        />
      </Space>
      <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
          {errorText}
      </span>    
    </Calendar>
  );
};

export default Index;
