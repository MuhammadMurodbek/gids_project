import React from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/auth.input"
import  Button  from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
import {useHistory} from "react-router-dom"
const Index = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/auth/update-password')
    }
    return (
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px">Parolni tiklash</TextTitle>
                <Container padding="5px 10px">
                    <div>Emailingizga tasdiqlash kodi yuboramiz</div>
                </Container>
                <Container className="text-right" margin="10px 0">
                    <TextInput title="Emailingizni kiriting..." margin="15px 0 35px"/>
                    <Button onClick={handleClick} margin="20px 0 0">Tasdiqlash</Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index
