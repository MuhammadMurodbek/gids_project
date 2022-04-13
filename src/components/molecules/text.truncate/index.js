import React from 'react'
import Truncate from 'react-truncate';
import {Wrapper} from "./style"

const Index = (props) => {
    const {text, line} = props
    return (
        <Wrapper width={props.width} margin={props.margin} aligin={props.aligin}>
            <Truncate lines={line || 5} ellipsis={<span>...</span>} >
                <div style={{textAlign:'justify'}}> {text}</div>
            </Truncate>
        </Wrapper>
    )
}

export default Index
