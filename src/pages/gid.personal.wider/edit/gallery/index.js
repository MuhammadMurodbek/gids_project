import React from 'react'
import {Wrapper} from './style'
import ImageUploader from "../../../../components/organism/image.uploader.f15"
import {Container} from "../../../../styles/container/index.style"
import {TextTitle} from "../../../../styles/textTitle/index.style"
const Index = () => {
    return (
        <Wrapper>
            <Container>
                <TextTitle font="14px" align="left" top="15px">Siz o‘zingiz haqingizda video tayyorlab joylashingiz mumkin. Ushbu video profilingizda turadi.</TextTitle>
                <ImageUploader width="100%" height="600px"/>
            </Container>
            <Container>
                <TextTitle font="14px" align="left" top="15px">Galereyangiz (0)</TextTitle>
                {/* <ImageUploader width="100%" height="600px"/> */}
            </Container>
        </Wrapper>
    )
}

export default Index
