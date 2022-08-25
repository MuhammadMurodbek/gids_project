import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageContainer from "../../molecules/img.container"
import user from '../../../assets/img/request/user2.svg';
import gps from '../../../assets/img/request/gps2.svg';
import cal from '../../../assets/img/request/cal2.svg';
import kim from '../../../assets/img/request/kim.svg';
import narx from '../../../assets/img/request/narx.svg';
import odamlar from '../../../assets/img/request/odamlar.svg';
import Button from "../../atom/button";
import til from '../../../assets/img/request/til.svg';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-awesome-modal';
import { useParams } from 'react-router-dom';
import Textarea from '../../atom/textAreaCom';
import { useTranslation } from 'react-i18next';
import { postResponse } from '../../../hooks/response_get';
import toast from 'react-hot-toast';
import { getResponse } from '../../../hooks/response_get';
import moment from 'moment';
import {getLabelLangLocal} from "../../../custom/function"
import './main.css'
export default function Index({btnText}) {
    const [comment, setComment] = useState('')
    const [getData, setGetData] = useState({ success: '', error: '' })
    const [response, setResponse] = useState({ success: '', error: '' })
    const getRole = JSON.parse(localStorage.getItem("user_token"))

    const { id } = useParams()
    const { t } = useTranslation();

    const [state, setState] = useState(false);
    const curens={
        UZS:"UZS",
        USD:"USD",
        RUB:"RUB",
        EUR:"EUR"
    }

    function openModal() {
        setState(true);
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
        getResponse(`${url}${id}/`, setGetData)
    }, [id])

    useEffect(() => {
        if (response?.success !== "") {
            toast.success(t("ToliqAriza.habarJonatildi"))
        } else if (response?.error !== '')
            toast.error(t("ToliqAriza.birmartta"))
    }, [response])
  
    function setText(e) {
        setComment(e.target.value)
    }
 
    const i18lang = localStorage.getItem("i18nextLng")
    let who_need2 = ""
    getData?.success?.data?.who_need === "gitd" ? who_need2 = t("kengaytirlgan_Q.gid") : who_need2 = t("auth_registr.yozmaT")

    let a1 = getData?.success?.data?.languages.length;
    let dataApi = getData?.success?.data
    return (
        <Wrapper>
            <Grid container spacing={1} direction="row" justifyContent="center" className="freque">
                <Grid className="gridTitle" item xs={12} md={4}>
                    <b className="idb">Id: </b>
                    <b className="idb"># {getData?.success?.data?.id}</b>
                </Grid>
                <Grid className="gridTitle2" item xs={12} md={6}>
                    <Link to={getRole?.role === 'simple_user' ? '/gid-personal?tab=0':'/request'} className="comback"> <ArrowBackIcon className="arrole" /> {t("ToliqAriza.qaytish")} </Link>
                </Grid>
            </Grid>

            <Grid container spacing={1} diraction="row" justifyContent="center" className="grid_container">
                <Grid item xs={12} md={4} className="Fgrid1">
                    <div className="div1title">{t("ToliqAriza.tafsilotlar")}</div>
                    <div className="tafsilot-text">
                        <b><ImageContainer src={user} /></b>
                        <b> {t("ToliqAriza.elonBeruchi")}</b>
                        <p>
                        {getData?.success?.data?.full_name?.first_name + " " + getData?.success?.data?.full_name?.last_name}
                        </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={gps} /></b>
                        <b>{t("ToliqAriza.shahar")} </b>
                        <p> {
                            i18lang === "uz" ? getData?.success?.data?.country_name?.uz 
                            :i18lang === "ru" ? getData?.success?.data?.country_name?.ru
                            :i18lang === "en" ? getData?.success?.data?.country_name?.en : ""
                        
                        }</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={cal} /></b>
                        <b>{t("ToliqAriza.sana")} </b>
                        <p>
                            {moment(getData?.success?.data?.start_date).format('DD.MM.YYYY')} -&nbsp;
                            {moment(getData?.success?.data?.end_date).format('DD.MM.YYYY')} 
                        </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={kim} /></b>
                        <b>{t("ToliqAriza.gacha")} </b>
                        <p>{getData?.success?.data?.cost + " " +curens[getData?.success?.data?.currency] || t("GidPk.malumotKiritilmagan")} </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={narx} /></b>
                        <b>{t("ToliqAriza.kimKerak")} </b>
                        {/* <p>{dataApi?.who_need}</p> */}
                    { 
                        dataApi?.who_need === 'translator' && 
                        <>
                            <span>{dataApi?.is_consecutive && ", izchil"}</span>
                            <span>{dataApi?.is_synchronous && ", sinhron"}</span>
                            <span>{dataApi?.is_writer && ", yozma"}</span>
                        </>
                    }
                    </div>
                   
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={til} /></b>
                        <b>{t("ToliqAriza.tillar")} </b>
                        <p>
                            {getData?.success?.data?.languages?.map(a=>" "+ getLabelLangLocal(a) +  
                             `${a1>1 ? ", " : "" }` ) || t("GidPk.malumotKiritilmagan")}
                            </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={odamlar} /></b>
                        <b>{t("ToliqAriza.odamlarSone")} </b>
                        <p> {getData?.success?.data?.people_count} {t("ToliqAriza.kishis")} </p>
                    </div>
                    <Button onClick={openModal} type="button" className="btnRequest">
                        {btnText}
                    </Button>
                </Grid>

                <Grid className="grid6text  Fgrid2" item xs={12} md={6}>
                    <div>
                        <div className="div1title">{t("ToliqAriza.arizaMatni")}</div>
                        <p>  
                             {getData?.success?.data?.why_need || t("GidPk.malumotKiritilmagan")}
                        </p>   
                    </div>
                    <p className="f-sana">
                    {moment(getData?.success?.data?.updated_at).format("DD.MM.YYYY")}
                    </p>
                </Grid>
            </Grid>
   
            <section>
                <Modal
                    visible={state}
                    width="900"
                    height="450"
                    effect="fadeInUp"
                    onClickAway={closeModal}>
                    <div className="modaldiv">
                        <div className="closebtn">
                            <CloseIcon className="pointx" onClick={closeModal} />
                        </div>
                        <h1 className="modaltitle">{t("ToliqAriza.yozing")}</h1>
                        <div className="modaldiv">
                            <Textarea
                                value={comment}
                                width="100%"
                                onChange={setText}
                                placeholder="Text..."
                                height="200px" />
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
            </section>



        </Wrapper>
    )
}
