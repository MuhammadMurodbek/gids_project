import { Grid } from '@material-ui/core'
import React from 'react'
import Layout from "../../../layouts/gid.personal.page"
import {ContainerMain} from "./style"
import CardMain from "../../../components/organism/container.f42"

const Index = () => {
    return (
        <Layout>
            <ContainerMain>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <CardMain/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam officiis nam! Itaque beatae quae est voluptas quidem quibusdam, ipsam dolores, veniam saepe aliquam iusto, cupiditate sequi. Mollitia, perspiciatis laudantium!
                    </Grid>
                </Grid>
            </ContainerMain>
        </Layout>
    )
}

export default Index
