import React from 'react'
import TextInput from "../../../components/atom/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {Authorization} from "./index.style"
import {Link} from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
const Index = () => {
    return (
        <Authorization>
            <Container>
                <AuthInput title="E-mail kiriting" width="100%"/>
                {/* <TextInput title="E-mail kiriting" width="100%"/> */}
            </Container>
            <Container>
                <AuthInput title="Password kiriting" placeholder="password..." password={true} width="100%"/>
            </Container>
            <Container width="100%" textAlign="right">
                <Link to="/reset" className="link">Напомнить пароль</Link>
            </Container>
            <Container className="text-right"> 
                <Button>Kirish</Button>
            </Container>
        </Authorization>
    )
}

export default Index
