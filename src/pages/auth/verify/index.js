import React from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/input"
import { Button } from '../../../components/button/index.style'
import { Container } from '../../../styles/container/index.style'
const Index = () => {
    return (
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px">Emailingizni tasdiqlang</TextTitle>
                <Container padding="5px 10px">
                    <div>adminov@gits.uz poshtasiga kod yuborildi. Ushbu ko’dni pastga tering.</div>
                </Container>
                <Container className="text-right">
                    <TextInput title="Kodni kiriting" margin="15px 0 35px"/>
                    <Button>Tasdiqlash</Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index