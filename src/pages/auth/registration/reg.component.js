import React from 'react'
import TextInput from "../../../components/atom/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {useHistory} from "react-router-dom"
import Select from "../../../components/atom/select"
import AuthInput from "../../../components/atom/auth.input"
const Index = () => {
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        history.push("/auth/verify")
    }
    return (
        <form onSubmit={onSubmit}>
            <Container>
                <AuthInput title="Ismingizni yozing" width="100%"/>
            </Container>
            <Container>
                <Select placeholder="Tarjimon"/>
                {/* <TextInput title="Password kiriting" password={true} width="100%"/> */}
            </Container>
            <Container>
                <AuthInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <AuthInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container>
                <AuthInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container className="text-right">
                <Button>Kirish</Button>
            </Container>
        </form>
    )
}

export default Index
