import React from 'react'
import {Wrapper} from "./style"
import {shadowSecond} from "../../styles/global/colors"
import {Container} from "../../styles/container/index.style"
const Index = ({children}) => {
    return (
        <Wrapper>
            <Container padding="20px" className="container-shadow" boxShadow={shadowSecond}>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Index
