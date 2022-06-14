import React,{useCallback} from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'
import {Wrapper} from "./style"
const Index = (props) => {
    const {errorText, name1, name2, field1, field2, width, margin, alignItems, justifyContent, flexDirection, setState, state} = props
    
    return (
        <Wrapper>
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
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> 
        </Wrapper>
    )
}

export default Index
