import React, { useState, useEffect,lazy } from 'react'
import { Grid } from '@material-ui/core'
import { Wrapper } from "./style"
import { getResponse } from "../../hooks/response_get"
import Spinner from "../../components/atom/loading.spinner.line"
import {useHistory} from "react-router-dom"
import { useTranslation } from 'react-i18next';

// import Layout from "../../layouts/gid.personal.page"
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import CardMainSecond from "../../components/organism/container.right.f42"
// import NoDataPage from "../../components/templates/no.data.page.js"
// import ModalContainer from "./modal"
// import Button from "../../components/atom/button"
// import CardMain from "../../components/organism/container.left.f42"

const CardMain = lazy(() => import("../../components/organism/container.left.f42"));
const Button = lazy(() => import("../../components/atom/button"));
const Layout = lazy(() => import("../../layouts/gid.personal.page"));
const ArrowBackIcon = lazy(() => import("@material-ui/icons/ArrowBack"));
const CardMainSecond = lazy(() => import("../../components/organism/container.right.f42"));
const NoDataPage = lazy(() => import("../../components/templates/no.data.page.js"));
const ModalContainer = lazy(() => import("./modal"));


export default function Index() {
    const {t} = useTranslation()
    const history = useHistory()
    let query = window.location.search
    function searchToObject(search) {
        return search.substring(1).split("&").reduce(function (result, value) {
            var parts = value.split('=');
            if (parts[0]) result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            return result;
        }, {})
    }
    let id = searchToObject(query)?.id
    let role = searchToObject(query)?.role
    const [openModal, setOpenModal] = useState(false)
    const [callback, setCallback] = useState(false)
    const [apiData, setApiData] = useState({ success: '', error: '' })
    const [commentApi, setCommentApi] = useState({success:'', error:''})
    useEffect(() => { 
        getResponse(`/api/${role}s/profiles/${id}/`, setApiData, true) 
    }, [role,id]);
    useEffect(() => { 
        if(apiData?.success && apiData?.success?.data?.custom_user_id)
            getResponse(`/api/users/rating/${apiData?.success?.data?.custom_user_id}/`, setCommentApi, true) 
    }, [apiData, callback])
    const handlePrev = ()=>{
        history.goBack()
        window.scrollTo(0,0)
    }

    return (  
        <>
            <Layout>
                <Wrapper>
                    <Grid className="gridTitle2" item xs={12} md={6}>
                        <div onClick={handlePrev} className="comback"> <ArrowBackIcon className="link22" /> {t("SeeProfile.Rqaytish")} </div>
                    </Grid>
                    {
                        (apiData?.error === '' && apiData?.success === '') ? <Spinner marginTop="60px" width={50} height={50} /> :

                            apiData?.error !== '' ? <NoDataPage /> :
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={8}>
                                        <CardMain 
                                            state={apiData?.success?.data} 
                                            typeRole={{ role: role }} 
                                            comments={commentApi}
                                            commentCount={commentApi?.success?.data?.counts}
                                            commentReview={commentApi?.success?.data?.reviews}
                                        />
                                        {apiData?.success && <Button onClick={()=>setOpenModal(true)}>{t("GidPk.fikirqoldirish")}</Button>}
                                    </Grid>
                                    
                                    <Grid item xs={12} md={4}>
                                        <CardMainSecond 
                                            typeRole={{ role: role }} 
                                            state={apiData?.success?.data} 
                                            commentCount={commentApi?.success?.data?.counts}
                                            commentReview={commentApi?.success?.data?.reviews}
                                        />
                                    </Grid>
                                </Grid>
                    }
                    
                    <ModalContainer setCallback={setCallback} setOpen={setOpenModal} open={openModal} customId={apiData?.success?.data?.custom_user_id}/>
                </Wrapper>
            </Layout>

        </>



    )
}
