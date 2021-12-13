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
const Index = ({state}) => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <Container padding="20px" boxShadow={shadow}>
                <InfoSecond data={state}/>
            </Container>
            <Container margin="20px 0" {...mediaContainer} padding="20px" boxShadow={shadow}> 
                <DayPicker default selectedDays={state?.busy_days?.map(item=> new Date(item)) || []}/>
            </Container>
            <Container padding="20px" boxShadow={shadow}>
                <MediaPlayer url={state?.video}/>
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <ImageGallery data={state?.certificates}/>
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <h3 className="titlss">{t("GidPk.boglanish")}</h3>
                <p className="textb">+ 998 99 999 99 99</p>
                <p className="textb">Facebook: {state?.facebook || 'facebook'}</p>
                <p className="textb">Web site: {state?.website || 'website'}</p>
                <div className="imgdiv11">
                    <a target="_blank" href={state?.facebook}><ImageContainer src={img01}  /></a>    
                    <a target="_blank" href={state?.telegram}> <ImageContainer src={img02}  /></a>
                    <a target="_blank" href={state?.instagram}> <ImageContainer src={img03}  /></a>
                    <a target="_blank" href={state?.wechat}> <ImageContainer src={img04}  /></a>
                    <a target="_blank" href={state?.viber}> <ImageContainer src={img05}  /></a>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Index
