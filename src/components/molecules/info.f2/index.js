import React from 'react'
import {WrapperInfoF2} from "./style"
import {FlexContainer} from "../../../styles/flex.container"
import ImgContainer from "../img.container"
import starImg from "../../../assets/img/choosegid/star1.svg"
import extraImg from "../../../assets/img/choosegid/extra.svg"
import comment from "../../../assets/img/choosegid/comment.svg"
import { Grid } from '@material-ui/core'
import {useTranslation} from 'react-i18next'

const Index = () => {
    const {t} = useTranslation()

   

    return (
        <WrapperInfoF2> 
            <FlexContainer width="auto" alignItems="center" justifyContent="flex-start" flexDirection="column">
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={starImg} width="30px"/></Grid>
                    <Grid item sm={9}><span>10.0</span>/10</Grid>
                </Grid>
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={comment} width="30px"/></Grid>
                    <Grid item sm={9}><span>{t("Gid_Tanlash.fikirlar")}</span>/10</Grid>
                </Grid>
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={extraImg} width="30px"/></Grid>
                    <Grid item sm={9}><span>{t("Gid_Tanlash.kuniga")}</span>/10</Grid>
                </Grid>
            </FlexContainer>
        </WrapperInfoF2>
    )
}

export default Index
