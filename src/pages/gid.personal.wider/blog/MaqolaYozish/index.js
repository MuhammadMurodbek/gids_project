import React from 'react'
import {TitleComponent} from "./style"
import Layout from "../../../../layouts/gid.personal.page"
import {TextTitle}  from "../../../../styles/textTitle/index.style"
import icon from "../../../../assets/img/chev_right.png"
import ImageContainer from "../../../../components/molecules/img.container"
import {Link} from "react-router-dom"
import {Container} from "../../../../styles/container/index.style"
import {shadow} from "../../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabel from "../../../../components/molecules/input.labeled"
import AreaLabeled from "../../../../components/molecules/area.labeled"
import ImageUploader from "../../../../components/organism/image.uploader.f15"
import Button from "../../../../components/atom/button"
import {mediaTextField, mediaTextFieldSec} from "../../../../custom/global.media.variables"
import {useTranslation} from 'react-i18next'

const Index = () => {

    const {t} = useTranslation()

    return (
        <Layout>
            <TitleComponent>
                <TextTitle {...mediaTextField} {...mediaTextFieldSec} font="26px" bottom="20px">{t("maqolaYozish.Maqolayozish")}</TextTitle>
                <Link to="/gid-personal-wider" className="link">
                    <div className="title-left"> <ImageContainer width="auto" src={icon}/> <span>{t("maqolaYozish.orqaga")}</span></div>
                </Link>
            </TitleComponent>
            <Container boxShadow={shadow} padding="20px">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <InputLabel width="100%" label={t("maqolaYozish.maqolaNomi")} placeholder={t("maqolaYozish.NomiPlace")}/>
                        <AreaLabeled width="100%" label={t("maqolaYozish.taglar")} placeholder= {t("maqolaYozish.tagPlace")} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ImageUploader width="100%" height="460px"/>
                    </Grid>
                </Grid>
                <Container padding="0" margin="70px 0 0">
                    <AreaLabeled width="100%" label={t("maqolaYozish.Text")} placeholder= {t("maqolaYozish.maqolaniYozing")} />
                </Container>
                <Container padding="20px 0 0" textAlign="right">
                    <Button>{t("maqolaYozish.joylamoq")}</Button>
                </Container>
            </Container>
        </Layout>
    )
}

export default Index
