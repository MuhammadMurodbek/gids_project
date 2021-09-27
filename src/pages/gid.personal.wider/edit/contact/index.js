import { Grid } from '@material-ui/core'
import React from 'react'
import {Wrapper} from './style'
import InputLabel from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { Container } from '../../../../styles/container/index.style'
const Index = () => {
    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel width="100%" label="Ism" placeholder="kiriting..."/> </Grid>
            </Grid>
            <Container padding="20px 0 5px" textAlign="right">
                <Button>Saqlash</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
