import React from 'react'
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {Authorization} from "./index.style"
import {Link} from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
import {mediaBtnAuth, mediaContainerSecAuth} from "./_media"
import {useSelector, useDispatch} from "react-redux"
const Index = () => {
    return (
        <Authorization>
            <Container>
                <AuthInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <AuthInput title="Parolingizni kiriting" placeholder="password..." password={true} width="100%"/>
            </Container>
            <Container width="100%" textAlign="right">
                <Link to="/auth/reset" className="link">Напомнить пароль</Link>
            </Container>
            <Container {...mediaContainerSecAuth} className="text-right"> 
                <Button {...mediaBtnAuth}>Kirish</Button>
            </Container>
        </Authorization>
    )
}

export default Index
