import React from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {name1, name2,name3, width, margin, alignItems, justifyContent, flexDirection, display} = props
    
    return (
        <FlexContainer 
            width={width} 
            margin={margin} 
            alignItems={alignItems} 
            display={display}
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            <Checkbox name={name1}/>
            <Checkbox name={name2}/>
            <Checkbox name={name3}/>
        </FlexContainer>
    )
}

export default Index