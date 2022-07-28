import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import { Container } from "../../../styles/container/index.style"
import { WrapperContainer, ContainerBottom, Wrapper } from "./style"
import ImageGallery from "../../molecules/element_f42/Gallery"
import ImageContainer from "../../molecules/img.container"
import InfoBtn from "../../molecules/info.f42"
import RoundImage from "../../../assets/img/gid-personal/no_user.png"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
import SecondInfoCard from "../../molecules/element_f42/container_2.f42"
import ThirdInfoCard from "../../molecules/element_f42/container_3.f42"
import Title from "../../atom/element_f42/title.container.f42"
import ProgressTitle from "../../molecules/element_f42/progress.title"
import ProgressInfo from "../../molecules/element_f42/rate.part.f42"
import CommentPart from "../../molecules/element_f42/comment.f42"
import { useTranslation } from 'react-i18next'
import Spinner from "../../atom/loading.spinner.line"
import { Image } from 'antd';
import './main.css'
import { mediaContainer, mediaContainerSecond, mediaContainerSecondText, mediaContainerPadding } from "./const"
import telegram from '../../../assets/img/boglanish/11/telegram.png'
import facebook from '../../../assets/img/boglanish/11/facebook.png'
import instagram from '../../../assets/img/boglanish/11/instagram.png'
import viber from '../../../assets/img/boglanish/11/viber.png'
import wechat from '../../../assets/img/boglanish/11/wechat.png'
import website from '../../../assets/img/boglanish/11/watsapp.png'
import { textAlign } from '@mui/system'

// import CloseIcon from '@material-ui/icons/Close';
// import Textarea from '../../atom/textAreaCom';
// import Modal from 'react-awesome-modal';

