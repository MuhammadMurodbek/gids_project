import React, { useState, useCallback, useEffect } from "react";
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
        const dateTime = moment( new Date (date)).format('YYYY-MM-DD')
        if(setState){setState(prev=>{return {...prev, [field]:dateTime}})}
    },[state, time])
  
    const inputSelect = document.querySelectorAll('.ant-picker-input input')[0]
    const inputSelect2 = document.querySelectorAll('.ant-picker-input input')[1]
    const inputSelect3 = document.querySelectorAll('.ant-picker-input input')[3]
    useEffect(()=>{
      const inputSelects = document.getElementById('141')
      console.log(inputSelects)
      inputSelects?.setAttribute('maxlength', 10)
      inputSelects?.addEventListener('keyup', function(e){
        var v = e.target.value;
          if (v.match(/^\d{2}$/) !== null) {
              e.target.value = v + '-';
          } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
              e.target.value = v + '-';
          }
      }) 
    },[])
    inputSelect?.setAttribute('maxlength', 10)
    inputSelect?.addEventListener('keyup', function(e){
      var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })  
    inputSelect2?.setAttribute('maxlength', 10)
    inputSelect2?.addEventListener('keyup', function(e){
      var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })  
    inputSelect3?.setAttribute('maxlength', 10)
    inputSelect3?.addEventListener('keyup', function(e){
      var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })  

  return (
    <Calendar width={props.width} placeholderValue={placeholderValue}>
      <Space direction="vertical" size={12}>
        <DatePicker
          id="141"
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
