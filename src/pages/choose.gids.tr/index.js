import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../styles/container/index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import {Wrapper} from './style'
import ExtendedSearch from "../../components/extended.search"
import ContainerMap from "../../components/templates/container.temp.f2"
import ImageContainer from "../../components/molecules/img.container"
import Adds from "../../assets/img/choosegid/adds.jpg"
import {mediaTextField, mediaTextFieldSec} from "../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'

const mediaGrid = {
    m_width:"962px",
    m_display:"none"
}
const mediaGridUSers={
    m_padding:"10px 0px",
    m_width:"768px",
}
const Index = () => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <TextTitle top="40px" {...mediaTextField} {...mediaTextFieldSec} bottom="30px"> {t("Gid_Tanlash.title")} </TextTitle>
            <Container>
                <Grid container spacing={1} className="media_grid_flex">
                    <Grid item xs={12} sm={12} md={4}>
                        <ExtendedSearch/>
                        <Container {...mediaGrid} margin="15px 0" >
                            <ImageContainer src={Adds} width="350px"/>
                        </Container>
                        <Container {...mediaGrid} margin="15px 0" >
                            <ImageContainer  src={Adds} width="350px"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Container {...mediaGridUSers}>
                            <ContainerMap/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
