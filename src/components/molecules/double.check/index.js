import React,{useCallback} from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {name1, name2, field1, field2, width, margin, alignItems, justifyContent, flexDirection, setState, state} = props
    
    return (
        <FlexContainer 
            width={width} 
            margin={margin} 
            alignItems={alignItems} 
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            <Checkbox name={name1} field={field1} setState={setState} state={state}/>
            <Checkbox name={name2} field={field2} setState={setState} state={state}/>
        </FlexContainer>
    )
}

export default Index
