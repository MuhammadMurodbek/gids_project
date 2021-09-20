import React from 'react'
import {Wrapper} from "./style"
import ImageUploadContainer from "../../organism/image.uploader.f15"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
const Index = () => {
    return (
        <Wrapper>
            <Container width="100%" textAlign="center">
                <ImageUploadContainer width="180px" height="180px" radius="50%" align="center"/>
            </Container>
            <Container>
                <EditFormContainer/>
            </Container>
        </Wrapper>
    )   
}

export default Index
