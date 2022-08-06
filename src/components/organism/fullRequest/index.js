import React, { useState, useMemo, useEffect } from 'react'
import { Wrapper } from './style'
import { Link, useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageContainer from "../../../components/molecules/img.container"
import user from '../../../assets/img/request/user2.svg';
import gps from '../../../assets/img/request/gps2.svg';
import cal from '../../../assets/img/request/cal2.svg';
import kim from '../../../assets/img/request/kim.svg';
import narx from '../../../assets/img/request/narx.svg';
import odamlar from '../../../assets/img/request/odamlar.svg';
import Button from "../../../components/atom/button";
import til from '../../../assets/img/request/til.svg';
// import imgpen from '../../../assets/img/request/pen#fff.svg';
// import ImgContainer from "../../../components/molecules/img.container";
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-awesome-modal';
import { useParams } from 'react-router-dom';
import FormApplication from "../../../pages/fill.application/edit.app"
import { useTranslation } from 'react-i18next';
import { postResponse } from '../../../hooks/response_get';
import toast from 'react-hot-toast';
import { getResponse } from '../../../hooks/response_get';
import moment from 'moment';
import {getLabelLangLocal, getLabelCountrySecond, getLabelCity} from "../../../custom/function"

export default function Index({applicationData, setApplicationData, btnText, url, callback}) {
    const [comment, setComment] = useState('')
    const history = useHistory()
    // const [getData, setGetData] = useState({ success: '', error: '' })
    const [response, setResponse] = useState({ success: '', error: '' })
    // const [applicationData, setApplicationData] = useState({ success: '', error: '', loading: false })
    const getRole = JSON.parse(localStorage.getItem("user_token"))

    const { id } = useParams()
    const { t } = useTranslation();

    const [state, setState] = useState(false);
    const curens={
        dollar:"USD",
        ruble:"RUBL",
        sum:"SUM"
    }

    function openModal() {
        // setState(true);
        history.push(`/answer-me/edit/${id}`)
    }
    function closeModal() {
        setState(false)
        setComment('')
    }

    function submit() {
        let sendData = {
            application: Number(id),
            reply: comment
        }
        postResponse("/api/users/reply/", sendData, setResponse)
        closeModal()
    }

    useEffect(() => {
        let url = getRole?.role === 'simple_user' ? `/api/users/self/application/` : `/api/users/applications/`
        getResponse(`${url}${id}/`, setApplicationData)
    }, [id, callback])

    useEffect(() => {
        if (response?.success !== "") {
            toast.success("habaringiz muofaqiyatli jonatildi")
        } else if (response?.error !== '')
            toast.error("siz faqat bir martta habar yoza olasiz")
    }, [response])
    // useEffect(() => {
    //     console.log(getData)
    //     // setApplicationData(getData)
    // },[getData])
    function setText(e) {
        // console.log(e.target.value)
        setComment(e.target.value)
    }

    return (
        <Wrapper>
            <Grid container spacing={1} direction="row" justifyContent="center" className="freque">
                <Grid className="gridTitle" item xs={12} md={4}>
                    <b className="idb">Id: </b>
                    <b className="idb"># {applicationData?.success?.data?.id}</b>
                </Grid>
                <Grid className="gridTitle2" item xs={12} md={6}>
                    <Link to={getRole?.role === 'simple_user' ? '/gid-personal?tab=1':'/request'} className="comback"> <ArrowBackIcon className="arrole" /> {t("ToliqAriza.qaytish")} </Link>
                </Grid>
            </Grid>

            <Grid container spacing={1} diraction="row" justifyContent="center" className="grid_container">
                <Grid item xs={12} md={4} className="Fgrid1">
                    <div className="div1title">{t("ToliqAriza.tafsilotlar")}</div>
                    <div className="tafsilot-text">
                        <b><ImageContainer src={user} /></b>
                        <b> {t("ToliqAriza.elonBeruchi")}</b>
                        <p>
                        {applicationData?.success?.data?.full_name?.first_name + " " + applicationData?.success?.data?.full_name?.last_name}
                        </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={gps} /></b>
                        <b>{t("ToliqAriza.shahar")} </b>
                        <p> {getLabelCountrySecond(applicationData?.success?.data?.country)+", "+getLabelCity(applicationData?.success?.data?.country,applicationData?.success?.data?.city)}</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={cal} /></b>
                        <b>{t("ToliqAriza.sana")} </b>
                        <p>
                            {moment(applicationData?.success?.data?.start_date).format('DD.MM.YYYY')} - &nbsp;
                            {moment(applicationData?.success?.data?.end_date).format('DD.MM.YYYY')} 
                        </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={kim} /></b>
                        <b>{t("ToliqAriza.gacha")} </b>
                        <p>{applicationData?.success?.data?.cost + " " +curens[applicationData?.success?.data?.currency] || t("GidPk.malumotKiritilmagan")} </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={narx} /></b>
                        <b>{t("ToliqAriza.kimKerak")} </b>
                        <p>{applicationData?.success?.data?.who_need}</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={til} /></b>
                        <b>{t("ToliqAriza.tillar")} </b>
                        <p>{applicationData?.success?.data?.languages?.map(a=>" "+getLabelLangLocal(a.id)+",") || t("GidPk.malumotKiritilmagan")}</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={odamlar} /></b>
                        <b>{t("ToliqAriza.odamlarSone")} </b>
                        <p> {applicationData?.success?.data?.people_count} {t("ToliqAriza.kishis")}</p>
                    </div>
                    <Button onClick={openModal} type="button" className="btnRequest">
                        {btnText}
                    </Button>
                </Grid>

                <Grid className="grid6text  Fgrid2" item xs={12} md={6}>
                    <div>
                        <div className="div1title">{t("ToliqAriza.arizaMatni")}</div>
                        <p>  
                             {applicationData?.success?.data?.why_need || t("GidPk.malumotKiritilmagan")}
                        </p>   
                    </div>
                    <p className="f-sana">
                    {moment(applicationData?.success?.data?.updated_at).format("DD.MM.YYYY")}
                    </p>
                </Grid>
            </Grid>

            {/* <section>
                <Modal
                    visible={state}
                    width="1000"
                    height="900px"
                    effect="fadeInUp"
                    onClickAway={closeModal}>
                    <div className="modaldiv">
                        <div className="closebtn">
                            <CloseIcon className="pointx" onClick={closeModal} />
                        </div>
                        <FormApplication data={setApplicationData}/>
                        <h1 className="modaltitle">{t("ToliqAriza.yozing")}</h1>
                        <div className="modaldiv">
                           
                        </div>

                        <div className="btgroup-modal">
                            <Button type="outlined"
                                className="btnRequest" onClick={closeModal}>
                                {t("ToliqAriza.yopish")}
                            </Button>
                            <Button type="button" onClick={submit} className="btnRequest">
                                {t("ToliqAriza.yuborish")}
                            </Button>
                        </div>
                    </div>
                </Modal>
            </section> */}



        </Wrapper>
    )
}
