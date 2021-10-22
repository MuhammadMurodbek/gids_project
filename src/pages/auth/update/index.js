import React from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/auth.input"
import  Button  from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
const Index = () => {
    return (
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px">Parolni tiklash</TextTitle>
                <Container padding="5px 10px">
                    <div>Emailingizga tasdiqlash kodi yuboramiz</div>
                </Container>
                <Container className="text-right" margin="10px 0">
                    <TextInput type="password" title="Emailingizni kiriting..." margin="15px 0 35px"/>
                    <TextInput title="Emailingizni kiriting..." margin="15px 0 35px" className="sec_input"/>
                    <Button margin="20px 0 0">Tasdiqlash</Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index
