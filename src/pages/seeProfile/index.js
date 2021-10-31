import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from "../../layouts/gid.personal.page"
import { Wrapper } from "./style"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardMain from "../../components/organism/container.left.f42"
import CardMainSecond from "../../components/organism/container.right.f42"

export default function index() {
    return (
        <>
            <Layout>
                <Wrapper>

                    <Grid className="gridTitle2" item xs={12} md={6}>
                        <Link to="/gids" className="comback"> <ArrowBackIcon className="link22" />  arizlar ro’yhatiga qaytish</Link>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <CardMain />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardMainSecond />
                        </Grid>
                    </Grid>
                </Wrapper>
            </Layout>

        </>



    )
}
