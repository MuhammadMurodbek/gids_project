import React from 'react'
import {Wrapper} from "./style"
import ImageUploadContainer from "../../organism/image.uploader.f15"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
import Button from "../../atom/button"
const Index = () => {
    return (
        <Wrapper>
            <Container width="100%" textAlign="center">
                <ImageUploadContainer width="180px" height="180px" radius="50%" align="center"/>
            </Container>
            <Container padding="10px 50px 0" margin="20px 0">
                <EditFormContainer/>
                <Container width="100%" padding="0" margin="50px 0 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )   
}

export default Index
