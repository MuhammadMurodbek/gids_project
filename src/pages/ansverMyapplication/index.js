import React, { useState } from 'react'
import Myapplication from '../../components/organism/fullRequest';
import { useHistory } from "react-router-dom"
import Button from "../../components/atom/button";
import { Wrapper } from './style';
import { Grid } from '@material-ui/core';
import ImgContainer from "../../components/molecules/img.container"
import star from '../../assets/img/answerMy-application/star.svg'
import sms from '../../assets/img/answerMy-application/sms.svg'
import Spinner from "../../components/atom/loading.spinner.line"
import moment from "moment"
import { Modal} from 'antd';
import { deleteResponse, patchResponseNonFile } from "../../hooks/response_get"
import PersonIcon from '@mui/icons-material/Person';
import {success, error} from "./functions"
import { SyncOutlined } from '@ant-design/icons';

export const mediaImage = {
    m_width: "960px",
    m_m_width: "280px",
    m_m_text_align: "center",
}
export default function Index() {
    const history = useHistory()
    const [callback, setCallback] = useState(false)
    const [patchResponseData, setPatchResponseData] = useState({success:'', error:'', loading:false})
    const deleteReply = (id, name) => {
        deleteResponse(`/api/users/self/reply/${id}/`, `${name}'s comment`, setCallback)
    }
    const cancelReply = () => {
        let patchData = applicationData?.success?.data
        if(patchData){
            patchData.status = 'cancelled'
        }
        setPatchResponseData(a=>{return{...a, loading:true}})
        patchResponseNonFile(`/api/users/self/application/${patchData?.id}/`, {status:'cancelled'}, setPatchResponseData)
        // console.log(patchData)
    }
    const [applicationData, setApplicationData] = useState({ success: '', error: '', loading: false })

    // console.log(applicationData)
    const handleClick = (id, role) => {
        history.push(`/seeprofile?id=${id}&role=${role}`)
    }
    React.useEffect(()=>{
        if(patchResponseData?.success!=='' && patchResponseData?.error===''){
            Modal.success({
                title:'Arizangiz bekor qilindi !!',
                onOk() {
                    history.push('/gid-personal?tab=1')
                }})
            setTimeout(()=>{
                history.push('/gid-personal?tab=1')
            },[2000])
        }else if(patchResponseData?.success==='' && patchResponseData?.error!==''){
            error()
        }
    },[patchResponseData])
    // console.log(patchResponseData)

    return (
        <Wrapper>
            <Myapplication
                btnText="Arizani taxrirlash"
                setApplicationData={setApplicationData}
                applicationData={applicationData}
                callback={callback}
            />
            {
                applicationData?.success === '' ? <Spinner marginTop="60px" width={50} height={50} /> :
                    <>
                        <div className="btnBack">
                            <Button type="outlined" onClick={cancelReply} >
                                {patchResponseData?.loading && <SyncOutlined spin={true} /> } 
                                Arizani bekor qilish 
                            </Button>
            
                        </div>
                        <br /><br />
                        <div className="title-answers">
                            {
                                applicationData?.success?.data?.replies.length > 0 ?
                                    <span>Quyidagi arizangizga javob qaytargan Gid/Tarjimonlardan birini tanlang va u bilan bog’laning</span> :
                                    <span>Ushbu arizangizga javoblar mavjud emas</span>
                            }
                        </div>
                        {
                            applicationData?.success?.data?.replies.length > 0 ?
                                applicationData?.success?.data?.replies?.map((prev, index) => (
                                    <div className="answers" key={index}>
                                        <Grid container spacing={1} direction="row" justifyContent="center"
                                            className="grid-container">
                                            <Grid item xs={12} md={1} className="item">

                                                {prev?.replier_image ?
                                                    <ImgContainer width="80px" height="80px" round="50%" {...mediaImage} src={prev?.replier_image} />
                                                      :
                                                    <div className="newPerson">
                                                        <PersonIcon className="iconPerson" />
                                                    </div>
                                                }
                                            </Grid>
                                            <Grid item xs={12} md={11} className="item">
                                                <div className="feedback-div">
                                                    <h4><b>{prev?.replier_data?.full_name?.first_name + " " + prev?.replier_data?.full_name?.last_name}</b></h4>
                                                    <div className="feedback">
                                                        <div> <ImgContainer src={star} /> </div>
                                                        <div style={{ fontSize: '0.85rem' }}> <span>10.0/10</span></div>
                                                        <div className="imgss"> <ImgContainer src={sms} /></div>
                                                        <div>
                                                            <span style={{ fontSize: '0.85rem' }}>
                                                                {moment(prev?.created_at).format('DD.MM.YYYY') || '00:00:00'}
                                                            </span>&nbsp;&nbsp;
                                                            <span style={{ fontSize: '0.77rem' }}>
                                                                {moment(prev?.created_at).format('HH:mm') || '00:00'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tarjimon">
                                                    <span>
                                                        {prev?.replier_data?.age}
                                                    </span>|
                                                    <span  style={{ textTransform: 'none' }}>
                                                        {
                                                            prev?.replier_role === "writer" ?
                                                                "Yozma tarjimon" :
                                                                prev?.replier_role === "gid" ?
                                                                    "Gid" :
                                                                    prev?.replier_role === "translator" ?
                                                                        "Og'zaki tarjimon" :
                                                                        "Ma'lumot kiritilmagan"
                                                        }
                                                    </span>
                                                </div>
                                                <div className="feedbeeck-text">
                                                    {prev?.reply || "Ma'lumot kiritilmagan"}
                                                </div>

                                                <div className="btn-groups">
                                                    <Button onClick={() => deleteReply(prev?.id, prev?.replier_data?.full_name?.first_name)} type="outlined">O’chirish</Button>

                                                    <Button onClick={()=>handleClick(prev?.replier_data?.full_name?.id, prev?.replier_role)}  className="btn-Pview">
                                                        Profilni ko’rish
                                                    </Button>
                                                </div>

                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                                ) : null
                        }
                    </>
            }

        </Wrapper>
    )
}
