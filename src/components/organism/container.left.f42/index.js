import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer, ContainerBottom, Wrapper} from "./style"
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
import Button from "../../atom/button"
import { useTranslation } from 'react-i18next'
const mediaContainer = {
    m_width:"600px",
    m_direction:"column",
}
const mediaContainerSecond = {
    m_width:"600px",
    m_margin:'25px 0 0 0'
}
const mediaContainerSecondText = {
    m_width:"600px",
    m_margin:'15px auto 0',
    m_display:"inline-block",
    m_m_width:'280px'
}
const mediaContainerPadding = {
    m_width:"600px",
    m_padding:'0 5px'
}
const  Index = ({state}) => {

    const {t} = useTranslation()

    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const lan = localStorage.getItem("i18nextLng")
    const languageCheck = (item, lang) => {
        if(lang==='en') return item?.language__name_en
        if(lang==='ru') return item?.language__name_ru
        if(lang==='uz' && item) return item?.language__name_uz +" tili"
    }
    const degreeLang={
        native:"Ona tili",
        intermediate:'Yaxshi'
    }
    return (
        <Wrapper>
            <WrapperContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Container position="relative" {...mediaContainerSecond} margin="25px 0 0 20px">
                            <FlexContainer {...mediaContainer} width="100%" alignItems="flex-start" justifyContent="space-between" >
                                <div className="info_btn"><InfoBtn/></div>
                                <ImageContainer src={state?.image || RoundImage} width="160px" height="auto" round="50%" />
                                <Container {...mediaContainerSecondText} margin="-10px 0 0 15px">
                                    <TextTitle align="left" bottom="5px" font="20px">{state?.first_name || 'Mavjud emas'}{" "}{state?.last_name || 'Mavjud emas'}</TextTitle>
                                    <div className="gid-info-personal">33 yosh | <span style={{textTransform: "capitalize"}}>{getRole?.role ==='simple_user' ? "User":getRole?.role}</span> </div>
                                    {
                                        getRole?.role === 'gid' ? 
                                        state?.languages?.map((prev, index)=>(
                                            <div key={index} className={index === 0 ? "gid-info-personal-text top":"gid-info-personal-text"}>
                                                <div className="text">{languageCheck(prev, lan) || "Ma'lumot kiritilmagan"}</div> 
                                                    - {degreeLang[prev?.level] || "Ma'lumot kiritilmagan"}
                                            </div>
                                        ))
                                        :
                                        state?.languages?.map((prev,index) => (
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
                        getRole?.role ==='gid' ? null:
                        <ContainerBottom style={{marginBottom:10}}>
                            <div className="inner-div"> <span className="title"> 
                                {t("GidPk.qatnashgan")}</span> 
                            </div>
                        </ContainerBottom>
                    }
                    {
                        state?.trainings?.length>0 ?
                        state?.trainings?.map((prev, index)=>(
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
                            getRole.role === 'gid' ? null: <div style={{fontSize:'0.86rem'}}>Ma'lumot kiritilmagan</div>
                    }
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <SecondInfoCard data={state} role={getRole?.role}/>
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <ThirdInfoCard data={state} role={getRole?.role}/>
                </Container> 
            </WrapperContainer>
            { getRole?.role === 'writer'? null: 
             <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 20px">
                    <Title text={t("GidPk.Gallery")}/>
                    <ImageGallery data={state}/>
                </Container>
            </WrapperContainer>}
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 20px"> 
                    <Title text={t("GidPk.fidbek")}/>   
                    <Grid container spacing={1} style={{marginBottom:60}}>
                        <Grid item sm={12} md={4}><ProgressInfo/></Grid>
                        <Grid item sm={12} md={8}><ProgressTitle/></Grid>
                    </Grid>
                    <CommentPart/>
                    <CommentPart/>
                    <CommentPart/>
                    <CommentPart/>
                    <CommentPart/>
                    <CommentPart/>
                    <Container 
                        position="relative"
                        padding="60px 0 0" 
                        margin="-60px 0 0" 
                        textAlign="left" 
                        zIndex="40"
                        backgroundColor="linear-gradient(to top, #fff, rgba(255,255,255,0.6))"
                    >
                        <Button type="outlined">{t("GidPk.koproqYuklash")}</Button>
                    </Container>
                </Container>
            </WrapperContainer>
        </Wrapper>
    )
}

export default Index
