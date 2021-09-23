import React from 'react'
import { Rate } from 'antd';
import {mainGreen} from "../../../styles/global/colors"

const Index = (props) => {
    return (
        <Rate 
            {...props}
            allowHalf 
            defaultValue={2.5} 
            style={{color:mainGreen, fontSize:25}}
        />
    )
}

export default Index
