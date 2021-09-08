import React from 'react'
import {WrapperAll, 
    ComponentOne, 
    ComponentTwo, 
    ComponentThree,
    ComponentFour,
} from "./index.style"
import ExtSearch from "../../components/extended.search"
import mainPicture from "../../assets/img/mainFirst.svg"
import Grid from '@material-ui/core/Grid';
import Button from "../../components/button"
import ImgContainer from "../../components/img.container"
import imageSecond from "../../assets/img/sec_con.svg"
import imageThird from "../../assets/img/main_picture_3.svg"
import {FlexContainer} from "../../styles/flex.container"
import TimeLine from "./timeline"
import {TextTitle} from "../../styles/textTitle/index.style"
import buttonImage from "../../assets/img/container_main_page/Button.svg"
import { Paper } from '@material-ui/core';

const Index = () => {
    return (
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
                                <ImgContainer width="100%" height="270px" src="https://obfm.uz/uploads/2020/07/andijon.jpg"/>
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
                                <ImgContainer width="100%" height="270px" src="https://scontent.ftas1-2.fna.fbcdn.net/v/t1.6435-9/122034850_1076792456072768_846414578007195059_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=WHKbsgi5DrkAX8BORTE&_nc_ht=scontent.ftas1-2.fna&oh=461ee87b01105e1fb5114f1a850458e6&oe=615E7786"/>
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
        </WrapperAll>
    )
}

export default Index
