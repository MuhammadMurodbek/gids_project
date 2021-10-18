import React from 'react'
import {WrapperForm} from "./style"
import InputLabeled from "../../molecules/input.labeled"
import SelectLabeled from "../../molecules/select.labeled"
import { Grid } from '@material-ui/core'

const Index = () => {
    return (
        <WrapperForm>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabeled width="100%"label="Ism" placeholder="Ism kiriting"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabeled width="100%" label="Familiya" placeholder="Familiya kiriting"/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <InputLabeled width="100%" label="Kompaniya" placeholder="Kompaniya nomini kiriting"/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled width="100%" label="Davlat" placeholder="Davlat kiriting"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled width="100%" label="Shahar" placeholder="Shahar kiriting"/>
                </Grid>
            </Grid>
        </WrapperForm>
    )
}

export default Index
