import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {Wrapper} from "./style"
const Index = () => {
    return (
        <Wrapper>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                width="100%"
                height="240px"
            />
        </Wrapper>
    )
}

export default Index
