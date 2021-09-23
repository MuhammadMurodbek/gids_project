import React from 'react'
import { Rate } from 'antd';
import {mainGreen} from "../../../styles/global/colors"

const Index = (props) => {
    return (
        <Rate 
            {...props}
            allowHalf 
            defaultValue={props.value || 2.5} 
            style={{color:mainGreen, fontSize:props.size || 25}}
        />
    )
}

export default Index
