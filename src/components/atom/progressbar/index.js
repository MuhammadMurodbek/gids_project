import React from 'react'
import {mainGreen} from "../../../styles/global/colors"
import { Progress } from 'antd';
import {Wrapper} from "./style"

const Index = (props) => {
    const {percent} = props;
    return (
        <Wrapper>
            <Progress 
                percent={percent} 
                strokeLinecap="square"
                strokeColor={mainGreen}
                showInfo={true} 
                type="line"
            />
            {/* <div className="title">{percent}%</div> */}
            {/* <Line 
                percent={percent || "10"} 
                strokeWidth={strokeWidth || "4"} 
                trailWidth={4} 
                strokeColor={mainGreen} 
                prefixCls="popo"
                strokeLinecap="square"
                style={{width:"100%", marginRight:15}}
            /> */}
        </Wrapper>
    )
}

export default Index