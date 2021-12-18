import { Grid } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import Layout from "../../../layouts/gid.personal.page"
import {ContainerMain} from "./style"
import CardMain from "../../../components/organism/container.left.f42"
import CardMainSecond from "../../../components/organism/container.right.f42"
import {getResponse} from "../../../hooks/response_get"
import {common} from "../../../custom/url"
const Index = () => {
    const [apiData, setApiData] = useState({ success: '', error: ''})
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    useEffect(()=>{ getResponse(common.personal.me, setApiData)},[])
    return (
        <Layout>
            <ContainerMain>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <CardMain state={apiData?.success?.data} typeRole={getRole}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardMainSecond state={apiData?.success?.data} typeRole={getRole}/>
                    </Grid>
                </Grid>
            </ContainerMain>
        </Layout>
    )
}

export default Index
