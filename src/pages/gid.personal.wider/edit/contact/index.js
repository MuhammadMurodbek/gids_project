import { Grid } from '@material-ui/core'
import React from 'react'
import { Wrapper } from './style'
import InputLabel from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { Container } from '../../../../styles/container/index.style'
import {useTranslation} from 'react-i18next';

const Index = () => {

    const {t} = useTranslation();

    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.tel")} placeholder="+" /> </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.email")} placeholder={t("emailKiritish")} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.Site")} placeholder={t("MT_Kontaktlar.link")} /> </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.Telegram")} placeholder={t("MT_Kontaktlar.telegramPlace")} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.WhatsApp")} placeholder={t("MT_Kontaktlar.watsapPlace")} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.Facebook")} placeholder={t("MT_Kontaktlar.facebookPlace")} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.Wechat")} placeholder={t("MT_Kontaktlar.wechatPlace")} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <InputLabel sizeLabel="15px" width="100%" label={t("MT_Kontaktlar.Viber")} placeholder={t("MT_Kontaktlar.viberPlace")} />
                </Grid>
            </Grid>
            <Container padding="20px 0 5px" textAlign="right">
                <Button>{t("MT_Kontaktlar.saqlash")}</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
