import React from 'react'
import { Wrapper } from "./style"
import InfoSecond from "../../molecules/info.f2"
import { Container } from '../../../styles/container/index.style'
import { shadow } from "../../../styles/global/colors"
import DayPicker from "../../molecules/daypicker"
import MediaPlayer from "../../molecules/element_f42/media.player"
import ImageGallery from "../../molecules/element_f42/reward.gallery"
import ImageContainer from '../../molecules/img.container'
import { useTranslation } from 'react-i18next';

import telegram from '../../../assets/img/boglanish/11/telegram.png'
import facebook from '../../../assets/img/boglanish/11/facebook.png'
import instagram from '../../../assets/img/boglanish/11/instagram.png'
import viber from '../../../assets/img/boglanish/11/viber.png'
import wechat from '../../../assets/img/boglanish/11/wechat.png'
import website from '../../../assets/img/website.png'

const mediaContainer = {
    m_width: '600px',
    m_padding: '10px 0',
}
const Index = ({typeRole, state, commentCount, commentReview }) => {
    const { t } = useTranslation()
    // const token = JSON.parse(localStorage.getItem('user_token'))
    console.log(state)
    return (
        <Wrapper>
            <Container padding="20px" boxShadow={shadow}>
                <InfoSecond commentCount={commentCount} commentReview={commentReview} />
            </Container>
            <Container margin="20px 0" {...mediaContainer} padding="20px" boxShadow={shadow}>
                <DayPicker default selectedDays={state?.busy_days?.map(item => new Date(item)) || []} />
            </Container>
            {
                typeRole?.role !== 'writer' &&
                <Container padding="20px" boxShadow={shadow}>
                    <MediaPlayer url={state?.video} />
                </Container>
            }
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <ImageGallery data={state?.certificates} />
            </Container>
            <Container padding="20px" margin="20px 0" boxShadow={shadow}>
                <h3 className="titlss">{t("GidPk.boglanish")}</h3>
                {/* <p className="textb"> {state?.phone_number}</p> */}

                {/* <p className="textb">Web site: <a className='links' target="_blank" href={state?.website  }  > {state?.website  } </a> </p> */}
                <div className="imgdiv11">
                    <a target="_blank" href={state?.facebook}>  <ImageContainer width="40px" src={facebook} /></a>
                    <a target="_blank" href={state?.telegram}>  <ImageContainer width="40px" src={telegram} /></a>
                    <a target="_blank" href={state?.instagram}> <ImageContainer width="40px" src={instagram} /></a>
                    <a target="_blank" href={state?.wechat}>    <ImageContainer width="40px" src={wechat} /></a>
                    <a target="_blank" href={state?.viber}>     <ImageContainer width="40px" src={viber} /></a>
                    <a target="_blank" href={state?.website}>     <ImageContainer width="40px" src={website} /></a>

                </div>
            </Container>
        </Wrapper>
    )
}

export default Index
