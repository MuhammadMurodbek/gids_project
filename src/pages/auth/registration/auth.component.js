import React, { useState, useEffect } from 'react'
import { Container } from "../../../styles/container/index.style"
import { FlexContainer } from "../../../styles/flex.container"
import Button from "../../../components/atom/button"
import { Authorization } from "./index.style"
import { Link } from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
import { mediaBtnAuth, mediaContainerSecAuth } from "./_media"
import { post_auth_ent_action } from "../../../redux/actions"
import toast from "react-hot-toast"
import useApiData from "../../../hooks/response"
import { useTranslation } from 'react-i18next'
import {getGlobals} from "../../../hooks/response_get"
const Index = () => {

    const { t } = useTranslation()
    // const history = useHistory()
    const remember = JSON.parse(localStorage.getItem('remember'))
    const [stateEmail, setStateEmail] = useState('')
    const { responseHook, setResponseHook } = useApiData('post_auth_ent_reducer')
    const [emailError, setEmailError] = useState({ error: false, errorText: '' })
    const [statePassword, setStatePassword] = useState('')
    const [passwordError, setPasswordError] = useState({ error: false, errorText: '' })
    const [loader, setLoader] = useState(false)
    const appNoToken = JSON.parse(localStorage.getItem('appNoToken')) || false
    // console.log(remember)
    useState(()=>{
        if(remember){
            setStateEmail(remember?.username)
            setStatePassword(remember?.password)
        }
    },[])
    const onSubmit = (e) => {
        e.preventDefault()
        let obj = {
            username: stateEmail,
            password: statePassword,
        }
        setLoader(true)
        if (!(stateEmail.includes('@') || stateEmail.length > 0) || statePassword.length < 8) {
            if (!(stateEmail.includes('@'))) {
                setLoader(false)
                setEmailError({ error: true, errorText: 'Email kiritilmagan' })
            }
            if (statePassword.length < 8) {
                setLoader(false)
                setPasswordError({ error: true, errorText: 'Kamida 8 ta belgidan foydalaning [A-z, 0-9]' })
            }
        } else setResponseHook(post_auth_ent_action(obj))
    }
    const Success = (data) => {
        localStorage.setItem('user_token', JSON.stringify(data))
        getGlobals(data, appNoToken)
        // window.location.href = "/"
    }
    useEffect(() => {
        if (responseHook?.status) {
            setLoader(false)
            switch (responseHook.status) {
                case 200: return Success(responseHook?.data?.data)
                case 400: return toast.error("Ma'lumotlar to'liq kiritilmagan")
                case 401: return toast.error("Login yoki parol xato")
                default: return null
            }
        }
    }, [responseHook])
    useEffect(() => {
        if (stateEmail.includes('@') && stateEmail.length > 3) {
            setEmailError({ error: false, errorText: null })
            setLoader(false)
        }
        if (statePassword.length > 0) {
            setLoader(false)
            setPasswordError({ error: false, errorText: null })
        }
    }, [stateEmail, statePassword])
    const handleRemember = (e) => {
        let obj = {
            username: stateEmail,
            password: statePassword,
        }
        if(e.target.checked)
            localStorage.setItem('remember',JSON.stringify(obj))
        else 
            localStorage.removeItem('remember')
    }
    return (
        <Authorization onSubmit={onSubmit}>
            <Container>
                <AuthInput
                    state={stateEmail}
                    setState={setStateEmail}
                    title={t("auth_kirish.email2")}
                    error={emailError.error}
                    setError={setEmailError}
                    width="100%"
                    errorText={emailError.errorText}
                />
            </Container>
            <Container>
                <AuthInput
                    state={statePassword}
                    setState={setStatePassword}
                    title={t("auth_kirish.pass")}
                    setError={setStatePassword}
                    placeholder="password..."
                    password={true} width="100%"
                    error={passwordError.error}
                    errorText={passwordError.errorText}
                />
            </Container>
            <Container width="100%" textAlign="right">
                <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                    <span style={{position:'relative', top:'-2px'}}><input type="checkbox" onClick={(e)=>handleRemember(e)}/>{t("auth_kirish.eslash")}</span>
                    <Link to="/auth/reset" className="link"> {t("auth_kirish.forget")} </Link>
                </FlexContainer>
            </Container>
            <Container {...mediaContainerSecAuth} className="text-right">
                <Button {...mediaBtnAuth} loader={loader}>
                    {t("auth_kirish.kirish")}
                </Button>
            </Container>
        </Authorization>
    )
}

export default Index
