import React from 'react'
import {Wrapper} from "./style"
// import ImageUploadContainer from "../../organism/image.uploader.f15"
import Avatar from "../../organism/image.crop/new"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
import Button from "../../atom/button"
const mediaContainer = {
    m_width:'600px',
    m_padding:"10px 10px 0"
}
const Index = () => {
    return (
        <Wrapper>
            <Container width="100%" textAlign="center" className="cursor-pointer">
                <Avatar/>
                {/* <ImageUploadContainer width="180px" height="180px" radius="50%" align="center"/> */}
            </Container>
            <Container {...mediaContainer} padding="10px 50px 0" margin="20px 0">
                <EditFormContainer/>
                <Container width="100%" padding="0" margin="50px 0 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )   
}

export default Index
