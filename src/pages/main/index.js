import React from 'react'
import {WrapperAll, ComponentOne, ComponentTwo, ComponentThree} from "./index.style"
import ExtSearch from "../../components/extended.search"
import mainPicture from "../../assets/img/mainFirst.svg"
import Grid from '@material-ui/core/Grid';
import Button from "../../components/button"
import ImgContainer from "../../components/img.container"
import imageSecond from "../../assets/img/sec_con.svg"
import imageThird from "../../assets/img/main_picture_3.svg"
import {FlexContainer} from "../../styles/flex.container"
import TimeLine from "./timeline"

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
        </WrapperAll>
    )
}

export default Index
