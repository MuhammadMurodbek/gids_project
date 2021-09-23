import React from 'react'
import {Wrapper} from "./style"
import Player from "../../../atom/player"
const Index = () => {
    return (
        <Wrapper>
            <div style={{margin:"10px 0", fontWeight:'bold', fontSize:'15px'}}>O'zim haqimda video</div>
            <Player/>
        </Wrapper>
    )
}

export default Index
