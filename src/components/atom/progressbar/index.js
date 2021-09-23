import React from 'react'
import { Line } from 'rc-progress';
import {mainGreen} from "../../../styles/global/colors"
import {Wrapper} from "./style"

const Index = (props) => {
    const {percent, strokeWidth} = props;
    return (
        <Wrapper>
            <div className="title">{percent}%</div>
            <Line 
                percent={percent || "10"} 
                strokeWidth={strokeWidth || "4"} 
                trailWidth={4} 
                strokeColor={mainGreen} 
                prefixCls="popo"
                strokeLinecap="square"
                style={{width:"100%", marginRight:15}}
            />
        </Wrapper>
    )
}

export default Index