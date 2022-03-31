import React from 'react'
import {mainGreen} from "../../../styles/global/colors"
import { Progress } from 'antd';
import {Wrapper} from "./style"

const Index = (props) => {
    const {percent} = props;
    return (
        <Wrapper>
            <Progress 
                // width={80}
                percent={percent} 
                strokeLinecap="square"
                strokeColor={mainGreen}
                showInfo={true} 
                type="line"
                format={e => `${e.toFixed(1)}%`}
            />
        </Wrapper>
    )
}

export default Index