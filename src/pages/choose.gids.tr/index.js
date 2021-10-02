import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../styles/container/index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import {Wrapper} from './style'
import ExtendedSearch from "../../components/extended.search"
import ContainerMap from "../../components/templates/container.temp.f2"
import ImageContainer from "../../components/molecules/img.container"
import Adds from "../../assets/img/choosegid/adds.jpg"
const Index = () => {
    return (
        <Wrapper>
            <TextTitle top="40px" bottom="30px">O'zingiz uchun gid tanlang</TextTitle>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={4}>
                        <ExtendedSearch/>
                        <Container margin="15px 0" >
                            <ImageContainer src={Adds} width="350px"/>
                        </Container>
                        <Container margin="15px 0" >
                            <ImageContainer src={Adds} width="350px"/>
                        </Container>
                    </Grid>
                    <Grid item sm={8}>
                        <Container>
                            <ContainerMap/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
