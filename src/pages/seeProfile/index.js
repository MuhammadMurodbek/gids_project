import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import Layout from "../../layouts/gid.personal.page"
import { Wrapper } from "./style"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardMain from "../../components/organism/container.left.f42"
import CardMainSecond from "../../components/organism/container.right.f42"
import {getResponse} from "../../hooks/response_get"
import NoDataPage from "../../components/templates/no.data.page.js"
import Spinner from "../../components/atom/loading.spinner.line"
export default function Index() {
    let query = window.location.search
    function searchToObject(search) {
        return search.substring(1).split("&").reduce(function(result, value) {
            var parts = value.split('=');
            if (parts[0]) result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            return result;
        }, {})
    }
    let id = searchToObject(query)?.id
    let role = searchToObject(query)?.role
    
    const [apiData, setApiData] = useState({ success: '', error: ''})
    useEffect(()=>{ getResponse(`/api/${role}s/profiles/${id}/`, setApiData)},[])
    return (
        <>
            <Layout>
                        <Wrapper>
                            <Grid className="gridTitle2" item xs={12} md={6}>
                                <Link to="/gids" className="comback"> <ArrowBackIcon className="link22" />  arizlar ro’yhatiga qaytish</Link>
                            </Grid>
                            {
                                (apiData?.error ==='' && apiData?.success ==='') ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:

                                apiData?.error !== '' ? <NoDataPage/>:
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={8}>
                                        <CardMain state={apiData?.success?.data} typeRole={{role:role}} />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <CardMainSecond state={apiData?.success?.data}/>
                                    </Grid>
                                </Grid>
                            }

                        </Wrapper>
            </Layout>

        </>



    )
}
