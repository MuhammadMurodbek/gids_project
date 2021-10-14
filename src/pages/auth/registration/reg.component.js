import React from 'react'
import TextInput from "../../../components/atom/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {useHistory} from "react-router-dom"
import Select from "../../../components/atom/select"
import AuthInput from "../../../components/atom/auth.input"
const mediaContainer = {
    m_width:"534px",
    m_padding:"4px"
}
const mediaContainerSec = {
    m_width:"534px",
    m_padding:"4px",
    m_text_align:"center"
}
const mediaBtn = {
    m_width_btn:"456px",
    m_m_width_btn:"260px",
    m_m_font_btn:"14px",
    m_m_padding:"12px 28px"
}
const Index = () => {
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        history.push("/auth/verify")
    }
    return (
        <form onSubmit={onSubmit}>
            <Container {...mediaContainer}>
                <AuthInput title="Ismingizni yozing" width="100%"/>
            </Container>
            <Container {...mediaContainer}>
                <Select placeholder="Tarjimon"/>
                {/* <TextInput title="Password kiriting" password={true} width="100%"/> */}
            </Container>
            <Container  {...mediaContainer} >
                <AuthInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainerSec}  className="text-right">
                <Button {...mediaBtn} >Kirish</Button>
            </Container>
        </form>
    )
}

export default Index
