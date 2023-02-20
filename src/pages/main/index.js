import React,{lazy} from 'react'
import {
    WrapperAll,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ContainerLast,
} from "./index.style"
import ExtSearch from "../../components/extended.search"
import imageSecond from "../../assets/img/sec_con.svg"
import imageThird from "../../assets/img/main_picture_3.svg"
import { FlexContainer } from "../../styles/flex.container"
import TimeLine from "./external/timeline"
import { TextTitle } from "../../styles/textTitle/index.style"
import { Container } from "../../styles/container/index.style"
import { Link } from 'react-router-dom'
// import Box from "@material-ui/core/Box";
import { useTranslation } from 'react-i18next'
import { getLabelCountrySecond } from "../../custom/function"
import { useHistory } from "react-router-dom"
import { media, mediaFlexButtons, mediaBtn, mediaTextField, mediaTextFieldSec, mediaContainer } from "./_media"
import { Paper } from '@material-ui/core';
// import Slider from "react-slick";
import './main1.css'

// import mainPicture from "../../assets/img/image.jpg"
 
// import Grid from '@material-ui/core/Grid';
// import Button from "../../components/atom/button"


// import ImgContainer from "../../components/molecules/img.container"
import mainPicture from "../../assets/img/image.jpg";
import img1 from '../../assets/img/main/samarqand.webp'
import img2 from '../../assets/img/main/ee.jpg'
import img3 from '../../assets/img/main/we.jpg'
import img4 from '../../assets/img/main/wee.jpg'

const ImgContainer = lazy(() => import("../../components/molecules/img.container"))
const Button  = lazy(() => import("../../components/atom/button"));
const Grid = lazy(() => import("@material-ui/core/Grid"));
const Slider = lazy(() => import("react-slick"));

const Box = lazy(() => import("@material-ui/core/Box"));
const SliderComponent = lazy(() => import("./external/slider"));

// const ExtSearch = lazy(() => import("../../components/extended.search"));
// const imageSecond = lazy(() => import("../../assets/img/sec_con.svg"));
// const imageThird = lazy(() => import("../../assets/img/main_picture_3.svg"));

// const mainPicture = lazy(() => import("../../assets/img/image.jpg"));

// const img1 = lazy(() => import("../../assets/img/main/samarqand.webp"));
// const img2 = lazy(() => import("../../assets/img/main/ee.jpg"));
// const img3 = lazy(() => import("../../assets/img/main/we.jpg"));
// const img4 = lazy(() => import("../../assets/img/main/wee.jpg"));
const img21 =lazy(() =>import('../../assets/img/about/right.png'));


const settings = {

    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

};

