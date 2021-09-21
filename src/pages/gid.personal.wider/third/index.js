import React from 'react'
import {Wrapper} from "./style"
import {shadow} from "../../../styles/global/colors"
import { Container } from '../../../styles/container/index.style'
import FormContainer from "../../../components/templates/edit.form.f15"
const Index = () => {
    return (
        <Wrapper>
            <Container padding="0" boxShadow={shadow} className="container4">
                <FormContainer/>
            </Container>
        </Wrapper>
    )
}

export default Index
