import React from 'react'
import { Container } from '../../../styles/container/index.style'
import {Wrapper, TitleContainer} from "./style"
import {shadow} from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabeled from "../../../components/molecules/input.labeled"
import Button from "../../../components/atom/button"

const Index = () => {
    return (
        <Wrapper>
            <Container padding="0" boxShadow={shadow} className="container4">
                <TitleContainer>
                    <Grid container spacing={5}>
                        <Grid item xs={6}>Kontaktlar</Grid>
                        <Grid item xs={6}>Parolni o'zgartirish</Grid>
                    </Grid>
                </TitleContainer>
                <Container padding="20px 40px">
                    <Grid container spacing={5}>
                        <Grid item xs={6}>
                            <InputLabeled width="100%" label="Telefon" placeholder="Raqamingizni kiriting"/>
                            <InputLabeled width="100%" label="Email" placeholder="Pochtangizni kiriting"/>
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabeled width="100%" label="Email" placeholder="Pochtangizni kiriting"/>
                            <InputLabeled width="100%" label="Yangi parol" placeholder="Yangi parolni kiriting" password/>
                            <InputLabeled width="100%" label="Parolni tasdiqlang" placeholder="Yangi parolni qayta kiriting" password/>
                        </Grid>
                    </Grid>
                </Container>
                <Container textAlign="right" padding="30px">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default Index
