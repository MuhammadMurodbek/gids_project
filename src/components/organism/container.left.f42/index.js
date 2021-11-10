import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer, ContainerBottom, Wrapper} from "./style"
import ImageGallery from "../../molecules/element_f42/Gallery"
import ImageContainer from "../../molecules/img.container"
import InfoBtn from "../../molecules/info.f42"
import RoundImage from "../../../assets/img/choosegid/round.svg"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
import SecondInfoCard from "../../molecules/element_f42/container_2.f42"
import ThirdInfoCard from "../../molecules/element_f42/container_3.f42"
import Title from "../../atom/element_f42/title.container.f42"
import ProgressTitle from "../../molecules/element_f42/progress.title"
import ProgressInfo from "../../molecules/element_f42/rate.part.f42"
import CommentPart from "../../molecules/element_f42/comment.f42"
import Button from "../../atom/button"
// import TruncateText from "../../molecules/text.truncate"
import { useTranslation, UseTranslation} from 'react-i18next'


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
const  Index = () => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <WrapperContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Container position="relative" {...mediaContainerSecond} margin="25px 0 0 20px">
                            <FlexContainer {...mediaContainer} width="100%" alignItems="flex-start" justifyContent="space-between" >
                                <div className="info_btn"><InfoBtn/></div>
                                <ImageContainer src={RoundImage} width="160px" height="auto" round="50%" />
                                <Container {...mediaContainerSecondText} margin="-10px 0 0 15px">
                                    <TextTitle align="left" bottom="5px" font="20px">Abdusattor Ergashev</TextTitle>
                                    <div className="gid-info-personal">33 yosh | <span>Gid va tarjimon</span> </div>
                                    <div className="gid-info-personal-text top"><div className="text">Xitoy tili</div> - Bemalol (Og'zaki va yozma)</div>
                                    <div className="gid-info-personal-text"><div className="text">Ingliz tili</div> - Bemalol (Ogzaki va yozma)</div>
                                    <div className="gid-info-personal-text"><div className="text">Xitoy tili</div> - Og'zaki va yozma</div>
                                    <div className="gid-info-personal-text"><div className="text">Ingliz tili</div> - Ogzaki va yozma</div>
                                </Container>
                            </FlexContainer>
                        </Container>
                    </Grid>
                    {/* <Grid item xs={1} sm={3}>
                    </Grid> */}
                </Grid>
                <Container padding="30px">
                    <TextTitle font="15px" fontWeight="600" align="left" color="#326A32">{t("GidPk.OzimHaqimda")}</TextTitle>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, molestias consectetur. Repellat sint animi beatae quisquam et ut minima ratione, facilis voluptate consequatur culpa possimus sit nisi illum voluptates at asperiores tempora voluptatem doloremque! Provident illo et obcaecati neque, quam cumque perspiciatis tempore sit dolores, pariatur modi. Repellendus sit, culpa quasi, sunt ratione voluptate recusandae veniam laborum soluta a nulla accusantium adipisci vitae minima odit? Quos minus fugiat, incidunt harum eveniet fuga, provident repellat, qui quas illum reiciendis quam blanditiis quo cum aliquid vitae repellendus natus iusto! Placeat architecto, consequatur porro sint enim vitae earum eveniet quia, error consequuntur quas!</p>
                    <ContainerBottom>
                        <div className="inner-div"> <span className="title"> 
                        {t("GidPk.qatnashgan")}:</span> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, architecto.</span> </div>
                        <div className="inner-div"> <span className="title"> 
                        {t("GidPk.yil")} :</span> <span>2021</span> </div>
                    </ContainerBottom>
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <SecondInfoCard/>
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 10px">
                    <ThirdInfoCard/>
                </Container>
            </WrapperContainer>
            <WrapperContainer>
                <Container {...mediaContainerPadding} padding="0 20px">
                    <Title text={t("GidPk.Gallery")}/>
                    <ImageGallery/>
                </Container>
            </WrapperContainer>
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
