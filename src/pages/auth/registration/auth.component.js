import React from 'react'
import {Container} from "../../../styles/container/index.style"
import TextInput from "../../../components/input"
import Button from "../../../components/button"
import {Authorization} from "./index.style"
const Index = () => {
    return (
        <Authorization>
            <Container>
                <TextInput title="E-mail kiriting" width="100%"/>
            </Container>
            <Container>
                <TextInput title="Password kiriting" password={true} width="100%"/>
            </Container>
            <Container className="text-right"> 
                <Button>Kirish</Button>
            </Container>
        </Authorization>
    )
}

export default Index
