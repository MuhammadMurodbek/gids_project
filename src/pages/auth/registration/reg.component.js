import React from 'react'
import TextInput from "../../../components/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/button"
import {useHistory} from "react-router-dom"

const Index = () => {
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        history.push("/auth/verify")
    }
    return (
        <form onSubmit={onSubmit}>
            <Container>
                <TextInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <TextInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container>
                <TextInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <TextInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container>
                <TextInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container className="text-right">
                <Button>Kirish</Button>
            </Container>
        </form>
    )
}

export default Index
