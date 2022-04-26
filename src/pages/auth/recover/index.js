import React, { useState, useEffect } from 'react'
import { ContainerVerify } from "./index.style"
import { FlexContainer } from "../../../styles/flex.container"
import { TextTitle } from '../../../styles/textTitle/index.style'
import TextInput from "../../../components/atom/input.second"
import Button from '../../../components/atom/button'
import { Container } from '../../../styles/container/index.style'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form"
import { postApiResponse } from "../../../hooks/response_get"
import TestModal from "../../../custom/test.components"

const Index = () => {
    const { t } = useTranslation()
    const history = useHistory()
    const { handleSubmit, control, formState: { errors } } = useForm()
    const [postState, setPostState] = useState({ data: null, success: false, error: false, loading: false })
    const handleClick = (data) => {
        postApiResponse('/api/auth/reset/', data, setPostState, true)
    }
    useEffect(()=>{
        if(postState?.success){
            setTimeout(()=>{
                history.push('/auth/update-password')
            },2000)
        }
    },[postState])
    return (
        <>
        <FlexContainer width="100%" height="80vh" alignItems="center" justifyContent="center">
            <ContainerVerify>
                <TextTitle font="20px" bottom="15px" top="10px">
                    {t("auth_parolniTiklash.reset")} 
                </TextTitle>
                <Container textAlign="center" padding="5px 10px">
                    <div> {t("auth_parolniTiklash.jonatildi")} </div>
                </Container>
                <form onSubmit={handleSubmit(handleClick)}>
                    <Container className="text-right" margin="10px 0">
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: true, minLength:4 }}
                            render={({ field: { onChange, value } }) => {
                                return <TextInput
                                    type="username"
                                    width="100%"
                                    height="300px"
                                    onChange={onChange}
                                    value={value}
                                    placeholder="Email kiriting..."
                                />;
                            }}

                        />
                        {errors && errors?.email && <span style={{color:'red', fontSize:'0.8rem'}}>Email kiriting...</span>}
                        <br/>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true, minLength:4 }}
                            render={({ field: { onChange, value, name } }) => {
                                return <TextInput
                                    name={name}
                                    width="100%"
                                    height="300px"
                                    onChange={onChange}
                                    value={value}
                                    placeholder="Parolni kiriting..."
                                />;
                            }}
                            />
                            {errors && errors?.password && <span style={{color:'red', fontSize:'0.8rem'}}>Password kiriting... (kamida 4 ta element)</span>}
                    </Container>
                    <Container padding="0px 10px" textAlign="right">
                        <Button onClick={handleClick} margin="0px 0 0">
                            {t("auth_parolniTiklash.send")}
                        </Button>
                    </Container>
                </form>
            </ContainerVerify>
        </FlexContainer>
        <TestModal {...postState} stitle="Emailingizga kod junatildi..."/>
        </>
    )
}

export default Index
