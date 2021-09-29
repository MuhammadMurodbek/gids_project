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
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Telefon" placeholder="+"/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Email" placeholder="Pochtangizni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Sayt" placeholder="Linkni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Telegram" placeholder="Profilingizni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Whatsapp" placeholder="Profilingizni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Facebook" placeholder="Profilingizni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Wechat" placeholder="Profilingizni kiriting..."/> </Grid>
                <Grid item xs={12} sm={6} md={4}><InputLabel sizeLabel="15px" width="100%" label="Viber" placeholder="Profilingizni kiriting..."/> </Grid>
            </Grid>
            <Container padding="20px 0 5px" textAlign="right">
                <Button>Saqlash</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