const Index = ({ state, typeRole, comments, commentCount, commentReview }) => {
    const { t } = useTranslation()
    const lan = localStorage.getItem("i18nextLng")
    const languageCheck = (item, lang) => {
        if (lang === 'en') return item?.language__name_en
        if (lang === 'ru') return item?.language__name_ru
        if (lang === 'uz' && item) return item?.language__name_uz + " tili"
    }
    const degreeLang = {
        native: t("TillarniBilish.onaTili"),
        intermediate: t("TillarniBilish.yaxshi")
    }

    return (
        <Wrapper>
            <WrapperContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Container style={{ "display": "flex" }} position="relative" {...mediaContainerSecond} margin="25px 0 0 20px">
                            <FlexContainer {...mediaContainer} width="100%" alignItems="flex-start" justifyContent="space-between" >
                                <div className="info_btn"><InfoBtn view={state?.view || 0} /></div>
                                <Image
                                    width={160}
                                    src={state?.image || RoundImage}
                                    style={{ borderRadius: '50%' }}
                                />
                                <Container {...mediaContainerSecondText} margin="-10px 0 0 15px">
                                    <TextTitle align="left" bottom="5px" font="20px">{state?.first_name || 'Mavjud emas'}{" "}{state?.last_name || 'Mavjud emas'}</TextTitle>
                                    <div className="gid-info-personal">{state?.age ? state?.age + " " + t("GidPk.yosh") : t("GidPk.yoshKiritilmagan")} | <span style={{ textTransform: "none" }}>{typeRole?.role === 'simple_user' ? "Foydalanuvchi " : typeRole?.role === "writer" ? t("GidPk.yozma") : typeRole?.role === "translator" ? t("auth_registr.tarjimon") : t("auth_registr.gid")} </span> </div>
                                    {
                                        typeRole?.role === 'gid' ?
                                            state?.languages?.map((prev, index) => (
                                                <div key={index} className={index === 0 ? "gid-info-personal-text top" : "gid-info-personal-text"}>
                                                    <div className="text">{languageCheck(prev, lan) || t("GidPk.malumotKiritilmagan")}</div>
                                                    &nbsp; - {degreeLang[prev?.level] || t("GidPk.malumotKiritilmagan")}
                                                </div>
                                            ))
                                            :
                                            state?.languages?.map((prev, index) => (
                                                <div key={index} className="gid-info-personal-text"><div className="text">{prev?.from_language_name[lan] || 'Mavjud emas'}</div> - <div className="text">{prev?.to_language_name[lan] || 'Mavjud emas'}</div></div>
                                            ))
                                    }

                                </Container>
                            </FlexContainer>
                            <div style={{width: "100%"}}>
                            <div style={{textAlign: "end"}}>
                            {state?.website ? <a className='linkai' target="_blank" href={state?.website}>   <ImageContainer width="40px" src={website} /></a> : ""}
                            {state?.telegram ? <a className='linkai' target="_blank" href={state?.telegram}>  <ImageContainer width="40px" src={telegram} /></a> : ""}
                            {state?.wechat ? <a className='linkai' target="_blank" href={state?.wechat}>    <ImageContainer width="40px" src={wechat} /></a> : ""}
                            {state?.viber ? <a className='linkai' target="_blank" href={state?.viber}>     <ImageContainer width="40px" src={viber} /></a> : ""}
                            {state?.facebook ? <a className='linkai' target="_blank" href={state?.facebook}>  <ImageContainer width="40px" src={facebook} /></a> : ""}
                            {state?.instagram ? <a className='linkai' target="_blank" href={state?.instagram}> <ImageContainer width="40px" src={instagram} /></a> : ""}
                            </div>
                            {state?.telegram || state?.website || state?.wechat || state?.viber || state?.facebook || state?.instagram?<div style={{marginTop: "20px", fontSize: "12px", textAlign: "end", paddingRight: "10px"}}><b>{t("GidPk.boglanishIcons")}</b> </div>:""}
                            </div>
                            
                          

                        </Container>
                    </Grid>
                </Grid>

                <Container padding="30px">
                    <TextTitle font="15px" fontWeight="600" align="left" color="#326A32">{t("GidPk.OzimHaqimda")}</TextTitle>
                    <p style={{ textAlign: 'justify' }}>{state?.bio || t("GidPk.bioKiritilmagan")}</p>
                    {/* {
                        typeRole?.role === 'gid' ? null :
                            <ContainerBottom style={{ marginBottom: 10 }}>
                                <div className="inner-div">
                                    <span className="title">
                                        {t("GidPk.qatnashgan")}
                                    </span>
                                </div>
                            </ContainerBottom>
                    } */}
                    {
                        state?.trainings?.length > 0 ?
                            state?.trainings?.map((prev, index) => (
                                <ContainerBottom key={index}>
                                    <div className="inner-div">
                                        <span className="title"> {t("GidPk.qatnashgan")} </span>
                                        <span>{prev?.name}</span>
                                    </div>

                                    <div className="inner-div">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="title"> {t("GidPk.yil")} </span> <span>{prev?.year}</span>
                                    </div>
                                </ContainerBottom>
                            )) :
                            typeRole?.role === 'gid' ? null : <div style={{ fontSize: '0.86rem' }}>{t("GidPk.malumotKiritilmagan")}</div>
                    }
                </Container>

            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <SecondInfoCard data={state} role={typeRole?.role} />
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <ThirdInfoCard data={state} role={typeRole?.role} />
                </Container>
            </WrapperContainer>
            {
                typeRole?.role === 'writer' ? null :
                    <WrapperContainer>
                        <Container {...mediaContainerPadding} padding="0 20px">
                            <Title text={t("GidPk.Gallery")} />
                            <ImageGallery data={state} />
                        </Container>
                    </WrapperContainer>
            }
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 20px">
                    <Title text={t("GidPk.fidbek")} /><br />
                    {comments?.loading && <Spinner />}
                    {comments?.success &&
                        <>
                            {commentReview?.length < 1 ? <div className="empty_title">{t("GidPk.izohlar")}</div> :
                                <>
                                    <Grid className='namessss' container spacing={1} style={{ marginBottom: 60 }}>

                                        <Grid item sm={12} md={2}>
                                            <ProgressInfo data={commentCount} />
                                        </Grid>

                                        <Grid item className='ssdd' sm={12} md={4}>
                                            <ProgressTitle data={commentCount} />
                                        </Grid>

                                    </Grid>
                                    {
                                        commentReview?.map((item, index) => (
                                            <CommentPart key={index} data={item} />
                                        ))
                                    }
                                </>
                            }
                        </>
                    }
                </Container>
            </WrapperContainer>
        </Wrapper>
    )
}

export default Index
