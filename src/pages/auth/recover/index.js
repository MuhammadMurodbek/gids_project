import React from 'react'
import {ContainerVerify} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/auth.input"
import  Button  from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
import {useHistory} from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Index = () => {

    const {t} = useTranslation();

    const history = useHistory()
    const handleClick = () => {
        history.push('/auth/update-password')
    }
    return (
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px"> {t("auth_parolniTiklash.reset")} </TextTitle>
                <Container padding="5px 10px">
                    <div> {t("auth_parolniTiklash.jonatildi")} </div>
                </Container>
                <Container className="text-right" margin="10px 0">
                    <TextInput title={t("auth_parolniTiklash.cod")} margin="15px 0 35px"/>
                    <Button onClick={handleClick} margin="20px 0 0"> {t("auth_parolniTiklash.send")} </Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index
