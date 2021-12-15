import React, {useEffect} from 'react'
import Checkbox from "../../atom/checkbox"
import { FlexContainer } from '../../../styles/flex.container'

const Index = (props) => {
    const {name1, name2,name3, width, margin, alignItems, justifyContent, flexDirection, display, collect, setCollect} = props
    const [state, setState] = React.useState({is_synchronous:false, is_consecutive:false, is_writer:false})
    useEffect(() => {
        if(collect?.who_need === 'translator'){
            setCollect({...collect, ...state})
        }else{
            setCollect({...collect, is_synchronous:false, is_consecutive:false, is_writer:false})
        }
    },[state])
    console.log(state)
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