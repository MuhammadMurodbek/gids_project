import React, {useState, useEffect} from 'react'
import {Wrapper,DayPickerWrapper, ButtonWrapper} from "./style"
import { Container } from '../../../styles/container/index.style'
import DayPicker from "../../../components/molecules/daypicker"
import { Switch } from 'antd';
import {mainGreen} from "../../../styles/global/colors"
import { Grid } from '@mui/material'
import Button from "../../../components/atom/button"
import {postResponse, getResponse} from "../../../hooks/response_get"
import moment from "moment"
import {toast} from "react-hot-toast"
const mediaContainer = {
    m_width:'740px',
    m_m_width:'300px',
}
const Index = () => {
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
    const [dateState, setDateState] = useState([])
    const [postData, setPostData] = useState({ success: '', error: '', loading: false})
    const [getData, setGetData] = useState( { success: '', error: '' })
    const [callback, setCallback] = useState(false)
    const [busy, setBusy] = useState(false)
    const handleSubmit = () => {
        let dataTime = dateState.map(item=>{
            return moment(item).format('YYYY-MM-DD')
        })
        postResponse(`/api/${getRole?.role}s/calendar/`, {busy_days:dataTime, add_or_delete: busy ? 'add' : 'delete'}, setPostData)
    }
    useEffect(() => {
        if(postData.success !== '') toast.success('Successfully loaded')
        if(postData.error !== '') toast.success('Something went wrong')
    },[postData])
    useEffect(() => { getResponse(`/api/${getRole?.role}s/calendar/`, setGetData) },[callback])
    useEffect(()=> {
        if(getData?.success !==''){
            setCallback(prev=>!prev)
        }
    },[getData])
    console.log(getData)
    return (
        <>
        <Wrapper>
            <Container {...mediaContainer} width="100%" margin="0 auto" padding="0" className="container4" textAlign="center">
                <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                    <Grid item xs={12} md={6}>
                        <div style={{width: '100%', textAlign: 'center'}}>Mening band kunlarim</div>
                        <DayPickerWrapper>
                            <DayPicker 
                                title="no" 
                                default
                                selectedDays={getData?.success?.data?.map(item=> new Date(item)) || []}
                            />
                        </DayPickerWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ButtonWrapper>
                        </ButtonWrapper>
                    </Grid>
                </Grid>
            </Container>
            <Container {...mediaContainer} width="100%" margin="0 auto" padding="0" className="container4" textAlign="center">
                <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                    <Grid item xs={12} md={6}>
                        <div style={{width: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div>Tahrirlash</div>
                            <Switch 
                                style={busy ? { background:mainGreen}:{backgroundColor:"#ccc"}} 
                                checkedChildren="Band" 
                                unCheckedChildren="Bo'sh" 
                                onClick={()=>setBusy(!busy)} 
                            />
                        </div>
                        <DayPickerWrapper>
                            <DayPicker title="no" setData={setDateState}/>
                        </DayPickerWrapper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{marginTop: 15}}>
                        <Button onClick={handleSubmit} type="outlined" style={{width:"300px"}} loader={postData.loading}>Saqlash</Button>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
        {/* <Container width="90%" padding="10px" textAlign="right">
        </Container> */}
        </>
    )
}

export default Index
