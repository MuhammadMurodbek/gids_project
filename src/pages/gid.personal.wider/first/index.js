import { Grid } from '@material-ui/core'
import React from 'react'
import Layout from "../../../layouts/gid.personal.page"
import {ContainerMain} from "./style"
import CardMain from "../../../components/organism/container.left.f42"
import CardMainSecond from "../../../components/organism/container.right.f42"

const Index = () => {
    return (
        <Layout>
            <ContainerMain>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <CardMain/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardMainSecond/>
                    </Grid>
                </Grid>
            </ContainerMain>
        </Layout>
    )
}

export default Index
