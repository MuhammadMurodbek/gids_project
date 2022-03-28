import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {Wrapper} from "./style"
const Index = (url) => {
    // console.log(url)
    return (
        <Wrapper>
            {
                url ? 
                <ReactPlayer 
                    url= {url?.url} 
                    controls
                    width="100%"
                    height="240px"
                />:<div>Video yuklanmagan</div>
            }
        </Wrapper>
    )
}

export default Index
