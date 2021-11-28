import React from 'react'
import {Wrapper} from "./style"
import InfoSecond from "../../molecules/info.f2"
import { Container } from '../../../styles/container/index.style'
import {shadow} from "../../../styles/global/colors"
import DayPicker from "../../molecules/daypicker"
import MediaPlayer from "../../molecules/element_f42/media.player"
import ImageGallery from "../../molecules/element_f42/reward.gallery"
import ImageContainer from '../../molecules/img.container'
import {useTranslation} from 'react-i18next';

import img01 from '../../../assets/img/boglanish/1.png'
import img02 from '../../../assets/img/boglanish/2.png'
import img03 from '../../../assets/img/boglanish/3.png'
import img04 from '../../../assets/img/boglanish/4.png'
import img05 from '../../../assets/img/boglanish/5.png'

const mediaContainer={
    m_width:'600px',
    m_padding:'10px 0',
}
const Index = () => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <Container padding="20px" boxShadow={shadow}>
                <InfoSecond/>
            </Container>
            <Container margin="20px 0" {...mediaContainer} padding="20px" boxShadow={shadow}> 
                <DayPicker />
            </Container>
            <Container padding="20px" boxShadow={shadow}>
                <MediaPlayer />
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <ImageGallery />
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <h3 className="titlss">{t("GidPk.boglanish")}</h3>
                <p className="textb">+ 998 99 999 99 99</p>
                <p className="textb">salom@gids.com</p>
                <p className="textb">kun.uz</p>
                <div className="imgdiv11">
                    <ImageContainer src={img01}  />
                    <ImageContainer src={img02}  />
                    <ImageContainer src={img03}  />
                    <ImageContainer src={img04}  />
                    <ImageContainer src={img05}  />
                </div>
            </Container>
        </Wrapper>
    )
}

export default Index
