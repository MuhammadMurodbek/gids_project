import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import Layout from "../../layouts/gid.personal.page"
import { Wrapper } from "./style"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardMain from "../../components/organism/container.left.f42"
import CardMainSecond from "../../components/organism/container.right.f42"
import {getResponse} from "../../hooks/response_get"
export default function Index() {
    let query = window.location.search
    let id = query.substr(4,1)
    let role = query.substr(11)
    // console.log(id, role)
    const [apiData, setApiData] = useState({ success: '', error: ''})
    useEffect(()=>{ getResponse(`/api/${role}s/profiles/${id}/`, setApiData)},[])
    return (
        <>
            <Layout>
                <Wrapper>

                    <Grid className="gridTitle2" item xs={12} md={6}>
                        <Link to="/gids" className="comback"> <ArrowBackIcon className="link22" />  arizlar ro’yhatiga qaytish</Link>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <CardMain state={apiData?.success?.data} typeRole={{role:role}} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardMainSecond state={apiData?.success?.data} typeRole={{role:apiData?.success?.data}}/>
                        </Grid>
                    </Grid>
                </Wrapper>
            </Layout>

        </>



    )
}
