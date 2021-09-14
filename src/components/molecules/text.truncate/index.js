import React from 'react'
import TextTruncate from "react-text-truncate"
import {Wrapper} from "./style"

const Index = (props) => {
    const {text, line} = props
    return (
        <Wrapper>
            <TextTruncate
                line={line || 5}
                element="span"
                truncateText="…"
                text={text}
                // textTruncateChild={<a href="#">Read on</a>}  
            />
        </Wrapper>
    )
}

export default Index
