import React from 'react'
import Truncate from 'react-truncate';
import {Wrapper} from "./style"

const Index = (props) => {
    const {text, line} = props
    return (
        <Wrapper width={props.width} margin={props.margin} aligin={props.aligin}>
            <Truncate lines={line || 5} ellipsis={<span>...</span>}>
                <pre>&ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; {text}</pre>
            </Truncate>
        </Wrapper>
    )
}

export default Index
