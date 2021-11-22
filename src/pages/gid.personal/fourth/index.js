import React from 'react'
import { Container } from '../../../styles/container/index.style'
import {Wrapper, TitleContainer} from "./style"
import {shadow} from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabeled from "../../../components/molecules/input.labeled"
import Button from "../../../components/atom/button"
import Box from "@material-ui/core/Box";
import {useTranslation} from 'react-i18next'

const mediaContainer = {
    m_width:"500px",
    m_padding:"10px 5px",
}
const Index = () => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <Container padding="0" boxShadow={shadow} className="container4">
                <TitleContainer>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>{t("profil_sozlamalari.kontaktlar")}</Grid>
                        <Grid component={Box} display={{ xs: "none", sm: "inline-block" }} item xs={12} sm={6}> {t("profil_sozlamalari.parolniYangilash")} </Grid>
                    </Grid>
                </TitleContainer>
                <Container {...mediaContainer} padding="20px 40px">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <InputLabeled width="100%" 
                            label={t("profil_sozlamalari.telefone")} 
                            placeholder= {t("profil_sozlamalari.telRaqam")} />
                            <InputLabeled width="100%" 
                            label={t("profil_sozlamalari.Email")}
                            placeholder= {t("profil_sozlamalari.EmailPlac")} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabeled width="100%" 
                            label= {t("profil_sozlamalari.Email")}
                            placeholder= {t("profil_sozlamalari.EmailPlac")}/>

                            <InputLabeled width="100%" 
                            label= {t("profil_sozlamalari.yangiParol")}
                            placeholder= {t("profil_sozlamalari.yangiParolPlac")} password/>
                            <InputLabeled width="100%" 
                            label= {t("profil_sozlamalari.parolniTasdiqlash")} 
                            placeholder= {t("profil_sozlamalari.tasdilashPlac")} password/>
                        </Grid>
                    </Grid>
                </Container>
                <Container textAlign="right" padding="30px">
                    <Button>
                         {t("profil_sozlamalari.saqlash")}
                    </Button>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default Index
