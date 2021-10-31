import React, {useState, useEffect} from 'react'
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {Authorization} from "./index.style"
import {Link} from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
import {mediaBtnAuth, mediaContainerSecAuth} from "./_media"
import {post_auth_ent_action} from "../../../redux/actions"
import toast from "react-hot-toast"
import useApiData from "../../../hooks/response"

const Index = () => {
    // const history = useHistory()
    const [stateEmail, setStateEmail] = useState('')
    const {responseHook, setResponseHook} = useApiData('post_auth_ent_reducer')
    const [emailError, setEmailError] = useState({error:false, errorText:''})
    const [statePassword, setStatePassword] = useState('')
    const [passwordError, setPasswordError] = useState({error:false, errorText:''})
    const [loader, setLoader] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        let obj={
            username: stateEmail,
            password: statePassword,
        }
        setLoader(true)
        if(!(stateEmail.includes('@') || stateEmail.length>0) || statePassword.length<8){
            if(!(stateEmail.includes('@'))){
                setEmailError({error: true, errorText:'Email kiritilmagan'})
            }
            if(statePassword.length<8){
               setPasswordError({error: true, errorText:'Parol uchun kamida 8 ta belgidan foydalaning'})
            }
        }else setResponseHook(post_auth_ent_action(obj))
    }
    const Success = (data) => {
        localStorage.setItem('user_token',JSON.stringify(data))
        window.location.href="/main"
    }
    useEffect(()=>{
        if(responseHook?.status){
            setLoader(false)
            switch(responseHook.status){
                case 200: return Success(responseHook?.data?.data)
                case 400 : return toast.error("Ma'lumotlar to'liq kiritilmagan")
                case 401 : return toast.error("Foydalanuvchi mavjud emas")
                default : return null
            }
        }
    },[responseHook])
    useEffect(()=>{
        if(stateEmail.includes('@') && stateEmail.length > 3){
            setEmailError({error:false, errorText:null})
        }
        if(statePassword.length>0){
            setPasswordError({error:false, errorText:null})
        }
    },[stateEmail, statePassword])
    return (
        <Authorization onSubmit={onSubmit}>
            <Container>
                <AuthInput 
                    setState={setStateEmail} 
                    title="E-mail kiriting" 
                    error={emailError.error}
                    setError={setEmailError}
                    width="100%"
                    errorText={emailError.errorText} 
                />
            </Container>
            <Container>
                <AuthInput 
                    setState={setStatePassword} 
                    title="Parolingizni kiriting"
                    setError={setStatePassword} 
                    placeholder="password..." 
                    password={true} width="100%"
                    error={passwordError.error}
                    errorText={passwordError.errorText} 
                />
            </Container>
            <Container width="100%" textAlign="right">
                <Link to="/auth/reset" className="link">Напомнить пароль</Link>
            </Container>
            <Container {...mediaContainerSecAuth} className="text-right"> 
                <Button {...mediaBtnAuth} loader={loader}>Kirish</Button>
            </Container>
        </Authorization>
    )
}

export default Index
