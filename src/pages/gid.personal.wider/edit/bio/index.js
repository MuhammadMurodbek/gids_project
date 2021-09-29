import { Grid } from '@material-ui/core'
import React from 'react'
import {Wrapper} from './style'
import ImageUpload from "../../../../components/organism/image.uploader.f15"
import InputLabeled from "../../../../components/molecules/input.labeled"
import CalendarLabel from "../../../../components/molecules/calendar.labeled"
import DoubleRadio from "../../../../components/molecules/double.radio.labeled"
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { Container } from '../../../../styles/container/index.style'
import TextArea from "../../../../components/molecules/area.labeled"
import { TextTitle } from '../../../../styles/textTitle/index.style'
const Index = () => {
    return (
        <Wrapper>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <ImageUpload width="200px" height="200px" radius="50%"/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}><InputLabeled sizeLabel="15px" width="100%" label="Familiya" placeholder="Familiyangizni yozing..."/></Grid>
                        <Grid item xs={12} md={4}><InputLabeled sizeLabel="15px" width="100%" label="Ism" placeholder="Ismingizni yozing..."/></Grid>
                        <Grid item xs={12} md={4}><InputLabeled sizeLabel="15px" width="100%" label="Otangizni ismi" placeholder="Otangizni ismini yozing..."/></Grid>
                    </Grid> 
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}><CalendarLabel sizeLabel="15px" width="100%" label="Sana"/></Grid>
                        <Grid item xs={12} md={4}><DoubleRadio sizeLabel="15px" label="Jinsi" name1="Erkak" name2="Ayol"/></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid> 
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}><SelectLabeled sizeLabel="15px" width="100%" label="Mamlakat"/></Grid>
                        <Grid item xs={12} md={4}><SelectLabeled sizeLabel="15px" width="100%" label="Shahar"/></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid> 
                </Grid>
            </Grid>
            <Container padding="10px 0">
                <TextArea width="100%" label="O‘zingiz haqingizda" placeholder="O‘zingiz haqingizda yozing..."/>
            </Container>
            <Container padding="10px 0">
                <TextTitle font="16px" align="left" top="15px">Sertifikat va diplomlaringiz bo‘lsa shu yerga yuklang</TextTitle>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ImageUpload width="100%" height="230px" radius="1px"/>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3}>
                        <ImageUpload width="100%" height="230px" radius="1px"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ImageUpload width="100%" height="230px" radius="1px"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ImageUpload width="100%" height="230px" radius="1px"/>
                    </Grid> */}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
