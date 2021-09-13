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
        </div>
    )
}

export default Index
