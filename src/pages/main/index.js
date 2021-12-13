import React, {useEffect} from 'react'
import {
    WrapperAll,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ContainerLast,
} from "./index.style"
import ExtSearch from "../../components/extended.search"
import mainPicture from "../../assets/img/mainFirst.svg"
import Grid from '@material-ui/core/Grid';
import Button from "../../components/atom/button"
import ImgContainer from "../../components/molecules/img.container"
import imageSecond from "../../assets/img/sec_con.svg"
import imageThird from "../../assets/img/main_picture_3.svg"
import { FlexContainer } from "../../styles/flex.container"
import TimeLine from "./external/timeline"
import { TextTitle } from "../../styles/textTitle/index.style"
import { Container } from "../../styles/container/index.style"
import { Paper } from '@material-ui/core';
import SliderComponent from "./external/slider"
import { Link } from 'react-router-dom'
import Box from "@material-ui/core/Box";
import img21 from '../../assets/img/about/right.png'
import {useTranslation} from 'react-i18next'
import {getLabelCountrySecond} from "../../custom/function"

import {media, mediaFlexButtons, mediaBtn, mediaTextField, mediaTextFieldSec, mediaContainer} from "./_media"
import AccountMenu from '../../components/atom/user_account';

const Index = () => {
    const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
    React.useMemo(() =>{
        getLabelCountrySecond(1)
    },[countryGlobal])
    const getRole = JSON.parse(localStorage.getItem("user_token"))
     
    const {t} = useTranslation()

 
    return (
        <>
            <WrapperAll>
                <ComponentOne>
                    <Grid className="grid_container" container spacing={1}>
                        <Grid item xs={12} md={4} sm={12}
                            component={Box}
                            className="grid_container_inner"
                        >
                            <ExtSearch/>
                        </Grid>
                        <Grid item xs={12} md={8} sm={12}>
                            <div className="right-part">
                                <div> {t("main.title")} </div>
                                <img src={mainPicture} alt="guvd" />
                            </div>
                        </Grid>
                    </Grid>
                </ComponentOne>
                <ComponentTwo>
                    <div className="title-second-main-container">{t("main.takliflarimiz")}</div>
                    <Grid container spacing={1} className="grid_container">
                        <Grid item xs={12} md={6} sm={12}>
                            <div className="container-2-1 first">
                                <div className="title-second-main-container-text">{t("main.tadbirkorlarga")}</div>
                                <p>{t("main.textForTadbirkor")}</p>
                                <FlexContainer width="370px" {...mediaFlexButtons} justifyContent="space-between">
                                    <Link to="/application-form" >
                                        <Button {...mediaBtn}>{t("main.arizaQoldrirish")} </Button>
                                    </Link>
                                    <Link to="/gids">
                                        <Button {...mediaBtn} type="outlined"> {t("main.Gid_tanlash")} </Button>
                                    </Link>
                                </FlexContainer>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <ImgContainer {...media} src={imageSecond} width="500px" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} sm={12}>
                            <ImgContainer {...media} src={imageThird} width="500px" />
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <div className="container-2-1 second">
                                <div className="title-second-main-container-text"> {t("main.Gidlarga")} </div>
                                <p>{t("main.textForGid")}</p>
                                <div>
                                    <Link to="/auth">
                                        <Button width="300px" {...mediaBtn}> {t("main.royhatdanO")} </Button>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </ComponentTwo>
                <ComponentThree>
                    <TimeLine />
                </ComponentThree>
                <ComponentFour>
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="40px" bottom="60px">{t("main.trendSHahar")}</TextTitle>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={{ overflow: 'hidden' }}>
                                <div className="container">
                                    <ImgContainer width="100%" height="270px" src="https://thumbs.dreamstime.com/b/registan-old-public-square-samarkand-uzbekistan-heart-ancient-city-150740312.jpg" />
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div className="title-container">Andijon</div>
                                        <Link to="/cities" className="link11">
                                              {t("main.korish")}  <img src={img21} alt="asdfasdf" />
                                        </Link>
                                    </FlexContainer>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={{ overflow: 'hidden' }}>
                                <div className="container">
                                    <ImgContainer width="100%" height="270px" src="https://thumbs.dreamstime.com/b/registan-old-public-square-samarkand-uzbekistan-heart-ancient-city-150740312.jpg" />
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div className="title-container">Andijon</div>
                                        <Link to="/cities" className="link11">
                                        {t("main.korish")}<img src={img21} alt="asdfasdf" />
                                        </Link>
                                    </FlexContainer>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper style={{ overflow: 'hidden' }}>
                                <div className="container">
                                    <ImgContainer width="100%" height="270px" src="https://thumbs.dreamstime.com/b/registan-old-public-square-samarkand-uzbekistan-heart-ancient-city-150740312.jpg" />
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div className="title-container">Andijon</div>
                                        <Link to="/cities" className="link11">
                                        {t("main.korish")} <img src={img21} alt="asdfasdf" />
                                        </Link>
                                    </FlexContainer>
                                </div>
                            </Paper>
                        </Grid>


                    </Grid>
                </ComponentFour>
                <Container {...mediaContainer} padding="20px">
                    <SliderComponent />
                </Container>
            </WrapperAll>


            {
                getRole?.role === 'simple_user' ?
                    <ContainerLast>
                        <div className="application-last">
                            <TextTitle  {...mediaTextField} {...mediaTextFieldSec} width="50%" left="auto" right="auto" bottom="40px">{t("main.hoziroq")} </TextTitle>
                            <FlexContainer {...mediaFlexButtons} width="380px" margin="0 auto" alignItems="center" justifyContent="space-between">
                                <Link to="/application-form"><Button  {...mediaBtn}>{t("main.ariza")} </Button></Link>
                                <Link to="/gids"> <Button type="outlined"  {...mediaBtn}>{t("main.tanlash")} </Button></Link>
                            </FlexContainer>
                        </div>
                    </ContainerLast>

                    : ''
            }
        </>
    )
}
export default Index
