import React from 'react'
// import {Wrapper} from "./style"
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {name1, name2, width, margin, alignItems, justifyContent, flexDirection} = props
    return (
        <FlexContainer 
            width={width} 
            margin={margin} 
            alignItems={alignItems} 
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            <Checkbox name={name1}/>
            <Checkbox name={name2}/>
        </FlexContainer>
    )
}

export default Index
