import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../styles/container/index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import {Wrapper} from './style'
import ExtendedSearch from "../../components/extended.search"
import ContainerMap from "../../components/templates/container.temp.f2"
import Button  from '../../components/atom/button'
const Index = () => {
    return (
        <Wrapper>
            <TextTitle>O'zingiz uchun gid tanlang</TextTitle>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={4}>
                        <ExtendedSearch/>
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
