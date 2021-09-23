import React from 'react'
import {Wrapper} from "./style"
import InfoSecond from "../../molecules/info.f2"
import { Container } from '../../../styles/container/index.style'
import {shadow} from "../../../styles/global/colors"
import DayPicker from "../../molecules/daypicker"
import MediaPlayer from "../../molecules/element_f42/media.player"
import ImageGallery from "../../molecules/element_f42/reward.gallery"
const Index = () => {
    return (
        <Wrapper>
            <Container padding="20px" boxShadow={shadow}>
                <InfoSecond/>
            </Container>
            <Container margin="20px 0" padding="20px" boxShadow={shadow}>
                <DayPicker />
            </Container>
            <Container padding="20px" boxShadow={shadow}>
                <MediaPlayer />
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <ImageGallery />
            </Container>
        </Wrapper>
    )
}

export default Index
