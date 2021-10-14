import React from 'react'
// import TextInput from "../../../components/atom/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {Authorization} from "./index.style"
import {Link} from "react-router-dom"
import AuthInput from "../../../components/atom/auth.input"
const mediaBtn = {
    m_width_btn:"456px",
    m_m_width_btn:"260px",
    m_m_font_btn:"14px",
    m_m_padding:"12px 28px"
}
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
            <Container textAlign="center" className="text-right"> 
                <Button {...mediaBtn}>Kirish</Button>
            </Container>
        </Authorization>
    )
}

export default Index
