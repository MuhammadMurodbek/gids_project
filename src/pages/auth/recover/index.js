import React, {useState, useEffect} from 'react'
import { ContainerVerify } from "./index.style"
import { FlexContainer } from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/auth.input"
import Button from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {postApiResponse} from "../../../hooks/response_get"

const Index = () => {
    const { t } = useTranslation()
    const history = useHistory()
    const [state, setState] = useState('')
    const [error, setError] = useState(false)
    const [postState, setPostState] = useState({data:null, success:false, error:false, loading:false})
    const handleClick = () => {
        if(!state.includes('@') || state.length<5){setError(true)} 
        history.push('/auth/update-password')
    }
    useEffect(()=>{if(state.includes('@') && state.length>=5){ setError(false)} },[state])
    console.log(state)
    return (
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px">
                 {t("auth_parolniTiklash.reset")} </TextTitle>
                <Container padding="5px 10px">
                    <div> {t("auth_parolniTiklash.jonatildi")} </div>
                </Container>
                <Container className="text-right" margin="10px 0">
                    <TextInput setError={setError} error={error} setState={setState} state={state} title={t("auth_parolniTiklash.cod")} margin="15px 0 35px" />
                    {error && <span className="error_text">* Email kiriting</span>}
                    <Button onClick={handleClick} margin="20px 0 0">
                        {t("auth_parolniTiklash.send")}
                    </Button>
                </Container>
            </ContainerVerify>
        </FlexContainer>
    )
}

export default Index
