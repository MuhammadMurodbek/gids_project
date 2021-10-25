import React, {useState, useEffect} from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/auth.input"
import  Button  from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
import {useSelector, useDispatch} from "react-redux"
import {post_auth_reg_check_action} from "../../../redux/actions"

const Index = () => {
    const dispatch = useDispatch()
    const selector = useSelector(prev=>prev.post_auth_reg_reducer)
    const [state, setState] = useState('');
    const [emailState, setEmailState] = useState('');
    
    let email = selector?.data?.username

    useEffect(()=>{
        if(email){
            setEmailState(email)
            console.log(email)
        }

    },[email])
    
    const onSubmit = (e) => {
        e.preventDefault()
        let obj = {
            username:emailState,
            code:state,
        }
        dispatch(post_auth_reg_check_action(obj))
    }
    return (
        <form onSubmit={onSubmit}>
            <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
                <ContainerVerify>
                    <TextTitle font="20px" bottom="15px" top="10px">Emailingizni tasdiqlang</TextTitle>
                    <Container padding="5px 10px">
                        <div>{emailState ? emailState:'email'} poshtasiga kod yuborildi. Ushbu ko’dni pastga tering.</div>
                    </Container>
                    <Container>
                        <TextInput setState={setState} password title="Kodni kiriting" margin="15px 0 35px"/>
                    </Container>
                    <Container className="text-right">
                        <Button>Tasdiqlash</Button>
                    </Container>
                </ContainerVerify>
            </FlexContainer>
        </form>
    )
}

export default Index
