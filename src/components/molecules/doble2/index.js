import React, {useEffect} from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {setWriter, name1, name2,name3, width, margin, alignItems, justifyContent, flexDirection, display, collect, setCollect} = props
    
    const [state, setState] = React.useState({is_synchronous:false, is_consecutive:false, is_writer:false})
    
    useEffect(() => {
        if(setCollect){
            if(collect?.who_need === 'translator'){
                setCollect({...collect, ...state})
            }
        }
        if(state){
            setWriter({is_writer:state.is_writer})
        }
    },[state])
    console.log(state)
    // console.log(collect?.who_need)
    return (
        <FlexContainer 
            width={width} 
            margin={margin} 
            alignItems={alignItems} 
            display={display}
            justifyContent={justifyContent} 
            flexDirection={flexDirection}
        >
            <Checkbox name={name1} setState={setState} state={state} field="is_synchronous"/>
            <Checkbox name={name2} setState={setState} state={state} field="is_consecutive"/>
            <Checkbox name={name3} setState={setState} state={state} field="is_writer"/>
        </FlexContainer>
    )
}

export default Index