import React,{useCallback} from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {name1, name2, width, margin, alignItems, justifyContent, flexDirection, setState, state} = props
    const handleChange = useCallback((e) => {
        if(setState)
        setState({...state, [e.target.name]:e.target.checked})
    },[state])
    return (
        <FlexContainer 
            width={width} 
            margin={margin} 
            alignItems={alignItems} 
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            <Checkbox name={name1} onChange={handleChange}/>
            <Checkbox name={name2} onChange={handleChange}/>
        </FlexContainer>
    )
}

export default Index
