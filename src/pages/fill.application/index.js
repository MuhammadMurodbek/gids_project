import { Grid } from '@material-ui/core'
import React from 'react'
import { Container } from '../../styles/container/index.style'
import {Wrapper, shadow, Title} from "./style"
import RadioGroup from "../../components/molecules/radio.group.f9"
import Select from "../../components/atom/select"
import Calendar from "../../components/atom/calendar"
import Input from "../../components/atom/input"
const Index = () => {
    return (
        <Wrapper>
            <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}> 
                <Title>Vazifa tavsifi</Title>
                <Container padding="30px">
                    <Container width="80%" >
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Kim kerak</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <RadioGroup/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Gid/Tarjimon kerak bo'lgan shahar</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item sm={6}><Select placeholder="Davlat"/></Grid>
                                    <Grid item sm={6}><Select placeholder="Shahar"/></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Gid/Tarjimon kerak bo'lgan sana</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item sm={6}><Calendar/></Grid>
                                    <Grid item sm={6}><Calendar/></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Gid/Tarjimon bilishi kerak bo'lgan tillar</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Select placeholder="Tilni tanlang"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Nima uchun kerak</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Select placeholder="Tilni tanlang"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Taklif etilgan narx</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Select placeholder="Narxni tanlang"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Jinsi</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <RadioGroup/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item sm={12} md={5}>
                                <div>Nechchi kishi bo'lasizlar</div>
                            </Grid>
                            <Grid item sm={12} md={7}>
                                <Input width="100%"/>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default Index
