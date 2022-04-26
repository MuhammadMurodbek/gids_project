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
import { mediaContainer, mediaContainerSecond, mediaContainerSecondText, mediaContainerPadding } from "./const"
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
        native: "Ona tili",
        intermediate: 'Yaxshi'
    }
    // console.log(commentReview)
    return (
        <Wrapper>
            <WrapperContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Container position="relative" {...mediaContainerSecond} margin="25px 0 0 20px">
                            <FlexContainer {...mediaContainer} width="100%" alignItems="flex-start" justifyContent="space-between" >
                                <div className="info_btn"><InfoBtn view={state?.view || 0} /></div>
                                <Image
                                    width={160}
                                    src={state?.image || RoundImage}
                                    style={{ borderRadius: '50%' }}
                                />
                                <Container {...mediaContainerSecondText} margin="-10px 0 0 15px">
                                    <TextTitle align="left" bottom="5px" font="20px">{state?.first_name || 'Mavjud emas'}{" "}{state?.last_name || 'Mavjud emas'}</TextTitle>
                                    <div className="gid-info-personal">{state?.age ? state?.age + " yosh" : 'Yosh kiritilmagan'} | <span style={{ textTransform: "none" }}>{typeRole?.role === 'simple_user' ? "Foydalanuvchi " : typeRole?.role === "writer" ? "Yozma tarjimon" : typeRole?.role === "translator" ? "Og'izaki tarjimon" : "Gid"} </span> </div>
                                    {
                                        typeRole?.role === 'gid' ?
                                            state?.languages?.map((prev, index) => (
                                                <div key={index} className={index === 0 ? "gid-info-personal-text top" : "gid-info-personal-text"}>
                                                    <div className="text">{languageCheck(prev, lan) || "Ma'lumot kiritilmagan"}</div>
                                                    - {degreeLang[prev?.level] || "Ma'lumot kiritilmagan"}
                                                </div>
                                            ))
                                            :
                                            state?.languages?.map((prev, index) => (
                                                <div key={index} className="gid-info-personal-text"><div className="text">{prev?.from_language_name[lan] || 'Mavjud emas'}</div> - <div className="text">{prev?.to_language_name[lan] || 'Mavjud emas'}</div></div>
                                            ))
                                    }

                                </Container>
                            </FlexContainer>
                        </Container>
                    </Grid>
                </Grid>

                <Container padding="30px">
                    <TextTitle font="15px" fontWeight="600" align="left" color="#326A32">{t("GidPk.OzimHaqimda")}</TextTitle>
                    <p>{state?.bio || 'Bio kiritilmagan'}</p>
                    {
                        typeRole?.role === 'gid' ? null :
                            <ContainerBottom style={{ marginBottom: 10 }}>
                                <div className="inner-div"> <span className="title">
                                    {t("GidPk.qatnashgan")}</span>
                                </div>
                            </ContainerBottom>
                    }
                    {
                        state?.trainings?.length > 0 ?
                            state?.trainings?.map((prev, index) => (
                                <ContainerBottom key={index}>
                                    <div className="inner-div">
                                        <span className="title"> Tadbir: </span>
                                        <span>{prev?.name}</span>
                                    </div>

                                    <div className="inner-div">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="title"> {t("GidPk.yil")} </span> <span>{prev?.year}</span>
                                    </div>
                                </ContainerBottom>
                            )) :
                            typeRole?.role === 'gid' ? null : <div style={{ fontSize: '0.86rem' }}>Ma'lumot kiritilmagan</div>
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
            {typeRole?.role === 'writer' ? null :
                <WrapperContainer>
                    <Container {...mediaContainerPadding} padding="0 20px">
                        <Title text={t("GidPk.Gallery")} />
                        <ImageGallery data={state} />
                    </Container>
                </WrapperContainer>}
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 20px">
                    <Title text={t("GidPk.fidbek")} /><br />
                    {comments?.loading && <Spinner />}
                    {comments?.success &&
                        <>
                            {commentReview?.length < 1 ? <div className="empty_title">Izohlar mavjud emas.</div> :
                                <>
                                    <Grid container spacing={1} style={{ marginBottom: 60 }}>

                                        <Grid item sm={12} md={4}>
                                            <ProgressInfo data={commentCount} />
                                        </Grid>

                                        <Grid item className='ssdd' sm={12} md={8}>
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
