import React, {useState} from 'react'
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {Authorization} from "./index.style"
import {Link} from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
import {mediaBtnAuth, mediaContainerSecAuth} from "./_media"
import {useSelector, useDispatch} from "react-redux"
import {post_auth_ent_action} from "../../../redux/actions"
const Index = () => {
    const dispatch = useDispatch()
    const selector = useSelector(prev=>prev.post_auth_ent_reducer)
    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [loader, setLoader] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        let obj={
            username: stateEmail,
            password: statePassword,
        }
        setLoader(true)
        dispatch(post_auth_ent_action(obj))
    }
    React.useMemo(()=>{
        // console.log(selector)
        if(selector.status === 'success'){
            // console.log(selector)
            setLoader(false)
            // history.push('/auth/verify')
        }
    },[selector])
    return (
        <Authorization onSubmit={onSubmit}>
            <Container>
                <AuthInput setState={setStateEmail} title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <AuthInput setState={setStatePassword} title="Parolingizni kiriting" placeholder="password..." password={true} width="100%"/>
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
