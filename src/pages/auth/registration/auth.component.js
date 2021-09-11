import React from 'react'
import TextInput from "../../../components/input"
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/button"
const Index = () => {
    return (
        <div>
            <Container>
                <TextInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <TextInput title="Password kiriting" width="100%"/>
            </Container>
            <Container>
                <Button>Kirish</Button>
            </Container>
        </div>
    )
}

export default Index
