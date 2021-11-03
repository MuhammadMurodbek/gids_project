import React, { useState } from "react";
import { Calendar } from "./index.style";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

const dateFormatList = ["DD-MM-YYYY", "DD/MM/YY"];
const Index = (props) => {
    const [time, setTime] = useState(null)
    const onChange = (date, dateString) => {
        setTime(date)
        console.log(time)
    }
  return (
    <Calendar width={props.width}>
      <Space direction="vertical" size={12}>
        <DatePicker
          onChange={onChange}
          defaultValue={moment("01-01-2015 ", dateFormatList[0])}
          value={time}
        //   name={props.name}
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
    </Calendar>
  );
};

export default Index;