const Index = () => {
    // const countryGlobal = JSON.parse(localStorage.getItem("countryGlobal"))
    React.useMemo(() => { getLabelCountrySecond(1) }, [])
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    const { t } = useTranslation()
    const history = useHistory()
    const onClickbutton = () => {
        history.push("/application-form")
        window.scrollTo(0, 0);
    }

    const toWIndows1 = () => {
        window.scrollTo(0, 0)
    }
    // console.log("ssss", getRole?.role)
    return (
        <>
            <WrapperAll>
                <ComponentOne>
                    <Grid className="grid_container" container spacing={1}>
                        <Grid item xs={12} md={4} sm={12}
                            component={Box}
                            className="grid_container_inner"
                        >
                            <ExtSearch />
                        </Grid>
                        <Grid item xs={12} md={8} sm={12}>
                            <div className="right-part">
                                <div> {t("main.title")} </div>
                                <img  src={mainPicture} className="img_main" alt="guvd" />
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
                                <p style={{ textAlign: 'justify' }}>{t("main.textForTadbirkor")}</p>
                                <FlexContainer width="450px" {...mediaFlexButtons} justifyContent="space-between">
                                    {/* <Link to="/application-form" > */}

                                    <Link to="/gids">
                                        <Button width="200px" onClick={() => history.push('/gids')} {...mediaBtn}>{t("main.tanlash")}
                                        </Button>
                                    </Link>
                                    {
                                        getRole?.role === "translator" ? null
                                            :
                                            getRole?.role === "writer" ? null
                                                : getRole?.role === "gid" ? null
                                                    :
                                                    <Button type="outlined" className="btn_medida_last newst" onClick={onClickbutton} {...mediaBtn}>{t("main.arizaQoldrirish")} </Button>
                                    }

                                    {/* </Link> */}
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
                                <p style={{ textAlign: 'justify' }}>{t("main.textForGid")}</p>
                                <div>
                                    <Link to="/auth">
                                        <Button className="btn_medida_last" width="300px" {...mediaBtn}> {t("main.royhatdanO")} </Button>
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

                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="0px" bottom="10px">{t("main.trendSHahar")}
                    </TextTitle>

                    <div>
                        <Slider {...settings}  >
                            <div className="carouseldiv">
                                <Paper style={{ overflow: 'hidden' }}>
                                    <div className="container">
                                        <ImgContainer width="100%" height="270px" src={img2} />
                                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                            <div className="title-container">{t("main.Toshkent")}</div>
                                            <Link onClick={toWIndows1} to="/toshkent?page=1" className="link11">
                                                {t("main.korish")}  <img src={img21} alt="asdfasdf" />
                                            </Link>
                                        </FlexContainer>
                                    </div>
                                </Paper>
                            </div>

                            <div className="carouseldiv">
                                <Paper style={{ overflow: 'hidden' }}>
                                    <div className="container">
                                        <ImgContainer width="100%" height="270px" src={img1} />
                                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                            <div className="title-container">{t("main.Samarqand")}</div>
                                            <Link to="/samarqand?page=1" onClick={toWIndows1} className="link11">
                                                {t("main.korish")}
                                                <img src={img21} alt="asdfasdf" />
                                            </Link>
                                        </FlexContainer>
                                    </div>
                                </Paper>
                            </div>

                            <div className="carouseldiv">
                                <Paper style={{ overflow: 'hidden' }}>
                                    <div className="container">
                                        <ImgContainer width="100%" height="270px" src={img3} />
                                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                            <div className="title-container">{t("main.Buxoro")}</div>
                                            <Link onClick={toWIndows1} to="/cities?page=1" className="link11">
                                                {t("main.korish")}  <img src={img21} alt="asdfasdf" />
                                            </Link>
                                        </FlexContainer>
                                    </div>
                                </Paper>
                            </div>

                            <div className="carouseldiv">
                                <Paper style={{ overflow: 'hidden' }}>
                                    <div className="container">
                                        <ImgContainer width="100%" height="270px" src={img4} />
                                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                            <div className="title-container">{t("main.Xiva")}</div>
                                            <Link to="/xiva?page=1" className="link11"
                                                onClick={toWIndows1} >
                                                {t("main.korish")}  <img src={img21} alt="asdfasdf" />
                                            </Link>
                                        </FlexContainer>
                                    </div>
                                </Paper>
                            </div>

                        
                           

                        </Slider>
                    </div>

                </ComponentFour>

                <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="40px">{t("main.MijozlarniF")}
                </TextTitle>

                <Container {...mediaContainer} padding="20px">
                    <SliderComponent />
                </Container>

            </WrapperAll>
            <ContainerLast>
                <div className="application-last">
                    <TextTitle  {...mediaTextField} {...mediaTextFieldSec} width="50%" left="auto" right="auto" bottom="40px">{t("main.hoziroq")}
                    </TextTitle>
                    <FlexContainer {...mediaFlexButtons} width="450px" margin="0 auto" alignItems="center" justifyContent="space-between">

                        <Button className="nses" width="200px" onClick={() => history.push('/gids')} {...mediaBtn}>
                            {t("main.tanlash")}
                        </Button>

                        <Button className="nses"  width="220px" type="outlined" onClick={onClickbutton} {...mediaBtn}>
                            {t("main.arizaQoldrirish")} </Button>&nbsp;

                        {/* { 
                            getRole?.role === "translator" ? null
                                :
                                getRole?.role === "writer" ? null
                                    : getRole?.role === "gid" ? null
                                        :
                        } */}
                    </FlexContainer>
                </div>
            </ContainerLast>


        </>
    )
}
export default Index
