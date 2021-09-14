import React from 'react'
import {WrapperAll, 
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
import {FlexContainer} from "../../styles/flex.container"
import TimeLine from "./external/timeline"
import {TextTitle} from "../../styles/textTitle/index.style"
import {Container} from "../../styles/container/index.style"
import buttonImage from "../../assets/img/container_main_page/Button.svg"
import { Paper } from '@material-ui/core';
import SliderComponent from "./external/slider"

const Index = () => {
    return (
        <>
        <WrapperAll>
            <ComponentOne>
                <Grid container spacing={1}>
                    <Grid item md={4} sm={12}>
                        <ExtSearch/>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <div className="right-part">
                            <div>Dunyo bo'ylab ishonchli gidlar va tarjimonlarni taklif qilamiz</div>
                            <img src={mainPicture} alt="guvd"/>
                        </div>
                    </Grid>
                </Grid>
            </ComponentOne>

            <ComponentTwo>
                <div className="title-second-main-container">Biz nima taklif qilamz</div>
                <Grid container spacing={1}>
                    <Grid item md={6} sm={12}>
                        <div className="container-2-1">
                            <div className="title-second-main-container-text">Tadbirkorlar uchun</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi provident dignissimos accusamus optio aliquam assumenda omnis nisi quae fuga consequatur, numquam recusandae accusantium dolore, ipsum iure suscipit sed quia?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, minima.</p>
                            <FlexContainer width="370px" justifyContent="space-between">
                                <Button>Ariza qoldirish</Button>
                                <Button type="outlined">Gidni tanlash</Button>
                            </FlexContainer>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <ImgContainer src={imageSecond} width="500px"/>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={6} sm={12}>
                        <ImgContainer src={imageThird} width="500px"/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <div className="container-2-1">
                            <div className="title-second-main-container-text">Gidlar uchun</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi provident dignissimos accusamus optio aliquam assumenda omnis nisi quae fuga consequatur, numquam recusandae accusantium dolore, ipsum iure suscipit sed quia?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, minima.</p>
                            <div>
                                <Button>Ro'yxatdan o'tish</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ComponentTwo>
            <ComponentThree>
                <TimeLine/>
            </ComponentThree>
            <ComponentFour>
                <TextTitle top="40px" bottom="60px">Eng ko'p boriladigan shaharlar</TextTitle>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={4}>
                        <Paper style={{overflow: 'hidden'}}>
                            <div className="container">
                                <ImgContainer width="100%" height="270px" src="https://thumbs.dreamstime.com/b/registan-old-public-square-samarkand-uzbekistan-heart-ancient-city-150740312.jpg"/>
                                <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                    <div className="title-container">Andijon</div>
                                    <a href="/df">
                                        <ImgContainer src={buttonImage}/>
                                    </a>
                                </FlexContainer>
                            </div>
                        </Paper>
                    </Grid>
                    
                    <Grid item sm={12} md={4}>
                        <Paper style={{overflow: 'hidden'}}>
                            <div className="container">
                                <ImgContainer width="100%" height="270px" src="https://fastly.4sqi.net/img/general/width960/34408156_V8zHq0vay-b9YNJXyr-qkuXYu8T3xKGRehDxJ9YFecA.jpg"/>
                                <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                    <div className="title-container">Andijon</div>
                                    <a href="/df">
                                        <ImgContainer src={buttonImage}/>
                                    </a>
                                </FlexContainer>
                            </div>
                        </Paper>
                    </Grid>
                    
                    <Grid item sm={12} md={4}>
                        <Paper style={{overflow: 'hidden'}}>
                            <div className="container">
                                <ImgContainer width="100%" height="270px" src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg?w=590&h=800&ACB6A419-81EB-4B9C-B846FD8EBFB16FBE"/>
                                <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                    <div className="title-container">Andijon</div>
                                    <a href="/df">
                                        <ImgContainer src={buttonImage}/>
                                    </a>
                                </FlexContainer>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </ComponentFour>
            <Container padding="20px">
                <SliderComponent/>
            </Container>
        </WrapperAll>
        <ContainerLast>
            <div className="application-last">
                <TextTitle width="50%" left="auto" right="auto" bottom="40px">Xoziroq o’zingiz uchun Git tanlang yoki shunchaki ariza qoldiring.</TextTitle>
                <FlexContainer width="380px" margin="0 auto" alignItems="center" justifyContent="space-between">
                    <Button>Ariza qoldirish</Button>
                    <Button type="outlined">Gitni tanlash</Button>
                </FlexContainer>
            </div>
        </ContainerLast>
        </>
    )
}

export default Index
