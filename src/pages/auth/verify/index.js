import React, {useState, useEffect} from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import PinInput from "./pin.code"
import { Container } from '../../../styles/container/index.style'
// import { TextTitle } from '../../../styles/textTitle/index.style'
// import TextInput from "../../../components/atom/auth.input"
// import  Button  from '../../../components/atom/button'
// import {useSelector, useDispatch} from "react-redux"
// import {post_auth_reg_check_action} from "../../../redux/actions"

const Index = () => {
    // const dispatch = useDispatch()
    // const selector = useSelector(prev=>prev.post_auth_reg_reducer)
    // const [state, setState] = useState('');
    // const [emailState, setEmailState] = useState('');
    
    // let email = selector?.data?.username

    // useEffect(()=>{
    //     if(email){
    //         setEmailState(email)
    //         console.log(email)
    //     }

    // },[email])
    
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     let obj = {
    //         username:emailState,
    //         code:state,
    //     }
    //     dispatch(post_auth_reg_check_action(obj))
    // }
    // console.log(selector)
    return (
        <form>
            <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
                <ContainerVerify>
                    <Container>
                        <PinInput/>
                    </Container>
                </ContainerVerify>
            </FlexContainer>
        </form>
    )
}

export default Index
