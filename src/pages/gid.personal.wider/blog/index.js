import React from 'react'
import {TitleComponent} from "./style"
import Layout from "../../../layouts/gid.personal.page"
import {TextTitle}  from "../../../styles/textTitle/index.style"
import icon from "../../../assets/img/chev_right.png"
import ImageContainer from "../../../components/molecules/img.container"
import {Link} from "react-router-dom"
import {Container} from "../../../styles/container/index.style"
import {shadow} from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabel from "../../../components/molecules/input.labeled"
import AreaLabeled from "../../../components/molecules/area.labeled"
import ImageUploader from "../../../components/organism/image.uploader.f15"
import Button from "../../../components/atom/button"
const Index = () => {
    return (
        <Layout>
            <TitleComponent>
                <TextTitle font="26px" bottom="20px">Maqola yozish</TextTitle>
                <Link to="/" className="link">
                    <div className="title-left"> <ImageContainer width="auto" src={icon}/> ortga qaytish </div>
                </Link>
            </TitleComponent>
            <Container boxShadow={shadow} padding="20px">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <InputLabel width="100%" label="Maqola nomi" placeholder="Maqolangiz nomini kiriting..."/>
                        <AreaLabeled width="100%" label="Teglar" placeholder="Teg yozing..."/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ImageUploader width="100%" height="460px"/>
                    </Grid>
                </Grid>
                <Container padding="0" margin="70px 0 0">
                    <AreaLabeled width="100%" label="Text" placeholder="Maqola yozing..."/>
                </Container>
                <Container padding="20px 0 0" textAlign="right">
                    <Button>Joylamoq</Button>
                </Container>
            </Container>
        </Layout>
    )
}

export default Index
