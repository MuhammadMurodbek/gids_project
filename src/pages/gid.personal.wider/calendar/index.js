import React, { useState, useEffect } from 'react'
import { Wrapper, DayPickerWrapper, ButtonWrapper } from "./style"
import { Container } from '../../../styles/container/index.style'
import DayPicker from "../../../components/molecules/daypicker"
import { Switch } from 'antd';
import { mainGreen } from "../../../styles/global/colors"
import { Grid } from '@mui/material'
import Button from "../../../components/atom/button"
import { postResponse, getResponse } from "../../../hooks/response_get"
import moment from "moment"
import { toast } from "react-hot-toast"
import { useTranslation } from 'react-i18next'
const mediaContainer = {
    m_width: '940px',
    m_m_width: '300px',
}
const Index = () => {
    const {t} = useTranslation()
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const [dateState, setDateState] = useState([])
    const [postData, setPostData] = useState({ success: '', error: '', loading: false })
    const [getData, setGetData] = useState({ success: '', error: '' })
    const [callback, setCallback] = useState(false)
    const [busy, setBusy] = useState(false)
    const handleSubmit = () => {
        let dataTime = dateState.map(item => {
            return moment(item).format('YYYY-MM-DD')
        })
        postResponse(`/api/${getRole?.role}s/calendar/`, { busy_days: dataTime, add_or_delete: busy ? 'add' : 'delete' }, setPostData)
    }
    useEffect(() => {
        if (postData.error !== '') toast.success('Something went wrong')
        if (postData?.success !== '') {
            setCallback(prev => !prev)
            toast.success('Successfully loaded')
        }
    }, [postData])
    useEffect(() => { getResponse(`/api/${getRole?.role}s/calendar/`, setGetData) }, [callback])
    useEffect(() => {
        if (getData?.error !== '' || getData?.success !== '') {
            setPostData(prev => { return { ...prev, success: '' } })
        }
    }, [getData])

    // const clearPostData = () => {
    //     setPostData(prev => {
    //         return{...prev, success:''}
    //     })
    // }
    return (
        <>
            <Wrapper>
                {/* <Container {...mediaContainer} width="100%" margin="0 auto" padding="0" className="container4 item1" textAlign="center"> */}
                    <div className="wrap_cal">
                        <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                            <Grid item xs={12} md={6}>
                                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ position: 'relative', left: 110 }}>{t("ishJadvali.tahrirlash")}</div>
                                    <Switch
                                        style={busy ? { background: 'red' } : { backgroundColor: "#326a32" }}
                                        checkedChildren={t("ishJadvali.band")}
                                        unCheckedChildren={t("ishJadvali.bosh")}
                                        onClick={() => setBusy(!busy)}
                                    />
                                </div>
                                <DayPickerWrapper>
                                    <DayPicker title="no" setData={setDateState} postData={postData} clearPostData={setPostData} />
                                </DayPickerWrapper>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ marginTop: 15 }}>
                                <Button onClick={handleSubmit} type="outlined" style={{ width: "300px" }} loader={postData.loading}>{t("ishJadvali.saqlash")}</Button>
                            </Grid>
                        </Grid>
                    </div>
                {/* </Container> */}
                {/* <Container {...mediaContainer} width="100%" margin="0 auto" padding="0" className="container4 item2" textAlign="center"> */}
                    <div className="wrap_cal">
                        <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                            <Grid item xs={12} md={6}>
                                <div style={{ width: '300px', textAlign: 'center' }}>{t("ishJadvali.oylikJadvalim")}</div>
                                <DayPickerWrapper>
                                    <DayPicker
                                        title="no"
                                        default
                                        selectedDays={getData?.success?.data?.map(item => new Date(item)) || []}
                                    />
                                </DayPickerWrapper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ButtonWrapper>
                                </ButtonWrapper>
                            </Grid>
                        </Grid>

                    </div>
                {/* </Container> */}
            </Wrapper>
            {/* <Container width="90%" padding="10px" textAlign="right">
        </Container> */}
        </>
    )
}

export default Index
