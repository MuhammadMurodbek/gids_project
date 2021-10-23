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
                <Container className="text-right" margin="10px 0">
                    <TextInput password title="Yangi parol" margin="15px 0 35px"/> <div style={{padding: '8px'}}></div>
                    <TextInput password title="Yangi parolni kiriting" margin="15px 0 35px" className="sec_input"/>
                    <Button margin="20px 0 0">Tasdiqlash</Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index
